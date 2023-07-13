┌ Improper Tag Detected ────────────────────────────────────────────┐
│                                                                   │
│   Detected improperly named Tag "users > {user_id}"               │
│   https://konfigthis.com/docs/lint-rules#tag-naming-convention"   │
│                                                                   │
└───────────────────────────────────────────────────────────────────┘
? Select existing tag: users
┌──── Summary ────┐
│                 │
│   Delete User   │
│                 │
└─────────────────┘
┌──────── Path - Method ────────┐
│                               │
│   /users/{user_id} - DELETE   │
│                               │
└───────────────────────────────┘
? Enter operation ID: Users_delete
┌── Summary ───┐
│              │
│   Get User   │
│              │
└──────────────┘
┌────── Path - Method ───────┐
│                            │
│   /users/{user_id} - GET   │
│                            │
└────────────────────────────┘
? Enter operation ID: Users_get
┌──── Summary ────┐
│                 │
│   Update User   │
│                 │
└─────────────────┘
┌────── Path - Method ───────┐
│                            │
│   /users/{user_id} - PUT   │
│                            │
└────────────────────────────┘
? Enter operation ID: Users_update
┌─── Summary ───┐
│               │
│   Get Users   │
│               │
└───────────────┘
┌─ Path - Method ──┐
│                  │
│   /users - GET   │
│                  │
└──────────────────┘
? Enter operation ID: Users_list
┌──── Summary ────┐
│                 │
│   Create User   │
│                 │
└─────────────────┘
┌── Path - Method ──┐
│                   │
│   /users - POST   │
│                   │
└───────────────────┘
? Enter operation ID: Users_create
┌ Invalid Server URL Detected ──────────────────────────────────────┐
│                                                                   │
│   Detected invalid server URL "http://{{baseurl}}"                │
│   https://konfigthis.com/docs/lint-rules#tag-naming-convention"   │
│                                                                   │
└───────────────────────────────────────────────────────────────────┘
? Enter new URL name: https://api.konfigthis.com
┌──── Summary ────┐
│                 │
│   Delete User   │
│                 │
└─────────────────┘
┌── Operation ID ──┐
│                  │
│   Users_delete   │
│                  │
└──────────────────┘
┌──────── Path - Method ────────┐
│                               │
│   /users/{user_id} - DELETE   │
│                               │
└───────────────────────────────┘
┌──── Summary ────┐
│                 │
│   Delete User   │
│                 │
└─────────────────┘
┌── Operation ID ──┐
│                  │
│   Users_delete   │
│                  │
└──────────────────┘
┌──────── Path - Method ────────┐
│                               │
│   /users/{user_id} - DELETE   │
│                               │
└───────────────────────────────┘
┌─────────────── Saved Example ────────────────┐
│                                              │
│   {                                          │
│     "message": "User deleted successfully"   │
│   }                                          │
│                                              │
└──────────────────────────────────────────────┘
┌── Summary ───┐
│              │
│   Get User   │
│              │
└──────────────┘
┌ Operation ID ─┐
│               │
│   Users_get   │
│               │
└───────────────┘
┌────── Path - Method ───────┐
│                            │
│   /users/{user_id} - GET   │
│                            │
└────────────────────────────┘
┌── Summary ───┐
│              │
│   Get User   │
│              │
└──────────────┘
┌ Operation ID ─┐
│               │
│   Users_get   │
│               │
└───────────────┘
┌────── Path - Method ───────┐
│                            │
│   /users/{user_id} - GET   │
│                            │
└────────────────────────────┘
┌────────────────── Saved Example ───────────────────┐
│                                                    │
│   {                                                │
│     "name": "Me",                                  │
│     "email": "hello@world.com",                    │
│     "country": "USA",                              │
│     "id": "2a3d99ee-0369-40a1-a8c2-94f1c2a8348c"   │
│   }                                                │
│                                                    │
└────────────────────────────────────────────────────┘
┌──── Summary ────┐
│                 │
│   Update User   │
│                 │
└─────────────────┘
┌── Operation ID ──┐
│                  │
│   Users_update   │
│                  │
└──────────────────┘
┌────── Path - Method ───────┐
│                            │
│   /users/{user_id} - PUT   │
│                            │
└────────────────────────────┘
┌──── Summary ────┐
│                 │
│   Update User   │
│                 │
└─────────────────┘
┌── Operation ID ──┐
│                  │
│   Users_update   │
│                  │
└──────────────────┘
┌────── Path - Method ───────┐
│                            │
│   /users/{user_id} - PUT   │
│                            │
└────────────────────────────┘
┌─────────────── Saved Example ────────────────┐
│                                              │
│   {                                          │
│     "message": "User updated successfully"   │
│   }                                          │
│                                              │
└──────────────────────────────────────────────┘
┌─── Summary ───┐
│               │
│   Get Users   │
│               │
└───────────────┘
┌─ Operation ID ─┐
│                │
│   Users_list   │
│                │
└────────────────┘
┌─ Path - Method ──┐
│                  │
│   /users - GET   │
│                  │
└──────────────────┘
┌──── Summary ────┐
│                 │
│   Create User   │
│                 │
└─────────────────┘
┌── Operation ID ──┐
│                  │
│   Users_create   │
│                  │
└──────────────────┘
┌── Path - Method ──┐
│                   │
│   /users - POST   │
│                   │
└───────────────────┘
┌──── Summary ────┐
│                 │
│   Create User   │
│                 │
└─────────────────┘
┌── Operation ID ──┐
│                  │
│   Users_create   │
│                  │
└──────────────────┘
┌── Path - Method ──┐
│                   │
│   /users - POST   │
│                   │
└───────────────────┘
┌─────────────────── Saved Example ───────────────────┐
│                                                     │
│   {                                                 │
│     "id": "0fd5d128-daad-4898-bc02-198a49f445c9",   │
│     "message": "User created successfully"          │
│   }                                                 │
│                                                     │
└─────────────────────────────────────────────────────┘
┌──── Summary ────┐
│                 │
│   Update User   │
│                 │
└─────────────────┘
┌── Operation ID ──┐
│                  │
│   Users_update   │
│                  │
└──────────────────┘
┌────── Path - Method ───────┐
│                            │
│   /users/{user_id} - PUT   │
│                            │
└────────────────────────────┘
┌ Schema ──────────────────────────────┐
│                                      │
│   {                                  │
│     "type": "object",                │
│     "example": {                     │
│       "name": "new name",            │
│       "email": "new@email.com",      │
│       "country": "USA"               │
│     },                               │
│     "properties": {                  │
│       "name": {                      │
│         "type": "string",            │
│         "example": "new name"        │
│       },                             │
│       "email": {                     │
│         "type": "string",            │
│         "example": "new@email.com"   │
│       },                             │
│       "country": {                   │
│         "type": "string",            │
│         "example": "USA"             │
│       }                              │
│     }                                │
│   }                                  │
│                                      │
└──────────────────────────────────────┘
┌──── Summary ────┐
│                 │
│   Create User   │
│                 │
└─────────────────┘
┌── Operation ID ──┐
│                  │
│   Users_create   │
│                  │
└──────────────────┘
┌── Path - Method ──┐
│                   │
│   /users - POST   │
│                   │
└───────────────────┘
┌ Schema ────────────────────────────────┐
│                                        │
│   {                                    │
│     "type": "object",                  │
│     "example": {                       │
│       "name": "Me",                    │
│       "email": "hello@world.com",      │
│       "country": "USA"                 │
│     },                                 │
│     "properties": {                    │
│       "name": {                        │
│         "type": "string",              │
│         "example": "Me"                │
│       },                               │
│       "email": {                       │
│         "type": "string",              │
│         "example": "hello@world.com"   │
│       },                               │
│       "country": {                     │
│         "type": "string",              │
│         "example": "USA"               │
│       }                                │
│     }                                  │
│   }                                    │
│                                        │
└────────────────────────────────────────┘
┌──── Summary ────┐
│                 │
│   Delete User   │
│                 │
└─────────────────┘
┌── Operation ID ──┐
│                  │
│   Users_delete   │
│                  │
└──────────────────┘
┌──────── Path - Method ────────┐
│                               │
│   /users/{user_id} - DELETE   │
│                               │
└───────────────────────────────┘
┌─────── Media ────────┐
│                      │
│   application/json   │
│                      │
└──────────────────────┘
┌──── Summary ────┐
│                 │
│   Delete User   │
│                 │
└─────────────────┘
┌── Operation ID ──┐
│                  │
│   Users_delete   │
│                  │
└──────────────────┘
┌──────── Path - Method ────────┐
│                               │
│   /users/{user_id} - DELETE   │
│                               │
└───────────────────────────────┘
┌ Schema ──────────────────────────────────────────┐
│                                                  │
│   {                                              │
│     "type": "object",                            │
│     "properties": {                              │
│       "message": {                               │
│         "type": "string",                        │
│         "example": "User deleted successfully"   │
│       }                                          │
│     },                                           │
│     "example": {                                 │
│       "message": "User deleted successfully"     │
│     }                                            │
│   }                                              │
│                                                  │
└──────────────────────────────────────────────────┘
┌─────── Media ────────┐
│                      │
│   application/json   │
│                      │
└──────────────────────┘
┌──── Summary ────┐
│                 │
│   Delete User   │
│                 │
└─────────────────┘
┌── Operation ID ──┐
│                  │
│   Users_delete   │
│                  │
└──────────────────┘
┌──────── Path - Method ────────┐
│                               │
│   /users/{user_id} - DELETE   │
│                               │
└───────────────────────────────┘
┌ Schema ──────────────────────────────────────────┐
│                                                  │
│   {                                              │
│     "type": "object",                            │
│     "properties": {                              │
│       "message": {                               │
│         "type": "string",                        │
│         "example": "User deleted successfully"   │
│       }                                          │
│     },                                           │
│     "example": {                                 │
│       "message": "User deleted successfully"     │
│     }                                            │
│   }                                              │
│                                                  │
└──────────────────────────────────────────────────┘
┌── Summary ───┐
│              │
│   Get User   │
│              │
└──────────────┘
┌ Operation ID ─┐
│               │
│   Users_get   │
│               │
└───────────────┘
┌────── Path - Method ───────┐
│                            │
│   /users/{user_id} - GET   │
│                            │
└────────────────────────────┘
┌─────── Media ────────┐
│                      │
│   application/json   │
│                      │
└──────────────────────┘
┌── Summary ───┐
│              │
│   Get User   │
│              │
└──────────────┘
┌ Operation ID ─┐
│               │
│   Users_get   │
│               │
└───────────────┘
┌────── Path - Method ───────┐
│                            │
│   /users/{user_id} - GET   │
│                            │
└────────────────────────────┘
┌ Schema ─────────────────────────────────────────────────────┐
│                                                             │
│   {                                                         │
│     "type": "object",                                       │
│     "properties": {                                         │
│       "name": {                                             │
│         "type": "string",                                   │
│         "example": "Me"                                     │
│       },                                                    │
│       "email": {                                            │
│         "type": "string",                                   │
│         "example": "hello@world.com"                        │
│       },                                                    │
│       "country": {                                          │
│         "type": "string",                                   │
│         "example": "USA"                                    │
│       },                                                    │
│       "id": {                                               │
│         "type": "string",                                   │
│         "example": "2a3d99ee-0369-40a1-a8c2-94f1c2a8348c"   │
│       }                                                     │
│     },                                                      │
│     "example": {                                            │
│       "name": "Me",                                         │
│       "email": "hello@world.com",                           │
│       "country": "USA",                                     │
│       "id": "2a3d99ee-0369-40a1-a8c2-94f1c2a8348c"          │
│     }                                                       │
│   }                                                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
┌─────── Media ────────┐
│                      │
│   application/json   │
│                      │
└──────────────────────┘
┌── Summary ───┐
│              │
│   Get User   │
│              │
└──────────────┘
┌ Operation ID ─┐
│               │
│   Users_get   │
│               │
└───────────────┘
┌────── Path - Method ───────┐
│                            │
│   /users/{user_id} - GET   │
│                            │
└────────────────────────────┘
┌ Schema ─────────────────────────────────────────────────────┐
│                                                             │
│   {                                                         │
│     "type": "object",                                       │
│     "properties": {                                         │
│       "name": {                                             │
│         "type": "string",                                   │
│         "example": "Me"                                     │
│       },                                                    │
│       "email": {                                            │
│         "type": "string",                                   │
│         "example": "hello@world.com"                        │
│       },                                                    │
│       "country": {                                          │
│         "type": "string",                                   │
│         "example": "USA"                                    │
│       },                                                    │
│       "id": {                                               │
│         "type": "string",                                   │
│         "example": "2a3d99ee-0369-40a1-a8c2-94f1c2a8348c"   │
│       }                                                     │
│     },                                                      │
│     "example": {                                            │
│       "name": "Me",                                         │
│       "email": "hello@world.com",                           │
│       "country": "USA",                                     │
│       "id": "2a3d99ee-0369-40a1-a8c2-94f1c2a8348c"          │
│     }                                                       │
│   }                                                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
┌──── Summary ────┐
│                 │
│   Update User   │
│                 │
└─────────────────┘
┌── Operation ID ──┐
│                  │
│   Users_update   │
│                  │
└──────────────────┘
┌────── Path - Method ───────┐
│                            │
│   /users/{user_id} - PUT   │
│                            │
└────────────────────────────┘
┌─────── Media ────────┐
│                      │
│   application/json   │
│                      │
└──────────────────────┘
┌──── Summary ────┐
│                 │
│   Update User   │
│                 │
└─────────────────┘
┌── Operation ID ──┐
│                  │
│   Users_update   │
│                  │
└──────────────────┘
┌────── Path - Method ───────┐
│                            │
│   /users/{user_id} - PUT   │
│                            │
└────────────────────────────┘
┌ Schema ──────────────────────────────────────────┐
│                                                  │
│   {                                              │
│     "type": "object",                            │
│     "properties": {                              │
│       "message": {                               │
│         "type": "string",                        │
│         "example": "User updated successfully"   │
│       }                                          │
│     },                                           │
│     "example": {                                 │
│       "message": "User updated successfully"     │
│     }                                            │
│   }                                              │
│                                                  │
└──────────────────────────────────────────────────┘
┌─────── Media ────────┐
│                      │
│   application/json   │
│                      │
└──────────────────────┘
┌──── Summary ────┐
│                 │
│   Update User   │
│                 │
└─────────────────┘
┌── Operation ID ──┐
│                  │
│   Users_update   │
│                  │
└──────────────────┘
┌────── Path - Method ───────┐
│                            │
│   /users/{user_id} - PUT   │
│                            │
└────────────────────────────┘
┌ Schema ──────────────────────────────────────────┐
│                                                  │
│   {                                              │
│     "type": "object",                            │
│     "properties": {                              │
│       "message": {                               │
│         "type": "string",                        │
│         "example": "User updated successfully"   │
│       }                                          │
│     },                                           │
│     "example": {                                 │
│       "message": "User updated successfully"     │
│     }                                            │
│   }                                              │
│                                                  │
└──────────────────────────────────────────────────┘
┌─── Summary ───┐
│               │
│   Get Users   │
│               │
└───────────────┘
┌─ Operation ID ─┐
│                │
│   Users_list   │
│                │
└────────────────┘
┌─ Path - Method ──┐
│                  │
│   /users - GET   │
│                  │
└──────────────────┘
┌─────── Media ────────┐
│                      │
│   application/json   │
│                      │
└──────────────────────┘
┌─── Summary ───┐
│               │
│   Get Users   │
│               │
└───────────────┘
┌─ Operation ID ─┐
│                │
│   Users_list   │
│                │
└────────────────┘
┌─ Path - Method ──┐
│                  │
│   /users - GET   │
│                  │
└──────────────────┘
┌ Schema ───────────────────────────────────────────────────────┐
│                                                               │
│   {                                                           │
│     "type": "array",                                          │
│     "items": {                                                │
│       "type": "object",                                       │
│       "properties": {                                         │
│         "name": {                                             │
│           "type": "string",                                   │
│           "example": "Me"                                     │
│         },                                                    │
│         "email": {                                            │
│           "type": "string",                                   │
│           "example": "hello@world.com"                        │
│         },                                                    │
│         "country": {                                          │
│           "type": "string",                                   │
│           "example": "USA"                                    │
│         },                                                    │
│         "id": {                                               │
│           "type": "string",                                   │
│           "example": "8aac2554-204a-41b5-a9a6-27ee01d1f182"   │
│         }                                                     │
│       }                                                       │
│     },                                                        │
│     "example": [                                              │
│       {                                                       │
│         "name": "Me",                                         │
│         "email": "hello@world.com",                           │
│         "country": "USA",                                     │
│         "id": "8aac2554-204a-41b5-a9a6-27ee01d1f182"          │
│       }                                                       │
│     ]                                                         │
│   }                                                           │
│                                                               │
└───────────────────────────────────────────────────────────────┘
┌──── Summary ────┐
│                 │
│   Create User   │
│                 │
└─────────────────┘
┌── Operation ID ──┐
│                  │
│   Users_create   │
│                  │
└──────────────────┘
┌── Path - Method ──┐
│                   │
│   /users - POST   │
│                   │
└───────────────────┘
┌─────── Media ────────┐
│                      │
│   application/json   │
│                      │
└──────────────────────┘
┌──── Summary ────┐
│                 │
│   Create User   │
│                 │
└─────────────────┘
┌── Operation ID ──┐
│                  │
│   Users_create   │
│                  │
└──────────────────┘
┌── Path - Method ──┐
│                   │
│   /users - POST   │
│                   │
└───────────────────┘
┌ Schema ─────────────────────────────────────────────────────┐
│                                                             │
│   {                                                         │
│     "type": "object",                                       │
│     "properties": {                                         │
│       "id": {                                               │
│         "type": "string",                                   │
│         "example": "0fd5d128-daad-4898-bc02-198a49f445c9"   │
│       },                                                    │
│       "message": {                                          │
│         "type": "string",                                   │
│         "example": "User created successfully"              │
│       }                                                     │
│     },                                                      │
│     "example": {                                            │
│       "id": "0fd5d128-daad-4898-bc02-198a49f445c9",         │
│       "message": "User created successfully"                │
│     }                                                       │
│   }                                                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
┌─────── Media ────────┐
│                      │
│   application/json   │
│                      │
└──────────────────────┘
┌──── Summary ────┐
│                 │
│   Create User   │
│                 │
└─────────────────┘
┌── Operation ID ──┐
│                  │
│   Users_create   │
│                  │
└──────────────────┘
┌── Path - Method ──┐
│                   │
│   /users - POST   │
│                   │
└───────────────────┘
┌ Schema ─────────────────────────────────────────────────────┐
│                                                             │
│   {                                                         │
│     "type": "object",                                       │
│     "properties": {                                         │
│       "id": {                                               │
│         "type": "string",                                   │
│         "example": "0fd5d128-daad-4898-bc02-198a49f445c9"   │
│       },                                                    │
│       "message": {                                          │
│         "type": "string",                                   │
│         "example": "User created successfully"              │
│       }                                                     │
│     },                                                      │
│     "example": {                                            │
│       "id": "0fd5d128-daad-4898-bc02-198a49f445c9",         │
│       "message": "User created successfully"                │
│     }                                                       │
│   }                                                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
┌ Fixed 46 Issues ────────────────────────────────────────────┐
│                                                             │
│   Updated 5 operation IDs                                   │
│   Made 0 custom modifications                               │
│   Renamed 1 improperly named tags                           │
│   Removed 11 disallowed headers removed                     │
│   Added 0 potential-incorrect-type ignore rule              │
│   Added 0 missing info description                          │
│   Added 0 missing response descriptions                     │
│   Added 0 missing tags                                      │
│   Added 9 empty response body schemas                       │
│   Added 11 named schemas                                    │
│   Added 0 missing 2xx responses                             │
│   Added 0 new tag names                                     │
│   Fixed 1 duplicate tag names fixed                         │
│   Fixed 1 invalid server URLs fixed                         │
│   Fixed 0 unstructured request bodies                       │
│   Fixed 2 objects with no properties                        │
│   Fixed 0 redundant "example" & "examples" fields           │
│   Fixed 5 examples with invalid schemas                     │
│   Fixed 0 parameters that should be security requirements   │
│   Fixed 0 list usages of security                           │
│   Removed 0 trailing slashes                                │
│   Removed 0 redundant security requirement and parameters   │
│   Removed 0 redundant security schemes                      │
│   Removed 0 parameters replace with security requirement    │
│   Removed 0 empty request bodies                            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
