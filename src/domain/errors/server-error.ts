export class ServerError extends Error {
  constructor(message?: string) {
    super(message ?? 'Falha no sistema, tente novamente mais tarde.')
    this.name = 'ServerError'
  }
}
