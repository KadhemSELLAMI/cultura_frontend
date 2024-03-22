import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AllSitesComponent } from './all-sites/all-sites.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponentComponent } from './common/category-component/category-component.component';
import { FooterComponent } from './common/footer/footer.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ReverseArrayPipe } from './pipes/reverse-array.pipe';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { SignupComponent } from './signup/signup.component';
import { WriteBlogComponent } from './write-blog/write-blog.component';
import { SiteComponent } from './site/site.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    WriteBlogComponent,
    SiteComponent,
    AllSitesComponent,
    ReverseArrayPipe,
    ProfileEditComponent,
    ContactComponent,
    CategoryComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, 
      useClass: TokenInterceptorService, 
      multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
