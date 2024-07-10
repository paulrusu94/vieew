import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators, ValidationMessagesBuilder } from 'src/app/shared/forms';
import { Router } from '@angular/router';
// Amplify
// import { generateClient } from 'aws-amplify/api';
// import { createPost } from 'src/graphql/mutations';

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
      content: [''],
    });
  }

  ngOnInit() {}

  async onSubmit() {
    
    const { content } = this.form.value;
    this.form.reset()
    // try {
    //   const client = generateClient()
    //   await client.graphql({
    //     query: createPost, variables: {
    //       input: {
    //         "brandID": "createdForBrandId",
    //         "authorId": "creatorUserID",
    //         "content": content,
    //         "title": "titleIfExists"
    //       }
    //     }
    //   })
    // } catch (error) {
    //   console.log('error creating post', error);
    // }
  }
  
  ngOnDestroy() {}
}
