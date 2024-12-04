package mini.shoppingb.domain.all;

import lombok.Data;
import org.apache.ibatis.type.Alias;

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
    Date inquireDate;
    String inquireAnswer;
    Date inquireAnswerDate;
    String empNum;
}
