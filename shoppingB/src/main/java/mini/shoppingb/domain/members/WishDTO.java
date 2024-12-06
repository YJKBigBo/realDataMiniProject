package mini.shoppingb.domain.members;

import lombok.Data;
import org.apache.ibatis.type.Alias;

import java.util.Date;

@Data
@Alias("wish")
public class WishDTO {
    String memberNum;
    String goodsNum;
    Date wishDate;
}
