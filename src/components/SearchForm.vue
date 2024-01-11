<template>
  <form
    class="relative w-full max-w-96"
    type="submit"
    @submit.prevent="handleSubmit">
    <label for="Search" class="sr-only"> Search </label>

    <input
      type="text"
      id="Search"
      :value="query"
      @input="handleInput"
      placeholder="Search for..."
      class="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
      v-click-outside="() => (open = false)" />

    <span class="absolute inset-y-0 end-0 grid w-10 place-content-center">
      <button type="button" class="text-gray-600 hover:text-gray-700">
        <span class="sr-only">Search</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-4 w-4">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </button>
    </span>

    <div
      id="datalist"
      v-show="isVisible"
      class="absolute start-0 end-0 z-10 mt-2 rounded-md border border-gray-100 bg-white shadow-lg"
      role="list">
      <ul class="p-2">
        <li
          v-for="suggestion in suggestions"
          :key="suggestion"
          @click="handleSelect(suggestion)"
          class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 hover:cursor-pointer active:bg-gray-100"
          role="menuitem">
          {{ suggestion }}
        </li>
      </ul>
    </div>
  </form>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import debounce from 'debounce'
import vClickOutside from '../directives/click-outside.ts'

interface Props {
  query: string
  suggestions?: string[]
}

const props = defineProps<Props>()
const emits = defineEmits(['search'])

const open = ref(false)

const debouncedSearch = debounce((newVal: string) => {
  emits('search', newVal)
}, 500)

const handleSubmit = () => {
  debouncedSearch(props.query)
}

const handleSelect = (suggestion: string) => {
  debouncedSearch(suggestion)
  open.value = false
}

const handleInput = (ev: Event) => {
  open.value = true
  const { target } = ev
  debouncedSearch((target as HTMLInputElement).value)
}

const isVisible = computed(() => {
  return open.value && !!props.suggestions?.length
})
</script>
