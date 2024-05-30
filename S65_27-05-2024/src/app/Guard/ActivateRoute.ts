import { inject } from "@angular/core"
import { AuthService } from "../services/auth.service"
import { Router } from "@angular/router"
import { RegisteredusersService } from "../services/registeredusers.service"
import { ProductsService } from "../services/products.service"
import { ContactusSService } from "../services/contactus-s.service"

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

export const activateChildRoutes = ()=>{

    var auth =  inject(AuthService)
    var router =  inject(Router)

    if(auth.isLoggedIn) { // false
        //  router.navigateByUrl("/altproducts")
        return true
    }else{
        router.navigateByUrl("/login")
        return false
    }
}

export const activateChildByDefault = ()=>{
    return true
}

export const deactivateRoute = ()=>{
  var contactusservice= inject(ContactusSService)
  if((contactusservice.username || contactusservice.email || contactusservice.query) && !contactusservice.submitted){
    var status= confirm("Do you want Leave this Page, Without Submitting the Query")
         if(status){
            return true
         }else{
     return false
         }
  }else{
   return true
  }
    
}
