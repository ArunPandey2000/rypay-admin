import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { UserProfile } from './model/profile.model';
import { ProfileService } from './services/profile.service';
import { Wallet } from './model/wallet.model';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    standalone: false,
})
export class ProfileComponent implements OnInit {
    userId!: string;
    selectedEditComponent =  '';
    overlayTitle!: string;
    animatePanel = false;
    userData: UserProfile | null = null;
    isLoading: boolean = false;
    constructor(private route: ActivatedRoute, private apiService: ApiService,
        private profileService: ProfileService
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.userId = params['userid'];
            if (this.userId) {
              this.fetchUserData(this.userId);
            }
        });
    }

    get address() {
        return this.userData?.address ? `
        ${this.userData.address.address1} ${this.userData.address.address2}, ${this.userData.address.city},
         ${this.userData.address.state}, ${this.userData.address.pincode} 
        ` : ``
    }
    get lastFourDigits() {
        return this.userData?.card?.lastFourDigits || `1234`;
    }

    get fullName() {
        return `${this.userData?.firstName} ${this.userData?.lastName}`
    }

    get age() {
        if (this.userData?.dob) {
            const birthDate = new Date(this.userData.dob);
            const currentDate = new Date();

            let age = currentDate.getFullYear() - birthDate.getFullYear();
            const monthDifference = currentDate.getMonth() - birthDate.getMonth();

            // If the current month is before the birth month or it's the same month but before the birthday
            if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
                age--;
            }

            return age;

        }
        return ''
    }

    async fetchUserData(userId: string) {
        this.isLoading = true;
        const result = await this.apiService.get({
            url: `user/${userId}`
        });
        this.isLoading = false;
        this.userData = result.data;
    }
    close() {
        this.animatePanel = false;
    }

    updateProfile(user: UserProfile) {
        this.userData = user;
        this.close();
    }

    openProfileEditOverlay() {
        this.selectedEditComponent = 'profile';
        this.overlayTitle = 'Update Profile';
        this.animatePanel = true;
    }
    createLoan() {
        this.selectedEditComponent = 'loan';
        this.overlayTitle = 'Add New Loan';
        this.animatePanel = true;
    }
    closeLoanOverlay() {
        this.close();
        this.fetchUserData(this.userId)
    }
    openWalletEditOverlay() {
        this.selectedEditComponent = 'wallet';
        this.overlayTitle = 'Update Wallet';
        this.animatePanel = true;
    }

    updateBalance(wallet: Wallet) {
        this.profileService.balanceUpdated.next(wallet);
    }
}
