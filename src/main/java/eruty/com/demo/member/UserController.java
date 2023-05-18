package eruty.com.demo.member;

import eruty.com.demo.JWT.TokenProvider;
import jakarta.validation.Valid;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class UserController {

  private final UserService userService;
  private final UserRepository userRepository;
  private final TokenProvider tokenProvider;
  private final PasswordEncoder passwordEncoder;
  private final Logger logger = LoggerFactory.getLogger(
    "UserController 의 로그"
  );

  @PostMapping("/submitLogin")
  public List<String> login(@RequestBody Map<String, String> loginInfo) {
    String email = loginInfo.get("email");
    String password = loginInfo.get("password");
    SiteUser siteUser = userService.getByCredentials(
      email,
      password,
      passwordEncoder
    );

    if (siteUser != null) {
      final String token = tokenProvider.create(siteUser);
      logger.info("token:{}", token);

      return Arrays.asList("success", token, siteUser.getNickname());
    } else {
      return Arrays.asList("fail", "login failed");
    }
  }

  @PostMapping("/submitSignUp")
  public List<String> requestSignUp(
    @Valid @RequestBody UserCreateForm userCreateForm,
    BindingResult bindingResult
  ) {
    if (bindingResult.hasErrors()) {
      List<ObjectError> allErrors = bindingResult.getAllErrors();
      List<String> errorMessages = new ArrayList<>();
      errorMessages.add("fail");

      for (ObjectError error : allErrors) {
        String errorMessage = error.getDefaultMessage();
        errorMessages.add(errorMessage);
        logger.info("binding error: {}", errorMessage);
      }
      return errorMessages;
    }
    if (!userCreateForm.getPassword1().equals(userCreateForm.getPassword2())) {
      return Arrays.asList("fail", "2개의 패스워드가 일치하지 않습니다.");
    }

    if (userRepository.existsByEmail(userCreateForm.getEmail())) {
      return Arrays.asList("fail", "이미 존재하는 이메일 입니다.");
    }
    if (userRepository.existsByNickname(userCreateForm.getNickname())) {
      return Arrays.asList("fail", "이미 존재하는 닉네임 입니다.");
    }
    userService.create(
      userCreateForm.getEmail(),
      userCreateForm.getPassword1(),
      userCreateForm.getNickname(),
      userCreateForm.getCompany(),
      userCreateForm.getInterests(),
      userCreateForm.getBirthday(),
      userCreateForm.getMarketing(),
      UserRole.USER
    );
    return Arrays.asList("success");
  }
}
