package eruty.com.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

// import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class WebController {

  @GetMapping(value = { "/", "nicepay", "failresult", "successresult","Upload" })
  public String Getforward() {
    return "forward:/index.html";
  }
}
