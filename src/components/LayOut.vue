<template>
  <div class="layout">
    <div class="kotak" :class="className">
      <slot name="children"></slot>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "LayOut",
  props: [`className`],
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
.layout {
  height: 100vh;
  background-color: white;
}
.kotak {
  top: 0;
  height: 73.5%;
  margin: 0;
}
.women {
  background-color: #fde2ff;
}

.men {
  background-color: #d6e6ff;
}

/* Styles for screens larger than 480px */
@media (min-width: 480px) {
  body {
    font-size: 18px;
    background-color: white;
  }
  .layout {
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
  }
  .layout {
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
  .layout {
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
