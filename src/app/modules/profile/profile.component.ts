import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { UserProfile } from './model/profile.model';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    standalone: false,
})
export class ProfileComponent implements OnInit {
    userId!: string;
    userData: UserProfile | null = null;
    isLoading: boolean = false;
    constructor(private route: ActivatedRoute, private apiService: ApiService) {}

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
}
