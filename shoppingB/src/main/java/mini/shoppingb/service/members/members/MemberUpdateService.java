package mini.shoppingb.service.members.members;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.command.members.MembersCommand;
import mini.shoppingb.domain.all.AuthInfoDTO;
import mini.shoppingb.domain.members.MembersDTO;
import mini.shoppingb.mapper.MembersMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberUpdateService {

    @Autowired
    MembersMapper membersMapper;

    public void execute(MembersDTO membersDTO, HttpSession session){
        AuthInfoDTO auth = (AuthInfoDTO) session.getAttribute("auth");
        String memberNum = auth.getUserNum();
        membersDTO.setMemberNum(memberNum);
        membersMapper.membersUpdate(membersDTO);
    }
}
