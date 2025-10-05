<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="bg-white rounded-2xl shadow-lg p-4 mb-6 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <button
            v-if="currentView !== 'main'"
            @click="currentView = 'main'"
            class="p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <h1 class="text-2xl md:text-3xl font-bold text-gray-800">
            {{ viewTitle }}
          </h1>
        </div>
        <button
          @click="currentView = 'main'"
          class="p-3 bg-indigo-100 rounded-xl hover:bg-indigo-200 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </button>
      </div>

      <!-- Main Content -->
      <div class="mb-6">
        <component :is="currentViewComponent" @navigate="navigateToView" @speak="addToHistory" />
      </div>

      <!-- History -->
      <div v-if="history.length > 0" class="bg-white rounded-2xl shadow-lg p-4">
        <div class="flex items-center gap-2 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
          <h2 class="text-xl font-bold text-gray-800">Verlauf</h2>
        </div>
        <div class="space-y-2 max-h-40 overflow-y-auto">
          <div
            v-for="(item, index) in reversedHistory"
            :key="index"
            class="bg-gray-50 rounded-lg p-3 flex justify-between items-center"
          >
            <span class="text-gray-700">{{ item.text }}</span>
            <span class="text-sm text-gray-500">{{ item.timestamp }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useSpeech } from './composables/useSpeech'
import MainView from './views/MainView.vue'
import FoodView from './views/FoodView.vue'
import PainView from './views/PainView.vue'
import FeelingsView from './views/FeelingsView.vue'
import PeopleView from './views/PeopleView.vue'
import ComfortView from './views/ComfortView.vue'

const currentView = ref('main')
const history = ref([])

const { speak } = useSpeech()

const addToHistory = (text) => {
  const timestamp = new Date().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })
  history.value.push({ text, timestamp })
  speak(text)
}

const navigateToView = (view) => {
  currentView.value = view
}

const viewTitle = computed(() => {
  const titles = {
    main: 'Kommunikationshilfe',
    food: 'Hunger & Durst',
    pain: 'Schmerzen',
    feelings: 'Gefühle',
    people: 'Personen',
    comfort: 'Komfort'
  }
  return titles[currentView.value] || 'Kommunikationshilfe'
})

const currentViewComponent = computed(() => {
  const views = {
    main: MainView,
    food: FoodView,
    pain: PainView,
    feelings: FeelingsView,
    people: PeopleView,
    comfort: ComfortView
  }
  return views[currentView.value] || MainView
})

const reversedHistory = computed(() => {
  return [...history.value].reverse()
})
</script>
