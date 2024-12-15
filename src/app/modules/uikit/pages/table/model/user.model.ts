export interface User {
  userid: number;
  email: string;
  address: string;
  firstName: string;
  lastName: string;
  isPinCreated: boolean;
  kycVerificationStatus: string;
  phoneNumber: string;
  userRole: string;
  selected: boolean;
}