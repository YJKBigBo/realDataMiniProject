package mini.shoppingb.service.members.delivery;

import mini.shoppingb.domain.members.DeliveryDTO;
import mini.shoppingb.mapper.DeliveryMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DeliveryUpdateService {

    @Autowired
    DeliveryMapper deliveryMapper;

    public void execute(String purchaseNum){
        deliveryMapper.deliveryUpdate(purchaseNum);
    }
}
