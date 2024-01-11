<template>
  <div class="flex flex-col flex-wrap -mx-3">
    <div
      v-for="article in articlesStore.articles"
      :key="article.id"
      class="flex-shrink max-w-full w-full px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
      <news-article :article="article" @search="handleQuickSearch" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import NewsArticle from '../components/NewsArticle.vue'
import { useArticlesStore } from '../store/useArticlesStore'

const route = useRoute()
const router = useRouter()
const articlesStore = useArticlesStore()

const handleQuickSearch = (query: string) => {
  articlesStore.setQuery(query)

  // if paginated, return to home page
  if (route.params.page !== '1') {
    router.push({ name: 'Home' })
  } else {
    articlesStore.fetchNews()
  }
}

watch(
  () => route.params,
  async () => {
    articlesStore.fetchNews(+route.params.page)
  },
  { immediate: true }
)
</script>
