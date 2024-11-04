import { BadRequestError, ServerError, UnexpectedError } from '@/domain/errors'
import { HttpClientResponse, HttpStatusCode } from '@/infra/http/http-client'

export class HttpClientResponseHandle {
  static handle<T = unknown>({ statusCode, body }: HttpClientResponse<T>): T {
    switch (statusCode) {
      case HttpStatusCode.OK:
        return body!
      case HttpStatusCode.CREATED:
        return body!
      case HttpStatusCode.BAD_REQUEST:
        throw new BadRequestError((body as any).error)
      case HttpStatusCode.SERVER_ERROR:
        throw new ServerError((body as any).error)
      default:
        throw new UnexpectedError()
    }
  }
}
