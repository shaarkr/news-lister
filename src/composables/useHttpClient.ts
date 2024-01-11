import { ref } from 'vue'
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'

export default function useHttpClient<T>() {
  const loading = ref(false)
  const error = ref<string | null>('')
  const data = ref<T | null>(null)

  const httpClient = axios.create({
    baseURL: 'https://content.guardianapis.com',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      'api-key': 'test',
    },
  })

  const request = async <U>(options: AxiosRequestConfig) => {
    loading.value = true
    try {
      const response: AxiosResponse = await httpClient<U>(options)
      data.value = response.data
      error.value = null
    } catch (err) {
      data.value = null
      error.value = (err as Error).message
    } finally {
      loading.value = false
    }
  }

  return { loading, error, data, request }
}
