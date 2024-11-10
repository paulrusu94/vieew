import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { generateClient } from 'aws-amplify/api';
import { Schema } from 'amplify/data/resource';
import { uploadData, UploadDataWithPathInput, UploadDataWithPathOutput } from 'aws-amplify/storage';

const client = generateClient<Schema>();

@Injectable()
export class MediaService {
  constructor() {}

  upload(data: any) {
    return uploadData(data);
  }
}
