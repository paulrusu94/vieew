import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators, ValidationMessagesBuilder } from 'src/app/shared/forms';
import { Router } from '@angular/router';
// Amplify
import { generateClient } from 'aws-amplify/data';
import { type Schema } from 'src/../amplify/data/resource'

const client = generateClient<Schema>();


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
    try {
      const { content } = this.form.value;
      const { errors, data } = await client.models.Post.create({
        content,
      })
      this.form.reset()
    } catch (error) {
      console.log('error creating post', error);
    }
  }
  
  ngOnDestroy() {}
}
