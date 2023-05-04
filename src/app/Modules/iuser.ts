// _id
// 6434147190b98fa23f12f903
// country
// "kkkcountry"
// firstName
// "fkkk"
// lastName
// "lkkk"
// email
// "kkk@gmail.com"
// password
// "$2b$12$MI5jLVJa0nh7vbOrmM.jYuwlcnKJW0W1kiXEIm.JfdzesgpDzZMl."
// preferredLanguage
// "english"
// dateOfBirth
// 1999-11-27T00:00:00.000+00:00

// purchaseHistory
// Array

// wishList
// Array
// cart
// Array
// createdAt
// 2023-04-10T13:51:45.969+00:00
// updatedAt
// 2023-04-10T13:51:45.969+00:00
// __v
// 0

export interface IUser {
    _id: any,
    country:string,
    firstName:string,
    lastName: string,
    email: string,
    password: string,
    preferredLanguage:string,
    dateOfBirth:Date,
    purchaseHistory:[],
    wishList:[],
    cart:[],
    createdAt: string,
    updatedAt: string

    // MobileNo: string[],
    // Address: {city: string, street: string, code: number},
    
    // referral:string,
    // refOther:string
}
