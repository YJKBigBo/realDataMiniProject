import'bootstrap/dist/css/bootstrap.css';
import'bootstrap/dist/css/bootstrap.min.css';

function GoodsCard() {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div class="card">
        <img src="data:image/jpeg;base64,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" class="card-img-top" alt="card_img_miss" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
}

export default GoodsCard;
