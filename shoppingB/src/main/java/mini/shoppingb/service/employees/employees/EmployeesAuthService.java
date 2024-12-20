package mini.shoppingb.service.employees.employees;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.domain.all.AuthInfoDTO;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

@Service
public class EmployeesAuthService {

    public void execute(HttpSession session, Model model){
        AuthInfoDTO auth = (AuthInfoDTO) session.getAttribute("auth");
        if (auth != null) {
            model.addAttribute("isLoggedIn", true);
            if (auth.getDepartment().equals("manager")) {
                model.addAttribute("isManager", true);
                model.addAttribute("isProduct", false);
            } else {
                model.addAttribute("isProduct", true);
                model.addAttribute("isManager", false);
            }
        } else {
            model.addAttribute("isLoggedIn", false);
        }
    }
}
