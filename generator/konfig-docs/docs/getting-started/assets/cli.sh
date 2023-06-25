/
❯ npm install -g konfig-cli
npm WARN deprecated @oclif/screen@3.0.4: Deprecated in favor of @oclif/core
npm WARN deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
npm WARN deprecated express-graphql@0.11.0: This package is no longer maintained. We recommend using `graphql-http` instead. Please consult the migration document https://github.com/graphql/graphql-http#migrating-express-grpahql.
npm WARN deprecated json-schema-ref-parser@6.1.0: Please switch to @apidevtools/json-schema-ref-parser

removed 1 package, changed 982 packages, and audited 983 packages in 22s

181 packages are looking for funding
  run `npm fund` for details

12 moderate severity vulnerabilities

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

/
❯ mkdir my-sdks

/
❯ cd my-sdks

/
❯ wget https://api.petstore.com/petstore.yaml
--2023-06-25 04:14:36--  https://api.petstore.com/petstore.yaml
Resolving api.petstore.com (api.petstore.com)... 18.130.97.172, 35.178.30.108
Connecting to api.petstore.com (api.petstore.com)|18.130.97.172|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 125390 (122K) [application/json]
Saving to: ‘petstore.yaml’

petstore.yaml                                  100%[=================================================================================================>] 122.45K   408KB/s    in 0.3s

2023-06-25 04:14:37 (408 KB/s) - ‘petstore.yaml’ saved [125390/125390]

/my-sdks
❯ konfig init
Downloaded version 1.1.118 of https://www.npmjs.com/package/konfig-spectral-ruleset
Downloading Konfig's lint rules... done
Setting up Spectral... done
Setting up VScode settings.json... done
? Select languages to generate SDKs for: Python, TypeScript
? What is the SDK package name? Use hyphens to separate words (ex. acme-web) petstore
? What is your Git user ID? konfig-dev
? What is your Git repository name? my-sdks
? What is the relative path to your spec? (ie. "<CURRENT_DIRECTORY>/path/to/api.yaml") petstore.yaml

/my-sdks
❯ ls
konfig.yaml     petstore.yaml
