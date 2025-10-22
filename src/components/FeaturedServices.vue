<template>
  <section class="featured-services">
    <h2>Our Services</h2>
    <div class="services-grid">
      <div class="service">
        <h3>Web Design</h3>
        <p>Beautiful and responsive web designs.</p>
      </div>
      <div class="service">
        <h3>SEO</h3>
        <p>Optimized for search engines to increase visibility.</p>
      </div>
      <div class="service">
        <h3>Marketing</h3>
        <p>Grow your business with our marketing strategies.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.featured-services {
  padding: 50px 20px;
  background-color: #f9f9f9;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.service {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>