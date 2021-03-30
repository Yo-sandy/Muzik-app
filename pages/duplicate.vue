<template>
  <div class=progress>
    <div class=progress_duration aria-hidden=true>{{ duration }}</div>
    <label class=progress_bar for=progbar>
      <span class=-sr-only>Track progress {{ barWidth }}%</span>
      <!-- Change to a range input, so AT devices may also skip during a track - Once this has changed the project will be considered complete.-->
      <progress id=progBar class=progress_current
                max=100 aria-hidden=true
                :value=barWidth
                ref=progress @click=progressTrack>
      </progress>
    </label>
    <div class=progress_time aria-hidden=true>{{ currentTime }}</div>
  </div>

</template>

<script>
export default {
name: "duplicate",

}
</script>

<style scoped>

</style>
