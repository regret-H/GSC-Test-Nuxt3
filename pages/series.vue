<template>
  <div>
    <h2 class="text-3xl font-bold mb-6">{{ seriesText }}</h2>
    
    <div class="space-y-6">
      <div v-for="series in seriesList" :key="series.id" class="bg-white rounded-lg shadow-sm p-6">
        <h3 class="text-xl font-semibold mb-4">{{ series.title }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div v-for="video in series.videos" :key="video.id" class="aspect-video bg-gray-200 rounded flex items-center justify-center">
            <span class="text-gray-500">{{ video.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const { locale } = useI18n()

const seriesText = computed(() => {
  return locale.value === 'en' ? 'Series' : '系列'
})

const seriesList = [
  {
    id: 1,
    title: 'Series 1',
    videos: [
      { id: 1, title: 'Episode 1' },
      { id: 2, title: 'Episode 2' },
      { id: 3, title: 'Episode 3' }
    ]
  },
  {
    id: 2,
    title: 'Series 2',
    videos: [
      { id: 1, title: 'Episode 1' },
      { id: 2, title: 'Episode 2' }
    ]
  }
]
</script>