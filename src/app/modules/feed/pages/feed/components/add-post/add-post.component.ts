import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators, ValidationMessagesBuilder } from 'src/app/shared/forms';
import { Router } from '@angular/router';
// Amplify
import { DataStore } from 'aws-amplify';
import { Post, Brand, Influencer, Admin } from 'src/models';

@Component({
  selector: '[appAddPost]',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      post: ['', ],
    });
  }

  ngOnInit() {}

  async onSubmit() {
    const { post } = this.form.value;
    try {
      await DataStore.save(
          new Post({
          "brand": new Brand({}),
          "influencer": new Influencer({}),
          "author": new Admin({
            "createdAt": "1970-01-01T12:30:23.999Z",
            "updatedAt": "1970-01-01T12:30:23.999Z"
          }),
          "photo": "Lorem ipsum dolor sit amet",
          "description": post,
          "likes": 0,
          "comments": 0,
          "createdAt": "1970-01-01T12:30:23.999Z",
          "updatedAt": "1970-01-01T12:30:23.999Z"
        })
      );
    } catch (error) {
      console.log('error creating post', error);
    }
  }
  
  ngOnDestroy() {}
}
