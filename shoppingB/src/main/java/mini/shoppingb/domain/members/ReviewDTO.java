package mini.shoppingb.domain.members;

import lombok.Data;
import org.apache.ibatis.type.Alias;

import java.util.Date;

@Data
@Alias("review")
public class ReviewDTO {
    String reviewNum;
    String goodsNum;
    String purchaseNum;
    Date reviewDate;
    String reviewContents;
    String memberId;
    Integer rating;
}
