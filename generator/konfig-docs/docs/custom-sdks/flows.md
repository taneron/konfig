# Adding Documentation of Flows (Code Snippets) to your SDKs

To include code snippets that represent common flows of your SDKs you can simply
add code snippets under the `flows/` directory for each particular language.

```
.
├── LICENSE
├── README.md
├── api.yaml
├── flows <-- place snippets of code under this directory for each generator.
│   ├── csharp
│   ├── java
│   ├── php
│   ├── python
│   └── typescript
├── konfig.yaml
├── logo.png
└── sdks
    ├── csharp
    ├── java
    ├── php
    ├── python
    ├── ruby
    └── typescript
```

Upon running `konfig generate`, snippets from each directory will be inserted
into the top-level README.md for every SDK. The filename of each snippet will be
used as the section title in documentation.
