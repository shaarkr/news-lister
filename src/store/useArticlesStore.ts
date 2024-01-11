import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { ArticleResponse } from '../types/article.type'
import useHttpClient from '../composables/useHttpClient'
import { SuggestionResponse } from '../types/suggestions.type'

export const useArticlesStore = defineStore('articles', () => {
  const query = ref('')
  const router = useRouter()

  const {
    data: news,
    loading,
    request: loadNews,
    error,
  } = useHttpClient<ArticleResponse>()

  const fetchNews = (page = 1) => {
    loadNews({
      method: 'GET',
      url: `/search?q=${query.value}&show-fields=thumbnail,headline,trailText&show-tags=keyword&page=${page}&page-size=10`,
    })
  }

  const { data: suggestions, request: loadSuggestions } =
    useHttpClient<SuggestionResponse>()

  const keywordSuggestions = computed(() => {
    return suggestions.value?.response.results
      .filter((item) => item.type === 'keyword')
      .map((item) => item.webTitle)
  })

  const fetchSuggestions = () => {
    loadSuggestions({
      method: 'GET',
      url: `/tags?show-references=all&q=${query.value}&page=1&page-size=5`,
    })
  }

  const articles = computed(() => news.value?.response.results ?? [])

  const totalItems = computed(() => news.value?.response.total ?? 0)

  const hasResults = computed(() => !!news.value?.response.results.length)

  function setQuery(searchKey: string) {
    query.value = searchKey
  }

  watch(query, () => {
    router.push({ name: 'Home' })
  })

  return {
    articles,
    query,
    loading,
    error,
    keywordSuggestions,
    totalItems,
    hasResults,
    fetchNews,
    fetchSuggestions,
    setQuery,
  }
})
