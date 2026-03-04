<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow-sm">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold">Video Website</h1>
        <nav>
          <ul class="flex space-x-6">
            <li><NuxtLink to="/" :title="homeText">{{ homeText }}</NuxtLink></li>
            <li><NuxtLink to="/series" :title="seriesText">{{ seriesText }}</NuxtLink></li>
            <li>
              <select v-model="selectedLocale" @change="switchLocale" class="border rounded px-2 py-1">
                <option value="en">English</option>
                <option value="zh">中文</option>
              </select>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="container mx-auto px-4 py-8">
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const { locale, setLocale } = useI18n()
useHead({
  meta: [
    {
      name: 'google-site-verification',
      content: 'dqa4YEhRzAeYdFGjUC7K8WZfmh-d4CS3ljsNsc3pZus'
    }
  ]
})
const selectedLocale = ref(locale.value)

const homeText = computed(() => {
  return selectedLocale.value === 'en' ? 'Home' : '首页'
})

const seriesText = computed(() => {
  return selectedLocale.value === 'en' ? 'Series' : '系列'
})

const switchLocale = () => {
  setLocale(selectedLocale.value)
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

a {
  color: #333;
  text-decoration: none;
}

li {
  list-style: none;
}
</style>
