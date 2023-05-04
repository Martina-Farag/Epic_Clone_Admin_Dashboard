import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../Modules/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoriesApiService {

  private httpOptions = {};

  constructor(private httpClient:HttpClient) {
    this.httpOptions={
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json',
          Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDBjYjcwZWMxNTIwNWE5NTk0OGIzMjciLCJkaXNwbGF5TmFtZSI6InNhZmEiLCJpYXQiOjE2ODExMzI4ODJ9.Xb5CHrdvSQg5DiFw99Pvt9LWHHgVaGGwNJHC9LqQ5nY'
        })
    };

  }

  // get all Categories
  getAllCategories():Observable<ICategory[]>{
    return this.httpClient.get<ICategory[]>(`http://localhost:5555/Category`,this.httpOptions)
  //   {headers: new HttpHeaders()
  //   .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDBjYjcwZWMxNTIwNWE5NTk0OGIzMjciLCJkaXNwbGF5TmFtZSI6InNhZmEiLCJpYXQiOjE2ODExMzI4ODJ9.Xb5CHrdvSQg5DiFw99Pvt9LWHHgVaGGwNJHC9LqQ5nY')});
  }

}
