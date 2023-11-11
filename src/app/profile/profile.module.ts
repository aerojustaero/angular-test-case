import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProfileRoutingModule } from './profile.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '@core/core.module';




@NgModule({
  declarations: [
    ProfilePageComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    CoreModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
