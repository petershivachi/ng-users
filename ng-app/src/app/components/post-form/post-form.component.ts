import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Post } from '../../models/Post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post;
  @Input() isEdit;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
  }

  addPost(title, body){
    if(!title || !body){
      alert('Please add post')
    }else {
      this.postsService.savePosts({title, body} as Post).subscribe(post => {
        this.newPost.emit(post);
      })
    }
  }

  updatePost(){
    console.log(123)
  }

}
