package com.konfigthis;

import com.fasterxml.jackson.databind.Module;
import org.openapitools.jackson.nullable.JsonNullableModule;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.konfigthis", "com.konfigthis.api" , "com.konfigthis.configuration"})
public class OpenApiGeneratorApplication {

    public static void main(String[] args) {
        System.setProperty("bind-type", "true");
        System.setProperty("skipFormModel", "false");
        SpringApplication.run(OpenApiGeneratorApplication.class, args);
    }

    @Bean
    public Module jsonNullableModule() {
        return new JsonNullableModule();
    }

}