package mini.shoppingb.service.employees.goods;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.command.employees.GoodsCommand;
import mini.shoppingb.domain.AuthInfoDTO;
import mini.shoppingb.domain.employees.GoodsWithIpgoDTO;
import mini.shoppingb.mapper.AutoNumMapper;
import mini.shoppingb.mapper.GoodsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.net.URL;
import java.util.UUID;

@Service
public class GoodsUpdateService {

    @Autowired
    GoodsDetailService goodsDetailService;

    @Autowired
    GoodsMapper goodsMapper;

    @Autowired
    AutoNumMapper autoNumMapper;

    public void execute(GoodsCommand command, Model model, HttpSession session) {
        GoodsWithIpgoDTO dto = goodsDetailService.execute(command.getGoodsNum(), model);
        dto.setGoodsName(command.getGoodsName());
        dto.setGoodsPrice(command.getGoodsPrice());
        dto.setVisitCount(command.getVisitCount());
        dto.setGoodsContents(command.getGoodsContents());
        dto.setTotalQty(command.getTotalQty());

        if (!command.getGoodsMainImage().isEmpty()) {
            URL resource = getClass().getClassLoader().getResource("static/upload");
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
        }

        if (!command.getGoodsDetailImage()[0].getOriginalFilename().isEmpty()) {
            URL resource = getClass().getClassLoader().getResource("static/upload");
            String filrDir = resource.getFile();
            MultipartFile mf = command.getGoodsMainImage();
            String originalFile = mf.getOriginalFilename();
            /// 저장하기 위한 이름 만들기 : UUID : shfioshiof30750937skfhs
            // 확장자 : .jpg, .png : abcd.abdc.jpg
            String extension = originalFile.substring(originalFile.lastIndexOf("."));
            // 이름 짖기
            String storeName = UUID.randomUUID().toString().replace("-", "");
            String storeFileName = storeName + extension;

            File file = new File(filrDir + "/" + storeFileName);
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



        AuthInfoDTO auth = (AuthInfoDTO) session.getAttribute("auth");
        String updateEmpNum = auth.getUserNum();
        dto.setUpdateEmpNum(updateEmpNum);



        String ipgoNum = autoNumMapper.autoNum("ipgo_num", "goods_ipgo");
        dto.setIpgoNum(ipgoNum);
        dto.setIpgoQty(command.getIpgoQty());
        dto.setIpgoDate(command.getIpgoDate());
        dto.setIpgoPrice(command.getIpgoPrice());
        goodsMapper.updateGoods(dto);
        goodsMapper.insertGoodsIpgo(dto);
    }
}
