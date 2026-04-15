<script setup lang="ts">
import { ShieldCheck } from 'lucide-vue-next'
import { useViewMode } from '../../composables/useViewMode'

const mode = useViewMode()
</script>

<template>
  <article
    class="flex h-full flex-col rounded-2xl border border-tcx-border bg-gradient-to-r from-tcx-surface/70 via-tcx-bg/40 to-tcx-surface/70 p-6 shadow-lg shadow-black/25 backdrop-blur-md transition-colors hover:border-tcx-accent/30"
  >
    <div class="mb-4 flex items-center gap-2 text-tcx-accent">
      <ShieldCheck class="size-5" aria-hidden="true" />
      <h2 class="text-sm font-semibold uppercase tracking-wider text-tcx-muted">Module 5</h2>
    </div>
    <h3 class="text-xl font-semibold text-tcx-fg">Fleet-tested reliability</h3>
    <Transition name="tcx-fade" mode="out-in">
      <div v-if="mode === 'architect'" :key="'a'" class="mt-3 flex flex-1 flex-col gap-3">
        <p class="text-sm leading-relaxed text-tcx-muted">
          Production-validated in real-world high-concurrency environments.
        </p>
        <pre
          class="overflow-x-auto rounded-lg border border-tcx-border bg-tcx-bg/80 p-3 font-mono text-[11px] leading-relaxed text-tcx-muted"
        >load: p95 &lt; 200ms @ peak rides
k6 smoke → staging → prod canary</pre>
      </div>
      <p v-else :key="'o'" class="mt-3 flex-1 text-sm leading-relaxed text-tcx-muted">
        We don't guess. We test our apps in our own businesses (Rideshare &amp; Detailing) before
        we ever give them to you.
      </p>
    </Transition>
  </article>
</template>

<style scoped>
.tcx-fade-enter-active,
.tcx-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.tcx-fade-enter-from,
.tcx-fade-leave-to {
  opacity: 0;
  transform: translateY(4px);
}
</style>
