import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '@core/models/index.';
import { AuthService, StorageService } from '@core/services';
import { forkJoin} from 'rxjs';

@Component({
    selector: 'atc-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

    @Output()
    public sidebarShow = new  EventEmitter();


    public isLoggedIn!: boolean;

    currentUser!: IUser;



    constructor(private authService: AuthService, private storageService: StorageService) {
     }

    ngOnInit() {
        this.currentUser = this.storageService.getUser();

        this.storageService.getLogged().subscribe({
            next: data => { this.isLoggedIn =data;console.log(data);}
        })
    }

    showSidebar() {
        this.sidebarShow.emit();
    }

    logout(){
        forkJoin([this.authService.logout(), this.storageService.setLogged(false)]);
    }

}
