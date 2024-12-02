package mini.shoppingb.controller.members;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.command.members.PurchaseCommand;
import mini.shoppingb.domain.members.GoodsCartDTO;
import mini.shoppingb.domain.members.PurchaseCartDTO;
import mini.shoppingb.domain.members.PurchaseDTO;
import mini.shoppingb.domain.members.PurchaseListDTO;
import mini.shoppingb.service.members.purchase.PurchaseCartService;
import mini.shoppingb.service.members.purchase.PurchaseDeliveryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PurchaseController {

    @Autowired
    PurchaseDeliveryService purchaseDeliveryService;

    @Autowired
    PurchaseCartService purchaseCartService;

    @PostMapping("/members/purchase/delivery")
    public void purchaseDelivery(@RequestBody PurchaseCommand purchaseCommand , HttpSession session) {
        purchaseDeliveryService.execute(purchaseCommand, session);
    }

    @PostMapping("/members/cart/purchase")
    public void purchase(@RequestBody PurchaseCartDTO purchaseCartDTO, HttpSession session) {
        purchaseCartService.execute(purchaseCartDTO ,session);
    }
}
