import { inject } from "@angular/core"
import { AuthService } from "../services/auth.service"
import { Router } from "@angular/router"
export const activateRoute = ()=>{
    var auth =  inject(AuthService)
    var router =  inject(Router)
    if(auth.isLoggedIn){
   return true
    }else{
        router.navigateByUrl("/login")
        return false
    }

}