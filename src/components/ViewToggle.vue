<script setup lang="ts">
import { Cpu, Smile } from 'lucide-vue-next'
import { useViewMode, type ViewMode } from '../composables/useViewMode'

const mode = useViewMode()

function set(next: ViewMode) {
  mode.value = next
}
</script>

<template>
  <div
    class="inline-flex rounded-full border border-tcx-border bg-tcx-surface/80 p-1 shadow-inner backdrop-blur-md"
    role="group"
    aria-label="View mode"
  >
    <button
      type="button"
      class="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tcx-accent"
      :class="
        mode === 'architect'
          ? 'bg-tcx-elevated text-tcx-fg shadow-md ring-1 ring-tcx-accent/40'
          : 'text-tcx-muted hover:text-tcx-fg'
      "
      :aria-pressed="mode === 'architect'"
      @click="set('architect')"
    >
      <Cpu class="size-4 shrink-0" aria-hidden="true" />
      The Architect
    </button>
    <button
      type="button"
      class="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tcx-accent"
      :class="
        mode === 'operator'
          ? 'bg-tcx-elevated text-tcx-fg shadow-md ring-1 ring-tcx-violet/40'
          : 'text-tcx-muted hover:text-tcx-fg'
      "
      :aria-pressed="mode === 'operator'"
      @click="set('operator')"
    >
      <Smile class="size-4 shrink-0" aria-hidden="true" />
      The Operator
    </button>
  </div>
</template>
