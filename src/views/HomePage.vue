<template>
  <!-- search form -->
  <div
    class="flex items-center justify-center p-4 fixed top-16 start-0 end-0 bg-gray-50 z-50 shadow-sm">
    <search-form
      :query="articlesStore.query"
      @search="handleSearch"
      :suggestions="articlesStore.keywordSuggestions" />
  </div>

  <alert-message v-if="articlesStore.error">
    {{ articlesStore.error }}
  </alert-message>

  <!-- news list -->
  <div class="bg-white py-6 mt-16">
    <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
      <div class="flex flex-row flex-wrap">
        <div class="flex-shrink max-w-full w-full overflow-hidden">
          <div class="w-full py-3">
            <p
              v-if="articlesStore.loading"
              class="px-4 text-gray-600 font-semibold text-lg text-center">
              Loading...
            </p>
            <h2
              class="my-4 text-gray-800 text-2xl font-bold text-center"
              v-else-if="!articlesStore.hasResults">
              No news articles found for "{{ articlesStore.query }}"
            </h2>
            <h2 v-else class="text-gray-800 text-2xl font-bold">
              <span class="inline-block h-5 border-l-4 border-red-600 mr-2" />
              Results
            </h2>
          </div>
          <router-view />
        </div>
      </div>
    </div>
  </div>

  <!-- footer -->
  <div class="p-4 w-full flex items-center justify-center">
    <app-pagination
      :total="articlesStore.totalItems"
      @paginate="handlePagination" />
  </div>
</template>

<script setup lang="ts">
import SearchForm from '../components/SearchForm.vue'
import AppPagination from '../components/AppPagination.vue'
import AlertMessage from '../components/AlertMessage.vue'
import { useArticlesStore } from '../store/useArticlesStore'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const articlesStore = useArticlesStore()

const handleSearch = (query: string) => {
  articlesStore.setQuery(query)
  articlesStore.fetchSuggestions()

  // if paginated, return to home page
  if (route.params.page !== '1') {
    router.push({ name: 'Home' })
  } else {
    articlesStore.fetchNews()
  }
}

const handlePagination = (page: number) => {
  router.push({ name: 'Results', params: { page } })
}
</script>
