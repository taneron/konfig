package org.openapitools.codegen.model;

import org.openapitools.codegen.CodegenOperation;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class ApiInfoMap extends HashMap<String, Object> {

    public void setApis(List<OperationsMap> apis) {
        put("apis", apis);
    }

    @SuppressWarnings("unchecked")
    public List<OperationsMap> getApis() {
        return (List<OperationsMap>) get("apis");
    }

    public void setTopLevelOperations(List<CodegenOperation> topLevelOperations) {
        this.put("topLevelOperations", topLevelOperations);
    }

    public List<CodegenOperation> getTopLevelOperations() {
        return (List<CodegenOperation>) this.get("topLevelOperations");
    }

    public void setHasTopLevelOperations(boolean hasTopLevelOperations) {
        this.put("hasTopLevelOperations", hasTopLevelOperations);
    }
}
