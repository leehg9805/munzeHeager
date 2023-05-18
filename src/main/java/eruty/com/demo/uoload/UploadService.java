package eruty.com.demo.uoload;

import java.io.File;
import java.util.Map;

import org.springframework.stereotype.Service;

import eruty.com.demo.exception.CustomException;
import eruty.com.demo.exception.ErrorMap;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UploadService {
    
    public void upload(Map<String, Object> uploadInfo) {
        System.out.println(uploadInfo);
        String filePath = (String) uploadInfo.get("data");
        String fileName = filePath.substring(filePath.lastIndexOf("/") + 1);
        System.out.println("파일명" + fileName);
        String filExtension = fileName.substring(fileName.lastIndexOf(".") + 1);
        System.out.println("파일확장자" + filExtension);

        if(filExtension != "obj" || filExtension != "gltf" || filExtension != "fbx") {
            throw new CustomException("wrong extension",
            ErrorMap.builder()
            .put("data", "잘못된 파일형식 입니다.").build());
        }
        else{

        }

    }
}
