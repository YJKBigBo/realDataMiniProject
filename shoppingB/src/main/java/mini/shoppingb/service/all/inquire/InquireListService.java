package mini.shoppingb.service.all.inquire;

import mini.shoppingb.domain.all.InquireDTO;
import mini.shoppingb.mapper.InquireMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InquireListService {

    @Autowired
    InquireMapper inquireMapper;

    public List<InquireDTO> execute(){
        List<InquireDTO> dto = inquireMapper.inquireList();
        return dto;
    }
}
