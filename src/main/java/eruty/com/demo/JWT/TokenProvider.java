package eruty.com.demo.JWT;

import eruty.com.demo.member.SiteUser;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.Date;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class TokenProvider {

  private final Logger logger = LoggerFactory.getLogger(
    "TokenProvider의 로그:"
  );

  private static final String SECRET_KEY = "dsaneabgkdkdxminigjdkwjdaktehfldkd";
  private static final long ACCESS_TOKEN_EXPIRE_TIME = 1000 * 60 * 30;

  public String create(SiteUser siteUser) {
    long now = (new Date()).getTime();
    Date toeknExDate = new Date(now + ACCESS_TOKEN_EXPIRE_TIME);
    logger.info("tokenProvider:{},{}", now, toeknExDate);

    return (
      Jwts
        .builder()
        .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
        .setSubject(siteUser.getId())
        .setIssuer("ERUTY")
        .setIssuedAt(new Date())
        .setExpiration(toeknExDate)
        .compact()
    );
  }

  public String validateAndGetUserId(String token) {
    Claims claims = Jwts
      .parser()
      .setSigningKey(SECRET_KEY)
      .parseClaimsJws(token)
      .getBody();
    return claims.getSubject();
  }
}
