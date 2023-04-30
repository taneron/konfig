# Implement Pagination

Konfig supports pagination out-of-the-box with an incredibly simple implementation process.

1. [Configure konfig.yaml for pagination](#1-configure-konfigyaml-for-pagination)
2. [Implement stubbed methods](#2-implement-stubbed-methods)
3. [Add implementation to `.konfigignore`](#3-add-custom-implementation-to-konfigignore)

## 1) Configure konfig.yaml for pagination

```yml
# konfig.yaml

outputDirectory: /tmp/acme-sdks-out
specPath: openapi.json
generators:
  typescript:
    version: 1.0.0
    npmName: acme-typescript-sdk
    outputDirectory: typescript
    git:
      userId: konfig-dev
      repoId: acme-sdks/tree/main/typescript
    pagination:
      parameters: # parameter names to match
        - page_size
        - page
      response: # response property names to match
        - page_size
        - page
        - total_pages
```

## 2) Implement stubbed methods

```ts
// page.ts

import { Pageable, PageParametersBase } from "./pageable";

/**
 * The set of parameters that appear in a paginated operation (requestBody or parameters)
 */
export type PageParameterProperties = {
  // stubbed as: [key: string]: any
  page?: number;
  pageSize?: number;
};

export type PageParameters = PageParametersBase<PageParameterProperties>;

/**
 * The set of properties that appear in a paginated operation's response
 */
export interface PageInfo {
  // stubbed as: [key: string]: any
  total_pages?: number;
  page?: number;
  page_size?: number;
}

export class Page<
  Data extends PageInfo,
  Parameters extends PageParameters
> extends Pageable<Data, Parameters> {
  protected get previousParameters(): PageParameterProperties | null {
    // stubbed as: throw Error("Stub");
    if (this.data.page === undefined) return null;
    return {
      page: this.data.page - 1,
    };
  }

  protected get nextParameters(): PageParameterProperties | null {
    // stubbed as: throw Error("Stub");
    if (this.data.page === undefined) return null;
    return {
      page: this.data.page + 1,
    };
  }
  hasPrevious(): boolean {
    // stubbed as: throw Error("Stub");
    return this.data.page === undefined ? false : this.data.page > 0;
  }

  hasNext(): boolean {
    // stubbed as: throw Error("Stub");
    if (this.data.page === undefined) return false;
    if (this.data.total_pages === undefined) return false;
    return this.data.page < this.data.total_pages;
  }
}
```

## 3) Add custom implementation to `.konfigignore`

```bash
❯ konfig ignore -g "typescript/pagination/page.ts"
Adding pagination/page.ts to typescript/.konfigignore
```
