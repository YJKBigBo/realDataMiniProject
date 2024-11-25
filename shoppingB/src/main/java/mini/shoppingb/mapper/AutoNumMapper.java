package mini.shoppingb.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface AutoNumMapper {
    public String autoNum(@Param("columnName")String columnName, @Param("tableName")String tableName);
}
