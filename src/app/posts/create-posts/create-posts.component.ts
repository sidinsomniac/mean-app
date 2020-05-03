import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.css']
})
export class CreatePostsComponent implements OnInit {

  public enteredTitle:string = '';
  public enteredContent:string = '';
  constructor() { }

  ngOnInit() {
  }

  onPostAdd(e) {
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    }
    console.log(e);
  }

}
