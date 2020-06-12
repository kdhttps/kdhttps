import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from "rxjs/operators";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  slug$ = this.route.params.pipe(
    pluck('slug')
  );

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
