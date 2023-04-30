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
 * FilesValue
 */

@JsonTypeName("Files_value")
@Generated(value = "org.openapitools.codegen.languages.SpringCodegen")
public class FilesValue {

  @JsonProperty("source")
  private String source;

  @JsonProperty("destinationFilename")
  private String destinationFilename;

  public FilesValue source(String source) {
    this.source = source;
    return this;
  }

  /**
   * Get source
   * @return source
  */
  
  @Schema(name = "source", required = false)
  public String getSource() {
    return source;
  }

  public void setSource(String source) {
    this.source = source;
  }

  public FilesValue destinationFilename(String destinationFilename) {
    this.destinationFilename = destinationFilename;
    return this;
  }

  /**
   * Get destinationFilename
   * @return destinationFilename
  */
  
  @Schema(name = "destinationFilename", required = false)
  public String getDestinationFilename() {
    return destinationFilename;
  }

  public void setDestinationFilename(String destinationFilename) {
    this.destinationFilename = destinationFilename;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    FilesValue filesValue = (FilesValue) o;
    return Objects.equals(this.source, filesValue.source) &&
        Objects.equals(this.destinationFilename, filesValue.destinationFilename);
  }

  @Override
  public int hashCode() {
    return Objects.hash(source, destinationFilename);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class FilesValue {\n");
    sb.append("    source: ").append(toIndentedString(source)).append("\n");
    sb.append("    destinationFilename: ").append(toIndentedString(destinationFilename)).append("\n");
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

