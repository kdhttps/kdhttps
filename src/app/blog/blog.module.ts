import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogService } from './blog.service';


@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    HttpClientModule,
  ],
  providers: [
    BlogService,
  ],
})
export class BlogModule { }
