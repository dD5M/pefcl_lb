import { ServerPromiseResp } from '../http';

type ExportResponse = ServerPromiseResp<unknown>;
type ExportCallback = (result: ExportResponse) => void;

export enum ServerExports {
  AddCash = 'addCash',
  GetCash = 'getCash',
  RemoveCash = 'removeCash',
  GetAccounts = 'getAccounts',
  GetTotalBalance = 'getTotalBalance',
  AddBankBalance = 'addBankBalance',
  RemoveBankBalance = 'removeBankBalance',
  WithdrawMoney = 'withdrawMoney',
  DepositMoney = 'depositMoney',
  CreateInvoice = 'createInvoice',
  GetInvoices = 'getInvoices',
  LoadPlayer = 'loadPlayer',
  CreateAccount = 'createAccount',
}

export type WithdrawMoneyExport = (
  source: number,
  amount: number,
  callback: ExportCallback,
) => Promise<ExportResponse>;

export type DepositMoneyExport = (
  source: number,
  amount: number,
  callback: ExportCallback,
) => Promise<ExportResponse>;
