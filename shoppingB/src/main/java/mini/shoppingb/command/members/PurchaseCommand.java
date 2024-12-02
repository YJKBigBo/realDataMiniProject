package mini.shoppingb.command.members;

import lombok.Data;

import java.util.Date;

@Data
public class PurchaseCommand {
    String purchaseNum;
    Date purchaseDate;
    Integer purchasePrice;
    String deliveryAddr;
    String deliveryAddrDetail;
    String deliveryPost;
    String deliveryPhone;
    String message;
    String purchaseStatus;
    String memberNum;

    String goodsNum;
    Integer purchaseQty;
    Integer goodsUnitPrice;
}
