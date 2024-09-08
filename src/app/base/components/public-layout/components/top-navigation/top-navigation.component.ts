import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { signOut, getCurrentUser } from 'aws-amplify/auth';
// Services
import { ModalService } from 'src/app/shared/services/modal.service';
// Modals
import { LoginDialogComponent } from 'src/app/shared/modals/login/login-dialog.component';
import { RegisterDialogComponent } from 'src/app/shared/modals/register/register-dialog.component';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { UsersService } from 'src/app/shared/api/users.service';


@Component({
  selector: '[appTopNavigation]',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss'],
})

export class TopNavigationComponent implements OnInit, OnDestroy {
  @Input() currentUser: any;

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

  constructor(
    private router: Router,
    private modalService: ModalService,
    private authenticationService: AuthenticationService,
    private usersService: UsersService
  ) {}

  ngOnInit() {}
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
    this.authenticationService.logOut().subscribe({
      next: (response) => {
        window.location.reload();
      },
      error: (error) => {

      }
    });
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
