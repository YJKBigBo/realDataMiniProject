package mini.shoppingb.controller.members;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.domain.all.InquireGoodsDTO;
import mini.shoppingb.domain.members.PurchaseMypageDTO;
import mini.shoppingb.service.members.mypage.PurchaseMypageInfoService;
import mini.shoppingb.service.members.mypage.PurchaseMypageInquireListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MypageController {

    @Autowired
    PurchaseMypageInfoService purchaseMypageInfoService;

    @Autowired
    PurchaseMypageInquireListService purchaseMypageInquireListService;

    @GetMapping("/members/mypage/info")
    public List<PurchaseMypageDTO> purchaseMyapge(HttpSession session) {
        List<PurchaseMypageDTO> dto = purchaseMypageInfoService.execute(session);
        return dto;
    }

    @GetMapping("/members/mypage/inquire/info")
    public ResponseEntity<List<InquireGoodsDTO>> inquireMyapge(HttpSession session) {
        List<InquireGoodsDTO> dto = purchaseMypageInquireListService.execute(session);
        return ResponseEntity.ok(dto);
    }

}
