package mini.shoppingb.controller.employees;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.command.employees.EmployeeCommand;
import mini.shoppingb.command.employees.LoginCommand;

import mini.shoppingb.service.employees.employees.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class EmployeesController {
    @Autowired
    EmployeesLoginService employeesLoginService;

    @Autowired
    EmployeesRegisterService employeesRegisterService;

    @Autowired
    EmployeesDetailService employeesDetailService;

    @Autowired
    EmployeesUpdateService employeesUpdateService;

    @Autowired
    EmployeeListService employeeListService;

    @Autowired
    EmployeesAuthService employeesAuthService;

    @GetMapping("/employees/login")
    public String login() {
        return "thymeleaf/employees/login";
    }

    @PostMapping("/employees/login")
    public String loginPost(LoginCommand loginCommand, HttpSession session) {
        employeesLoginService.execute(loginCommand, session);
        return "redirect:/";
    }

    @RequestMapping("/employees/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/";
    }

    @GetMapping("/employees/register")
    public String registerPage(HttpSession session, Model model) {
        employeesAuthService.execute(session, model);
        return "thymeleaf/employees/register";
    }

    @PostMapping("/employees/register")
    public String register(EmployeeCommand employeeCommand) {
        employeesRegisterService.execute(employeeCommand);
        return "redirect:/";
    }

    @GetMapping("/employees/update")
    public String employeesUpdate(HttpSession session,Model model) {
        employeesDetailService.execute(session, model);
        return "thymeleaf/employees/update";
    }

    @PostMapping("/employees/update")
    public String employeesUpdateSubmit(HttpSession session,EmployeeCommand employeeCommand) {
        employeesUpdateService.execute(session, employeeCommand);
        return "redirect:/";
    }

    @GetMapping("/employees/list")
    public String employeesList(HttpSession session,Model model) {
        employeesAuthService.execute(session, model);
        employeeListService.execute(session, model);
        return "thymeleaf/employees/list";
    }
}
