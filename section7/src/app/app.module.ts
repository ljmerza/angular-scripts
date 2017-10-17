import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NgForm }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CfromComponent } from './cfrom/cfrom.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { PostsComponent } from './posts/posts.component';

import { PostService } from './services/post.service';
import { AppErrorHandler } from './app-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    CfromComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    ChangePassComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [PostService, 
  // replace builtin provider with custom one
  {provide: ErrorHandler, useClass: AppErrorHandler} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
