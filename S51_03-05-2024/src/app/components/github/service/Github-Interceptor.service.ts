import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class GithubInterceptor implements HttpInterceptor {

      intercept(req:HttpRequest<any>,next:HttpHandler) {
            console.log("Github Interceptor Called")
        var modifiedRequest= req.clone({headers:req.headers.append('token',"1234")})
         return next.handle(modifiedRequest)
      }
}