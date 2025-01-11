export interface Wallet {
    id: number;

    balance: number;

    status: string;
    walletAccountNo: string;
  
    createdAt: Date;
    
    updatedAt: Date;
}