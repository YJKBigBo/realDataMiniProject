package mini.shoppingb.mapper;

import mini.shoppingb.domain.members.DeliveryDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DeliveryMapper {
    void deliveryDelete(String purchaseNum);
    void deliveryRegist(String purchaseNum);
    DeliveryDTO deliveryDetail(String purchaseNum);
    void deliveryUpdate(String purchaseNum);
}
