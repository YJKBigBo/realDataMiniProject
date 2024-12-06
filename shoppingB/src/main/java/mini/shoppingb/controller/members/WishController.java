package mini.shoppingb.controller.members;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.domain.members.WishDTO;
import mini.shoppingb.domain.members.WishGoodsDTO;
import mini.shoppingb.service.members.wish.WishDataService;
import mini.shoppingb.service.members.wish.WishDeleteService;
import mini.shoppingb.service.members.wish.WishMyHomeService;
import mini.shoppingb.service.members.wish.WishRegistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class WishController {

    @Autowired
    WishDataService wishDataService;

    @Autowired
    WishRegistService wishRegistService;

    @Autowired
    WishDeleteService wishDeleteService;

    @Autowired
    WishMyHomeService wishMyHomeService;

    @GetMapping("/members/goods/wish")
    public ResponseEntity<Integer> goodsWish (@RequestParam String goodsNum, HttpSession session) {
        Integer returnNum = wishDataService.execute(goodsNum, session);
        return ResponseEntity.ok(returnNum);
    }

    @PostMapping("/members/goods/wish/regist")
    public void goodsWishRegist(@RequestBody WishDTO wishDTO, HttpSession session) {
        String goodsNum = wishDTO.getGoodsNum();
        wishRegistService.execute(goodsNum, session);
    }

    @PostMapping("/members/goods/wish/delete")
    public void goodsWishDelete(@RequestBody WishDTO wishDTO, HttpSession session) {
        String goodsNum = wishDTO.getGoodsNum();
        wishDeleteService.execute(goodsNum, session);
    }

    @GetMapping("/members/wish/home")
    public List<WishGoodsDTO> myWish(HttpSession session) {
        List<WishGoodsDTO> dto = wishMyHomeService.execute(session);
        return dto;
    }
}
