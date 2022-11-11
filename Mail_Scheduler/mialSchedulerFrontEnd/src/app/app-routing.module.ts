import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/auth.guard';
//import { FormsGuard } from 'src/forms.guard';
import { AccountsheaderComponent } from './accountsheader/accountsheader.component';
import { EditAccountFormComponent } from './edit-account-form/edit-account-form.component';
import { HomepgheaderComponent } from './homepgheader/homepgheader.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TabscontentComponent } from './tabscontent/tabscontent.component';

const routes: Routes = [
  
  {
    path:"home",
    component:HomepgheaderComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"accounts",
    component:AccountsheaderComponent,
    children:[
      {
        path:"login",
        component:LoginComponent
      },
      {
        path:"register",
        component:RegisterComponent
      }
    ]
  },
  // {
  //   path:"EditForm/:id",
  //   component:EditAccountFormComponent,
  // },
  {
    path:"",
    redirectTo:"home",
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
