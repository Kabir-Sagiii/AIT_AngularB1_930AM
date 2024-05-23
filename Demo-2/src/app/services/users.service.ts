import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 users:any = [
  {username:"s1",password:"s1@123"},
  {username:"s2",password:"s2@123"},
  {username:"s3",password:"s3@123"}
 ]
  constructor() { }
}
