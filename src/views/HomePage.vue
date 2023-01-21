<template>
  <div class="about">
    <LayOut className="women">
      <template v-slot:children>
        <div class="container">
          <CardCatalog
            image="https://www.pngmart.com/files/1/Jacket-PNG-Clipart.png"
            category="women"
            title="Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket"
            description="100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON"
            price="29.95"
          />
        </div>
      </template>
    </LayOut>
  </div>
</template>
<style>
.container {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
.about {
  background-color: aquamarine;
  width: 100%;
  margin: 0;
}
p {
  margin: 0;
}
</style>
<script>
import CardCatalog from "@/components/CardCatalog.vue";
export default {
  name: "HomePage",
  components: { CardCatalog },
};
</script>
