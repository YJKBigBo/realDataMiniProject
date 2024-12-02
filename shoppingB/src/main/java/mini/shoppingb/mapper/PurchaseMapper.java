package mini.shoppingb.mapper;

import mini.shoppingb.domain.members.PurchaseDTO;
import mini.shoppingb.domain.members.PurchaseListDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface PurchaseMapper {
    public void purchaseInsert(PurchaseDTO purchaseDTO);
    public void purchaseListInsert(PurchaseListDTO purchaseListDTO);
    public void purchaseGoodsIpgoUpdate(PurchaseListDTO purchaseListDTO);
}
