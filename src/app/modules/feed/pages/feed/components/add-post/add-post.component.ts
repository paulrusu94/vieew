import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { v4 as uuid} from 'uuid'
// Amplify
import { generateClient } from 'aws-amplify/data';
import { type Schema } from 'src/../amplify/data/resource'
import { PostsService } from 'src/app/shared/api/posts.service';
import { MediaService } from 'src/app/shared/api/media.service';
import { from, switchMap } from 'rxjs';
import { UserStore } from 'src/app/shared/store/user.store';

const mapContentType = (fileCotentType: string): any => {
  const contentType = client.enums.MediaContentTypes.values().find(contentType => contentType ===  fileCotentType.split("/").join("_"))
  if (!contentType) {
    throw new Error('Invalid content type for this file');
  }
  return contentType
}

const client = generateClient<Schema>();

@Component({
  selector: '[appAddPost]',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})

export class AddPostComponent implements OnInit, OnDestroy {
  @Output() onPostAdded = new EventEmitter();

  public currentUser: any = null;
  
  public form: FormGroup;
  public filePreview: string | ArrayBuffer | null = null;
  public isImage: boolean = false;

  public file: File | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private postsService: PostsService,
    private mediaService: MediaService,
    public userStore: UserStore
  ) {
    this.form = this.formBuilder.group({
      content: [''],
    });
  }

  ngOnInit() {
    this.currentUser = this.userStore.getCurrentUser();
  }

  async onSubmit() {
    const postId = uuid();
    const { content } = this.form.value;

    try {
      // Upload the file first
      const uploads = await this.mediaService.upload({
        data: this.file,
        path: `media/content/${this.file!.name}`,
        options: {
          contentType: this.file!.type
        }
      })

      // If the file/s was uploaded, create the post and assign the media to it
      if(uploads) {
        this.postsService.createPost({
          postId: postId,
          postType: "TEXT",
          status: "IN_DRAFT",
          authorId: this.currentUser?.userId,
          ownerEntityId: uuid(),
          content,
        });

        const newMediaId = uuid();
        try {
          const createMedia = await client.models.Media.create({
            mediaId: newMediaId,
            postId: postId,
            contentType: mapContentType(this.file!.type!),
            path: `media/content/${this.file!.name}`,
            fileName: this.file!.name,
            ownerId: this.currentUser!.userId,
          });

          if(createMedia) {
            this.onPostAdded.emit();
            this.form.reset;
            this.file = null;
            this.filePreview = null;
          }
        } catch (e) {
          console.log(e)
        }
      }
    } catch(e) {
      console.log(e);
    }
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.file = input.files[0];
      const reader = new FileReader();
      
      // Check the file type
      this.isImage = this.file.type.startsWith('image/');

      reader.onload = () => {
        // Store the preview URL in a variable to display in the template
        this.filePreview = reader.result;
      };
      
      reader.readAsDataURL(this.file); // Convert the file to a data URL
    }
  }
  
  ngOnDestroy() {}
}

