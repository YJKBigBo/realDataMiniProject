package mini.shoppingb.controller.members;

import mini.shoppingb.domain.members.DeliveryDTO;
import mini.shoppingb.service.members.delivery.DeliveryDetailService;
import mini.shoppingb.service.members.delivery.DeliveryUpdateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class DeliveryController {

    @Autowired
    DeliveryDetailService deliveryDetailService;

    @Autowired
    DeliveryUpdateService deliveryUpdateService;

    @GetMapping("/delivery/detail")
    public DeliveryDTO deliveryDetail(@RequestParam String purchaseNum) {
        DeliveryDTO dto = deliveryDetailService.execute(purchaseNum);
        return dto;
    }

    @PostMapping("/delivery/update")
    public void deliveryUpdate(@RequestBody Map<String, String> body) {
        String purchaseNum = body.get("purchaseNum");
        System.out.println(purchaseNum);
        deliveryUpdateService.execute(purchaseNum);
    }
}
