package mini.shoppingb.service.all.inquire;

import mini.shoppingb.domain.all.InquireDTO;
import mini.shoppingb.mapper.InquireMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

@Service
public class InquireDetailService {

    @Autowired
    InquireMapper inquireMapper;

    public void execute(int inquireNum, Model model){
        InquireDTO dto = inquireMapper.inquireDetail(inquireNum);
        model.addAttribute("inquireDTO", dto);
    }
}
