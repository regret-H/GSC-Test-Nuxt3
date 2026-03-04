<template>
  <div>
    <h2 class="text-3xl font-bold mb-6">{{ welcomeText }}</h2>
    <p class="mb-8">{{ descriptionText }}</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="video in videos" :key="video.id" class="bg-white rounded-lg shadow-sm p-4">
        <div class="aspect-video bg-gray-200 rounded mb-4 flex items-center justify-center">
          <span class="text-gray-500">{{ video.title }}</span>
        </div>
        <h3 class="text-lg font-semibold mb-2">{{ video.title }}</h3>
        <p class="text-gray-600 text-sm">{{ video.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const { locale } = useI18n()

const welcomeText = computed(() => {
  return locale.value === 'en' ? 'Welcome to our video website' : '欢迎来到我们的视频网站'
})

const descriptionText = computed(() => {
  return locale.value === 'en' ? 'This is a video website with multiple series' : '这是一个包含多个系列的视频网站'
})

const videos = [
  {
    id: 1,
    title: 'Video 1',
    description: 'This is the first video'
  },
  {
    id: 2,
    title: 'Video 2',
    description: 'This is the second video'
  },
  {
    id: 3,
    title: 'Video 3',
    description: 'This is the third video'
  }
]
</script>
