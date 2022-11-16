import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedDataService } from 'src/app/shared/api/feed-data.service';

@Component({
  selector: '[appProfilePage]',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {
  public feed$: Observable<any>;
  public index = 0;

  constructor(
    private feedDataService: FeedDataService
  ) {
    this.feed$ = this.feedDataService.feed$.asObservable();
  }

  ngOnInit() {
    this.feedDataService.init();
  }

  nextVideo(length: number) {
    if (this.index + 1 === length) {
      this.index = 0;
    } else {
      this.index++;
    }
  }

  prevVideo(length: number) {
    if (this.index - 1 === 0) {
      this.index = length - 1;
    } else {
      this.index--;
    }
  }

  ngOnDestroy() {}
}
