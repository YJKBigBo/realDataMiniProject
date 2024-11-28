package mini.shoppingb.controller.members;

import mini.shoppingb.command.members.MembersCommand;
import mini.shoppingb.domain.members.MembersDTO;
import mini.shoppingb.service.members.MemberRegistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MembersController {
    @Autowired
    MemberRegistService memberRegistService;

    @PostMapping("/members/regist")
    public int memberRegist(@RequestBody MembersCommand membersCommand) {
        int i = memberRegistService.execute(membersCommand);
        return i;
    }
}
