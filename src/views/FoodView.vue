<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
    <TileButton
      emoji="💧"
      text="Wasser"
      color="bg-blue-200"
      @click="$emit('speak', 'Ich möchte Wasser')"
    />
    <TileButton
      emoji="☕"
      text="Kaffee / Tee"
      color="bg-amber-200"
      @click="$emit('speak', 'Ich möchte Kaffee oder Tee')"
    />
    <TileButton
      emoji="🥤"
      text="Saft"
      color="bg-orange-200"
      @click="$emit('speak', 'Ich möchte Saft')"
    />
    <TileButton
      emoji="🍽️"
      text="Essen (warm)"
      color="bg-red-200"
      @click="$emit('speak', 'Ich möchte warmes Essen')"
    />
    <TileButton
      emoji="🥗"
      text="Essen (kalt)"
      color="bg-green-200"
      @click="$emit('speak', 'Ich möchte kaltes Essen')"
    />
    <TileButton
      emoji="🍰"
      text="Etwas Süßes"
      color="bg-pink-200"
      @click="$emit('speak', 'Ich möchte etwas Süßes')"
    />
  </div>
</template>

<script setup>
import TileButton from '../components/TileButton.vue'

defineEmits(['speak'])
</script>
