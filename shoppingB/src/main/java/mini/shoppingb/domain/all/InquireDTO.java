package mini.shoppingb.domain.all;

import lombok.Data;
import org.apache.ibatis.type.Alias;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Data
@Alias("inquire")
public class InquireDTO {
    String inquireNum;
    String memberNum;
    String goodsNum;
    String inquireSubject;
    String inquireContents;
    String inquireKind;
    String inquireAnswer;
    String empNum;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    Date inquireDate;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    Date inquireAnswerDate;
}
