package org.openapitools.codegen.model;

import org.openapitools.codegen.CodegenOperation;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class OperationsMap extends HashMap<String, Object> {

    public void setOperation(OperationMap objs) {
        put("operations", objs);
    }

    public OperationMap getOperations() {
        return (OperationMap) get("operations");
    }

    public void setImports(List<Map<String, String>> imports) {
        put("imports", imports);
    }

    @SuppressWarnings("unchecked")
    public List<Map<String, String>> getImports() {
        return (List<Map<String, String>>) get("imports");
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

    public void setClassNameCamelCaseConflictsWithTopLevelOperation(boolean classNameCamelCaseConflictsWithTopLevelOperation) {
        this.put("classNameCamelCaseConflictsWithTopLevelOperation", classNameCamelCaseConflictsWithTopLevelOperation);
    }

    public void setClassNameSnakeCaseConflictsWithTopLevelOperation(boolean classNameSnakeCaseConflictsWithTopLevelOperation) {
        this.put("classNameSnakeCaseConflictsWithTopLevelOperation", classNameSnakeCaseConflictsWithTopLevelOperation);
    }
}
