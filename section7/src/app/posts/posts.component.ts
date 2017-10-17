import { Component, OnInit } from '@angular/core';
import { PostService } from './../services/post.service';

import { AppError } from './../app-error';
import { NotFoundError } from './../not-found-error';
import { BadInput } from './../bad-input';
import { AppErrorHandler } from './../app-error-handler';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

	posts: any[];

  	constructor(private service:PostService) {	}

    ngOnInit(){
      this.service.getAll()
      .subscribe( posts => this.posts = posts);
    }

  	createPost(input:HTMLInputElement) {
      // add post automatically and update after backend comes back
      // for faster UI
  		let post = {title: input.value};
      this.posts.unshift(post);

      input.value = '';

  		this.service.create(post)
  		.subscribe( id => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1);
        post['id'] = id;
        this.posts.unshift(post);

      },

       (error:AppError) => {
         this.posts.splice(0,1);
        // NotFoundError is a specialized error of the general AppError
        if(error instanceof BadInput)
          alert(error.orignalError);
        else throw error;
      });
  	}

  	updatePost(post){
  		this.service.update(post.id)
  		.subscribe( response => {
        console.log(response);
  		});
  	}

    deletePost(post){
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);

      this.service.delete(post.id)
      .catch((error:AppError) => {
        this.posts.splice(index,0, post);
        // NotFoundError is a specialized error of the general AppError
        if(error instanceof NotFoundError)
          alert('post was already deleted.');
        else throw error;
      });
    }

}
