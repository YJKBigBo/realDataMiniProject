package mini.shoppingb.service.members.members;

import mini.shoppingb.command.members.MembersCommand;
import mini.shoppingb.domain.members.MembersDTO;
import mini.shoppingb.mapper.AutoNumMapper;
import mini.shoppingb.mapper.MembersMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberRegistService {
    @Autowired
    MembersMapper membersMapper;

    @Autowired
    AutoNumMapper autoNumMapper;

    public int execute(MembersCommand membersCommand) {
        MembersDTO dto = new MembersDTO();
        dto.setMemberName(membersCommand.getMemberName());
        dto.setMemberId(membersCommand.getMemberId());
        dto.setMemberPw(membersCommand.getMemberPw());
        dto.setMemberAddr(membersCommand.getMemberAddr());
        dto.setMemberAddrDetail(membersCommand.getMemberAddrDetail());
        dto.setMemberPost(membersCommand.getMemberPost());
        dto.setGender(membersCommand.getGender());
        dto.setMemberPhone1(membersCommand.getMemberPhone1());
        dto.setMemberPhone2(membersCommand.getMemberPhone2());
        dto.setMemberEmail(membersCommand.getMemberEmail());
        dto.setMemberBirth(membersCommand.getMemberBirth());
        String memberNum = autoNumMapper.autoNum("member_num","members");
        dto.setMemberNum(memberNum);
        int i = membersMapper.membersRegist(dto);
        return i;
    }
}
