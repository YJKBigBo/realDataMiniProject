package mini.shoppingb.service.members.delivery;

import mini.shoppingb.domain.members.DeliveryDTO;
import mini.shoppingb.mapper.DeliveryMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DeliveryDetailService {

    @Autowired
    DeliveryMapper deliveryMapper;

    public DeliveryDTO execute(String purchaseNum){
        DeliveryDTO dto = deliveryMapper.deliveryDetail(purchaseNum);
        return dto;
    }
}
