import { PhoneNumberDirective } from './directives/autoFormatPhoneNumber.directive'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AuthService } from './services'


@NgModule({
    declarations: [
        PhoneNumberDirective
    ],
    imports: [
        CommonModule
    ],
    providers: [
        AuthService
    ],
    exports: [
       PhoneNumberDirective
    ]
})
export class CoreModule { }
