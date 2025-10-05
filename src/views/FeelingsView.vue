<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
    <TileButton
      emoji="😊"
      text="Glücklich"
      color="bg-yellow-200"
      @click="$emit('speak', 'Ich bin glücklich')"
    />
    <TileButton
      emoji="😢"
      text="Traurig"
      color="bg-blue-200"
      @click="$emit('speak', 'Ich bin traurig')"
    />
    <TileButton
      emoji="😰"
      text="Ängstlich"
      color="bg-purple-200"
      @click="$emit('speak', 'Ich habe Angst')"
    />
    <TileButton
      emoji="😤"
      text="Frustriert"
      color="bg-red-200"
      @click="$emit('speak', 'Ich bin frustriert')"
    />
    <TileButton
      emoji="😕"
      text="Verwirrt"
      color="bg-gray-300"
      @click="$emit('speak', 'Ich bin verwirrt')"
    />
    <TileButton
      emoji="🥰"
      text="Dankbar"
      color="bg-pink-200"
      @click="$emit('speak', 'Ich bin dankbar')"
    />
  </div>
</template>

<script setup>
import TileButton from '../components/TileButton.vue'

defineEmits(['speak'])
</script>
