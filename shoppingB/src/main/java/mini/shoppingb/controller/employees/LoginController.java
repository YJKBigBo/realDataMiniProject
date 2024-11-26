package mini.shoppingb.controller.employees;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.command.LoginCommand;
import mini.shoppingb.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LoginController {
    @Autowired
    LoginService loginService;

    @GetMapping("/login")
    public String login() {
        return "thymeleaf/login";
    }

    @PostMapping("/login")
    public String loginPost(LoginCommand loginCommand, HttpSession session) {
        loginService.execute(loginCommand, session);
        return "redirect:/";
    }

    @RequestMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/";
    }
}
