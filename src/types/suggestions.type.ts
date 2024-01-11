export interface SuggestionResponse {
  response: Response
}

export interface Response {
  status: string
  userTier: string
  total: number
  startIndex: number
  pageSize: number
  currentPage: number
  pages: number
  results: Suggestion[]
}

export interface Suggestion {
  id: string
  type: string
  sectionId?: string
  sectionName?: string
  webTitle: string
  webUrl: string
  apiUrl: string
  references: any[]
  bio?: string
  firstName?: string
  lastName?: string
}
