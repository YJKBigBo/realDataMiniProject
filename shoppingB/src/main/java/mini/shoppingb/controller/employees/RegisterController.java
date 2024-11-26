package mini.shoppingb.controller.employees;

import mini.shoppingb.command.employees.EmployeeCommand;
import mini.shoppingb.service.employees.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class RegisterController {
    @Autowired
    RegisterService registerService;

    @GetMapping("/register")
    public String registerPage() {
        return "thymeleaf/register";
    }

    @PostMapping("/register")
    public String register(EmployeeCommand employeeCommand) {
        registerService.execute(employeeCommand);
        return "redirect:/";
    }
}
