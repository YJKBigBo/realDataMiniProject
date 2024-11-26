package mini.shoppingb.controller.employees;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.command.employees.GoodsCommand;
import mini.shoppingb.domain.AuthInfoDTO;
import mini.shoppingb.service.employees.AuthService;
import mini.shoppingb.service.employees.goods.GoodsListService;
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

    @Autowired
    GoodsListService goodsListService;

    @Autowired
    AuthService authService;

    @GetMapping("/employees/product/regist")
    public String productRegist(HttpSession session, Model model) {
        authService.execute(session, model);
        return "thymeleaf/goods/goodsRegist";
    }

    @PostMapping("/employees/product/regist")
    public String productRegistSubmit(HttpSession session, GoodsCommand command) {
        goodsRegistService.execute(session,command);
        return "redirect:/";
    }

    @GetMapping("/employees/product/manage")
    public String productManage(HttpSession session, Model model) {
        authService.execute(session, model);
        goodsListService.execute(model);
        return "thymeleaf/goods/goodsList";
    }

}
