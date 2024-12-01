package mini.shoppingb.controller.members;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.domain.employees.GoodsWithIpgo;
import mini.shoppingb.domain.members.CartDTO;
import mini.shoppingb.domain.members.GoodsCartDTO;
import mini.shoppingb.service.members.cart.CartListService;
import mini.shoppingb.service.members.cart.CartRegistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CartController {

    @Autowired
    CartRegistService cartRegistService;

    @Autowired
    CartListService cartListService;

    @PostMapping("/members/cart/regist")
    public void cartRegist(@RequestBody CartDTO cartDTO, HttpSession session) {
        String goodsNum = cartDTO.getGoodsNum();
        System.out.println(goodsNum);
        cartRegistService.execute(goodsNum, session);
    }

    @GetMapping("/members/cart/list")
    public ResponseEntity<List<GoodsCartDTO>> cartList(HttpSession session) {
        List<GoodsCartDTO> cartList = cartListService.execute(session);
        return ResponseEntity.ok(cartList);
    }

}
