import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthRoutingModule } from './auth-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './components/sign-in/sign-in.component';




@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ],
  providers: [ HttpClientModule]
})
export class AuthModule { }
