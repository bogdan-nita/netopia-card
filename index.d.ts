export type NetopiaOptions = {
  signature?: string;
  publicKey?: string;
  privateKey?: string;
  confirmUrl?: string;
  returnUrl?: string;
  sandbox?: boolean;
};

export type BillingData = ClientData['billing'];
export type ShippingData = ClientData['shipping'];
export type ClientData = {
  billing: {
    firstName: string;
    lastName: string;
    country: string;
    county: string;
    city: string;
    zipCode: string;
    address: string;
    email: string;
    phone: string;
    bank: string;
    iban: string;
  };
  shipping: {
    firstName: string;
    lastName: string;
    country: string;
    county: string;
    city: string;
    zipCode: string;
    address: string;
    email: string;
    phone: string;
    bank: string;
    iban: string;
  };
};


export type SplitPayment = {
  firstDestinationId: string;
  firstDestinationAmount: number;
  secondDestinationId: string;
  secondDestinationAmount: number;
};

export type PaymentData = {
  orderId: string;
  amount: number;
  currency: string;
  details: string;
};

export type Request = {
  url: string;
  env_key: string;
  data: string;
};

export declare class Netopia {
  constructor(options?: NetopiaOptions);

  setClientBillingData(data: ClientData['billing']): void;
  setClientShippingData(data: ClientData['shipping']): void;
  setSplitPayment(data: SplitPayment): void;
  setParams(params: Record<string, any>): void;
  setPaymentData(data: PaymentData): void;
  buildRequest(): Request;
  confirmPayment(env_key: string, data: string): Promise<any>;
  validatePayment(env_key: string, data: string): Promise<any>;
}
