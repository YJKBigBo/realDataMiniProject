package mini.shoppingb.mapper;

import mini.shoppingb.domain.employees.EmployeeDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface LoginMapper {
    public EmployeeDTO login(@Param("empId") String empId, @Param("empPw") String empPw);
}
