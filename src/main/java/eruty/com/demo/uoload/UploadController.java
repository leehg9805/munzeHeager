package eruty.com.demo.uoload;

import java.util.Map;
import java.util.List;
import java.util.Arrays;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.validation.BindingResult;
import org.springframework.http.ResponseEntity;
import org.springframework.http.StreamingHttpOutputMessage.Body;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class UploadController {
    
    private final UploadService uploadService;
    private final Logger logger = LoggerFactory.getLogger(
        "UploadController 의 로그"
      );
    @PostMapping("/submitUpload")
    public ResponseEntity<?> upload(@Valid @RequestBody Map<String, Object> uploadInfo, BindingResult bindingResult) {
        System.out.println("해당인포" + uploadInfo);
        uploadService.upload(uploadInfo);
        return ResponseEntity.ok().body(true);
    }
   

}
