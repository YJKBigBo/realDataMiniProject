package mini.shoppingb.controller.all;

import mini.shoppingb.domain.all.InquireDTO;
import mini.shoppingb.service.all.InquireUpdateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class InquireController {

    @Autowired
    InquireUpdateService inquireUpdateService;

    @PostMapping("/members/mypage/inquire/update")
    public void inquireUpdate(@RequestBody InquireDTO inquireDTO){
        System.out.println(inquireDTO);
        inquireUpdateService.execute(inquireDTO);
    }
}
