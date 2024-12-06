package mini.shoppingb.mapper;

import mini.shoppingb.domain.all.InquireDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface InquireMapper {

    public void inquireUpdate(InquireDTO inquireDTO);

    public void inquireRegist(InquireDTO inquireDTO);

    public List<InquireDTO> inquireList();
}
