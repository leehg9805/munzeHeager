package eruty.com.demo.member;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<SiteUser, String> {
  SiteUser findByEmail(String email);
  SiteUser findBynickname(String nickname);
  SiteUser findByPassword(String password);
  boolean existsByEmail(String email);
  boolean existsByNickname(String nickname);
}
