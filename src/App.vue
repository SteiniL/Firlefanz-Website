<template>
  <div id="app">
    <NavStripe />
    <LandingPage />
    <FeaturedServices />
  </div>
</template>

<script>
//import HeaderComponent from './components/HeaderComponent.vue';
import NavStripe from './components/NavStripeComponent.vue';
import LandingPage from './components/LandingPage.vue';
import FeaturedServices from './components/FeaturedServices.vue';

export default {
  components: {
    NavStripe,
    LandingPage,
    FeaturedServices
  }
}
</script>

<style>
/* Add basic global styles */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}

#app {
  text-align: center;
}
</style>