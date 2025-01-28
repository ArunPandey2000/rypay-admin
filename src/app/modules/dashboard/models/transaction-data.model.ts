import { User } from "../../uikit/pages/table/model/user.model";

export interface CounterPartyUser {
    id: string;
    firstName: string;
    lastName: string;
  }
  
export interface Transaction {
    id: number;
    amount: number;
    walletBalanceBefore: number;
    walletBalanceAfter: number;
    sender: string;
    receiver: string;
    reference: string;
    description: string;
    transactionHash: string;
    transactionType: string;
    transactionDate: string;
    createdAt: string;
    updatedAt: string;
    serviceUsed: string;
    counterPartyUser: CounterPartyUser;
    user: User
}
  