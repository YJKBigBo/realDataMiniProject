package mini.shoppingb.controller.all;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.domain.all.InquireDTO;
import mini.shoppingb.service.all.inquire.InquireListService;
import mini.shoppingb.service.all.inquire.InquireRegistService;
import mini.shoppingb.service.all.inquire.InquireUpdateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class InquireController {

    @Autowired
    InquireUpdateService inquireUpdateService;

    @Autowired
    InquireRegistService inquireRegistService;

    @Autowired
    InquireListService inquireListService;

    @PostMapping("/members/mypage/inquire/update")
    @ResponseBody
    public void inquireUpdate(@RequestBody InquireDTO inquireDTO){
        inquireUpdateService.execute(inquireDTO);
    }

    @PostMapping("/members/inquire/regist")
    @ResponseBody
    public void inquireRegist(@RequestBody InquireDTO inquireDTO, HttpSession session){
        inquireRegistService.execute(inquireDTO, session);
    }

    @GetMapping("/employees/home/inquire/list")
    @ResponseBody
    public List<InquireDTO> inquireList(){
        List<InquireDTO> dto = inquireListService.execute();
        return dto;
    }
}
