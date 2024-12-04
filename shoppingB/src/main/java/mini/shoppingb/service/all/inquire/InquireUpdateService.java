package mini.shoppingb.service.all.inquire;

import mini.shoppingb.domain.all.InquireDTO;
import mini.shoppingb.mapper.InquireMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InquireUpdateService {

    @Autowired
    InquireMapper inquireMapper;

    public void execute(InquireDTO inquireDTO) {
        inquireMapper.inquireUpdate(inquireDTO);
    }
}
