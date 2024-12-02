package mini.shoppingb.domain.members;

import lombok.Data;

import java.util.List;

@Data
public class PurchaseCartDTO {
    public List<GoodsCartDTO> goodsCartDTO;
    public PurchaseDTO purchaseDTO;
}
