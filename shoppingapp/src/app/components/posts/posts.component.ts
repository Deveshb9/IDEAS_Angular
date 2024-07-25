import { Component } from '@angular/core';
import { PostService } from '../../services/posts.service';
import { PostModel } from '../../models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
  providers: [PostService],
})
export class PostsComponent {
  posts: PostModel[] = [];
  titles: string[] = [];
  constructor(public srvInstance: PostService) {
    this.posts = srvInstance.getAllPosts();
  }
}
