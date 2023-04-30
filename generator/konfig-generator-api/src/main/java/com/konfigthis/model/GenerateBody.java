package com.konfigthis.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.konfigthis.model.GeneratorConfig;
import com.konfigthis.model.OpenAPISpec;
import org.openapitools.jackson.nullable.JsonNullable;
import java.time.OffsetDateTime;
import javax.validation.Valid;
import javax.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import javax.annotation.Generated;

/**
 * The request body for /generate
 */

@Schema(name = "GenerateBody", description = "The request body for /generate")
@Generated(value = "org.openapitools.codegen.languages.SpringCodegen")
public class GenerateBody {

  @JsonProperty("spec")
  private OpenAPISpec spec;

  @JsonProperty("config")
  private GeneratorConfig config;

  @JsonProperty("validateSpec")
  private Boolean validateSpec;

  public GenerateBody spec(OpenAPISpec spec) {
    this.spec = spec;
    return this;
  }

  /**
   * Get spec
   * @return spec
  */
  @Valid 
  @Schema(name = "spec", required = false)
  public OpenAPISpec getSpec() {
    return spec;
  }

  public void setSpec(OpenAPISpec spec) {
    this.spec = spec;
  }

  public GenerateBody config(GeneratorConfig config) {
    this.config = config;
    return this;
  }

  /**
   * Get config
   * @return config
  */
  @Valid 
  @Schema(name = "config", required = false)
  public GeneratorConfig getConfig() {
    return config;
  }

  public void setConfig(GeneratorConfig config) {
    this.config = config;
  }

  public GenerateBody validateSpec(Boolean validateSpec) {
    this.validateSpec = validateSpec;
    return this;
  }

  /**
   * Get validateSpec
   * @return validateSpec
  */
  
  @Schema(name = "validateSpec", required = false)
  public Boolean getValidateSpec() {
    return validateSpec;
  }

  public void setValidateSpec(Boolean validateSpec) {
    this.validateSpec = validateSpec;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GenerateBody generateBody = (GenerateBody) o;
    return Objects.equals(this.spec, generateBody.spec) &&
        Objects.equals(this.config, generateBody.config) &&
        Objects.equals(this.validateSpec, generateBody.validateSpec);
  }

  @Override
  public int hashCode() {
    return Objects.hash(spec, config, validateSpec);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GenerateBody {\n");
    sb.append("    spec: ").append(toIndentedString(spec)).append("\n");
    sb.append("    config: ").append(toIndentedString(config)).append("\n");
    sb.append("    validateSpec: ").append(toIndentedString(validateSpec)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

