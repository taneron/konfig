package com.konfigthis.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.konfigthis.model.AdditionalProperties;
import com.konfigthis.model.FilesValue;
import java.util.HashMap;
import java.util.Map;
import org.openapitools.jackson.nullable.JsonNullable;
import java.time.OffsetDateTime;
import javax.validation.Valid;
import javax.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import javax.annotation.Generated;

/**
 * Configuration of the OpenAPI Generator
 */

@Schema(name = "GeneratorConfig", description = "Configuration of the OpenAPI Generator")
@Generated(value = "org.openapitools.codegen.languages.SpringCodegen")
public class GeneratorConfig {

  @JsonProperty("artifactVersion")
  private String artifactVersion;

  @JsonProperty("additionalProperties")
  private AdditionalProperties additionalProperties;

  @JsonProperty("generatorName")
  private String generatorName;

  @JsonProperty("outputDirectoryName")
  private String outputDirectoryName;

  @JsonProperty("removeOperationIdPrefix")
  private Boolean removeOperationIdPrefix;

  @JsonProperty("files")
  @Valid
  private Map<String, FilesValue> files = null;

  @JsonProperty("packageName")
  private String packageName;

  @JsonProperty("gitHost")
  private String gitHost;

  @JsonProperty("gitUserId")
  private String gitUserId;

  @JsonProperty("gitRepoId")
  private String gitRepoId;

  public GeneratorConfig artifactVersion(String artifactVersion) {
    this.artifactVersion = artifactVersion;
    return this;
  }

  /**
   * Get artifactVersion
   * @return artifactVersion
  */
  
  @Schema(name = "artifactVersion", required = false)
  public String getArtifactVersion() {
    return artifactVersion;
  }

  public void setArtifactVersion(String artifactVersion) {
    this.artifactVersion = artifactVersion;
  }

  public GeneratorConfig additionalProperties(AdditionalProperties additionalProperties) {
    this.additionalProperties = additionalProperties;
    return this;
  }

  /**
   * Get additionalProperties
   * @return additionalProperties
  */
  @Valid 
  @Schema(name = "additionalProperties", required = false)
  public AdditionalProperties getAdditionalProperties() {
    return additionalProperties;
  }

  public void setAdditionalProperties(AdditionalProperties additionalProperties) {
    this.additionalProperties = additionalProperties;
  }

  public GeneratorConfig generatorName(String generatorName) {
    this.generatorName = generatorName;
    return this;
  }

  /**
   * The name of the generator
   * @return generatorName
  */
  
  @Schema(name = "generatorName", description = "The name of the generator", required = false)
  public String getGeneratorName() {
    return generatorName;
  }

  public void setGeneratorName(String generatorName) {
    this.generatorName = generatorName;
  }

  public GeneratorConfig outputDirectoryName(String outputDirectoryName) {
    this.outputDirectoryName = outputDirectoryName;
    return this;
  }

  /**
   * Get outputDirectoryName
   * @return outputDirectoryName
  */
  
  @Schema(name = "outputDirectoryName", required = false)
  public String getOutputDirectoryName() {
    return outputDirectoryName;
  }

  public void setOutputDirectoryName(String outputDirectoryName) {
    this.outputDirectoryName = outputDirectoryName;
  }

  public GeneratorConfig removeOperationIdPrefix(Boolean removeOperationIdPrefix) {
    this.removeOperationIdPrefix = removeOperationIdPrefix;
    return this;
  }

  /**
   * Get removeOperationIdPrefix
   * @return removeOperationIdPrefix
  */
  
  @Schema(name = "removeOperationIdPrefix", required = false)
  public Boolean getRemoveOperationIdPrefix() {
    return removeOperationIdPrefix;
  }

  public void setRemoveOperationIdPrefix(Boolean removeOperationIdPrefix) {
    this.removeOperationIdPrefix = removeOperationIdPrefix;
  }

  public GeneratorConfig files(Map<String, FilesValue> files) {
    this.files = files;
    return this;
  }

