package mini.shoppingb.controller.all;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.domain.all.InquireDTO;
import mini.shoppingb.service.all.inquire.InquireDetailService;
import mini.shoppingb.service.all.inquire.InquireListService;
import mini.shoppingb.service.all.inquire.InquireRegistService;
import mini.shoppingb.service.all.inquire.InquireUpdateService;
import mini.shoppingb.service.employees.employees.EmployeesAuthService;
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

    @Autowired
    EmployeesAuthService employeesAuthService;

    @Autowired
    InquireDetailService inquireDetailService;

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
    public List<InquireDTO> inquireList(Model model){
        int i = 0;
        List<InquireDTO> dto = inquireListService.execute(model, i);
        return dto;
    }

    @GetMapping("/employees/inquire/list")
    public String inquireList(Model model, HttpSession session){
        int i = 1;
        employeesAuthService.execute(session, model);
        inquireListService.execute(model, i);
        return "thymeleaf/inquire/inquireList";
    }

    @GetMapping("/employees/inquire/detail/{inquireNum}")
    public String inquireDetail(Model model, @PathVariable int inquireNum, HttpSession session){
        employeesAuthService.execute(session, model);
        inquireDetailService.execute(inquireNum, model);
        return "thymeleaf/inquire/inquireDetail";
    }
}
