package com.konfigthis.codegen;

import com.github.mustachejava.DefaultMustacheFactory;
import com.github.mustachejava.Mustache;
import com.github.mustachejava.MustacheFactory;
import org.openapitools.codegen.api.TemplatingEngineAdapter;
import org.openapitools.codegen.api.TemplatingExecutor;

import java.io.IOException;
import java.io.StringWriter;
import java.util.Map;

public class NewMustacheEngineAdapter implements TemplatingEngineAdapter {

    @Override
    public String getIdentifier() {
        return "new-mustache";
    }

    private final String[] extensions = {"mustache"};

    @Override
    public String[] getFileExtensions() {
        return extensions;
    }

    @Override
    public String compileTemplate(TemplatingExecutor templatingExecutor, Map<String, Object> bundle, String templateFile) throws IOException {
        MustacheFactory mf = new DefaultMustacheFactory();
        Mustache mustache = mf.compile(templatingExecutor.getFullTemplatePath(templateFile).toString());
        StringWriter stringWriter = new StringWriter();
        mustache.execute(stringWriter, bundle).flush();
        return stringWriter.toString();
    }
}
