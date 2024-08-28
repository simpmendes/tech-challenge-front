
import { Observable, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { User } from 'src/models/User';
import { UserUpdate } from 'src/models/UserUpdate';
import { environment } from 'src/environments/environments';

@Injectable()
export class AuthService {

private currentUserSource = new ReplaySubject<User>(1);
public currentUser$ = this.currentUserSource.asObservable();

baseUrl = environment.apiURL + 'api/usuario/';
constructor(private http: HttpClient) { }

public login(model: any): Observable<void> {
  return this.http.post<User>(this.baseUrl + 'autenticar', model).pipe(
    take(1),
    map((response: User) => {
      const user = response;
      if (user){
        this.setCurrentUser(user);
      }
    })
  );
}

getUser(): Observable<UserUpdate>{
  return this.http.get<UserUpdate>(this.baseUrl + 'getUser').pipe(take(1));
}

updateUser(model: UserUpdate): Observable<void>{
  return this.http.put<User>(this.baseUrl + 'updateUser', model).pipe(
    take(1),
    map((user: User)=>{
      this.setCurrentUser(user);
    } )
  )
}

public register(model: any): Observable<void> {
  return this.http.post<User>(this.baseUrl + 'criar-conta', model).pipe(
    take(1),
    map((response: User) => {
      const user = response;
      if (user){
        this.setCurrentUser(user);
      }
    })
  );
}

logout(): void{
  localStorage.removeItem('user');
  //this.currentUserSource.next(null);
  this.currentUserSource.complete();
}

public setCurrentUser(user: User): void{
  localStorage.setItem('user', JSON.stringify(user));
  this.currentUserSource.next(user);
  this.currentUserSource.complete();
}

}