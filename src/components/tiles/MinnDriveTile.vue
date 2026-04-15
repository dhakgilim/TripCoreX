<script setup lang="ts">
import { Plane } from 'lucide-vue-next'
import { useViewMode } from '../../composables/useViewMode'

const mode = useViewMode()
</script>

<template>
  <article
    class="group relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-2xl border border-tcx-border bg-tcx-surface/60 p-6 shadow-lg shadow-black/20 backdrop-blur-md transition-colors hover:border-tcx-violet/30"
  >
    <div class="mb-4 flex items-center gap-2 text-tcx-violet">
      <Plane class="size-5" aria-hidden="true" />
      <h2 class="text-sm font-semibold uppercase tracking-wider text-tcx-muted">Module 2</h2>
    </div>
    <h3 class="text-xl font-semibold text-tcx-fg">Cross-platform mobile (MinnDrive case study)</h3>
    <Transition name="tcx-fade" mode="out-in">
      <div v-if="mode === 'architect'" :key="'a'" class="mt-3 flex flex-1 flex-col gap-3">
        <p class="text-sm leading-relaxed text-tcx-muted">
          TypeScript/Expo Rider app paired with Kotlin-native Driver wrapper and real-time flight API
          integration.
        </p>
        <pre
          class="overflow-x-auto rounded-lg border border-tcx-border bg-tcx-bg/80 p-3 font-mono text-[11px] leading-relaxed text-tcx-violet/90"
        >expo-router → async flight hooks
driverChannel: suspend () -> Flow&lt;Location&gt;</pre>
      </div>
      <p v-else :key="'o'" class="mt-3 flex-1 text-sm leading-relaxed text-tcx-muted">
        We built a ride-hailing system from scratch that tracks planes and manages drivers.
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
