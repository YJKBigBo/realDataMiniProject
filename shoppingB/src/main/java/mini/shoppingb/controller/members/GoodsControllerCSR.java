package mini.shoppingb.controller.members;


import mini.shoppingb.domain.employees.GoodsDTO;
import mini.shoppingb.domain.employees.GoodsWithIpgo;
import mini.shoppingb.service.members.goods.GoodsDetailServiceCSR;
import mini.shoppingb.service.members.goods.GoodsListServiceCSR;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.nio.file.Path;
import java.nio.file.Paths;

import java.util.List;

@RestController
public class GoodsControllerCSR {
    @Autowired
    GoodsListServiceCSR goodsListServiceCSR;

    @Autowired
    GoodsDetailServiceCSR goodsDetailServiceCSR;

    @GetMapping("/members/goods/List")
    public ResponseEntity<List<GoodsWithIpgo>> getGoodsList() {
        List<GoodsWithIpgo> goodsList = goodsListServiceCSR.execute();
        return ResponseEntity.ok(goodsList);
    }

    @GetMapping("members/goods/detail")
    public ResponseEntity<GoodsDTO> goodsDetail(@RequestParam String goodsNum) {
        GoodsDTO dto = goodsDetailServiceCSR.execute(goodsNum);
        return ResponseEntity.ok(dto);
    }
}
