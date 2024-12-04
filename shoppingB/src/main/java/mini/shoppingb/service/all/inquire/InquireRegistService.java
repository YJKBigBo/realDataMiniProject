package mini.shoppingb.service.all.inquire;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.domain.all.AuthInfoDTO;
import mini.shoppingb.domain.all.InquireDTO;
import mini.shoppingb.mapper.AutoNumMapper;
import mini.shoppingb.mapper.InquireMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InquireRegistService {

    @Autowired
    InquireMapper inquireMapper;

    @Autowired
    AutoNumMapper autoNumMapper;

    public void execute(InquireDTO inquireDTO, HttpSession session) {
        AuthInfoDTO auth = (AuthInfoDTO) session.getAttribute("auth");
        String memberNum = auth.getUserNum();;
        String inquireNum = autoNumMapper.autoNum("INQUIRE_NUM", "inquire");
        inquireDTO.setInquireNum(inquireNum);
        inquireDTO.setMemberNum(memberNum);
        inquireMapper.inquireRegist(inquireDTO);
    }
}
