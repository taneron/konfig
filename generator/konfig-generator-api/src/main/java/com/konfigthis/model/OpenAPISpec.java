package com.konfigthis.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import org.openapitools.jackson.nullable.JsonNullable;
import java.time.OffsetDateTime;
import javax.validation.Valid;
import javax.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import javax.annotation.Generated;

/**
 * YAML formatted OpenAPISpec
 */

@Schema(name = "OpenAPISpec", description = "YAML formatted OpenAPISpec")
@Generated(value = "org.openapitools.codegen.languages.SpringCodegen")
public class OpenAPISpec {

  @JsonProperty("src")
  private String src;

  public OpenAPISpec src(String src) {
    this.src = src;
    return this;
  }

  /**
   * Get src
   * @return src
  */
  
  @Schema(name = "src", required = false)
  public String getSrc() {
    return src;
  }

  public void setSrc(String src) {
    this.src = src;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    OpenAPISpec openAPISpec = (OpenAPISpec) o;
    return Objects.equals(this.src, openAPISpec.src);
  }

  @Override
  public int hashCode() {
    return Objects.hash(src);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class OpenAPISpec {\n");
    sb.append("    src: ").append(toIndentedString(src)).append("\n");
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

