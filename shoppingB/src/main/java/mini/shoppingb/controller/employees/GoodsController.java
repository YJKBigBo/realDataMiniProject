package mini.shoppingb.controller.employees;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.command.employees.GoodsCommand;
import mini.shoppingb.command.searchCommand;
import mini.shoppingb.domain.employees.GoodsWithIpgo;
import mini.shoppingb.service.employees.employees.EmployeesAuthService;
import mini.shoppingb.service.employees.goods.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class GoodsController {
    @Autowired
    GoodsRegistService goodsRegistService;

    @Autowired
    GoodsListService goodsListService;

    @Autowired
    EmployeesAuthService employeesAuthService;

    @Autowired
    GoodsDetailService goodsDetailService;

    @Autowired
    GoodsUpdateService goodsUpdateService;

    @Autowired
    GoodsSearchService goodsSearchService;

    @Autowired
    GoodsIpgoListService goodsIpgoListService;

    @Autowired
    GoodsIpgoDetailService goodsIpgoDetailService;

    @Autowired
    GoodsIpgoUpdateService goodsIpgoUpdateService;

    @Autowired
    GoodsIpgoDeleteService goodsIpgoDeleteService;

    @GetMapping("/employees/product/regist")
    public String productRegist(HttpSession session, Model model) {
        employeesAuthService.execute(session, model);
        return "thymeleaf/goods/goodsRegist";
    }

    @PostMapping("/employees/product/regist")
    public String productRegistSubmit(HttpSession session, GoodsCommand command) {
        goodsRegistService.execute(session,command);
        return "redirect:/";
    }

    @GetMapping("/employees/product/manage")
    public String productManage(HttpSession session, Model model) {
        employeesAuthService.execute(session, model);
        goodsListService.execute(model);
        return "thymeleaf/goods/goodsList";
    }

    @GetMapping("/employees/product/detail/{goodsNum}")
    public String productDetail(@PathVariable String goodsNum, HttpSession session, Model model) {

        employeesAuthService.execute(session, model);
        GoodsWithIpgo goods = goodsDetailService.execute(goodsNum, model);
        if (goods == null) {
            model.addAttribute("errorMessage", "해당 상품 정보를 찾을 수 없습니다.");
            return "thymeleaf/error/404";
        }
        return "thymeleaf/goods/goodsDetail";
    }

    @GetMapping("/employees/product/update/{goodsNum}")
    public String productUpdate(@PathVariable String goodsNum, HttpSession session, Model model) {
        employeesAuthService.execute(session, model);
        GoodsWithIpgo dto = goodsDetailService.execute(goodsNum, model);
        model.addAttribute("dto", dto);
        return "thymeleaf/goods/goodsUpdate";
    }

    @PostMapping("/employees/product/update")
    public String updateProduct(GoodsCommand command,Model model, HttpSession session) {
        goodsUpdateService.execute(command, model, session);
        return "redirect:/employees/product/manage";
    }

    @PostMapping("/goods/search")
    public String searchProduct(HttpSession session, Model model, searchCommand command) {
        employeesAuthService.execute(session, model);
        goodsSearchService.execute(model, command);
        return "thymeleaf/goods/goodsList";
    }

    @GetMapping("/employees/product/ipgo/list")
    public String ipgoList(HttpSession session, Model model) {
        employeesAuthService.execute(session, model);
        goodsIpgoListService.execute(model);
        return "thymeleaf/goods/goodsIpgoList";
    }

    @GetMapping("/employees/product/ipgo/detail/{ipgoNum}")
    public String ipgoDetail(@PathVariable String ipgoNum, HttpSession session, Model model) {
        employeesAuthService.execute(session, model);
        goodsIpgoDetailService.execute(model, ipgoNum);
        return "thymeleaf/goods/goodsIpgoDetail";
    }

    @GetMapping("/employees/product/goodsIpgo/update/{ipgoNum}")
    public String ipgoUpdate(@PathVariable String ipgoNum, HttpSession session, Model model) {
        employeesAuthService.execute(session, model);
        goodsIpgoDetailService.execute(model, ipgoNum);
        return "thymeleaf/goods/goodsIpgoUpdate";
    }

    @PostMapping("/employees/product/goodsIpgo/update")
    public String ipgoUpdateSubmit(HttpSession session, GoodsCommand command, Model model) {
        employeesAuthService.execute(session, model);
        goodsIpgoUpdateService.execute(command, model, session);
        return "redirect:/employees/product/ipgo/list";
    }

    @GetMapping("/employees/product/goodsIpgo/delete/{ipgoNum}")
    public String ipgoDelete(@PathVariable String ipgoNum, HttpSession session, Model model) {
        employeesAuthService.execute(session, model);
        goodsIpgoDeleteService.execute(ipgoNum);
        return "redirect:/employees/product/ipgo/list";
    }
}
