package mini.shoppingb.service.employees.employees;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.domain.AuthInfoDTO;
import mini.shoppingb.domain.employees.EmployeeDTO;
import mini.shoppingb.mapper.EmployeesMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class EmployeesDetailService {
    @Autowired
    EmployeesMapper employeesMapper;

    public void execute(HttpSession session, Model model){
        AuthInfoDTO auth = (AuthInfoDTO) session.getAttribute("auth");
        String empNum = auth.getUserNum();
        String department = auth.getDepartment();
        System.out.println(department);
        EmployeeDTO employeeDTO = employeesMapper.detail(empNum);

        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        String hireDate = sdf.format(employeeDTO.getEmpHireDate());

        model.addAttribute("department", department);
        model.addAttribute("employees", employeeDTO);
        model.addAttribute("hireDate", hireDate);
    }
}