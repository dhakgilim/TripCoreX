<script setup lang="ts">
import { Hexagon } from 'lucide-vue-next'
import ViewToggle from './ViewToggle.vue'
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b border-tcx-border/80 bg-tcx-bg/75 backdrop-blur-xl"
  >
    <div
      class="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6"
    >
      <div class="flex items-center gap-3">
        <div
          class="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-tcx-accent/20 to-tcx-violet/20 ring-1 ring-tcx-border"
        >
          <Hexagon class="size-5 text-tcx-accent" aria-hidden="true" />
        </div>
        <div class="text-left">
          <p class="text-lg font-semibold tracking-tight text-tcx-fg">TripCoreX</p>
          <p class="text-xs text-tcx-muted">AI Development Studio</p>
        </div>
      </div>
      <ViewToggle />
    </div>
  </header>
</template>
