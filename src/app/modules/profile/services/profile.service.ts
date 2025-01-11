import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Wallet } from "../model/wallet.model";

@Injectable()
export class ProfileService {
    balanceUpdated = new Subject<Wallet>();
}