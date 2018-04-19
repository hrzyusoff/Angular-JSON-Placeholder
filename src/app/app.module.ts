import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './home/user/user.component';
import { UserService } from './_services/user.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './home/main/main.component';
import { PostService } from './_services/post.service';
import { ViewerComponent } from './home/viewer/viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    MainComponent,
    ViewerComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
