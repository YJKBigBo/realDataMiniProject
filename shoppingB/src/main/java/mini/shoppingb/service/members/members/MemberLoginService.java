package mini.shoppingb.service.members.members;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.command.members.MembersCommand;
import mini.shoppingb.domain.AuthInfoDTO;
import mini.shoppingb.domain.members.MembersDTO;
import mini.shoppingb.mapper.MembersMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberLoginService {
    @Autowired
    MembersMapper membersMapper;

    public int execute(MembersCommand command, HttpSession session) {
        String memId = command.getMemberId();
        String memPw = command.getMemberPw();
        MembersDTO dto = membersMapper.membersLogin(memId,memPw);
        AuthInfoDTO auth = new AuthInfoDTO();
        int i = 0;
        if(dto.getMemberNum() != null){
            auth.setUserId(dto.getMemberId());
            auth.setUserEmail(dto.getMemberEmail());
            auth.setUserName(dto.getMemberName());
            auth.setDepartment("members");
            auth.setGrade("members");
            auth.setUserNum(dto.getMemberNum());
            i = 1;
        }
        session.setAttribute("auth", auth);
        System.out.println(auth);
        return i;
    }
}
