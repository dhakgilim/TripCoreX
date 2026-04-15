<script setup lang="ts">
import { LayoutDashboard } from 'lucide-vue-next'
import { useViewMode } from '../../composables/useViewMode'

const mode = useViewMode()
</script>

<template>
  <article
    class="flex h-full flex-col rounded-2xl border border-tcx-border bg-tcx-surface/60 p-6 shadow-lg shadow-black/20 backdrop-blur-md transition-colors hover:border-tcx-violet/25"
  >
    <div class="mb-4 flex items-center gap-2 text-tcx-violet">
      <LayoutDashboard class="size-5" aria-hidden="true" />
      <h2 class="text-sm font-semibold uppercase tracking-wider text-tcx-muted">Module 4</h2>
    </div>
    <h3 class="text-xl font-semibold text-tcx-fg">Enterprise web &amp; admin</h3>
    <Transition name="tcx-fade" mode="out-in">
      <div v-if="mode === 'architect'" :key="'a'" class="mt-3 flex-1 space-y-3">
        <p class="text-sm leading-relaxed text-tcx-muted">
          Vue 3 reactive dashboards managing complex fleet logistics and 1099 commission logic.
        </p>
        <pre
          class="overflow-x-auto rounded-lg border border-tcx-border bg-tcx-bg/80 p-3 font-mono text-[11px] text-tcx-muted"
        ><code v-pre>const payout = computed(() => rollup1099(rows.value))</code></pre>
      </div>
      <p v-else :key="'o'" class="mt-3 flex-1 text-sm leading-relaxed text-tcx-muted">
        Simple dashboards that help you manage your money and your team without a headache.
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