  public GeneratorConfig putFilesItem(String key, FilesValue filesItem) {
    if (this.files == null) {
      this.files = new HashMap<>();
    }
    this.files.put(key, filesItem);
    return this;
  }

  /**
   * Collection of template files
   * @return files
  */
  @Valid 
  @Schema(name = "files", description = "Collection of template files", required = false)
  public Map<String, FilesValue> getFiles() {
    return files;
  }

  public void setFiles(Map<String, FilesValue> files) {
    this.files = files;
  }

  public GeneratorConfig packageName(String packageName) {
    this.packageName = packageName;
    return this;
  }

  /**
   * Get packageName
   * @return packageName
  */
  
  @Schema(name = "packageName", required = false)
  public String getPackageName() {
    return packageName;
  }

  public void setPackageName(String packageName) {
    this.packageName = packageName;
  }

  public GeneratorConfig gitHost(String gitHost) {
    this.gitHost = gitHost;
    return this;
  }

  /**
   * Get gitHost
   * @return gitHost
  */
  
  @Schema(name = "gitHost", required = false)
  public String getGitHost() {
    return gitHost;
  }

  public void setGitHost(String gitHost) {
    this.gitHost = gitHost;
  }

  public GeneratorConfig gitUserId(String gitUserId) {
    this.gitUserId = gitUserId;
    return this;
  }

  /**
   * Get gitUserId
   * @return gitUserId
  */
  
  @Schema(name = "gitUserId", required = false)
  public String getGitUserId() {
    return gitUserId;
  }

  public void setGitUserId(String gitUserId) {
    this.gitUserId = gitUserId;
  }

  public GeneratorConfig gitRepoId(String gitRepoId) {
    this.gitRepoId = gitRepoId;
    return this;
  }

  /**
   * Get gitRepoId
   * @return gitRepoId
  */
  
  @Schema(name = "gitRepoId", required = false)
  public String getGitRepoId() {
    return gitRepoId;
  }

  public void setGitRepoId(String gitRepoId) {
    this.gitRepoId = gitRepoId;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GeneratorConfig generatorConfig = (GeneratorConfig) o;
    return Objects.equals(this.artifactVersion, generatorConfig.artifactVersion) &&
        Objects.equals(this.additionalProperties, generatorConfig.additionalProperties) &&
        Objects.equals(this.generatorName, generatorConfig.generatorName) &&
        Objects.equals(this.outputDirectoryName, generatorConfig.outputDirectoryName) &&
        Objects.equals(this.removeOperationIdPrefix, generatorConfig.removeOperationIdPrefix) &&
        Objects.equals(this.files, generatorConfig.files) &&
        Objects.equals(this.packageName, generatorConfig.packageName) &&
        Objects.equals(this.gitHost, generatorConfig.gitHost) &&
        Objects.equals(this.gitUserId, generatorConfig.gitUserId) &&
        Objects.equals(this.gitRepoId, generatorConfig.gitRepoId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(artifactVersion, additionalProperties, generatorName, outputDirectoryName, removeOperationIdPrefix, files, packageName, gitHost, gitUserId, gitRepoId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GeneratorConfig {\n");
    sb.append("    artifactVersion: ").append(toIndentedString(artifactVersion)).append("\n");
    sb.append("    additionalProperties: ").append(toIndentedString(additionalProperties)).append("\n");
    sb.append("    generatorName: ").append(toIndentedString(generatorName)).append("\n");
    sb.append("    outputDirectoryName: ").append(toIndentedString(outputDirectoryName)).append("\n");
    sb.append("    removeOperationIdPrefix: ").append(toIndentedString(removeOperationIdPrefix)).append("\n");
    sb.append("    files: ").append(toIndentedString(files)).append("\n");
    sb.append("    packageName: ").append(toIndentedString(packageName)).append("\n");
    sb.append("    gitHost: ").append(toIndentedString(gitHost)).append("\n");
    sb.append("    gitUserId: ").append(toIndentedString(gitUserId)).append("\n");
    sb.append("    gitRepoId: ").append(toIndentedString(gitRepoId)).append("\n");
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

