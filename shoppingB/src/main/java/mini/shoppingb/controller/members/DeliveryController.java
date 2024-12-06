package mini.shoppingb.controller.members;

import mini.shoppingb.domain.members.DeliveryDTO;
import mini.shoppingb.service.members.delivery.DeliveryDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DeliveryController {

    @Autowired
    DeliveryDetailService deliveryDetailService;

    @GetMapping("/delivery/detail")
    public DeliveryDTO deliveryDetail(@RequestParam String purchaseNum) {
        DeliveryDTO dto = deliveryDetailService.execute(purchaseNum);
        return dto;
    }
}
