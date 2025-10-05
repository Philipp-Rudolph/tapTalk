<template>
  <button
    @click="handleClick"
    :class="[
      sizeClasses,
      color,
      'rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95',
      'flex flex-col items-center justify-center gap-3 p-6 border-4 border-white/30'
    ]"
  >
    <span class="text-5xl md:text-6xl">{{ emoji }}</span>
    <span class="text-xl md:text-2xl font-bold text-gray-800 text-center leading-tight">
      {{ text }}
    </span>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  emoji: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'normal',
    validator: (value) => ['small', 'normal', 'large', 'xlarge'].includes(value)
  }
})

const emit = defineEmits(['click'])

const sizeClasses = computed(() => {
  const sizes = {
    large: 'min-h-[180px]',
    normal: 'min-h-[150px]',
    small: 'min-h-[120px]'
  }
  return sizes[props.size]
})

const handleClick = () => {
  emit('click')
}
</script>
