import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";


export class UserInterceptor implements HttpInterceptor {
       intercept(req: HttpRequest<any>, next: HttpHandler) {
          console.log(req)
           if(req.url != "http://localhost:2929/users/login"){
              var modifiedRequest =  req.clone({headers:req.headers.append("Authorization",`Bearer ${localStorage.getItem('token')}`)})
              return next.handle(modifiedRequest)
           }else {
              return next.handle(req)
           }

     
       }
}