import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
  }

  addPost(title, body){
    if(!title || !body){
      alert('Please add post')
    }else {
      this.postsService.savePosts({title, body} as Post).subscribe(post => {
        console.log(post)
      })
    }
  }

}
