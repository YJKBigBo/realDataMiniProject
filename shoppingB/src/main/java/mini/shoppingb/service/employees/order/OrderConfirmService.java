package mini.shoppingb.service.employees.order;

import mini.shoppingb.domain.employees.OrderDTO;
import mini.shoppingb.mapper.DeliveryMapper;
import mini.shoppingb.mapper.OrderMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderConfirmService {

    @Autowired
    OrderMapper orderMapper;

    @Autowired
    DeliveryMapper deliveryMapper;

    public void execute(String purchaseNum){
        int i = orderMapper.orderConfirm(purchaseNum);
        if(i>=1){
            List<OrderDTO> dto = orderMapper.orderDetail(purchaseNum);
            String purchaseStatus = dto.get(0).getPurchaseDTO().getPurchaseStatus();
            if(purchaseStatus.equals("결제완료")){
                deliveryMapper.deliveryDelete(purchaseNum);
            } else {
                deliveryMapper.deliveryRegist(purchaseNum);
            }
        }
    }
}
