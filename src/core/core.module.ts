import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AuthService } from './services'

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        AuthService,
        HttpClientModule
    ]
})
export class CoreModule { }
