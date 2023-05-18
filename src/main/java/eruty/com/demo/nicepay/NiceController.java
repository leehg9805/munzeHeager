package eruty.com.demo.nicepay;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.net.URI;
import java.util.Arrays;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class NiceController {

  private final String CLIENT_ID = "S2_39a45417aaec4c3c8b2e6b191f54a77c";
  private final String SECRET_KEY = "7dbdd1147aea4f3c87e58c051e27214a";

  private final RestTemplate restTemplate = new RestTemplate();
  private final ObjectMapper objectMapper = new ObjectMapper();

  @PostMapping("/serverAuth")
  public ResponseEntity<?> requestPayment(
    @RequestParam String tid,
    @RequestParam Long amount
  ) throws Exception {
    HttpHeaders headers = new HttpHeaders();
    headers.set(
      "Authorization",
      "Basic " +
      Base64
        .getEncoder()
        .encodeToString((CLIENT_ID + ":" + SECRET_KEY).getBytes())
    );
    headers.setContentType(MediaType.APPLICATION_JSON);
    Map<String, Object> AuthenticationMap = new HashMap<>();
    AuthenticationMap.put("amount", String.valueOf(amount));

    HttpEntity<String> request = new HttpEntity<>(
      objectMapper.writeValueAsString(AuthenticationMap),
      headers
    );

    ResponseEntity<JsonNode> responseEntity = restTemplate.postForEntity(
      "https://sandbox-api.nicepay.co.kr/v1/payments/" + tid,
      request,
      JsonNode.class
    );

    JsonNode responseNode = responseEntity.getBody();
    // responseNode => {"resultCode":"0000","resultMsg":"정상 처리되었습니다.","tid":"UT0004704m01012304251602181133","cancelledTid":null,"orderId":"4bfe1003-68a4-40ad-9e6c-8e0d7ee8d8e3","ediDate":"2023-04-25T16:02:19.246+0900","signature":"a8f4615178eaade543c4a00bd8423064fe337c78957b73d40b5febcac7771f87","status":"paid","paidAt":"2023-04-25T16:02:19.000+0900","failedAt":"0","cancelledAt":"0","payMethod":"card","amount":1004,"balanceAmt":1004,"goodsName":"나이스페이-상품","mallReserved":null,"useEscrow":false,"currency":"KRW","channel":"pc","approveNo":"000000","buyerName":null,"buyerTel":null,"buyerEmail":null,"receiptUrl":"https://npg.nicepay.co.kr/issue/IssueLoader.do?type=0&innerWin=Y&TID=UT0004704m01012304251602181133","mallUserId":null,"issuedCashReceipt":false,"coupon":null,"card":{"cardCode":"04","cardName":"삼성","cardNum":"123412******1234","cardQuota":0,"isInterestFree":false,"cardType":"credit","canPartCancel":true,"acquCardCode":"04","acquCardName":"삼성"},"vbank":null,"bank":null,"cellphone":null,"cancels":null,"cashReceipts":null,"messageSource":"nicepay"}
    String resultCode = responseNode.get("resultCode").asText();

    if (resultCode.equalsIgnoreCase("0000")) {
      // todo: 유저 구매내역에 추가 및 전체 결제내역에 추가
      headers.setLocation(URI.create("/successresult"));

      return new ResponseEntity<>(headers, HttpStatus.MOVED_PERMANENTLY);
    } else {
      headers.setLocation(URI.create("/failresult"));
      return new ResponseEntity<>(headers, HttpStatus.MOVED_PERMANENTLY);
    }
  }

  @PostMapping("/cancelAuth")
  public List<String> requestCancel(
    @RequestBody Map<String, String> cancelInfo
  ) throws Exception {
    String tid = cancelInfo.get("tid");
    String amount = cancelInfo.get("amount");

    HttpHeaders headers = new HttpHeaders();
    headers.set(
      "Authorization",
      "Basic " +
      Base64
        .getEncoder()
        .encodeToString((CLIENT_ID + ":" + SECRET_KEY).getBytes())
    );
    headers.setContentType(MediaType.APPLICATION_JSON);

    Map<String, Object> AuthenticationMap = new HashMap<>();
    AuthenticationMap.put("amount", amount);
    AuthenticationMap.put("reason", "test");
    AuthenticationMap.put("orderId", UUID.randomUUID().toString());

    HttpEntity<String> request = new HttpEntity<>(
      objectMapper.writeValueAsString(AuthenticationMap),
      headers
    );

    ResponseEntity<JsonNode> responseEntity = restTemplate.postForEntity(
      "https://sandbox-api.nicepay.co.kr/v1/payments/" + tid + "/cancel",
      request,
      JsonNode.class
    );

    JsonNode responseNode = responseEntity.getBody();
    String resultCode = responseNode.get("resultCode").asText();
    System.out.println(responseNode.toPrettyString());

    if (resultCode.equalsIgnoreCase("0000")) {
      return Arrays.asList("success");
    } else {
      return Arrays.asList("fail");
    }
  }
}
