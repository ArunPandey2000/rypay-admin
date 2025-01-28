export interface User {
  id?: string;
  userid: number;
  email: string;
  address: string;
  firstName: string;
  lastName: string;
  isPinCreated: boolean;
  kycVerificationStatus: string;
  dob: string,
  aadharNumber: string,
  panNumber: string,
  isBlocked: boolean,
  phoneNumber: string;
  userRole: string;
  selected: boolean;
}