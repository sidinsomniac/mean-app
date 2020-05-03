import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.css']
})
export class CreatePostsComponent implements OnInit {

  public enteredTitle: string = '';
  public enteredContent: string = '';

  @Output() postCreated = new EventEmitter<Post>();
  constructor() { }

  ngOnInit() {
  }

  onPostAdd(form:NgForm) {
    if (form.invalid)
    return;
    const post:Post = {
      title: form.value.title,
      content: form.value.content
    };
    this.postCreated.emit(post);

    this.enteredTitle = '';
    this.enteredContent = '';
  }

}
