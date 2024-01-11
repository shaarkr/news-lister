export interface ArticleResponse {
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
  orderBy: string
  results: Article[]
}

export interface Article {
  id: string
  type: string
  sectionId: string
  sectionName: string
  webPublicationDate: string
  webTitle: string
  webUrl: string
  apiUrl: string
  isHosted: boolean
  pillarId: string
  pillarName: string
  fields: Fields
  tags: Tag[]
}

export interface Fields {
  headline: string
  thumbnail: string
  trailText: string
}

export interface Tag {
  id: string
  type: string
  sectionId: string
  sectionName: string
  webTitle: string
  webUrl: string
  apiUrl: string
  references: any[]
  description?: string
}
