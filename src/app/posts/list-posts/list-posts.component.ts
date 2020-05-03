import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit, OnDestroy {

  public posts:Post[] = [];
  private postsSub: Subscription;

  constructor( private postsService: PostsService) { }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostsUpdatedListener().subscribe(data => {
      this.posts = data;
    });
  }

  ngOnDestroy () {
    this.postsSub.unsubscribe();
  }

}
