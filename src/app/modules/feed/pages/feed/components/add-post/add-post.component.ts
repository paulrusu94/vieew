import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators, ValidationMessagesBuilder } from 'src/app/shared/forms';
import { Router } from '@angular/router';
import { v4 as uuid} from 'uuid'
// Amplify
import { generateClient } from 'aws-amplify/data';
import { uploadData } from 'aws-amplify/storage';
import { type Schema } from 'src/../amplify/data/resource'
import { getCurrentUser } from 'aws-amplify/auth';


const client = generateClient<Schema>();

const mapContentType = (fileCotentType: string): any => {
  const contentType = client.enums.MediaContentTypes.values().find(contentType => contentType ===  fileCotentType.split("/").join("_"))

  if (!contentType) {
    throw new Error('Invalid content type for this file');
  }

  return contentType
}

const createPost = () => {

}


@Component({
  selector: '[appAddPost]',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public file: File | null = null
  public fileArrayBuffer: FileReader["result"] | null = null;
  public user: Schema["User"]["type"] | null = null;
  public uploadedMedia: Schema["Media"]["type"] | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      content: [''],
    });
  }

  async ngOnInit() {
    const userCognnito = await getCurrentUser();
    const response = await client.models.User.getUserBySub({sub: userCognnito.userId})
    this.user = response.data[0];
    const mediasOfUser = await this.user.medias();
    console.log(mediasOfUser)
  }

  async onSubmit() {
    if (this.user) {
      try {
        const { content } = this.form.value;
        const newPostId = uuid();
        
        const { errors, data } = await client.models.Post.create({
          postType: "TEXT",
          postId: newPostId,
          status: "IN_DRAFT",
          authorId: this.user!.userId,
          ownerEntityId: uuid(),
          content,
        });

        this.form.reset()
      } catch (error) {
        console.log('error creating post', error);
      }
    } else {
      throw new Error("You need to be authenticated in order to create a post!")
    }
    
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    
    if (input.files && input.files.length > 0) {
        this.file = input.files[0];
        console.log(this.file);
        const fileReader = new FileReader();
        // fileReader.readAsArrayBuffer(this.file);
        fileReader.readAsDataURL(this.file)

        fileReader.onload = async (event) => {
          console.log("Loaded file", event.target?.result)
          this.fileArrayBuffer = event.target!.result
          try {
            const { result } = await uploadData({
              data: event.target!.result!,
              path: `media/content/${this.file!.name}`,
              options: {
                contentType: this.file!.type
              }
            });  

            const uploadResult = await result;
            console.log('uploadedResponse', uploadResult)
            
            const newMediaId = uuid()
            const {data, errors} = await client.models.Media.create({
              mediaId: newMediaId,
              contentType: mapContentType(this.file!.type!),
              path: `media/cotent/${this.file!.name}`,
              fileName: this.file!.name,
              ownerId: this.user!.userId,
            })

            this.uploadedMedia = data;

            console.log(data)
          } catch (e) {
            console.log("error", e);
          }
        }
    }
  }
  
  ngOnDestroy() {}
}
