export const foodEndpointsConstants = {
  getAll: '/foods',
  getById: (key: string | number) => `/foods/${key}`,
}
