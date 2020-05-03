import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {

  public posts = [];

  constructor() { }

  ngOnInit() {
  }

}
