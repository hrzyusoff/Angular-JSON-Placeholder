import { Component, OnInit } from '@angular/core';
import { PostService } from '../../_services/post.service';
import { Post } from '../../_services/post';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css','../home.component.css']
})
export class MainComponent implements OnInit {
  
  allPosts: Post[];
  statusCode: number;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAllPosts().subscribe(
      data => this.allPosts = data,
      errorCode => this.statusCode = errorCode
    );
  }
}
