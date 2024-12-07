package mini.shoppingb.domain.members;

import lombok.Data;

@Data
public class IniDTO {
    String mid;
    String orderNumber;
    String price;
    String timestamp;
    String signature;
    String mKey;
}
