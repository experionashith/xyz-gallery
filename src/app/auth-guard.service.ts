import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';
 
 
@Injectable()
export class AuthGuardService implements CanActivate {
 
    constructor(private userService: UserService, private router:Router ) {
    }
 
    canActivate(): boolean {
 
        //check some condition  
        if (!this.userService.isLoggedIn)  {
            alert('You are not allowed to view this page');
            this.router.navigate(['/home']);
            return false;
        } 
        return true;
    }
 
}
