package mini.shoppingb.service.all.inquire;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.domain.all.AuthInfoDTO;
import mini.shoppingb.domain.all.InquireDTO;
import mini.shoppingb.mapper.InquireMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InquireAnswerService {

    @Autowired
    InquireMapper inquireMapper;

    public void execute(InquireDTO inquireDTO, HttpSession session) {
        AuthInfoDTO auth = (AuthInfoDTO) session.getAttribute("auth");
        String memberNum = auth.getUserNum();
        inquireDTO.setMemberNum(memberNum);
        inquireMapper.inquireAnswer(inquireDTO);
    }
}
