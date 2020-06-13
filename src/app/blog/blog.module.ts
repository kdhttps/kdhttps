import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogService } from './blog.service';
import { BlogsComponent } from './blogs.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    BlogComponent,
    BlogsComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [
    BlogService,
  ],
})
export class BlogModule { }
