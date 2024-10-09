import { iPost } from "./i-post"

export interface iJSONresponse {
  posts: iPost[]
  total: number
  skip: number
  limit: number
}
