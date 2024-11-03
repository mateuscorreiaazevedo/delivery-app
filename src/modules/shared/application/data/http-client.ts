export interface HttpClientRequest {
  url: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  headers?: Record<string, string>
  params?: Record<string, string>
  body?: unknown
}

export interface HttpClientResponse<T = unknown> {
  statusCode: number
  body: T
}

export abstract class HttpClient {
  abstract request<T = unknown>(props: HttpClientRequest): Promise<HttpClientResponse<T>>
}
