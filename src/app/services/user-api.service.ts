import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../Modules/iuser';
import { environment } from 'src/environments/environment';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  private httpOptions = {};
  usersList:IUser[] = [];

  constructor(private httpClient:HttpClient) {    // HttpClient carries all database methods (get, post, patch, put, delete...)

    this.httpOptions={
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json',
          Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDBjYjcwZWMxNTIwNWE5NTk0OGIzMjciLCJkaXNwbGF5TmFtZSI6InNhZmEiLCJpYXQiOjE2ODExMzI4ODJ9.Xb5CHrdvSQg5DiFw99Pvt9LWHHgVaGGwNJHC9LqQ5nY'
        })
    };

  }

  getAllUsers():Observable<IUser[]>{ 
    // const headers = {authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDBjYjcwZWMxNTIwNWE5NTk0OGIzMjciLCJkaXNwbGF5TmFtZSI6InNhZmEiLCJpYXQiOjE2ODExMzI4ODJ9.Xb5CHrdvSQg5DiFw99Pvt9LWHHgVaGGwNJHC9LqQ5nY'};
    // const path = `http://localhost:5555/Games`;

    return this.httpClient.get<IUser[]>(`http://localhost:5555/User`, this.httpOptions)
    // {headers: new HttpHeaders()
    // .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDBjYjcwZWMxNTIwNWE5NTk0OGIzMjciLCJkaXNwbGF5TmFtZSI6InNhZmEiLCJpYXQiOjE2ODExMzI4ODJ9.Xb5CHrdvSQg5DiFw99Pvt9LWHHgVaGGwNJHC9LqQ5nY')})
  //   .subscribe((res: Iproduct[]) => {
  //     this.productList = res;
  //  })
  }

  // get user by id
  getUserByID(userID:any):Observable<IUser>{
    // return this.httpClient.get<IProduct>(`http://localhost:3000/Products/${prdID}`) // db json
    return this.httpClient.get<IUser>(`http://localhost:5555/User/${userID}`, this.httpOptions)
    // {headers: new HttpHeaders()
    // .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDBjYjcwZWMxNTIwNWE5NTk0OGIzMjciLCJkaXNwbGF5TmFtZSI6InNhZmEiLCJpYXQiOjE2ODExMzI4ODJ9.Xb5CHrdvSQg5DiFw99Pvt9LWHHgVaGGwNJHC9LqQ5nY')})
  }

  // Add new user
  // addNewUser(user:IUser):Observable<IUser>{
  //   // return this.httpClient.post<FormGroup>(`http://localhost:3000/Users`,user,this.httpOptions);
  //   return this.httpClient.post<IUser>(`http://localhost:3000/Users`,JSON.stringify(user),this.httpOptions);
  // }

  // delete user
  deleteUser(user: IUser):Observable<IUser>{
    return this.httpClient.delete<IUser>(`http://localhost:5555/User/${user._id}`, this.httpOptions)
    // {headers: new HttpHeaders()
    // .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDBjYjcwZWMxNTIwNWE5NTk0OGIzMjciLCJkaXNwbGF5TmFtZSI6InNhZmEiLCJpYXQiOjE2ODExMzI4ODJ9.Xb5CHrdvSQg5DiFw99Pvt9LWHHgVaGGwNJHC9LqQ5nY')});
  }
}
