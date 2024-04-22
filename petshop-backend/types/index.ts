export type Price = {
  small: number
  big: number
}

export type PetShop = {
  name: string
  distanceInKm: number
  price: {
    normal: Price
    weekend: Price
  }
}

export type WorthablePetshop = {
  distance: number,
  name: string,
  finalPrice: number
}

export type QueriablePetshop = {
  name: string
  normal_small_dog_price: number
  normal_big_dog_price: number
  weekend_small_dog_price: number
  weekend_big_dog_price: number
  distance: number
}