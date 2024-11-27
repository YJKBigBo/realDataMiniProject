package mini.shoppingb.service.employees.employees;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.domain.employees.EmployeeDTO;
import mini.shoppingb.mapper.EmployeesMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import java.util.List;

@Service
public class EmployeeListService {
    @Autowired
    EmployeesMapper employeesMapper;

    public void execute(HttpSession session, Model model) {
        List<EmployeeDTO> dto = employeesMapper.list();
        model.addAttribute("dto", dto);
    }
}
