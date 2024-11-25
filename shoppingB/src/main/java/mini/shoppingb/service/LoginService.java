package mini.shoppingb.service;

import jakarta.servlet.http.HttpSession;
import lombok.extern.java.Log;
import mini.shoppingb.command.LoginCommand;
import mini.shoppingb.domain.AuthInfoDTO;
import mini.shoppingb.domain.EmployeeDTO;
import mini.shoppingb.mapper.LoginMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {
    @Autowired
    LoginMapper loginMapper;

    public void execute(LoginCommand loginCommand, HttpSession session) {
        String userId = loginCommand.getUserId();
        String userPw = loginCommand.getUserPw();
        EmployeeDTO dto = loginMapper.login(userId, userPw);
        if(dto !=null) {
            AuthInfoDTO auth = new AuthInfoDTO();
            auth.setUserId(dto.getEmpId());
            auth.setUserPw(dto.getEmpPw());
            auth.setUserEmail(dto.getEmpEmail());
            auth.setUserName(dto.getEmpName());
            auth.setDepartment(dto.getEmpDepartment());
            auth.setGrade("employee");
            session.setAttribute("auth", auth);
        }
    }
}
