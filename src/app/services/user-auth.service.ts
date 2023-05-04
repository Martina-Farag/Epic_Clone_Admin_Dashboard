import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private isUserLoggedSubject:BehaviorSubject<boolean>;

  constructor(private httpClient: HttpClient,private router:Router) {
    this.isUserLoggedSubject=new BehaviorSubject<boolean>(this.UserState)
  }

  // login  logout
  // login(email:string, password:string){
  //   let adminToken='654321';
  //   localStorage.setItem("Admin_token",adminToken);
  //   this.isUserLoggedSubject.next(true);
  // }

  login(userName: string, Password: string)
  {

    return this.httpClient.post<any>('http://localhost:5555/Admin/login', {userName,Password},
    // JSON.stringify({"userName": email,"Password": password})
    // {userName, Password}
    // {"userName": userName,"Password": Password}
    // ,this.httpOptions
    {
      headers: new HttpHeaders({'Content-Type':'application/json'})
      .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDBjYjcwZWMxNTIwNWE5NTk0OGIzMjciLCJkaXNwbGF5TmFtZSI6InNhZmEiLCJpYXQiOjE2ODExMzI4ODJ9.Xb5CHrdvSQg5DiFw99Pvt9LWHHgVaGGwNJHC9LqQ5nY')
    }
    ).subscribe({
        next: (response: any) => {
            
            console.log(response.status,"subs running");
            let adminToken = response.token;
            localStorage.setItem("Admin_token", adminToken);

        }, complete: () => {
            this.router.navigate(['/Games']);
            alert("Loged In Successfully");

        }, error: (err) => {
            alert("Login failed, Please Enter Valid Email and Password");
            console.error(err);
          }
    }
    
    );

  }

  logout(){
    localStorage.removeItem("Admin_token");
    this.isUserLoggedSubject.next(false);
    
    alert("Loged Out Successfully");
  }

  get UserState():boolean{

    return (localStorage.getItem('Admin_token')) ? true : false;
  }

  getUserStatus():Observable<boolean>{
    return this.isUserLoggedSubject.asObservable();   // return true or false as observable cause when we use this method we have to subscribe on it and subscribe keep watching changes.
  }
}
