import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Modules/iproduct';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  // Day7
  private httpOptions = {};
  productList:IProduct[] = [];
  // sum:Observable = 0 as Observable;
  // sum:Observable<Number> ;

  constructor(private httpClient:HttpClient) {    // HttpClient carries all database methods (get, post, patch, put, delete...)

    this.httpOptions={
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json',
          Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDBjYjcwZWMxNTIwNWE5NTk0OGIzMjciLCJkaXNwbGF5TmFtZSI6InNhZmEiLCJpYXQiOjE2ODExMzI4ODJ9.Xb5CHrdvSQg5DiFw99Pvt9LWHHgVaGGwNJHC9LqQ5nY'
        })
    };

  }   
  
  // get all products                
  getAllProducts():Observable<IProduct[]>{ 
    // const headers = {authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDBjYjcwZWMxNTIwNWE5NTk0OGIzMjciLCJkaXNwbGF5TmFtZSI6InNhZmEiLCJpYXQiOjE2ODExMzI4ODJ9.Xb5CHrdvSQg5DiFw99Pvt9LWHHgVaGGwNJHC9LqQ5nY'};
    // const path = `http://localhost:5555/Games`;

    return this.httpClient.get<IProduct[]>(`http://localhost:5555/Games`,this.httpOptions)
    // {headers: new HttpHeaders()
    // .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDBjYjcwZWMxNTIwNWE5NTk0OGIzMjciLCJkaXNwbGF5TmFtZSI6InNhZmEiLCJpYXQiOjE2ODExMzI4ODJ9.Xb5CHrdvSQg5DiFw99Pvt9LWHHgVaGGwNJHC9LqQ5nY')})
  //   .subscribe((res: Iproduct[]) => {
  //     this.productList = res;
  //  })
  }

  // get products by category id     // http://localhost:3000/Products?CateogryID=3
  getProductsByCategoryId(categoryId:any):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`http://localhost:5555/Games/genres/${categoryId}`,this.httpOptions)
    // {headers: new HttpHeaders()
    // .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDBjYjcwZWMxNTIwNWE5NTk0OGIzMjciLCJkaXNwbGF5TmFtZSI6InNhZmEiLCJpYXQiOjE2ODExMzI4ODJ9.Xb5CHrdvSQg5DiFw99Pvt9LWHHgVaGGwNJHC9LqQ5nY')});
  }
  
  // get product by id               
  getProductByID(prdID:any):Observable<IProduct>{
    return this.httpClient.get<IProduct>(`http://localhost:5555/Games/${prdID}`, this.httpOptions)
    // {headers: new HttpHeaders()
    // .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDBjYjcwZWMxNTIwNWE5NTk0OGIzMjciLCJkaXNwbGF5TmFtZSI6InNhZmEiLCJpYXQiOjE2ODExMzI4ODJ9.Xb5CHrdvSQg5DiFw99Pvt9LWHHgVaGGwNJHC9LqQ5nY')})
  }

  // add new product
  addNewProduct(product:IProduct):Observable<IProduct>{
    return this.httpClient.post<IProduct>(`http://localhost:5555/Games`,JSON.stringify(product),this.httpOptions)
    // {
    //   headers: new HttpHeaders({'Content-Type':'application/json'})
    //   .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDBjYjcwZWMxNTIwNWE5NTk0OGIzMjciLCJkaXNwbGF5TmFtZSI6InNhZmEiLCJpYXQiOjE2ODExMzI4ODJ9.Xb5CHrdvSQg5DiFw99Pvt9LWHHgVaGGwNJHC9LqQ5nY')
    // }
    // )
  }

  // edit product
  editProduct(id:any,product:IProduct):Observable<IProduct>{
    // this.httpClient.delete<IProduct>(`http://localhost:5555/Games/${product._id}`);
    // return this.httpClient.post<IProduct>(`http://localhost:5555/Games/${product._id}`,JSON.stringify(product), this.httpOptions)
    // {
    //   headers: new HttpHeaders({'Content-Type':'application/json'})
    //   .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDBjYjcwZWMxNTIwNWE5NTk0OGIzMjciLCJkaXNwbGF5TmFtZSI6InNhZmEiLCJpYXQiOjE2ODExMzI4ODJ9.Xb5CHrdvSQg5DiFw99Pvt9LWHHgVaGGwNJHC9LqQ5nY')
    // }
    // )

    return this.httpClient.patch<IProduct>(`http://localhost:5555/Games/${id}`,JSON.stringify(product), this.httpOptions)
  }

  // delete product
  deleteProduct(product: IProduct):Observable<IProduct>{
    return this.httpClient.delete<IProduct>(`http://localhost:5555/Games/${product._id}`, this.httpOptions)
    // {headers: new HttpHeaders()
    // .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDBjYjcwZWMxNTIwNWE5NTk0OGIzMjciLCJkaXNwbGF5TmFtZSI6InNhZmEiLCJpYXQiOjE2ODExMzI4ODJ9.Xb5CHrdvSQg5DiFw99Pvt9LWHHgVaGGwNJHC9LqQ5nY')});
  }
  
}


