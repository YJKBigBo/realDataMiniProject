package mini.shoppingb.controller.members;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.domain.members.CartDTO;
import mini.shoppingb.service.members.cart.CartRegistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CartController {

    @Autowired
    CartRegistService cartRegistService;

    @PostMapping("/members/cart/regist")
    public void cartRegist(@RequestBody CartDTO cartDTO, HttpSession session) {
        String goodsNum = cartDTO.getGoodsNum();
        System.out.println(goodsNum);
        cartRegistService.execute(goodsNum, session);
    }

}
