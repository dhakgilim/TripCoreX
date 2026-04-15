<script setup lang="ts">
import PhilosophyTile from './tiles/PhilosophyTile.vue'
import MinnDriveTile from './tiles/MinnDriveTile.vue'
import RefactorTile from './tiles/RefactorTile.vue'
import EnterpriseTile from './tiles/EnterpriseTile.vue'
import FleetTile from './tiles/FleetTile.vue'
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 pb-20 sm:px-6" aria-label="Capabilities">
    <div class="grid auto-rows-fr gap-4 sm:gap-5 md:grid-cols-6">
      <div class="md:col-span-3">
        <PhilosophyTile />
      </div>
      <div class="md:col-span-3">
        <MinnDriveTile />
      </div>
      <div class="md:col-span-2">
        <RefactorTile />
      </div>
      <div class="md:col-span-4">
        <EnterpriseTile />
      </div>
      <div class="md:col-span-6">
        <FleetTile />
      </div>
    </div>
  </section>
</template>
