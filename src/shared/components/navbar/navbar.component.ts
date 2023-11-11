import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IUser } from '@core/models/index.';
import { AuthService } from '@core/services';
import { Observable } from 'rxjs';

@Component({
    selector: 'atc-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

    @Output()
    public sidebarShow = new  EventEmitter();

    currentUser$!: Observable<IUser>;

    constructor(private accountService: AuthService) { }

    ngOnInit() {
        this.currentUser$ = this.accountService.currentUser$;
    }

    showSidebar() {
        this.sidebarShow.emit();
    }

    logout(){
        console.log('LOGOUT');
        this.accountService.logout();
    }

}
