<template>
  <div class="red-layout">
    <div class="kotak">
      <slot name="children"></slot>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "LayOut",
};
</script>

<style>
/* Default styles for small screens */

body {
  font-size: 16px;
  line-height: 1.5;
  padding: 0;
  margin: 0;
}
.red-layout {
  height: 100vh;
  background-color: white;
}
.kotak {
  top: 0;
  background-color: #fde2ff;
  height: 73.5%;
  margin: 0;
}

/* Styles for screens larger than 480px */
@media (min-width: 480px) {
  body {
    font-size: 18px;
    background-color: white;
  }
  .red-layout {
    height: 100vh;
    background-color: white;
  }
  .kotak {
    top: 0;
    height: 73.5%;
    margin: 0;
  }
}

/* Styles for screens larger than 768px */
@media (min-width: 768px) {
  body {
    font-size: 20px;
    background-color: green;
  }
  .red-layout {
    height: 100vh;
    background-color: white;
  }
  .kotak {
    top: 0;
    height: 73.5%;
    margin: 0;
  }
}

/* Styles for screens larger than 1024px */
@media (min-width: 1024px) {
  .red-layout {
    background-color: white;
    height: 100vh;
  }
  .kotak {
    top: 0;

    height: 73.5%;
    margin: 0;
  }
}
</style>
