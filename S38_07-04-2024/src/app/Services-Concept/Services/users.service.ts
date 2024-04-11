
export class UsersService {
  users:string[] = ["Sneha","Rani","Raja","AIT","Ashokit"]

  constructor() { }

  addUsers(user:string):void{
      this.users.push(user)
  }

  removeUsers():void{

  }
}
