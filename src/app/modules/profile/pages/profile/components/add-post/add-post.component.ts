import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators, ValidationMessagesBuilder } from 'src/app/shared/forms';
import { Router } from '@angular/router';
// Amplify
import { generateClient } from 'aws-amplify/api';
import { createPost } from 'src/graphql/mutations';

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
      post: ['',],
    });
  }

  ngOnInit() { }

  async onSubmit() {
    const { post } = this.form.value;
    try {
      const client = generateClient()
      await client.graphql({
        query: createPost, variables: {
          input: {
            "brandID": "createdForBrandId",
            "authorId": "creatorUserID",
            "content": post,
            "title": "titleIfExists"
          }
        }
      })
    } catch (error) {
      console.log('error creating post', error);
    }
  }

  ngOnDestroy() { }
}
