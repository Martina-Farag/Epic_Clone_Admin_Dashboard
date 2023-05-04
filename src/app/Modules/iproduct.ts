export interface IProduct {
    _id : any,
    gameName : string,
    Description : string,
    // Img ?: string,   // (?) : not required 
    // CategoryID : number,
    // IsPurshased: boolean,
    Count ?: number,
    IsDeleted ?: boolean,
    
    Developer: string,
    mostPopular: false,
    topSeller: true,
    mostPlayed: false,
    Photos: [],
    VideoURL: string,
    Rating: number,
    Price: string,
    Genres: [],
    createdAt: string,
    updatedAt: string,
    platForm: string,
    publisherName: string,
    Discription_ar: string
}
