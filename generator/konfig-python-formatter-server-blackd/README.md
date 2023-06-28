Wrapper around [blackd](https://black.readthedocs.io/en/stable/usage_and_configuration/black_as_a_server.html) using [poetry](https://python-poetry.org/)

### Why?

For some reason I couldn't get `blackd` to run as a Render private service so instead I just added a `FastAPI` layer on top of it and it worked so now I don't want to touch this service.

### How is this service used?

1. In development it is convenient to start `blackd` along with `yarn dev` in `konfig-dash`. Our CLI will simply use the locally running `blackd` instance.
2. In production `blackd` is wrapped in its own `FastAPI` service and accessible
   through the `/formatPython` endpoint at our REST API which then proxies the
   request to the `FastAPI` service. Our CLI uses this REST API in production mode.
