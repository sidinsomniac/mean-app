import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.css']
})
export class CreatePostsComponent implements OnInit {

  public enteredTitle: string = '';
  public enteredContent: string = '';

  @Output() postCreated = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onPostAdd() {
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    this.postCreated.emit(post);

    this.enteredTitle = '';
    this.enteredContent = '';
  }

}
