<script setup lang="ts">
import { provideViewMode } from './composables/useViewMode'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import GitHubTicker from './components/GitHubTicker.vue'
import BentoGrid from './components/BentoGrid.vue'

provideViewMode()
</script>

<template>
  <div class="min-h-svh bg-tcx-bg text-tcx-fg">
    <SiteHeader />
    <main>
      <HeroSection />
      <section class="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <GitHubTicker />
      </section>
      <BentoGrid />
      <footer
        class="mx-auto max-w-6xl border-t border-tcx-border px-4 py-10 text-center text-sm text-tcx-muted sm:px-6"
      >
        TripCoreX — Twin Cities · Chaska ·
        <span class="text-tcx-fg/80">Operator-engineer builds</span>
      </footer>
    </main>
  </div>
</template>
