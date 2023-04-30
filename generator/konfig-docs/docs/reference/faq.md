# Frequently Asked Questions

### If we add a new field to a response, will the SDK throw errors until it gets updated?

SDKs will throw an error depending on how you configured the SDK to be generated and what type of update occurs.

For additive updates, SDKs will not throw an error.

1. Adding a new property to a `object` type schema (with `additionalProperties: true`)
2. Adding an optional parameter to an operation

For breaking changes, SDKs will throw an error either in compilation or serialization/deserialization.

1. Changing the data type of an existing schema
2. Removing a parameter from an operation
3. Removing a property from an object type schema
4. Adding a required parameter to operation
5. Adding a required property to an object type schema

In general we suggest you try to avoid breaking changes at all cost but if you need to, make a new API version by modifying the base path in your OAS or providing default "version" header in all your operations.

### (Java) How do I change com.konfigthis to my domain name?

To publish a Java library with your own domain you must setup an account through
Sonatype with setup instructions here:
https://central.sonatype.org/publish/publish-guide/#initial-setup. To allow
Konfig to publish on your behalf, you must either give Konfig the
username/password credentials ensure your Sonatype JIRA account or ensure
Konfig's Sonatype username is added to the list of usernames that are allowed to
publish your group ID (this is accomplished in the ticket creation process).

### (Python) How are PyPi packages shared between Konfig and my organization?

Your organization's PyPi account will be added as `Owner` role to the SDK
package when the first version is published.

For every PyPi package both [Konfig's PyPi
account](https://pypi.org/user/konfig/) and your organization's PyPi account
will have `Owner` roles on every package. If the SDK repository lives under
[Konfig's GitHub organization](https://github.com/konfig-dev) then automated SDK
updates will occur through Konfig's PyPi account. Otherwise automated SDK
updates will occur under your organization's PyPi account. Credentials for PyPi
will be configured as secrets in the SDK repository.

### (Python) Why are certain parameters generated as classes?

If any sort of validation is described in your schema, Konfig will generate
classes for primitive types such as `int` and `string`. For example:

#### String Enum

```yaml
components:
  schemas:
    topic:
      type: string
      enum: ["news", "sports"]
      example: "business"
```

#### Integer Min

```yaml
components:
  schemas:
    page:
      type: integer
      minimum: 1
      example: 1
```

#### Integer Min Max

```yaml
components:
  schemas:
    page_size:
      type: integer
      minimum: 1
      maximum: 100
      example: 100
```

The above validation ensures the following test case passes:

```python
class TestPageSize(unittest.TestCase):
    def testPageSize(self):
        model = PageSize(1)
        assert model.value is 1, "Value is not correct"
        model = PageSize(100)  # noqa: E501
        assert model.value is 100, "Value is not correct"
        self.assertRaises(ApiValueError, lambda: PageSize(-1))
        self.assertRaises(ApiValueError, lambda: PageSize(101))
```

### (Python) What is is an `ApiValueError`?

`ApiValueError` is raised then an incorrect value type or value is provided for a class.

For example the following error will be raised if you pass the value `"No matches for your search."` for the following schema:

```yaml
components:
  schemas:
    success_status:
      type: string
      enum: ["ok", "error"]
      example: "ok"
```

```
ApiValueError: Invalid value for `value` (No matches for your search.), must be one of ['ok', 'error']
```

This is because `"No matches for your search."` is not `"ok"` or `"error"`.

### What is the recommended way to handle an operation that accepts different sets of parameters?

Sometimes an operation can accept different sets of parameters, in other words
existence of some parameters depend on the value of a particular parameter. The
best way to describe this is to define a schemas in your OAS that covers all
possible parameters and simply document example usages of the SDK in your
documentation. Your API should throw an error if an incorrect set of parameters
are provided and the error will be propagated back to the SDK. Ideally Konfig
uses OAS's polymorphism features but Konfig does not support polymorphism for
all languages today. Furthermore error messages from polymorphic types can be
confusing to some developers.

### How is the README "Getting Started" section generated?

Konfig chooses a random operation and instantiates parameters based on the
"example" field.

For example the following OAS (trimmed for simplicity) will instantiate the value of `"nytimes.com,theguardian.com"` for `not_sources`:

```yaml
paths:
  /latest_headlines:
    get:
      parameters:
        - $ref: "#/components/parameters/not_sources"
components:
  parameters:
    not_sources:
      description: |
        One or more sources to be excluded from the search.
        Comma-separated list. For example: `nytimes.com,cnn.com,wsj.com`
      name: not_sources
      in: query
      required: false
      schema:
        $ref: "#/components/schemas/sources"
  schemas:
    sources:
      type: string
      example: "nytimes.com,theguardian.com"
```

We expect the following parameter to be initialized in Python:

```python
not_sources = "nytimes.com,theguardian.com" # str | One or more sources to be excluded from the search. Comma-separated list. For example: `nytimes.com,cnn.com,wsj.com`  (optional)
```
