export interface MoneyRequestData {
  UTR: string
  createdAt: string
  modeOfPayment: string
  paidAmount: string
  status: string
  updatedAt: string
  userId: string
  profile: {
    name: string,
    phone: string
  }
}
  