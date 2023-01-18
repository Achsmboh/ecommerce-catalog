import CardCatalog from '@/components/CardCatalog.vue';

<template>
  <div class="about">
    <LayOut>
      <template v-slot:children>
        <div class="bungkus">
          <CardCatalog />
        </div>
      </template>
    </LayOut>
  </div>
</template>
<style>
.bungkus {
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
