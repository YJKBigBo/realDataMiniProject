package mini.shoppingb.service.members;

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
        MembersDTO dto = new MembersDTO();
        dto.setMemberId(command.getMemberId());
        dto.setMemberPw(command.getMemberPw());
        int i = membersMapper.membersLogin(dto);
        if(i>=1){
            AuthInfoDTO auth = new AuthInfoDTO();
            auth.setUserId(dto.getMemberId());
            auth.setUserEmail(dto.getMemberEmail());
            auth.setUserName(dto.getMemberName());
            auth.setDepartment("members");
            auth.setGrade("members");
            auth.setUserNum(dto.getMemberNum());
            session.setAttribute("auth", auth);
        }
        return i;
    }
}
