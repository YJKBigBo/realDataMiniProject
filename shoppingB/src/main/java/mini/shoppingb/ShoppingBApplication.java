package mini.shoppingb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
@Controller
public class ShoppingBApplication {

    public static void main(String[] args) {
        SpringApplication.run(ShoppingBApplication.class, args);
    }
    @RequestMapping("/")
    public String home() {
        return "thymeleaf/index";
    }
}
