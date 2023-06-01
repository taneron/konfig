# Automate SDK Updates

## Setup

Both methods require that you install Konfig's GitHub App to your SDK repository
https://github.com/apps/konfig-bot before doing anything else. This allows Konfig to automatically create PRs.

## Push and Poll

Today there are two ways of automating SDK updates with Konfig:

- [GitHub Action](automate-sdk-updates#github-action) (push)

  - Use GitHub Action if you version control your OAS and would like
    to keep the single source of truth in an existing repo. This is often the case
    if you also integrate with other doc platforms like https://readme.com or already have a workflow for updating your OAS.

- [Public Endpoint serving your OpenAPI Spec](automate-sdk-updates#public-endpoint-serving-your-openapi-spec) (poll)
  - Use Polling when you do not version control your OAS and instead serve your OAS as a public endpoint

### Push (GitHub Action)

Add the following GitHub Action under `.github/workflows/konfig-push.yaml` to
the repository that hosts your OAS. Replace the following values with your own:

1. Production Branch (e.g. `main`)
2. Path to OpenAPI Specification (e.g. `specifications/api.yaml`)
3. Owner of SDK repository (e.g. `konfig-dev`)
4. Name of SDK repository (e.g. `acme-sdks`)

```yaml
name: konfig-push-openapi-spec
on:
  push:
    branches:
      # 1) Replace with name of your production branch
      - main
jobs:
  konfig-push-openapi-spec:
    runs-on: ubuntu-latest
    env:
      CLI_VERSION: 1.0.40
    steps:
      - uses: actions/checkout@v3
      - name: Cache node_modules
        id: cache-npm
        uses: actions/cache@v3
        with:
          # npm cache files are stored in "~/.npm" on Linux/macOS
          path: ~/.npm
          key: ${{ runner.os }}-konfig-push-build-${{ env.CLI_VERSION }}
      - name: Install Konfig CLI
        run: npm install -g konfig-cli@$CLI_VERSION
      - name: Push OpenAPI Spec
        # 2) Replace "api.yaml" with path to OAS
        # 3) Replace "konfig-dev" with owner of SDK repository
        # 4) Replace "acme-sdks" with name of repository
        run: konfig push -s api.yaml -o konfig-dev -r acme-sdks
```

### Public Endpoint serving your OpenAPI Spec (GitHub Action)

You can easily setup polling for updates on your OpenAPI Spec being served at a
public endpoint. Here is an example workflow to add to your SDK repository (that contains your `konfig.yaml`). You can add this under `.github/workflows/konfig-poll-every-30-minutes.yaml`

:::note
Make sure to use `CLI_VERSION` >= 10.0.206 and replace
`YOUR_GITHUB_OWNER_ID`/`YOUR_REPO_NAME`/`YOUR_OAS_PATH` with your own values
such as `konfig`/`acme-sdks`/`openapi.json`. You must also have
https://github.com/apps/konfig-bot installed on your GitHub repository.
:::

```yaml
name: konfig-poll-every-30-minutes
on:
  schedule:
    - cron: "*/30 * * * *"
  workflow_dispatch:

jobs:
  poll:
    runs-on: ubuntu-latest
    env:
      CLI_VERSION: 1.0.206
    steps:
      - uses: actions/checkout@v3
      - name: Cache node_modules
        id: cache-npm
        uses: actions/cache@v3
        with:
          # npm cache files are stored in "~/.npm" on Linux/macOS
          path: ~/.npm
          key: ${{ runner.os }}-build-${{ env.CLI_VERSION }}
      - name: Install Konfig CLI
        run: npm install -g konfig-cli@$CLI_VERSION
      - name: Pull the latest OpenAPI Specification
        run: konfig pull
      - name: Push the OpenAPI Specification to Konfig
        run: konfig push -o YOUR_GITHUB_OWNER_ID -r YOUR_REPO_NAME -s YOUR_OAS_PATH
```

## Versioning and Publishing

Once an update is detected, Konfig will automatically generate a new version
following strict semantic versioning based on the diff between your current and
previous OpenAPI Spec. Upon merge of a PR, Konfig will automatically publish to
[Package Managers](/reference/supported-package-managers).
