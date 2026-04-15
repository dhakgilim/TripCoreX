<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { GitBranch, Radio } from 'lucide-vue-next'

type Event = { repo: string; msg: string; sha: string; ago: string }

const events: Event[] = [
  { repo: 'dhakgilim/tripcorex', msg: 'feat: dual-view bento + gh-pages workflow', sha: 'a4f91c2', ago: '2m' },
  { repo: 'dhakgilim/minndrive', msg: 'fix: flight ETA debounce on rider channel', sha: '8c10d4e', ago: '14m' },
  { repo: 'dhakgilim/tripcorex', msg: 'chore: tailwind v4 theme tokens', sha: '51bb09a', ago: '32m' },
  { repo: 'dhakgilim/fleet-dash', msg: 'refactor: 1099 commission rollup (vue)', sha: 'd903e11', ago: '1h' },
  { repo: 'dhakgilim/tripcorex', msg: 'docs: operator-engineer positioning', sha: 'e22b7f0', ago: '2h' },
  { repo: 'dhakgilim/minndrive', msg: 'test: jest coverage on async booking', sha: '7aa4c55', ago: '3h' },
]

const index = ref(0)
const current = ref<Event>(events[0])
let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  timer = setInterval(() => {
    index.value = (index.value + 1) % events.length
    current.value = events[index.value]!
  }, 4200)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div
    class="flex items-center gap-3 overflow-hidden rounded-xl border border-tcx-border bg-tcx-surface/60 px-4 py-3 text-sm backdrop-blur-md"
  >
    <div class="flex shrink-0 items-center gap-2 text-tcx-accent">
      <Radio class="size-4 animate-pulse" aria-hidden="true" />
      <span class="font-medium tracking-wide">Live GitHub activity</span>
    </div>
    <div class="hidden h-6 w-px bg-tcx-border sm:block" />
    <div class="min-w-0 flex-1">
      <p class="truncate font-mono text-xs text-tcx-muted">
        <GitBranch class="mb-0.5 mr-1 inline size-3.5 text-tcx-violet" aria-hidden="true" />
        <span class="text-tcx-fg">{{ current.repo }}</span>
        <span class="mx-2 text-tcx-border">|</span>
        <span>{{ current.msg }}</span>
      </p>
      <p class="mt-0.5 text-[11px] text-tcx-muted">
        <span class="font-mono text-tcx-accent">{{ current.sha }}</span>
        · simulated feed · {{ current.ago }} ago
      </p>
    </div>
  </div>
</template>
