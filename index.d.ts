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

export type ValidatedPayment = {
  res: {
    set: {
      key: "Content-Type";
      value: "application/xml";
    };
    send: string;
  };
  error: {
    $: {
      code: string;
    };
    _: string;
  } | null;
  order: {
    $: {
      id: string;
      type: string;
      timestamp: string;
    };
    url: {
      return: string;
      confirm: string;
    };
    invoice: {
      $: {
        amount: string;
        currency: string;
      };
      details: string;
      contact_info: {
        billing: {
          $: {
            type: string;
          };
          bank: string;
          city: string;
          iban: string;
          email: string;
          county: string;
          address: string;
          country: string;
          zip_code: string;
          last_name: string;
          first_name: string;
          mobile_phone: string;
        };
        shipping: {
          $: {
            type: string;
          };
          bank: string;
          city: string;
          iban: string;
          email: string;
          county: string;
          address: string;
          country: string;
          zip_code: string;
          last_name: string;
          first_name: string;
          mobile_phone: string;
        };
      };
    };
    mobilpay: {
      $: {
        crc: string;
        timestamp: string;
      };
      error?: {
        $: {
          code: string;
        };
        _: string;
      };
      action: string | null;
      customer: {
        $: {
          type: string;
        };
        city: string;
        email: string;
        county: string;
        country: string;
        last_name: string;
        first_name: string;
        mobile_phone: string;
      };
      purchase: string;
      pan_masked: string;
      original_amount: string;
      processed_amount: string;
      current_payment_count: string;
      payment_instrument_id: string;
    };
    signature: string;
  };
  action: string | null;
  errorMessage: string | null;
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
  validatePayment(env_key: string, data: string): Promise<ValidatedPayment>;
}
