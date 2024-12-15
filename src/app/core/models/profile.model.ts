export interface USER {
    id: number;
    email: string;
  }
  export interface PROFILE extends USER {
    dob: string;
    email:string
    firstName: string
    lastName:string
    phoneNumber: string
    userid: string
  }