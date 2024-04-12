```mermaid
graph TD;
    A[Start] --> B{Is it?};
    B -->|Yes| C[End];
    C -->|No| D[End];
    B -->|No| D[End];
```
