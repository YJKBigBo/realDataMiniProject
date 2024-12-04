package mini.shoppingb.controller.all;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.domain.all.InquireDTO;
import mini.shoppingb.service.all.inquire.InquireRegistService;
import mini.shoppingb.service.all.inquire.InquireUpdateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class InquireController {

    @Autowired
    InquireUpdateService inquireUpdateService;

    @Autowired
    InquireRegistService inquireRegistService;

    @PostMapping("/members/mypage/inquire/update")
    public void inquireUpdate(@RequestBody InquireDTO inquireDTO){
        inquireUpdateService.execute(inquireDTO);
    }

    @PostMapping("/members/inquire/regist")
    public void inquireRegist(@RequestBody InquireDTO inquireDTO, HttpSession session){
        inquireRegistService.execute(inquireDTO, session);
    }
}
