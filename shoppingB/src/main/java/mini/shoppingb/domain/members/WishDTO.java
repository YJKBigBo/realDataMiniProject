package mini.shoppingb.domain.members;

import lombok.Data;

import java.util.Date;

@Data
public class WishDTO {
    String memberNum;
    String goodsNum;
    Date wishDate;
}
