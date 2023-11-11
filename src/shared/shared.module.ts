import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProfileService } from './services'
import { BrowserModule } from '@angular/platform-browser'
import { CoreModule } from '@core/core.module'
import { NavbarComponent } from './components/navbar/navbar.component'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

const COMPONENTS = [
    NavbarComponent
];

const MODULES = [
    CoreModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
]

@NgModule({
    declarations: [
        ...COMPONENTS
    ],
    imports: [
        ...MODULES
    ],
    exports: [
        ...COMPONENTS
    ],
    providers: [
        ProfileService
    ]
})
export class SharedModule { }
