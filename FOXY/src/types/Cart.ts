export type CartItem = {
    image:string | undefined
    slug: string
    quantity: number
    countInStock : number
    price: number
    _id : string
    name: string
}
export type ShippingAddress ={
     fullName: string
     address: string
     city : string
     country : string
     postalCode: string

}
export type Cart  ={
    cartItems: any
    itemsPrice:number
    shippingPrice:number
    taxPrice:number
    totalPrice:number
    cartItmes: CartItem[]
    shippingAddress: ShippingAddress
    paymentMethod:string 
}
