export interface UserProfile {
    id: number;
    email: string;
    phoneNumber: string;
    aadharNumber: string;
    panNumber: string;
    kycVerificationStatus: number;
    gender: string;
    isBlocked: boolean;
    cardHolderId: string;
    createdAt: string;
    updatedAt: string;
    firstName: string;
    lastName: string;
    dob: string;
    role: string;
    pin: string;
    profileIcon: string;
    userSession: string;
    merchant: Merchant | null;
    card: Card;
    address: Address;
    loans: Loan[];
    documents: Document[];
    beneficiaries: Beneficiary[];
    profileUrl: string;
  }
  
  export interface Merchant {
    id: number;
    shopName: string,
    gstNumber: string,
    msmeNumber: string
  }
  
  export interface Card {
    id: number;
    cardNumber: string;
    lastFourDigits: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Address {
    id: number;
    address1: string;
    address2: string;
    city: string;
    state: string;
    pincode: string;
    createdAt: string;
  }
  
  export interface Document {
    id: number;
    documentType: string;
    documentUrl: string;
    description: string;
    createdDate: string;
  }
  
  export interface Beneficiary {
    id: number;
    nameInBank: string;
    bankAccountNumber: string;
    ifscCode: string;
  }
  
  export interface Loan {
    id: number;
    loanAccount: string,
    name: string,
    installmentAmount: string,
    overdueAmount: string,
    totalAmount: string,
    dueDate: string,
    loanStatus: string,
  }
  