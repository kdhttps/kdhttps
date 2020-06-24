import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from "rxjs/operators";
import { BlogService } from './blog.service';
import { Blog } from './blog';
import { CustomMetaService } from '../meta.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blog: Blog = {} as Blog;

  slug$ = this.route.params.pipe(
    pluck('slug')
  );

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private customMetaService: CustomMetaService,
  ) { }

  ngOnInit(): void {
    this.slug$.subscribe((slug) => {
      this.blogService.getBlog(slug)
        .subscribe(data => {
          this.blog = data.body;
          const { image, description, url } = this.blog.seoMeta;
          const title = this.blog.title;
          
          this.customMetaService.setTitle(title + ' | kdhttps.com');
          this.customMetaService.setSocialMediaTags(url, title, description, image);
        }, error => {
          console.log(error);
        });
    });
  }

}
