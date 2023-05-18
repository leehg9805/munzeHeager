package eruty.com.demo.uoload;

import java.time.LocalDate;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.web.servlet.FlashMapManager;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.CustomLog;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Upload {
    @Id
    @Column(name = "upload_id")
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    private int uploadId;

    @Column(nullable = false, unique = true)
    private String title;

    @Column(name = "kind_options", nullable = false)
    private String kindOptions;

    @Column(name = "ext_option", nullable = false)
    private String extOption;

    @Column(nullable = false)
    private LocalDate date;
    
    @Column(nullable = false)
    private int price;

    @Column(nullable = false)
    private boolean canModification;

    @Column(nullable = false)
    private boolean canCommercialUser;
    
    @Column(nullable = false)
    private boolean isOrigin;
}
