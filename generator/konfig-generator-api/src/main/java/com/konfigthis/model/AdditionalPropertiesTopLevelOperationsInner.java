package com.konfigthis.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import org.openapitools.jackson.nullable.JsonNullable;
import java.time.OffsetDateTime;
import javax.validation.Valid;
import javax.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import javax.annotation.Generated;

/**
 * AdditionalPropertiesTopLevelOperationsInner
 */

@JsonTypeName("AdditionalProperties_topLevelOperations_inner")
@Generated(value = "org.openapitools.codegen.languages.SpringCodegen")
public class AdditionalPropertiesTopLevelOperationsInner {

  @JsonProperty("operationId")
  private String operationId;

  @JsonProperty("methodName")
  private String methodName;

  public AdditionalPropertiesTopLevelOperationsInner operationId(String operationId) {
    this.operationId = operationId;
    return this;
  }

  /**
   * Get operationId
   * @return operationId
  */
  
  @Schema(name = "operationId", required = false)
  public String getOperationId() {
    return operationId;
  }

  public void setOperationId(String operationId) {
    this.operationId = operationId;
  }

  public AdditionalPropertiesTopLevelOperationsInner methodName(String methodName) {
    this.methodName = methodName;
    return this;
  }

  /**
   * Get methodName
   * @return methodName
  */
  
  @Schema(name = "methodName", required = false)
  public String getMethodName() {
    return methodName;
  }

  public void setMethodName(String methodName) {
    this.methodName = methodName;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AdditionalPropertiesTopLevelOperationsInner additionalPropertiesTopLevelOperationsInner = (AdditionalPropertiesTopLevelOperationsInner) o;
    return Objects.equals(this.operationId, additionalPropertiesTopLevelOperationsInner.operationId) &&
        Objects.equals(this.methodName, additionalPropertiesTopLevelOperationsInner.methodName);
  }

  @Override
  public int hashCode() {
    return Objects.hash(operationId, methodName);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AdditionalPropertiesTopLevelOperationsInner {\n");
    sb.append("    operationId: ").append(toIndentedString(operationId)).append("\n");
    sb.append("    methodName: ").append(toIndentedString(methodName)).append("\n");
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

