import { HttpClient } from '@angular/common/http';
import { PostModel } from '../models/post.model';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
  posts: PostModel[] = [];
  constructor(public httpclientobj: HttpClient) {}
  getAllPosts(): Promise<PostModel[]> {
    //make AJAX Request
    return new Promise((resolve, reject) => {
      this.httpclientobj
        .get<PostModel[]>('https://jsonplaceholder.typicode.com/posts')
        .subscribe((posts: PostModel[]) => resolve(posts));
    });
  }
}
