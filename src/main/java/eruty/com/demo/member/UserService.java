package eruty.com.demo.member;

import java.time.LocalDate;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserService {

  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;

  public SiteUser create(
    String email,
    String password,
    String nickname,
    String company,
    String interests,
    LocalDate birthday,
    Boolean marketing,
    UserRole authority
  ) {
    SiteUser user = new SiteUser();
    user.setEmail(email);
    user.setPassword(passwordEncoder.encode(password));
    user.setNickname(nickname);
    user.setCompany(company);
    user.setInterests(interests);
    user.setBirthday(birthday);
    user.setMarketing(marketing);
    user.setAuthority(authority);
    this.userRepository.save(user);
    return user;
  }

  public SiteUser getByCredentials(
    final String email,
    final String password,
    final PasswordEncoder encoder
  ) {
    final SiteUser originalUser = userRepository.findByEmail(email);

    // matches 메서드를 이용해 패스워드가 같은지 확인
    if (
      originalUser != null &&
      encoder.matches(password, originalUser.getPassword())
    ) {
      return originalUser;
    }
    return null;
  }
  // public void changeNickname(String nickname) {
  //   SiteUser siteUser = userRepository.findBynickname(nickname);
  //   siteUser.setNickname(nickname);
  // }

  // public void setPassword(String password) {
  //   SiteUser siteUser = userRepository.findByPassword(password);
  //   siteUser.setPassword(password);
  // }
}
