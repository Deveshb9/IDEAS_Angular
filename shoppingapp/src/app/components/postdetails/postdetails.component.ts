import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PostModel } from '../../models/post.model';
import { PostService } from '../../services/posts.service';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrl: './postdetails.component.css',
  providers: [PostService],
})
export class PostdetailsComponent implements OnInit {
  constructor(public route: ActivatedRoute, public postService: PostService) {}
  postDetails: PostModel = new PostModel();
  ngOnInit() {
    this.route.params.subscribe((param: any) => {
      let postId = param.id;
      this.postService.getPostById(postId).then((post) => {
        this.postDetails = post;
      });
    });
  }
}
