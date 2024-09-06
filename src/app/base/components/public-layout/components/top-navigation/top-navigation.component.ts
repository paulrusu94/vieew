import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { signOut, getCurrentUser } from 'aws-amplify/auth';
// Services
import { ModalService } from 'src/app/shared/services/modal.service';
// Modals
import { LoginDialogComponent } from 'src/app/shared/modals/login/login-dialog.component';
import { RegisterDialogComponent } from 'src/app/shared/modals/register/register-dialog.component';
import { generateClient } from 'aws-amplify/api';
import { Schema } from 'amplify/data/resource';

const client = generateClient<Schema>();
type User = Schema['User']['type'];
@Component({
  selector: '[appTopNavigation]',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss'],
})

export class TopNavigationComponent implements OnInit, OnDestroy {

  public states = [
    'Alabama',
    'Alaska',
    'American Samoa',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'District Of Columbia',
    'Federated States Of Micronesia',
    'Florida',
    'Georgia',
    'Guam',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Marshall Islands',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Northern Mariana Islands',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Palau',
    'Pennsylvania',
    'Puerto Rico',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virgin Islands',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];

  model: any;
  userName: string | null = null;
  user: User | null = null;

  constructor(
    private router: Router,
    private modalService: ModalService
  ) { }

  async ngOnInit() {
    try {
      const userCognnito = await getCurrentUser();
      const response = await client.models.User.getUserBySub({sub: userCognnito.userId})
      this.user = response.data[0];
    } catch (error) {
      console.log('Error fetching user: ', error);
    }
  }

  formatter = (result: string) => result.toUpperCase();

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
    return text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term === '' ? [] : this.states.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
      ),
    );
  }

  selectItem(item: any) {
    this.router.navigate(['search'], {
      queryParams: { q: item.item }
    })
  }

  onKeypress() {
    this.router.navigate(['search'], {
      queryParams: { q: this.model }
    })
  }

  async logout() {
    await signOut({ global: true });
    this.userName = null;
    window.location.reload();
  }

  public openLogin(): void {
    const dialog = this.modalService.open(LoginDialogComponent, { size: 'md' });
    dialog.result.then(
      () => { },
      () => { },
    );
  }

  public openRegister(): void {
    const dialog = this.modalService.open(RegisterDialogComponent, { size: 'md' });
    dialog.result.then(
      () => { },
      () => { },
    );
  }


  ngOnDestroy() { }
}
