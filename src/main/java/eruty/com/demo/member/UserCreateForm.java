package eruty.com.demo.member;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.time.LocalDate;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserCreateForm {

  @Email
  private String email;

  @NotEmpty(message = "비밀번호는 필수항목입니다.")
  private String password1;

  @NotEmpty(message = "비밀번호 확인은 필수항목입니다.")
  private String password2;

  @Size(min = 3, max = 25, message = "닉네임은 최소 3글자 이상입니다.")
  @NotEmpty(message = "닉네임은 필수항목입니다.")
  private String nickname;

  @NotNull(message = "생일은 필수항목입니다.")
  private LocalDate birthday;

  String company;
  String interests;
  Boolean marketing;
}
