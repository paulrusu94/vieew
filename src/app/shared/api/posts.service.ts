import { Injectable } from '@angular/core';
import { from, mergeMap, Observable, of } from 'rxjs';
import { autoSignIn, confirmResetPassword, confirmSignUp, getCurrentUser, resetPassword, signIn, signUp } from 'aws-amplify/auth';
import { generateClient } from 'aws-amplify/api';
import { Schema } from 'amplify/data/resource';
import { getUrl } from 'aws-amplify/storage';

const client = generateClient<Schema>();
type Post = Schema['Post']['type'];

@Injectable()

export class PostsService {

  constructor() {}

  public fetchPosts(): Observable<any> {
    return from(client.models.Post.postsByDate({ type: "Post" }, { sortDirection: "DESC", limit: 10 })).pipe(
      mergeMap(response => {
        const { data } = response;
        // Transform each post using async logic
        return from(Promise.all(
          data.map(async (feed: Post) => ({
            ...feed,
            createdAt: new Date(feed.createdAt!).toLocaleDateString(),
            author: await feed.author(),
            medias: await Promise.all(
              (await feed.medias()).data.map(async media => ({
                ...media,
                url: await getUrl({ path: media.path!, options: { contentDisposition: 'inline' } })
              }))
            )
          }))
        ));
      })
    );
  }
}
