import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from "rxjs/operators";
import { BlogService } from './blog.service';
import { Blog } from './blog';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blog: Blog = {} as Blog;
  id: string = '';

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });

    this.blogService.getBlog(this.id)
      .subscribe(data => {
        this.blog = data.body;
      }, error => {
        console.log(error);
      });
  }

}
