package mini.shoppingb.mapper;

import mini.shoppingb.domain.members.MembersDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MembersMapper {
    public int membersRegist(MembersDTO membersDTO);
}
