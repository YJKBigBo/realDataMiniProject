package mini.shoppingb.mapper;

import mini.shoppingb.domain.members.PurchaseDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface PurchaseMapper {
    public void purchaseInsert(PurchaseDTO purchaseDTO);
}
