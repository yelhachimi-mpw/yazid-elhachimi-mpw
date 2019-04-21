import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import {FormsModule} from '@angular/forms';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {MatSelectModule} from '@angular/material';


@NgModule({
  declarations: [AuthLoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    InfiniteScrollModule,
    MatSelectModule
  ]
})
export class AuthentificationModule { }
