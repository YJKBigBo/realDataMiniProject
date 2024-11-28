package mini.shoppingb.mapper;

import mini.shoppingb.domain.members.MembersDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface MembersMapper {
    public int membersRegist(MembersDTO membersDTO);
    public MembersDTO membersLogin(@Param("memId")String memId, @Param("memPw")String memPw);
}
