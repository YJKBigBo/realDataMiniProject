package mini.shoppingb;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.domain.AuthInfoDTO;
import mini.shoppingb.service.employees.employees.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
@Controller
public class ShoppingBApplication {

    public static void main(String[] args) {
        SpringApplication.run(ShoppingBApplication.class, args);
    }

    @Autowired
    AuthService authService;

    @RequestMapping("/")
    public String home(HttpSession session, Model model) {
        authService.execute(session, model);
        return "thymeleaf/index";
    }
}
