import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: '[appFullScreenFeed]',
  templateUrl: './fullscreen-feed.component.html',
  styleUrls: ['./fullscreen-feed.component.scss'],
  providers: [],
})
export class FullScreenFeedComponent implements OnInit, OnDestroy {
  @Input() post: any;

  public comments = [
    {
      id: 1,
      name: 'John Doe',
      avatar: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=JD',
      message: 'This is an amazing post! Keep up the good work.',
      time: '2 hours ago',
      likes: 10,
    },
    {
      id: 2,
      name: 'Jane Smith',
      avatar: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=JS',
      message: 'I totally agree with your point of view!',
      time: '1 day ago',
      likes: 25,
    },
    {
      id: 3,
      name: 'Emily Johnson',
      avatar: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=EJ',
      message: 'Could you elaborate on your last point?',
      time: '3 days ago',
      likes: 8,
    },
    {
      id: 4,
      name: 'Michael Brown',
      avatar: 'https://via.placeholder.com/150/FF9900/FFFFFF?text=MB',
      message: 'This helped me understand the topic better. Thanks!',
      time: '1 week ago',
      likes: 15,
    },
  ];

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {}

  ngOnDestroy() {}
}
