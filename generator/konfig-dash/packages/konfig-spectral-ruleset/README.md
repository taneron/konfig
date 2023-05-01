# Konfig's OAS Linter (Based on Spectral)

## Installation

```bash
npm install --save -D konfig-spectral-ruleset
npm install --save -D @stoplight/spectral-cli
```

## Usage

Create a local ruleset that extends the style guide. In its most basic form this just tells Spectral what ruleset you want to use, but it will allow you to customise things, add your own rules, turn bits off if its causing trouble.

```
cd ~/src/<your-api>

echo 'extends: ["konfig-spectral-ruleset"]' > .spectral.yaml
```

_If you're using VS Code or Stoplight Studio then the NPM modules will not be available. Instead you can use the CDN hosted version:_

```
echo 'extends: ["https://unpkg.com/konfig-spectral-ruleset@latest/dist/ruleset.js"]' > .spectral.yaml
```

_**Note:** You need to use the full URL with CDN hosted rulesets because Spectral [cannot follow redirects through extends](https://github.com/stoplightio/spectral/issues/2266)._

Next, use Spectral CLI to lint against your OpenAPI description. Don't have any OpenAPI? [Record some HTTP traffic to make OpenAPI](https://apisyouwonthate.com/blog/creating-openapi-from-http-traffic) and then you can switch to API Design-First going forwards.

```
spectral lint api/openapi.yaml
```

You should see some output like this, letting you know there are a few more standards you could be using (shout-out to [Standards.REST](https://standards.rest/)):

```
/Users/phil/src/protect-earth-api/api/openapi.yaml
  18:7   warning  api-health               Creating a `/health` endpoint is a simple solution for pull-based monitoring and manually checking the status of an API.  paths
  18:7   warning  api-home                 Stop forcing all API consumers to visit documentation for basic interactions when the API could do that itself.           paths
  36:30  warning  no-unknown-error-format  Every error response SHOULD support either RFC 7807 (https://tools.ietf.org/html/rfc6648) or the JSON:API Error format.   paths./v1/orders.post.responses[401].content.application/json
  96:30  warning  no-unknown-error-format  Every error response SHOULD support either RFC 7807 (https://tools.ietf.org/html/rfc6648) or the JSON:API Error format.   paths./v1/orders/{order}.get.responses[401].content.application/json
 112:30  warning  no-unknown-error-format  Every error response SHOULD support either RFC 7807 (https://tools.ietf.org/html/rfc6648) or the JSON:API Error format.   paths./v1/orders/{order}.get.responses[404].content.application/json
```

Now you have some things to work on for your API. Thankfully these are only warnings, which are not going to [fail continuous integration](https://meta.stoplight.io/docs/spectral/ZG9jOjExNTMyOTAx-continuous-integration) (unless [you want them to](https://meta.stoplight.io/docs/spectral/ZG9jOjI1MTg1-spectral-cli#error-results)).
