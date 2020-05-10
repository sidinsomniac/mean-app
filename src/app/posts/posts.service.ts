import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  public posts: Post[] = [];
  private postsUpdated:Subject<Post[]> = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getPosts() {
    this.http.get<{message:string,posts:Post[]}>('http://localhost:3000/api/posts').subscribe(
      postData => {
        this.posts = postData.posts;
        this.postsUpdated.next([...this.posts]);
      }
    );
  }

  getPostsUpdatedListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title:string,content:string) {
    const post: Post = {
      id: null,
      title: title,
      content: content
    };
    this.http.post<{message:string}>('http://localhost:3000/api/posts', post).subscribe(resData => {
      console.log(resData.message);
      this.posts.push(post);
      this.postsUpdated.next([...this.posts]);
    });
  }
}
