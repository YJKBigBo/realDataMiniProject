package mini.shoppingb.service.employees.goodsIpgo;

import mini.shoppingb.domain.employees.GoodsIpgoCountDTO;
import mini.shoppingb.mapper.GoodsIpgoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GoodsIpgoCountService {

    @Autowired
    GoodsIpgoMapper goodsIpgoMapper;

    public List<GoodsIpgoCountDTO> execute(){
        List<GoodsIpgoCountDTO> dto = goodsIpgoMapper.goodsIpgoCount();
        return dto;
    }
}
