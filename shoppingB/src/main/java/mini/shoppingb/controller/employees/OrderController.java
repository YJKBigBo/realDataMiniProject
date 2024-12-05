package mini.shoppingb.controller.employees;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.service.employees.employees.EmployeesAuthService;
import mini.shoppingb.service.employees.order.OrderDetailService;
import mini.shoppingb.service.employees.order.OrderListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class OrderController {

    @Autowired
    EmployeesAuthService employeesAuthService;

    @Autowired
    OrderListService orderListService;

    @Autowired
    OrderDetailService orderDetailService;

    @GetMapping("/employees/order/list")
    public String orderList(HttpSession session, Model model) {
        employeesAuthService.execute(session, model);
        orderListService.execute(model);
        return "thymeleaf/order/orderList";
    }

    @GetMapping("/employees/order/detail/{purchaseNum}")
    public String ipgoDetail(@PathVariable String purchaseNum, HttpSession session, Model model) {
        employeesAuthService.execute(session, model);
        orderDetailService.execute(purchaseNum, model);
        return "thymeleaf/order/orderDetail";
    }

}
