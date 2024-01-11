<template>
  <div class="inline-flex items-center justify-center gap-3" v-if="total > 0">
    <button
      @click="$emit('paginate', current - 1)"
      :disabled="current === 1"
      class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-200 bg-white text-gray-900 disabled:text-gray-400 disabled:border-gray-100 hover:cursor-pointer disabled:hover:cursor-not-allowed">
      <span class="sr-only">Prev Page</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-3 w-3"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clip-rule="evenodd" />
      </svg>
    </button>

    <p class="text-xs text-gray-900">
      {{ current }}
      <span class="mx-0.25">/</span>
      {{ total }}
    </p>

    <button
      @click="$emit('paginate', current + 1)"
      :disabled="current === total"
      class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-200 bg-white text-gray-900 disabled:text-gray-400 disabled:border-gray-100 hover:cursor-pointer disabled:hover:cursor-not-allowed">
      <span class="sr-only">Next Page</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-3 w-3"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

interface Props {
  total: number
}
defineProps<Props>()

const route = useRoute()

const current = computed(() => +route.params.page)
</script>
