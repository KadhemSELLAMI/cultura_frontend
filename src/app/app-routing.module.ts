import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';
import { LoginComponent } from './login/login.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { AllSitesComponent } from './all-sites/all-sites.component';
import { SiteComponent } from './site/site.component';
import { AddSiteComponent } from './add-site/add-site.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/all_sites',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'profile/:bloggerId',
    component: ProfileComponent
  },
  {
    path: 'profile/:bloggerId/:categoryId',
    component: ProfileComponent
  },
  {
    path: 'add_site',
    component: AddSiteComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'site/:siteId',
    component: SiteComponent
  },
  {
    path: 'all_sites',
    component: AllSitesComponent
  },
  {
    path: 'all_sites/:categoryId',
    component: AllSitesComponent
  },
  {
    path: 'profile_edit',
    component: ProfileEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
