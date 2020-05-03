import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.css']
})
export class CreatePostsComponent implements OnInit {

  public enteredTitle: string = '';
  public enteredContent: string = '';

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  onPostAdd(form:NgForm) {
    if (form.invalid)
    return;

    this.postsService.addPost(form.value.title,form.value.content)

    form.resetForm();
  }

}
