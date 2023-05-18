package eruty.com.demo.member;

import com.fasterxml.jackson.annotation.JsonSubTypes.Type;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

@Getter
@Setter
@Entity
public class SiteUser {

  @Id
  @GeneratedValue(generator = "system-uuid")
  @GenericGenerator(name = "system-uuid", strategy = "uuid")
  private String id;

  @Column(unique = true)
  private String email;

  private String password;

  @Column(unique = true)
  private String nickname;

  @Enumerated(EnumType.STRING)
  private UserRole authority;

  private String company;
  private String interests;
  private LocalDate birthday;
  private Boolean marketing;
}
