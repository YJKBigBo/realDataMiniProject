package mini.shoppingb.mapper;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DeliveryMapper {
    void deliveryDelete(String purchaseNum);
    void deliveryRegist(String purchaseNum);
}
