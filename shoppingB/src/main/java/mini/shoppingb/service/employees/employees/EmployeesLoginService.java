package mini.shoppingb.service.employees.employees;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.command.employees.LoginCommand;
import mini.shoppingb.domain.AuthInfoDTO;
import mini.shoppingb.domain.employees.EmployeeDTO;
import mini.shoppingb.mapper.EmployeesMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeesLoginService {
    @Autowired
    EmployeesMapper employeesMapper;

    public void execute(LoginCommand loginCommand, HttpSession session) {
        String userId = loginCommand.getUserId();
        String userPw = loginCommand.getUserPw();
        EmployeeDTO dto = employeesMapper.login(userId, userPw);
        if(dto !=null) {
            AuthInfoDTO auth = new AuthInfoDTO();
            auth.setUserId(dto.getEmpId());
            auth.setUserPw(dto.getEmpPw());
            auth.setUserEmail(dto.getEmpEmail());
            auth.setUserName(dto.getEmpName());
            auth.setDepartment(dto.getEmpDepartment());
            auth.setGrade("employee");
            auth.setUserNum(dto.getEmpNum());
            session.setAttribute("auth", auth);
        }
    }
}
