import { HttpClient } from '@angular/common/http';
import { PostModel } from '../models/post.model';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
  posts: PostModel[] = [];
  constructor(public httpclientobj: HttpClient) {}
  getAllPosts() {
    //make AJAX Request
    const postObjs = this.httpclientobj.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    postObjs.subscribe((postVal: any) => this.posts.push(postVal));
    return this.posts;
  }
}
