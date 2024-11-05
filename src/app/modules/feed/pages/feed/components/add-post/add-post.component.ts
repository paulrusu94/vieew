import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { v4 as uuid} from 'uuid'
// Amplify
import { generateClient } from 'aws-amplify/data';
import { type Schema } from 'src/../amplify/data/resource'
import { PostsService } from 'src/app/shared/api/posts.service';
import { MediaService } from 'src/app/shared/api/media.service';


const client = generateClient<Schema>();

@Component({
  selector: '[appAddPost]',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})

export class AddPostComponent implements OnInit, OnDestroy {
  @Output() onPostAdded = new EventEmitter();
  
  public form: FormGroup;
  public filePreview: string | ArrayBuffer | null = null;
  public isImage: boolean = false;

  public file: File | null = null;
  public fileArrayBuffer: FileReader["result"] | null = null;
  public user: Schema["User"]["type"] | null = null;
  public postId: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private postsService: PostsService,
    private mediaService: MediaService
  ) {
    this.form = this.formBuilder.group({
      content: [''],
    });
  }

  ngOnInit() {}

  async onSubmit() {
    console.log(this.file?.type);
    return;
    const { content } = this.form.value;

    this.mediaService.upload({
      data: this.filePreview,
      path: `media/content/${this.file!.name}`,
      options: {
        contentType: this.file!.type
      }
    }).pipe()
    
    this.postsService.createPost({
      postType: "TEXT",
      postId: this.postId,
      status: "IN_DRAFT",
      authorId: this.user!.userId,
      ownerEntityId: uuid(),
      content,
    })
    // if (this.user) {
    //   try {
    //     const { content } = this.form.value;
        
        // const { errors, data } = await client.models.Post.create({
        //   postType: "TEXT",
        //   postId: this.postId,
        //   status: "IN_DRAFT",
        //   authorId: this.user!.userId,
        //   ownerEntityId: uuid(),
        //   content,
        // });

    //     this.form.reset()
    //     this.onPostAdded.emit();
    //   } catch (error) {
    //     console.log('error creating post', error);
    //   }
    // } else {
    //   throw new Error("You need to be authenticated in order to create a post!")
    // }
    
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


  onFileChanged(event: Event): void {
    const input = event.target as HTMLInputElement;
    
    if (input.files && input.files.length > 0) {
        this.file = input.files[0];
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(this.file);
        // fileReader.readAsDataURL(this.file)

        fileReader.onload = async (event) => {
          console.log("Loaded file", event.target?.result)
          
          this.fileArrayBuffer = event.target!.result;
          console.log(this.fileArrayBuffer);
          // try {
          //   const { result } = await uploadData({
          //     data: event.target!.result!,
          //     path: `media/content/${this.file!.name}`,
          //     options: {
          //       contentType: this.file!.type
          //     }
          //   });

          //   const uploadResult = await result;
          //   console.log('uploadedResponse', uploadResult)
            
          //   const newMediaId = uuid()
          //   const {data, errors} = await client.models.Media.create({
          //     mediaId: newMediaId,
          //     postId: this.postId,
          //     contentType: mapContentType(this.file!.type!),
          //     path: `media/content/${this.file!.name}`,
          //     fileName: this.file!.name,
          //     ownerId: this.user!.userId,
          //   })

          //   console.log(data)
          // } catch (e) {
          //   console.log("error", e);
          // }
        }
    }
  }
  
  ngOnDestroy() {}
}
