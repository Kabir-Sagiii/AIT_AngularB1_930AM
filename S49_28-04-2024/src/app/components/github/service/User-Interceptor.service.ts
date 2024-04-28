import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";


export class UserInterceptor implements HttpInterceptor {
       intercept(req: HttpRequest<any>, next: HttpHandler) {
            console.log("User Interceptor is called") 
         return next.handle(req)
       }
}