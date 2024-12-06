package mini.shoppingb.controller.members;


import mini.shoppingb.domain.employees.GoodsDTO;
import mini.shoppingb.domain.employees.GoodsWithIpgoDTO;
import mini.shoppingb.service.members.goods.GoodsCountServiceCSR;
import mini.shoppingb.service.members.goods.GoodsDetailServiceCSR;
import mini.shoppingb.service.members.goods.GoodsListServiceCSR;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class GoodsControllerCSR {
    @Autowired
    GoodsListServiceCSR goodsListServiceCSR;

    @Autowired
    GoodsDetailServiceCSR goodsDetailServiceCSR;

    @Autowired
    GoodsCountServiceCSR goodsCountServiceCSR;

    @GetMapping("/members/goods/List")
    public ResponseEntity<List<GoodsWithIpgoDTO>> getGoodsList() {
        List<GoodsWithIpgoDTO> goodsList = goodsListServiceCSR.execute();
        return ResponseEntity.ok(goodsList);
    }

    @GetMapping("members/goods/detail")
    public ResponseEntity<GoodsDTO> goodsDetail(@RequestParam String goodsNum) {
        GoodsDTO dto = goodsDetailServiceCSR.execute(goodsNum);
        return ResponseEntity.ok(dto);
    }

    @GetMapping("/members/goods/count")
    public ResponseEntity<List<GoodsDTO>> goodsCount() {
        List<GoodsDTO> dto = goodsCountServiceCSR.execute();
        return ResponseEntity.ok(dto);
    }
}
