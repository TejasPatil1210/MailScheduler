import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogBoxComponent } from './app/dialog-box/dialog-box.component';
import { EditAccountFormComponent } from './app/edit-account-form/edit-account-form.component';
import { HomepgheaderComponent } from './app/homepgheader/homepgheader.component';

// @Injectable({
//   providedIn: 'root'
// })
// export class FormsGuard implements CanDeactivate<HomepgheaderComponent> {
//   canDeactivate(
//     component:HomepgheaderComponent,currentRoute: ActivatedRouteSnapshot,currentState: RouterStateSnapshot,
//     nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return component.canExit();
//   }
  
// }
