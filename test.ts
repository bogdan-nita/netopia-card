import { ValidatePaymentResponse } from ".";

const smt = {
  "res": {
    "set": {
      "key": "Content-Type",
      "value": "application/xml"
    },
    "send": "<?xml version=\"1.0\" encoding=\"utf-8\" ?><crc error_code=\"20\">Fonduri insuficiente</crc>"
  },
  "error": {
    "$": {
      "code": "20"
    },
    "_": "Fonduri insuficiente"
  },
  "order": {
    "$": {
      "id": "20",
      "type": "card",
      "timestamp": "1706783602173"
    },
    "url": {
      "return": "https://www.miciideveloperi.ro/plata-reusita",
      "confirm": "https://windmill.server.miciideveloperi.ro/api/w/miciideveloperi/jobs/run_wait_result/p/f/scripts/handle_netopia_payload?token=yCQB0WEv73qOjiSYApsWG4g781w4Sj"
    },
    "invoice": {
      "$": {
        "amount": "350",
        "currency": "RON"
      },
      "details": "Vanzare curs online",
      "contact_info": {
        "billing": {
          "$": {
            "type": "person"
          },
          "bank": "",
          "city": "Arges",
          "iban": "",
          "email": "bogdanitza25@gmail.com",
          "county": "Arges",
          "address": "",
          "country": "Romania",
          "zip_code": "",
          "last_name": "Bogdan",
          "first_name": "Bogdan",
          "mobile_phone": "0730435558"
        },
        "shipping": {
          "$": {
            "type": "person"
          },
          "bank": "",
          "city": "Arges",
          "iban": "",
          "email": "bogdanitza25@gmail.com",
          "county": "Arges",
          "address": "",
          "country": "Romania",
          "zip_code": "",
          "last_name": "Bogdan",
          "first_name": "Bogdan",
          "mobile_phone": "0730435558"
        }
      }
    },
    "mobilpay": {
      "$": {
        "crc": "7b5531b2b360fa67b25d72a0ef61db6f",
        "timestamp": "20240201130358"
      },
      "error": {
        "$": {
          "code": "20"
        },
        "_": "Fonduri insuficiente"
      },
      "action": "paid",
      "customer": {
        "$": {
          "type": "person"
        },
        "city": "Arges",
        "email": "bogdanitza25%40gmail.com",
        "county": "Arges",
        "country": "Romania",
        "last_name": "Bogdan",
        "first_name": "Bogdan",
        "mobile_phone": "0730435558"
      },
      "purchase": "1679232",
      "pan_masked": "9****1942",
      "original_amount": "350.00",
      "processed_amount": "350.00",
      "current_payment_count": "1",
      "payment_instrument_id": "43907"
    },
    "signature": "2YAU-54R6-H75W-72S8-QYDY"
  },
  "action": "25",
  "errorMessage": "Fonduri insuficiente",
  "sdas": "dsad"
} satisfies ValidatePaymentResponse;