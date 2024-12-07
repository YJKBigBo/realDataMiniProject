package mini.shoppingb.service.members.point;

import com.inicis.std.util.SignatureUtil;
import mini.shoppingb.domain.members.IniDTO;
import mini.shoppingb.domain.members.PaymentDTO;
import org.springframework.ui.Model;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class IniPayReqService {

    public void execute(Model model, String pointNum) throws Exception{
        String mid					= "INIpayTest";		                    // 상점아이디
        String signKey			    = "SU5JTElURV9UUklQTEVERVNfS0VZU1RS";	// 웹 결제 signkey

        String mKey = SignatureUtil.hash(signKey, "SHA-256");

        String timestamp			= SignatureUtil.getTimestamp();			// util에 의해서 자동생성
        String orderNumber			= pointNum;	// 가맹점 주문번호(가맹점에서 직접 설정)
        //String price				= String.valueOf(pt);								// 상품가격(특수기호 제외, 가맹점에서 직접 설정)


        Map<String, String> signParam = new HashMap<String, String>();

        signParam.put("oid", orderNumber);
        //signParam.put("price", price);
        signParam.put("timestamp", timestamp);

        String signature = SignatureUtil.makeSignature(signParam);

        model.addAttribute("mid", mid);
        model.addAttribute("orderNumber",orderNumber);
        //model.addAttribute("price", price);
        model.addAttribute("timestamp", timestamp);
        model.addAttribute("signature", signature);
        model.addAttribute("mKey", mKey);
    }
}







