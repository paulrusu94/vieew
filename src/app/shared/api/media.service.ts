import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { generateClient } from 'aws-amplify/api';
import { Schema } from 'amplify/data/resource';
import { uploadData, UploadDataWithPathInput, UploadDataWithPathOutput } from 'aws-amplify/storage';

const client = generateClient<Schema>();

@Injectable()
export class MediaService {
  constructor() {}

  upload(data: any): Observable<any> {
    return new Observable<any>((subscriber) => {
      try {
        const result = uploadData(data); // Call uploadData directly
        subscriber.next(result); // Emit the result
        subscriber.complete(); // Mark observable as complete
      } catch (error) {
        subscriber.error(error); // Pass error to observable
      }
    });
  }
}
