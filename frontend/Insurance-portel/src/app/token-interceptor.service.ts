import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import { LoginserviceService } from '.';


@Injectable()
export class TokenInterceptorService  implements HttpInterceptor {

tokenId:String
  constructor(private loginService:LoginserviceService) {

  
   this.tokenId =  loginService.getLocalToken()
   console.log("intercept=======" +this.tokenId)

   }

  
  intercept(req,next){
    let tokenReq =  req.clone({
          headers: req.headers.append('Authorization', 'Bearer '+ this.tokenId)
        })
    return next.handle(tokenReq)
  }
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // add authorization header with jwt token if available
//     let currentUser = JSON.parse(localStorage.getItem('currentUser'));
//     if (currentUser && currentUser.token) {
//         request = request.clone({
//             setHeaders: { 
//                 Authorization: `Bearer ${currentUser.token}`
//             }
//         });
//     }

//     return next.handle(request);
// }
}
