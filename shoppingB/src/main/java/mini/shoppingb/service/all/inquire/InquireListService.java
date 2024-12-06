package mini.shoppingb.service.all.inquire;

import mini.shoppingb.domain.all.InquireDTO;
import mini.shoppingb.mapper.InquireMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import java.util.List;

@Service
public class InquireListService {

    @Autowired
    InquireMapper inquireMapper;

    public List<InquireDTO> execute(Model model, int i){
        List<InquireDTO> dto = null;
        if(i == 0){
            dto = inquireMapper.inquireListForHome();
            return dto;
        } else {
            dto = inquireMapper.inquireList();
            model.addAttribute("inquireList", dto);
            return null;
        }
    }
}
