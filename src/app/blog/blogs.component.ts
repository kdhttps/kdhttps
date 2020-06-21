import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { BlogService } from "./blog.service";
import { Blog } from './blog';
import { CustomMetaService } from '../meta.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(
    public scully: ScullyRoutesService,
    private blogService: BlogService,
    private customMetaService: CustomMetaService,
    ) { }

  ngOnInit(): void {
    const title = 'Blogs | Kiran Mali @kdhttps | Full Stack Software Developer';
    this.customMetaService.setTitle(title);
    this.customMetaService.setSocialMediaTags('https://kdhttps.com', title, '#Learn with #fun. If you thing then you can make a new things. Let\'s started learning.', environment.assetsURL + '/blogs-banner.png');

    this.blogService.getBlogs()
      .subscribe(data => {
        this.blogs = data.body;
      }, error => {
        console.log(error);
      });
  }
}
