<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
    <TileButton
      emoji="👨‍⚕️"
      text="Pfleger/in"
      color="bg-blue-200"
      @click="$emit('speak', 'Bitte rufen Sie die Pflegeperson')"
    />
    <TileButton
      emoji="👨‍⚕️"
      text="Arzt/Ärztin"
      color="bg-red-200"
      @click="$emit('speak', 'Bitte rufen Sie den Arzt')"
    />
    <TileButton
      emoji="👨‍👩‍👧"
      text="Familie"
      color="bg-green-200"
      @click="$emit('speak', 'Ich möchte meine Familie sehen')"
    />
    <TileButton
      emoji="👋"
      text="Besuch"
      color="bg-yellow-200"
      @click="$emit('speak', 'Ich möchte Besuch empfangen')"
    />
    <TileButton
      emoji="🚪"
      text="Allein sein"
      color="bg-purple-200"
      @click="$emit('speak', 'Ich möchte allein sein')"
    />
    <TileButton
      emoji="⏰"
      text="Später sprechen"
      color="bg-orange-200"
      @click="$emit('speak', 'Später bitte')"
    />
  </div>
</template>

<script setup>
import TileButton from '../components/TileButton.vue'

defineEmits(['speak'])
</script>
