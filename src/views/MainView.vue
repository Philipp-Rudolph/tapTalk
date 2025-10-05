<template>
  <div class="space-y-8">
    <!-- Yes/No Primary Buttons -->
    <div class="grid grid-cols-2 gap-4 md:gap-6">
      <TileButton
        emoji="👍"
        text="JA"
        color="bg-green-300"
        size="large"
        @click="$emit('speak', 'Ja')"
      />
      <TileButton
        emoji="👎"
        text="NEIN"
        color="bg-red-300"
        size="large"
        @click="$emit('speak', 'Nein')"
      />
    </div>

    <!-- Other Options -->
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      <TileButton
        emoji="🍽️"
        text="Hunger / Durst"
        color="bg-orange-200"
        @click="$emit('navigate', 'food')"
      />
      <TileButton
        emoji="⚡"
        text="Schmerzen"
        color="bg-red-200"
        @click="$emit('navigate', 'pain')"
      />
      <TileButton
        emoji="🚽"
        text="Toilette"
        color="bg-blue-200"
        @click="$emit('speak', 'Ich muss zur Toilette')"
      />
      <TileButton
        emoji="😴"
        text="Müde / Ruhe"
        color="bg-purple-200"
        @click="$emit('speak', 'Ich bin müde und möchte ruhen')"
      />
      <TileButton
        emoji="😊"
        text="Gefühle"
        color="bg-yellow-200"
        @click="$emit('navigate', 'feelings')"
      />
      <TileButton
        emoji="👤"
        text="Personen"
        color="bg-pink-200"
        @click="$emit('navigate', 'people')"
      />
      <TileButton
        emoji="🛋️"
        text="Komfort"
        color="bg-teal-200"
        @click="$emit('navigate', 'comfort')"
      />
    </div>
  </div>
</template>

<script setup>
import TileButton from '../components/TileButton.vue'

defineEmits(['navigate', 'speak'])
</script>
