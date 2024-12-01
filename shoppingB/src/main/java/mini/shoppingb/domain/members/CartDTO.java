package mini.shoppingb.domain.members;

import lombok.Data;

import java.util.Date;

@Data
public class CartDTO {
    String memberNum;
    String goodsNum;
    Date cartDate;
    Integer cartQty;

}
