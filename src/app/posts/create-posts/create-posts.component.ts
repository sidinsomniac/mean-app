import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.css']
})
export class CreatePostsComponent implements OnInit {

  public newPost = '';

  constructor() { }

  ngOnInit() {
  }

  onPostAdd(e) {
    console.log(e);
    this.newPost = e.value;
  }

}
