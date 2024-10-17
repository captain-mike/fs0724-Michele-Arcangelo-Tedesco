export interface iProduct {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand: string
  sku: string
  weight: number
  dimensions: iDimensions
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: iReview[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: iMeta
  thumbnail: string
  images: string[]
}

export interface iDimensions {
  width: number
  height: number
  depth: number
}

export interface iReview {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}

export interface iMeta {
  createdAt: string
  updatedAt: string
  barcode: string
  qrCode: string
}
