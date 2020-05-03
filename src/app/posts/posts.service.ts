import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  public posts: Post[] = [];
  private postsUpdated:Subject<Post[]> = new Subject<Post[]>();

  constructor() { }
  
  getPosts() {
    return [...this.posts];
  }

  getPostsUpdatedListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title:string,content:string) {
    const post: Post = {
      title: title,
      content: content
    };
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
