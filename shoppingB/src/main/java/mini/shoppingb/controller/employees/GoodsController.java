package mini.shoppingb.controller.employees;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.command.employees.GoodsCommand;
import mini.shoppingb.domain.AuthInfoDTO;
import mini.shoppingb.service.employees.goods.GoodsRegistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class GoodsController {
    @Autowired
    GoodsRegistService goodsRegistService;

    @GetMapping("/employees/product/regist")
    public String productRegist(HttpSession session, Model model) {
        AuthInfoDTO auth = (AuthInfoDTO) session.getAttribute("auth");
        if (auth != null) {
            model.addAttribute("isLoggedIn", true);
            if (auth.getDepartment().equals("manage")) {
                model.addAttribute("isManager", true);
                model.addAttribute("isProduct", false);
            } else {
                model.addAttribute("isProduct", true);
                model.addAttribute("isManager", false);
            }
        } else {
            model.addAttribute("isLoggedIn", false);
        }
        return "thymeleaf/productRegist";
    }

    @PostMapping("/employees/product/regist")
    public String productRegistSubmit(HttpSession session, GoodsCommand command) {
        goodsRegistService.execute(session,command);
        return "redirect:/";
    }
}
