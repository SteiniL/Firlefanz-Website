<template>
  <nav
    ref="navEl"
    class="nav-strip"
    :class="{ atTop }"
    :style="{ '--dyn-bottom': bottomPx + 'px' }"
    aria-label="Main navigation"
  >
    <ul>
      <li v-for="(item, i) in links" :key="i">
        <a :href="item.href">{{ item.label }}</a>
      </li>
      <slot />
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

/**
 * Behavior:
 * - While the hero bottom is within the viewport (rect.bottom > 0),
 *   the nav’s bottom edge matches the hero’s bottom.
 * - Once hero bottom <= 0, the nav sticks to the top.
 */
const props = defineProps({
  links: {
    type: Array,
    default: () => ([
      { label: 'About', href: '#about' },
      { label: 'Program', href: '#program' },
      { label: 'Tickets', href: '#tickets' },
      { label: 'Contact', href: '#contact' },
    ]),
  },
  triggerSelector: { type: String, default: '.hero' }, // the element to “follow”
})

const atTop = ref(false)
const bottomPx = ref(0)
const navEl = ref(null)

let onScrollRaf = null
let ticking = false
let triggerEl = null

function compute() {
  if (!triggerEl || !navEl?.value) return

  const heroRect = triggerEl.getBoundingClientRect()
  const navH = navEl.value.offsetHeight

  // Distance from viewport bottom to hero bottom
  // (how far up we slide the fixed bar)
  const dist = Math.max(window.innerHeight - heroRect.bottom, 0)
  bottomPx.value = dist

  // Compute where the nav's TOP would be with that bottom offset
  const navTop = window.innerHeight - dist - navH

  // Stick to top exactly when the nav's top would hit the top edge
  atTop.value = navTop <= 0
}


function onScroll() {
  if (ticking) return
  ticking = true
  onScrollRaf = requestAnimationFrame(() => {
    compute()
    ticking = false
  })
}

onMounted(() => {
  triggerEl = document.querySelector(props.triggerSelector)
  compute()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', compute)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', compute)
  if (onScrollRaf) cancelAnimationFrame(onScrollRaf)
})
</script>

<style scoped>
.nav-strip {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 50;

  bottom: var(--dyn-bottom, 0px);

  height: 8vh; /* your chosen height */
  display: flex;
  align-items: center;  /* centers content vertically */
  justify-content: center; /* centers horizontally */

  background: rgba(10, 11, 26, 1);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);

  /* remove vertical padding, keep horizontal */
  padding: 0 clamp(12px, 4vw, 28px);

  transition:
    background 200ms ease,
    transform 220ms ease;
}


/* When hero bottom goes above viewport top, stick to top */
.nav-strip.atTop {
  top: 0;
  bottom: auto;
  border-top: none;
  background: rgba(10, 11, 26, 1);
}

.nav-strip ul {
  margin: 0;
  padding: 0;
  list-style: none;

  display: flex;
  gap: clamp(12px, 4vw, 32px);
  align-items: center;
  justify-content: center;
}

.nav-strip a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.02em;
  padding: 8px 2px;
}

.nav-strip a:hover,
.nav-strip a:focus {
  text-decoration: underline;
}
</style>
