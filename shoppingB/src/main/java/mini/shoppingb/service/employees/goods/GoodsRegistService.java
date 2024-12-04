package mini.shoppingb.service.employees.goods;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.command.employees.GoodsCommand;
import mini.shoppingb.domain.all.AuthInfoDTO;
import mini.shoppingb.domain.employees.GoodsDTO;
import mini.shoppingb.mapper.AutoNumMapper;
import mini.shoppingb.mapper.GoodsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.net.URL;
import java.util.UUID;

@Service
public class GoodsRegistService {

    @Autowired
    GoodsMapper goodsMapper;

    @Autowired
    AutoNumMapper autoNumMapper;

    public void execute(HttpSession session, GoodsCommand command) {
        AuthInfoDTO auth = (AuthInfoDTO) session.getAttribute("auth");
        GoodsDTO dto = new GoodsDTO();
        dto.setGoodsName(command.getGoodsName());
        dto.setGoodsPrice(command.getGoodsPrice());
        dto.setGoodsContents(command.getGoodsContents());
        dto.setEmpNum(auth.getUserNum());
        URL resource = getClass().getClassLoader().getResource("static/upload");

        System.out.println("resource : " + resource);
        String filrDir = resource.getFile();

        MultipartFile mf = command.getGoodsMainImage();
        String originalFile = mf.getOriginalFilename();
        /// 저장하기 위한 이름 만들기 : UUID : shfioshiof30750937skfhs
        // 확장자 : .jpg, .png : abcd.abdc.jpg
        String extension = originalFile.substring(originalFile.lastIndexOf("."));
        // 이름 짖기
        String storeName = UUID.randomUUID().toString().replace("-", "");
        String storeFileName = storeName + extension;
        // 파일 생성
        File file = new File(filrDir + "/" + storeFileName);
        try {
            mf.transferTo(file);
        } catch (Exception e) {
            e.printStackTrace();
        }
        dto.setGoodsMainImage(originalFile);
        dto.setGoodsMainStoreImage(storeFileName);

        if(!command.getGoodsDetailImage()[0].getOriginalFilename().isEmpty()) {
            String originalTotal = "";
            String storeTotal = "";
            for(MultipartFile mpf : command.getGoodsDetailImage()) {
                originalFile = mpf.getOriginalFilename();//오류
                extension = originalFile.substring(originalFile.lastIndexOf("."));
                storeName = UUID.randomUUID().toString().replace("-", "");
                storeFileName = storeName + extension;
                file = new File(filrDir + "/" + storeFileName);
                try {
                    mpf.transferTo(file);
                } catch (Exception e) {
                    e.printStackTrace();
                }
                originalTotal += originalFile + "/";
                storeTotal += storeFileName +"/";
            }
            dto.setGoodsDetailImage(originalTotal);
            dto.setGoodsDetailStoreImage(storeTotal);
        }

        String goodsNum = autoNumMapper.autoNum("goods_num","goods");
        System.out.println(goodsNum);
        dto.setGoodsNum(goodsNum);
        goodsMapper.goodsRegist(dto);
    }
}
