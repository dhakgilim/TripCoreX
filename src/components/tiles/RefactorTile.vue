<script setup lang="ts">
import { GitMerge } from 'lucide-vue-next'
import { useViewMode } from '../../composables/useViewMode'

const mode = useViewMode()
</script>

<template>
  <article
    class="group relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-2xl border border-tcx-border bg-tcx-surface/60 p-6 shadow-lg shadow-black/20 backdrop-blur-md transition-colors hover:border-tcx-accent/30"
  >
    <div class="mb-4 flex items-center gap-2 text-tcx-accent">
      <GitMerge class="size-5" aria-hidden="true" />
      <h2 class="text-sm font-semibold uppercase tracking-wider text-tcx-muted">Module 3</h2>
    </div>
    <h3 class="text-xl font-semibold text-tcx-fg">The 10k refactor (credibility)</h3>
    <Transition name="tcx-fade" mode="out-in">
      <div v-if="mode === 'architect'" :key="'a'" class="mt-3 flex flex-1 flex-col gap-3">
        <p class="text-sm leading-relaxed text-tcx-muted">
          Refactored 17,000 lines of technical debt into 7,000 lines of optimized, dry code (58%
          reduction).
        </p>
        <pre
          class="overflow-x-auto rounded-lg border border-tcx-border bg-tcx-bg/80 p-3 font-mono text-[11px] leading-relaxed text-tcx-muted"
        >-17000 LOC legacy sprawl
+7000 LOC typed modules + jest</pre>
      </div>
      <p v-else :key="'o'" class="mt-3 flex-1 text-sm leading-relaxed text-tcx-muted">
        We cut 10,000 lines of "junk" out of our code to make it faster and cheaper to run.
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
