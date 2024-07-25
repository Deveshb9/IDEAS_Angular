import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/posts.service';
import { PostModel } from '../../models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
  providers: [PostService],
})
export class PostsComponent implements OnInit {
  posts: PostModel[] = [];
  titles: string[] = [];
  constructor(public srvInstance: PostService) {}

  async ngOnInit() {
    // const aPromise = this.srvInstance.getAllPosts();
    // aPromise.then((posts: any) => (this.posts = posts));
    try {
      this.posts = await this.srvInstance.getAllPosts();
    } catch (error) {
      console.log(error);
    }
  }
}
