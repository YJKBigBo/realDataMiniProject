package mini.shoppingb.controller.employees;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.command.employees.LoginCommand;
import mini.shoppingb.service.employees.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LoginController {
    @Autowired
    LoginService loginService;

    @GetMapping("/employees/login")
    public String login() {
        return "thymeleaf/login";
    }

    @PostMapping("/employees/login")
    public String loginPost(LoginCommand loginCommand, HttpSession session) {
        loginService.execute(loginCommand, session);
        return "redirect:/";
    }

    @RequestMapping("/employees/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/";
    }
}
