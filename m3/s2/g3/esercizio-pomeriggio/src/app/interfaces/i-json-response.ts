import { iProduct } from "./i-product"

export interface IJsonResponse {
  products: iProduct[]
  total: number
  skip: number
  limit: number
}
