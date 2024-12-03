package mini.shoppingb.controller.members;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.domain.employees.GoodsWithIpgoDTO;
import mini.shoppingb.domain.members.CartDTO;
import mini.shoppingb.domain.members.GoodsCartDTO;
import mini.shoppingb.service.employees.goods.GoodsDetailService;
import mini.shoppingb.service.members.cart.CartListService;
import mini.shoppingb.service.members.cart.CartRegistService;
import mini.shoppingb.service.members.cart.CartUpdateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CartController {

    @Autowired
    CartRegistService cartRegistService;

    @Autowired
    CartListService cartListService;

    @Autowired
    GoodsDetailService goodsDetailService;

    @Autowired
    CartUpdateService cartUpdateService;

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

    @GetMapping("/members/goods/totalQty")
    public ResponseEntity<Integer> totalQty(@RequestParam String goodsNum, Model model) {
        GoodsWithIpgoDTO goods = goodsDetailService.execute(goodsNum, model);
        Integer qty = goods.getTotalQty();
        return ResponseEntity.ok(qty);
    }

    @PostMapping("/members/cart/updateQty")
    public void updateCartQuantity(@RequestBody CartDTO cartDTO) {
        cartUpdateService.execute(cartDTO.getGoodsNum(), cartDTO.getMemberNum(), cartDTO.getCartQty());
    }

}
