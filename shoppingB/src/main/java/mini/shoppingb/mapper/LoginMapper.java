package mini.shoppingb.mapper;

import mini.shoppingb.domain.AuthInfoDTO;
import mini.shoppingb.domain.EmployeeDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface LoginMapper {
    public EmployeeDTO login(@Param("empId") String empId, @Param("empPw") String empPw);
}
