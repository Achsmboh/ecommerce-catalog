<template>
  <div>
    <div class="card">
      <div class="item1">
        <img src="https://www.pngmart.com/files/1/Jacket-PNG-Clipart.png" alt="https://www.pngmart.com/files/1/Jacket-PNG-Clipart.png" />
      </div>
      <div class="item2">
        <div>
          <h3>Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket</h3>
          <div class="category-content">
            <p class="category">women's clothing</p>
            <div class="rate">
              <p>2.9/5</p>
              <div class="cyrcle"></div>
              <div class="cyrcle"></div>
              <div class="cyrcle"></div>
              <div class="cyrcle-border"></div>
              <div class="cyrcle-border"></div>
            </div>
          </div>
          <div class="border-description">
            <p class="description">
              100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist /
              Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON
            </p>
          </div>
          <div>
            <p class="price">$29.95</p>
          </div>
          <div class="button">
            <button class="button-buy">Buy Now</button>
            <button class="button-next">Next Product</button>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "CardCatalog",
};
</script>
<style>
.card {
  width: 1034px;
  height: 580px;
  background-color: #ffff;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  padding: 56px;
  box-sizing: border-box;
}

.item1 {
  width: 430px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 301px;
  height: auto;
  object-fit: contain;
}
.item2 {
  width: 100%;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 67.48px;
}
h3 {
  font-size: 28px;
  color: #720060;
  margin: 0;
}
.category-content {
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  margin-bottom: 11px;
}
p .category {
  font-size: 18px;
  color: #3f3f3f;
}
.rate {
  display: flex;
  align-items: center;
}
.cyrcle {
  width: 18px;
  height: 18px;
  background-color: #720060;
  border-radius: 50%;
  margin-right: 2px;
  margin-left: 2px;
}
.cyrcle-border {
  width: 18px;
  height: 18px;
  background-color: transparent;
  border: 1px solid #720060;
  border-radius: 50%;
  margin-right: 2px;
  margin-left: 2px;
}
.border-description {
  border-top: 1px solid #3f3f3f;
  border-bottom: 1px solid #3f3f3f;
  padding-top: 26px;
  padding-bottom: 50px;
}
p .description {
  font-size: 20px;
}
.price {
  margin-top: 5px;
  margin-bottom: 5px;
  color: #720060;
  font-size: 28px;
  font-weight: bold;
}
.button {
  display: flex;
  justify-content: space-between;
}
.button-buy {
  border-radius: 4px;
  width: 259px;
  height: 42px;
  background-color: #720060;
  border: none;
  color: white;
  font-size: 20px;
  margin-right: 19px;
  font-weight: bold;
}
.button-next {
  border-radius: 4px;
  width: 259px;
  height: 42px;
  background-color: transparent;
  border: 3px solid #720060;
  color: #720060;
  font-size: 20px;
  font-weight: bold;
}
</style>
