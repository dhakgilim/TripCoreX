<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import gsap from 'gsap'
import { useViewMode } from '../composables/useViewMode'

const mode = useViewMode()
const track = ref<HTMLElement | null>(null)
let ctx: gsap.Context | null = null

const lines = [
  '$ jest --coverage --watchAll=false',
  '// Monolithic Express + typed route handlers',
  '// Vue 3 SFCs + TypeScript (script-setup pattern)',
  'type Booking = Awaited<ReturnType<typeof createAsyncPipeline>>',
  'suspend fun driverChannel(): Flow<LocationUpdate> // Kotlin entrypoint',
  'pnpm build && vite preview',
]

function mountAnim() {
  if (!track.value) return
  ctx?.revert()
  ctx = gsap.context(() => {
    const el = track.value
    if (!el) return
    const half = el.scrollHeight > 0 ? el.scrollHeight / 2 : 200
    gsap.fromTo(
      el,
      { y: 0 },
      {
        y: -half,
        duration: 22,
        ease: 'none',
        repeat: -1,
      },
    )
  }, track.value)
}

onMounted(() => {
  watch(
    mode,
    async (m) => {
      if (m === 'architect') {
        await nextTick()
        mountAnim()
      } else {
        ctx?.revert()
        ctx = null
        if (track.value) gsap.set(track.value, { clearProps: 'transform' })
      }
    },
    { immediate: true },
  )
})

onBeforeUnmount(() => {
  ctx?.revert()
})
</script>

<template>
  <div
    class="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl opacity-40"
    aria-hidden="true"
  >
    <div
      v-if="mode === 'architect'"
      class="absolute inset-0 bg-gradient-to-b from-tcx-bg via-transparent to-tcx-bg"
    />
    <div
      ref="track"
      class="absolute inset-x-0 top-0 space-y-1 px-4 pt-8 font-mono text-[11px] leading-relaxed text-tcx-muted/60"
    >
      <p v-for="(line, i) in lines" :key="i" class="whitespace-nowrap">{{ line }}</p>
      <p v-for="(line, i) in lines" :key="'dup-' + i" class="whitespace-nowrap">{{ line }}</p>
    </div>
  </div>
</template>
