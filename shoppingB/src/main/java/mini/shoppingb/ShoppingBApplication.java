package mini.shoppingb;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.domain.AuthInfoDTO;
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
    @RequestMapping("/")
    public String home(HttpSession session, Model model) {
        AuthInfoDTO auth = (AuthInfoDTO) session.getAttribute("auth");
        if (auth != null) {
            model.addAttribute("isLoggedIn", true);
            if (auth.getDepartment().equals("manage")) {
                model.addAttribute("isManager", true);
                model.addAttribute("isProduct", false);
            } else {
                model.addAttribute("isProduct", true);
                model.addAttribute("isManager", false);
            }
        } else {
            model.addAttribute("isLoggedIn", false);
        }
        return "thymeleaf/index";
    }
}
