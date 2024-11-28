import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import carouselImage from "../static/images/carousel.png";

function Carousel() {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src={carouselImage}
            className="d-block mx-auto"
            alt="..."
            style={{
              width: "80%",
              height: "300px",
              padding: "20px"
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;