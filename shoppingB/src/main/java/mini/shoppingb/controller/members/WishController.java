package mini.shoppingb.controller.members;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.domain.employees.GoodsWithIpgo;
import mini.shoppingb.domain.members.WishDTO;
import mini.shoppingb.service.members.wish.WishDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class WishController {

    @Autowired
    WishDataService wishDataService;

    @GetMapping("/members/goods/wish")
    public ResponseEntity<Integer> goodsWish (@RequestParam String goodsNum, HttpSession session) {
        Integer returnNum = wishDataService.execute(goodsNum, session);
        return ResponseEntity.ok(returnNum);
    }
}
