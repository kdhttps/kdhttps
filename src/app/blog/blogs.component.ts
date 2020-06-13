import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { BlogService } from "./blog.service";
import { Blog } from './blog';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(public scully: ScullyRoutesService, private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogs()
      .subscribe(data => {
        debugger
        this.blogs = data.body;
      });
  }
}
