package mini.shoppingb.controller.employees;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.service.employees.employees.EmployeesAuthService;
import mini.shoppingb.service.employees.order.OrderListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class OrderController {

    @Autowired
    EmployeesAuthService employeesAuthService;

    @Autowired
    OrderListService orderListService;

    @GetMapping("/employees/order/list")
    public String orderList(HttpSession session, Model model) {
        employeesAuthService.execute(session, model);
        orderListService.execute(model);
        return "thymeleaf/order/orderList";
    }
}
