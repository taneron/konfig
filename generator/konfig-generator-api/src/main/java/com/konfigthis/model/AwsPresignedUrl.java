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
 * AwsPresignedUrl
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen")
public class AwsPresignedUrl {

  @JsonProperty("key")
  private String key;

  @JsonProperty("url")
  private String url;

  public AwsPresignedUrl key(String key) {
    this.key = key;
    return this;
  }

  /**
   * S3 Bucket Key
   * @return key
  */
  
  @Schema(name = "key", description = "S3 Bucket Key", required = false)
  public String getKey() {
    return key;
  }

  public void setKey(String key) {
    this.key = key;
  }

  public AwsPresignedUrl url(String url) {
    this.url = url;
    return this;
  }

  /**
   * Download link with expiration of 10 minutes
   * @return url
  */
  
  @Schema(name = "url", example = "https://s3.us-west-1.amazonaws.com/gethappy.dev/1-2022-10-31T09%3A53%3A05.034Z.tar.gz?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMSJHMEUCIQDN%2FI%2BsfI6pdiX%2BE9j5d72qgN1CXqvXRfaNDlF%2FWdQqqAIgd%2BKT7nXd7Pu2WijVAb%2Ff6EeguNbR%2FEfqg1PcoGI5ssEq7QII8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARACGgw5MTUzMzY0MDcwNDkiDNqHxwN%2BVheq0XLnYCrBAjltsx31J1LRpyjRGeCW7C8xX5jodCkEX9rtsF7EQIfT9j3VWrhZ7eAfvrSkaMkXgmKqfFZYKBOCfF0gKfSbO6CeC70GiMtKBxZCafw7wENGFakhnKuoHI7UOvSS86Ii%2BIZqxOW9A%2BGhzbEqeCIuTUITMGfnRvyaIclixzupjHB26bc4ZH8WlDtohGg0EyaNEwicSV1%2B2Hr35sTYU4hM8hHlMSXvjOlsfROKL5pUmlGOV5HWFWQGTJUnT9lb%2FAegV05ehWbuuGfan84831S57EI59cDIZrBx%2FdTgidR9Ni5fw6jrJyP8rmZ5W4CAmIpsBVL8H1hromels7mOCl%2B6EU9ZNcJ2s6%2BIPaE1cycuYi%2BIUAUiOtDEdXaZO%2FUNP6zq5N16xmY%2FM6OUUxpWi7tmhD2NtlLEuMbHL1n6C4gDoIrCJzCq%2FpmbBjqzAjDFZNgQJtN5%2FPSIwauQ8yzn0ohsM0yHjKKx4tOfTRKZQnyzYWenzi01oEihutGjfGn518QsQa20gDhyYc1DVsdU0UdJlHbgV0nrAuzv0K5xL46Wn9Wh387dGbRawbZRSAPsRDs2cQfPptncTPlzGPYfbz4pzMIOJtcDBAtxFtR6OlJjmPnmmnW05L0cgDweM9swtlc0KPH6j%2F1KAbkOUC7jLrcPJrBSvANAyzUmErn2LlR22%2BbC2rDvKhRLTT44vx3udx%2BI3wdT%2FN%2FjeRhb8kF9FcBjfxTHbTkL%2FYJwkfZaU9Okf5FcmEJJ2SQQAJRQ%2B3d2IW0uvtMy4f571R5G2qH1u0wYAXHRk2ABEeNskhhmZEwFWsrAZ4CQVVaiwRmgyh6qgPgLx8ukmGvsbl9vLD2BwMo%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T152040Z&X-Amz-SignedHeaders=host&X-Amz-Expires=60&X-Amz-Credential=ASIA5KHSNFAE5VTHOPML%2F20221105%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=c63fb4ffb1d71e9ff4c331d54e9ed46219fd5c3008c2749db9a536432e6f4998", description = "Download link with expiration of 10 minutes", required = false)
  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AwsPresignedUrl awsPresignedUrl = (AwsPresignedUrl) o;
    return Objects.equals(this.key, awsPresignedUrl.key) &&
        Objects.equals(this.url, awsPresignedUrl.url);
  }

  @Override
  public int hashCode() {
    return Objects.hash(key, url);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AwsPresignedUrl {\n");
    sb.append("    key: ").append(toIndentedString(key)).append("\n");
    sb.append("    url: ").append(toIndentedString(url)).append("\n");
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

