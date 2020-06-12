import { Component, OnInit } from '@angular/core';
import { pluck } from "rxjs/operators";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
