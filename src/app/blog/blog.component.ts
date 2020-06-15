import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from "rxjs/operators";
import { BlogService } from './blog.service';
import { Blog } from './blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blog: Blog = {} as Blog;

  id$ = this.route.params.pipe(
    pluck('id')
  );

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
  ) { }

  ngOnInit(): void {
    this.id$.subscribe((id) => {
      this.blogService.getBlog(id)
        .subscribe(data => {
          this.blog = data.body;
        }, error => {
          console.log(error);
        });
    });
  }

}
