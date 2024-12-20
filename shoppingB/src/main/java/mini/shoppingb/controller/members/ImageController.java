package mini.shoppingb.controller.members;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
public class ImageController {

    @GetMapping("/image")
    public ResponseEntity<?> returnImage(@RequestParam String imageName) {
        try {
            String path = "C:\\Users\\YJK\\Desktop\\mini\\realDataMiniProject\\shoppingB\\src\\main\\resources\\static\\upload\\";
            Path imagePath = Paths.get(path).resolve(imageName).normalize();

            Resource resource = new UrlResource(imagePath.toUri());
            if (!resource.exists()) {
                return ResponseEntity.notFound().build();
            }

            String contentType = "application/octet-stream";
            if (imageName.endsWith(".jpg") || imageName.endsWith(".jpeg")) {
                contentType = MediaType.IMAGE_JPEG_VALUE;
            } else if (imageName.endsWith(".png")) {
                contentType = MediaType.IMAGE_PNG_VALUE;
            } else if (imageName.endsWith(".gif")) {
                contentType = MediaType.IMAGE_GIF_VALUE;
            }

            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_TYPE, contentType)
                    .body(resource);

        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error loading image: " + e.getMessage());
        }
    }

}
