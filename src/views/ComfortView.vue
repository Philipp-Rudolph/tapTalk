<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
    <TileButton
      emoji="🔄"
      text="Position ändern"
      color="bg-blue-200"
      @click="$emit('speak', 'Bitte helfen Sie mir, meine Position zu ändern')"
    />
    <TileButton
      emoji="🛏️"
      text="Kissen richten"
      color="bg-purple-200"
      @click="$emit('speak', 'Bitte richten Sie mein Kissen')"
    />
    <TileButton
      emoji="🧣"
      text="Decke"
      color="bg-pink-200"
      @click="$emit('speak', 'Ich brauche eine Decke')"
    />
    <TileButton
      emoji="🥶"
      text="Mir ist kalt"
      color="bg-cyan-200"
      @click="$emit('speak', 'Mir ist kalt')"
    />
    <TileButton
      emoji="🥵"
      text="Mir ist warm"
      color="bg-red-200"
      @click="$emit('speak', 'Mir ist warm')"
    />
    <TileButton
      emoji="🪟"
      text="Fenster / Licht"
      color="bg-yellow-200"
      @click="$emit('speak', 'Bitte öffnen/schließen Sie das Fenster oder ändern Sie das Licht')"
    />
  </div>
</template>

<script setup>
import TileButton from '../components/TileButton.vue'

defineEmits(['speak'])
</script>
