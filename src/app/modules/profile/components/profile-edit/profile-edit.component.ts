import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserProfile } from '../../model/profile.model';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-profile-edit',
  standalone: false,
  templateUrl: './profile-edit.component.html',
})
export class ProfileEditComponent {
  registrationForm: FormGroup;
  userInfo!: UserProfile;
  formValue!: any;
  @Input() userId!: string;
  @Output() userProfileUpdated = new EventEmitter<UserProfile>();
  @Input() set userData(value: UserProfile | null) {
    if (value) {
      this.registrationForm.patchValue({
        firstName:value.firstName,
        lastName: value.lastName,
        gender: value.gender,
        phoneNumber: value.phoneNumber,
        kycVerificationStatus: value.kycVerificationStatus,
        dob: value.dob,
        email: value.email,
        userType: value.role,
        panNumber: value.panNumber,
        aadharNumber: value.aadharNumber,
        merchant: value.role === "MERCHANT" ? {
          shopName: value.merchant?.shopName,
          gstNumber: value.merchant?.gstNumber,
          msmeNumber: value.merchant?.msmeNumber,
        }: null,
        isBlocked: value.isBlocked,
        address:{
          address1: value.address?.address1,
          address2: value.address.address2,
          city: value.address.city,
          state: value.address.state,
          pincode: value.address.pincode
        } 
      });
      this.userInfo = value;
      this.formValue = this.registrationForm.value;
    }
  }

  get isUserType() {
    return this.registrationForm.get('userType')?.value === 'USER';
  }

  get isMale() {
    return this.registrationForm.get('gender')?.value === 'M';
  }

  get isFormValueChanged() {
    return JSON.stringify(this.formValue) !== JSON.stringify(this.registrationForm.value)
  }

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      dob: ['', Validators.required],
      isBlocked: [''],
      kycVerificationStatus: [''],
      address: this.fb.group({
        address1: ['', Validators.required],
        address2: [''],
        city: ['', Validators.required],
        state: ['', Validators.required],
        pincode: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
      }),
      merchant: this.fb.group({
        shopName: [''],
        gstNumber: [''],
        msmeNumber: [''],
      }),
      email: ['', [Validators.required, Validators.email]],
      userType: ['', Validators.required],
      panNumber: [''],
      aadharNumber: ['', Validators.required],
    });
    this.setFormBasedOnRole(this.userData?.role);
    this.registrationForm.get('userType')?.valueChanges.subscribe((userType) => {
      this.setFormBasedOnRole(userType);
    });
  }

  setFormBasedOnRole(userType: string | undefined) {
    if (userType === 'MERCHANT') {
      this.registrationForm.get('merchant')?.enable();
    } else {
      this.registrationForm.get('merchant')?.disable();
    }
  }

  addMerchantControls() {
    this.registrationForm.addControl(
      'merchant',
      this.fb.group({
        shopName: ['', Validators.required],
        gstNumber: ['', Validators.required],
        msmeNumber: [''],
      })
    );
  }

  removeMerchantControls() {
    this.registrationForm.removeControl('merchant');
  }

  ngOnInit() {

  }

  async onSubmit() {
    if (this.registrationForm.valid) {
      try {
        const request = {
          ...this.registrationForm.value,
          merchantInfo: this.registrationForm.value.merchant
        };

        const response = await this.apiService.post({
          url: `user/update/user/${this.userId}`,
          body: request
        });
        console.log('user info before update', this.userInfo);
        this.userInfo = response.data;
        this.userProfileUpdated.next(this.userInfo);
      } catch(ex) {

      }
    } else {
      console.log('Form is invalid!');
    }
  }

  updateValues(source: any, updates: any) {
    const updatedSource = { ...source };
    for (const [key, value] of Object.entries(updates)) {
      if (key in updatedSource) {
        updatedSource[key] = value;
      }
    }
    return updatedSource;
  }
}
