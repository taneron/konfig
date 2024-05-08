def generate_template_for_guide():
    return """# This is a generated onboarding guide
## API Interaction Steps
- **Step 1:** Authenticate using your API key.
- **Step 2:** Use the `POST /create` endpoint to create a new resource.
- **Step 3:** Retrieve the resource using `GET /resource/{id}`.
- **Step 4:** Update the resource with `PUT /resource/{id}`.
- **Step 5:** Monitor the resource status with `GET /resource/status/{id}`."""
