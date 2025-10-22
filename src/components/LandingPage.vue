<template>
  <section class="hero" aria-label="Hero with logo">
    <img src="@/assets/firlefanz.webp" alt="" class="background" />
    <img src="@/assets/transp_logo.webp" alt="Firlefanz Logo" class="logo" />
  </section>

  <NavStrip
    :links="[
      { label: 'About', href: '#about' },
      { label: 'Program', href: '#program' },
      { label: 'Tickets', href: '#tickets' },
      { label: 'Contact', href: '#contact' }
    ]"
    trigger-selector=".hero"
  />

  <main class="content">
    <section id="about"><h2>About</h2><p>…</p></section>
    <section id="program"><h2>Program</h2><p>…</p></section>
    <section id="tickets"><h2>Tickets</h2><p>…</p></section>
    <section id="contact"><h2>Contact</h2><p>…</p></section>
  </main>
</template>

<script setup>
import NavStrip from '@/components/NavStripeComponent.vue'
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.background {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover; object-position: center;
}
.logo {
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%) scale(0.9);
  max-width: 30vw; height: auto; opacity: 0;
  animation: fadeIn 2s ease-out forwards; animation-delay: 0.3s;
}
@keyframes fadeIn { 0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                    100%{ opacity: 1; transform: translate(-50%, -50%) scale(1);} }

.content {
  background: #111; color: #f2f2f2;
  min-height: 180vh;
  padding: 64px clamp(16px, 6vw, 64px);
}
</style>
