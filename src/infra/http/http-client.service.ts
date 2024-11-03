import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'

import { HttpClient, HttpClientRequest, HttpClientResponse } from './http-client'

import envConfig from '@/main/config/env-config'

export class HttpClientService implements HttpClient {
  private http: AxiosInstance

  constructor(private readonly baseURL: string = envConfig.BASE_URL) {
    this.http = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  async request<T = unknown>(props: HttpClientRequest): Promise<HttpClientResponse<T>> {
    const { headers, url, method = 'GET', body, params } = props

    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await this.http.request<T>({
        url,
        method,
        headers,
        params,
        data: body,
      })
    } catch (e) {
      axiosResponse = (e as AxiosError).response!
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    }
  }
}
