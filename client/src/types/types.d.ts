export interface Product {
  name: string
  price: number
  category: string
  description?: string
  image: string
  quantity: number
  productId: string
  id?: string
}

export interface User {
  username: string
  email: string
  password?: string
  confirmPassword?: string
  rol?: string
  id?: string
}
