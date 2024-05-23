import { inject } from "@angular/core"
import { AuthService } from "../services/auth.service"
import { Router } from "@angular/router"
import { RegisteredusersService } from "../services/registeredusers.service"
import { ProductsService } from "../services/products.service"

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
  var registeredusers= inject(RegisteredusersService)
   if((registeredusers.username || registeredusers.email || registeredusers.query) && !registeredusers.submitted){
     var result =   confirm("Do you wana leave page without Submiting Query")
        if(result){
            return true
        } else {
            return false
        }
    }else{
 return true
   }
    
}
export const resolveRoute = ()=>{
   var products= inject(ProductsService)
    return products.getProducts()
}