package eruty.com.demo.exception;

import java.util.HashMap;
import java.util.Map;

public class ErrorMap {

    private Map<String, String> errorMap;

    private ErrorMap() {
        errorMap = new HashMap<>();
    }

    public static ErrorMap builder() {
        return new ErrorMap();
    }

    public ErrorMap put(String key, String value) {
        errorMap.put(key, value);
        System.out.println("errorMap" + errorMap);
        return this;
    }
    
    public Map<String, String> build() {
        System.out.println("errorMap" + errorMap);
        return errorMap;
    }
}
