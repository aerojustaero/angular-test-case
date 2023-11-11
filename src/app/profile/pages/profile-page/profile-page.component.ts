import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '@core/services';
import { CustomValidators } from '@core/validators/validation.helper';
import { ProfileService } from '@shared/services';

@Component({
    selector: 'atc-profile',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.less']
})
export class ProfilePageComponent implements OnInit {
    profileForm: FormGroup;
    successMessage!: string;
    errorMessage!: string;


    CustomValidators = CustomValidators

    constructor(private fb: FormBuilder, private profileService: ProfileService, private storageSrvice: StorageService) {
        this.profileForm = this.fb.group({
            email: [{ value: '', disabled: true }],
            firstName: ['', [Validators.required, Validators.maxLength(255)]],
            lastName: ['', [Validators.required, Validators.maxLength(255)]],
            phoneNumber: ['', [CustomValidators.phoneNumber()]],
            websiteUrl: ['', CustomValidators.url()]
        });
    }

    ngOnInit() {

        const userData = this.storageSrvice.getUser();
        this.profileForm.patchValue(userData);
    }

    updateProfile() {
        if (this.profileForm.valid) {
            this.successMessage = 'Profile updated successfully.';

            setTimeout(() => {
                this.profileForm.reset();
                this.successMessage = '';
            }, 30000);
        }
        else {
            this.errorMessage = 'Error updating profile: ';
        }
    }


    closeErrorMessage() {
        this.errorMessage = '';
    }
}
