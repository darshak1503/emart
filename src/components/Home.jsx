import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero md-2 mt-3 ml-3 mr-3 pd-2">
     {/* <div className="row row-cols-1 row-cols-md-2  g-4">
  <div className="col-6 col-sm-3">
    <div className="card">
      <img src="/assets/mens.png" className="img-thumbnail" alt="Men" height="100000px" width="300px"  bg-color="light-pink"/>
      <div className="card-body">
        <h5 className="card-title">Men's Fashion</h5>
        <p className="card-text">358 Items</p>
        <p className="card-text">SHOP NOW</p>
      </div>
    </div>
  </div>
  <div className="col-6 col-sm-3">
    <div className="card">
      <img src="/assets/Maincard.png" className="img-thumbnail"  height="300px" width="300px" alt="women"/>
      <div className="card-body">
        <h5 className="card-title">Women's Fashion</h5>
        <p className="card-text">273 Items</p>
        <p className="card-text">SHOP NOW</p>
      </div>
    </div>
  </div>
  <div class="w-100"></div>
  <div className="col-6 col-sm-3">
    <div className="card">
      <img src="/assets/accessories.png" className="img-thumbnail" alt="accessories"  height="300px" width="300px"/>
      <div className="card-body">
        <h5 className="card-title">Accessories</h5>
        <p className="card-text">792 Items</p>
        <p className="card-text">SHOP ITEMS</p>
      </div>
    </div>
  </div>
  <div className="col-6 col-sm-3">
    <div className="card">
      <img src="/assets/cosmetics.png" className="img-thumbnail" alt="cosmetic"  height="300px" width="300px"/>
      <div className="card-body">
        <h5 className="card-title">Cosmetics</h5>
        <p className="card-text">159 Items</p>
        <p className="card-text">SHOP ITEMS</p>
      </div>
    </div>
  </div>
</div> */}
<img src="assets/banner.png" alt="banner" height="600px" width="1500px"/>
<Products/>
    </div>
  );
};

export default Home;
