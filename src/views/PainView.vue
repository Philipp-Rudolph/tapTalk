<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
    <TileButton
      emoji="🤕"
      text="Kopf"
      color="bg-red-200"
      @click="$emit('speak', 'Mein Kopf tut weh')"
    />
    <TileButton
      emoji="💪"
      text="Arm"
      color="bg-orange-200"
      @click="$emit('speak', 'Mein Arm tut weh')"
    />
    <TileButton
      emoji="🦵"
      text="Bein"
      color="bg-yellow-200"
      @click="$emit('speak', 'Mein Bein tut weh')"
    />
    <TileButton
      emoji="🫁"
      text="Brust"
      color="bg-red-300"
      @click="$emit('speak', 'Meine Brust tut weh')"
    />
    <TileButton
      emoji="🔥"
      text="Bauch"
      color="bg-orange-300"
      @click="$emit('speak', 'Mein Bauch tut weh')"
    />
    <TileButton
      emoji="💊"
      text="Medikament"
      color="bg-blue-200"
      @click="$emit('speak', 'Ich brauche mein Medikament')"
    />
  </div>
</template>

<script setup>
import TileButton from '../components/TileButton.vue'

defineEmits(['speak'])
</script>
