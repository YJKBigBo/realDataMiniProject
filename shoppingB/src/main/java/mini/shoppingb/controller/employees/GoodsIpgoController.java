package mini.shoppingb.controller.employees;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.command.employees.GoodsCommand;
import mini.shoppingb.service.employees.employees.EmployeesAuthService;
import mini.shoppingb.service.employees.goodsIpgo.GoodsIpgoDeleteService;
import mini.shoppingb.service.employees.goodsIpgo.GoodsIpgoDetailService;
import mini.shoppingb.service.employees.goodsIpgo.GoodsIpgoListService;
import mini.shoppingb.service.employees.goodsIpgo.GoodsIpgoUpdateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class GoodsIpgoController {
    @Autowired
    EmployeesAuthService employeesAuthService;

    @Autowired
    GoodsIpgoListService goodsIpgoListService;

    @Autowired
    GoodsIpgoDetailService goodsIpgoDetailService;

    @Autowired
    GoodsIpgoUpdateService goodsIpgoUpdateService;

    @Autowired
    GoodsIpgoDeleteService goodsIpgoDeleteService;

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
