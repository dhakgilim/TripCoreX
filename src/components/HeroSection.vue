<script setup lang="ts">
import { Sparkles } from 'lucide-vue-next'
import { useViewMode } from '../composables/useViewMode'
import CodeMarquee from './CodeMarquee.vue'

const mode = useViewMode()
</script>

<template>
  <section class="relative mx-auto max-w-6xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14">
    <CodeMarquee />
    <div class="relative z-10 mx-auto max-w-3xl text-center">
      <p
        class="mb-4 inline-flex items-center gap-2 rounded-full border border-tcx-border bg-tcx-surface/80 px-3 py-1 text-xs font-medium uppercase tracking-wider text-tcx-muted"
      >
        <Sparkles class="size-3.5 text-tcx-accent" aria-hidden="true" />
        The bridge
      </p>
      <h1
        class="text-balance text-4xl font-semibold tracking-tight text-tcx-fg sm:text-5xl md:text-6xl"
      >
        <template v-if="mode === 'architect'">
          The operator-engineer stack: intent, architecture, shipped systems.
        </template>
        <template v-else>Reliability, cost-savings, ease of use—it just works.</template>
      </h1>
      <p class="mx-auto mt-5 max-w-2xl text-pretty text-base text-tcx-muted sm:text-lg">
        <template v-if="mode === 'architect'">
          We bridge business ownership, consumer ease, and technical depth—monolithic Express
          where it fits, Vue 3 SFCs, TypeScript, Kotlin entrypoints, asynchronous logic, and Jest
          testing so “magic” stays observable.
        </template>
        <template v-else>
          TripCoreX sits between what you want the business to do, what customers feel, and what
          has to stay boring and correct under the hood—without you becoming a part-time engineer.
        </template>
      </p>
    </div>
  </section>
</template>
