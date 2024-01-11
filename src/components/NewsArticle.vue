<template>
  <article class="flex bg-teal-50 transition duration-100 hover:shadow-xl mb-2">
    <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
      <time
        :datetime="formattedDateTime.date"
        class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900">
        <span>{{ formattedDateTime.year }}</span>
        <span class="w-px flex-1 bg-gray-900/10"></span>
        <span>{{ formattedDateTime.day }}</span>
      </time>
    </div>

    <div class="flex flex-col md:flex-row">
      <a
        class="max-h-36 sm:basis-56 sm:max-h-full"
        :href="article.webUrl"
        target="_blank">
        <img
          :alt="article.webTitle"
          :src="thumbnailImg"
          class="aspect-square h-full w-full object-cover" />
      </a>

      <div class="flex flex-1 flex-col justify-between">
        <div
          class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6 sm:pt-3">
          <a :href="article.webUrl" target="_blank">
            <h3 class="font-bold uppercase text-gray-900">
              {{ article.webTitle }}
            </h3>
          </a>

          <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
            {{ article.fields.trailText }}
          </p>
        </div>
      </div>

      <div class="sm:flex sm:items-end sm:justify-end">
        <button
          v-for="tag in tags"
          :key="tag.id"
          @click="$emit('search', tag.webTitle)"
          class="block bg-gray-100 px-2 sm:px-5 py-1 sm:py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-gray-200">
          {{ tag.webTitle }}
        </button>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Article } from '../types/article.type'

interface Props {
  article: Article
}
const props = defineProps<Props>()

const formattedDateTime = computed(() => {
  const datetime = props.article.webPublicationDate

  const year = new Date(datetime).getUTCFullYear()

  const day = new Date(datetime).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })

  const date = datetime.split('T')[0]

  return { day, year, date }
})

const thumbnailImg = computed(() => {
  return (
    props.article.fields.thumbnail || 'https://picsum.photos/id/237/200/300'
  )
})

const tags = computed(() => props.article.tags.slice(0, 2))
</script>
