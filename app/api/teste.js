let api = {};

api.register = (req, res) => {
  const message = {
    status: 0,
    message: "NM$L",
    sessionId: "ISGoddess"
  };
  res.json(message);
};

api.initializeBrands = (req, res) => {
  const categoryList = ["Printers", "Smart Watches", "Bluetooth Headphones"];
  const brandNameList = [];
  for (let i = 0; i < 3; i++) {
    brandNameList[i] = [];
    for (let j = 0; j < 5; j++) {
      brandNameList[i][j] = "B" + i + j;
    }
  }
  const itemNameList = [];
  for (let i = 0; i < 3; i++) {
    itemNameList[i] = [];
    for (let j = 0; j < 5; j++) {
      itemNameList[i][j] = [];
      for (let k = 0; k < 5; k++) {
        itemNameList[i][j][k] = "I" + i + j + k;
      }
    }
  }
  const message = {
    status: 0,
    message: "NM$L",
    brandList: [{
        category: categoryList[0],
        brands: [{
            brandName: brandNameList[0][0],
            itemIds: itemNameList[0][0]
          },
          {
            brandName: brandNameList[0][1],
            itemIds: itemNameList[0][1]
          },
          {
            brandName: brandNameList[0][2],
            itemIds: itemNameList[0][2]
          },
          {
            brandName: brandNameList[0][3],
            itemIds: itemNameList[0][3]
          },
          {
            brandName: brandNameList[0][4],
            itemIds: itemNameList[0][4]
          },
        ]
      },
      {
        category: categoryList[1],
        brands: [{
            brandName: brandNameList[1][0],
            itemIds: itemNameList[1][0]
          },
          {
            brandName: brandNameList[1][1],
            itemIds: itemNameList[1][1]
          },
          {
            brandName: brandNameList[1][2],
            itemIds: itemNameList[1][2]
          },
          {
            brandName: brandNameList[1][3],
            itemIds: itemNameList[1][3]
          },
          {
            brandName: brandNameList[1][4],
            itemIds: itemNameList[1][4]
          },
        ]
      },
      {
        category: categoryList[2],
        brands: [{
            brandName: brandNameList[2][0],
            itemIds: itemNameList[2][0]
          },
          {
            brandName: brandNameList[2][1],
            itemIds: itemNameList[2][1]
          },
          {
            brandName: brandNameList[2][2],
            itemIds: itemNameList[2][2]
          },
          {
            brandName: brandNameList[2][3],
            itemIds: itemNameList[2][3]
          },
          {
            brandName: brandNameList[2][4],
            itemIds: itemNameList[2][4]
          },
        ]
      }
    ]
  };
  res.json(message);
};

api.socialLogin = (req, res) => {
  const message = {
    status: 0,
    message: "NM$L",
    activation: 0
  };
  res.json(message);
};

api.login = (req, res) => {
  const message = {
    status: 0,
    message: "NM$L",
    activation: 1
  };
  res.json(message);
};

api.activate = (req, res) => {
  const message = {
    status: 0,
    message: "NM$L",
  };
  res.json(message);
};

api.createSession = (req, res) => {
  const message = {
    status: 0,
    message: "NM$L",
    sessionId: "ISGoddess"
  };
  res.json(message);
};


api.initPreference = (req, res) => {
  const message = {
    status: 0,
    message: "NM$L",
  };
  setTimeout(() => res.json(message), 3000);
};

api.trackAction = (req, res) => {
  const message = {
    status: 0,
    message: "NM$L",
  };
  res.json(message);
};

api.retrievePersonalizedItem = (req, res) => {
  let topKItemList = [];
  for (let i = 0; i < 8; i++) {
    const oneProduct = {
      itemId: "I" + i,
      score: i
    };
    topKItemList.push(oneProduct);
  }
  const message = {
    status: 0,
    message: "NM$L",
    topKItemList: topKItemList
  };
  res.json(message);
};

api.closeSession = (req, res) => {
  const message = {
    status: 0,
    message: "NM$L",
  };
  res.json(message);
};

api.products = (req, res) => {
  const message = {
    "status": 0,
    "message": "NM$L",
    "recommendation": [{
      "title": "Jedy Bluetooth Smart Wrist Watch for Iphone 4,5,6, 6s Samsung Galaxy S3 S4 S5 Note2 Note3 HTC Android Phone (Silver Color)",
      "price": 109.99,
      "currency": "USD",
      "images": ["https://images-na.ssl-images-amazon.com/images/I/517qLXWqxQL._SX38_SY50_CR,0,0,38,50_.jpg", "https://images-na.ssl-images-amazon.com/images/I/517qLXWqxQL.jpg", "https://images-na.ssl-images-amazon.com/images/I/51cg2mfC6FL._SX38_SY50_CR,0,0,38,50_.jpg", "https://images-na.ssl-images-amazon.com/images/I/51cg2mfC6FL.jpg", "https://images-na.ssl-images-amazon.com/images/I/41MyfVIKmBL._SX38_SY50_CR,0,0,38,50_.jpg", "https://images-na.ssl-images-amazon.com/images/I/41MyfVIKmBL.jpg", "https://images-na.ssl-images-amazon.com/images/I/415MhbeGMqL._SX38_SY50_CR,0,0,38,50_.jpg", "https://images-na.ssl-images-amazon.com/images/I/415MhbeGMqL.jpg", "https://images-na.ssl-images-amazon.com/images/I/51DV-bLGqVL._SX38_SY50_CR,0,0,38,50_.jpg", "https://images-na.ssl-images-amazon.com/images/I/51DV-bLGqVL.jpg", "https://images-na.ssl-images-amazon.com/images/I/51PRTFnBqoL._SX38_SY50_CR,0,0,38,50_.jpg", "https://images-na.ssl-images-amazon.com/images/I/51PRTFnBqoL.jpg", "https://images-na.ssl-images-amazon.com/images/I/51DLHBw8D4L._SX38_SY50_CR,0,0,38,50_.jpg", "https://images-na.ssl-images-amazon.com/images/I/51DLHBw8D4L.jpg", "https://images-na.ssl-images-amazon.com/images/I/51qt3G3STZL._SX38_SY50_CR,0,0,38,50_.jpg", "https://images-na.ssl-images-amazon.com/images/I/51qt3G3STZL.jpg", "https://images-na.ssl-images-amazon.com/images/I/51IPfja7b0L._SX38_SY50_CR,0,0,38,50_.jpg", "https://images-na.ssl-images-amazon.com/images/I/51IPfja7b0L.jpg"],
      "totalOffers": 1,
      "totalReviews": 2,
      "avgProductRating": 3.0,
      "color": "silver"
    }, {
      "title": "Touch Screen Smart Watch Bluetooth Wrist Watch With SIM Card Slot Phone Mate Camera For Android Samsung Galaxy S8 S7 S6 Edge Plus S5 S4 Huawei P10 P9 P8 Lite HTC Motorola",
      "price": 54.99,
      "currency": "USD",
      "images": ["https://images-na.ssl-images-amazon.com/images/I/51hOYlaPzQL._SX38_SY50_CR,0,0,38,50_.jpg", "https://images-na.ssl-images-amazon.com/images/I/51hOYlaPzQL.jpg", "https://images-na.ssl-images-amazon.com/images/I/41Smsnx5GcL._SX38_SY50_CR,0,0,38,50_.jpg", "https://images-na.ssl-images-amazon.com/images/I/41Smsnx5GcL.jpg", "https://images-na.ssl-images-amazon.com/images/I/41U2u0csmzL._SX38_SY50_CR,0,0,38,50_.jpg", "https://images-na.ssl-images-amazon.com/images/I/41U2u0csmzL.jpg", "https://images-na.ssl-images-amazon.com/images/I/51gc%2BVv20yL._SX38_SY50_CR,0,0,38,50_.jpg", "https://images-na.ssl-images-amazon.com/images/I/51gc%2BVv20yL.jpg", "https://images-na.ssl-images-amazon.com/images/I/51vTo0WqNpL._SX38_SY50_CR,0,0,38,50_.jpg", "https://images-na.ssl-images-amazon.com/images/I/51vTo0WqNpL.jpg", "https://images-na.ssl-images-amazon.com/images/I/51Lyka4lSfL._SX38_SY50_CR,0,0,38,50_.jpg", "https://images-na.ssl-images-amazon.com/images/I/51Lyka4lSfL.jpg"],
      "totalOffers": 1,
      "totalReviews": 6,
      "avgProductRating": 3.5,
      "color": ""
    }, {
      "title": "LaserJet Enterprise MFP M630z Multifunction Laser Printer, Copy/Fax/Print/Scan",
      "price": 12374.92,
      "currency": "USD",
      "images": ["https://images-na.ssl-images-amazon.com/images/I/31h-TLnH4yL._SS40_.jpg", "https://images-na.ssl-images-amazon.com/images/I/31h-TLnH4yL.jpg"],
      "totalOffers": 1,
      "totalReviews": 1,
      "avgProductRating": 4.0,
      "color": ""
    }, {
      "title": "BiGR Audio Collegiate Licensed Over-ear Headphones with Mic and Natural Wood Finish, University of Alabama Crimson Tide",
      "price": 136.66,
      "currency": "USD",
      "images": ["https://images-na.ssl-images-amazon.com/images/I/11Zm9SdpO8L._SS40_.jpg", "https://images-na.ssl-images-amazon.com/images/I/11Zm9SdpO8L.jpg"],
      "totalOffers": 1,
      "totalReviews": 1,
      "avgProductRating": 5.0,
      "color": "crimson"
    }, {
      "title": "Vestax HMX-1 White Heart Shaped Headphones",
      "price": 82.49,
      "currency": "USD",
      "images": ["https://images-na.ssl-images-amazon.com/images/I/41x06EJIYOL._SS40_.jpg", "https://images-na.ssl-images-amazon.com/images/I/41x06EJIYOL.jpg", "https://images-na.ssl-images-amazon.com/images/I/41f7AzIL%2B0L._SS40_.jpg", "https://images-na.ssl-images-amazon.com/images/I/41f7AzIL%2B0L.jpg"],
      "totalOffers": 2,
      "totalReviews": 1,
      "avgProductRating": 5.0,
      "color": "white"
    }, {
      "title": "12pcs: Small (S) Red Replacement Eartips Earbuds for Monster Beats Dr. Dre Tour, Powerbeats, urBeats 2.0, HeartBeats 2.0 (Lady Gaga), DiddyBeats and Turbine Pro, Gratitude, DNA, Diesel VEKTR, iSport Victory, iSport Immersion, Inspiration, ClarityMobile, NCredible N-Ergy In-Ear Stereo Earphones",
      "price": 11.01,
      "currency": "USD",
      "images": ["https://images-na.ssl-images-amazon.com/images/I/41rDqaGRvKL._SS40_.jpg", "https://images-na.ssl-images-amazon.com/images/I/41rDqaGRvKL.jpg", "https://images-na.ssl-images-amazon.com/images/I/313d6tNmiCL._SS40_.jpg", "https://images-na.ssl-images-amazon.com/images/I/313d6tNmiCL.jpg", "https://images-na.ssl-images-amazon.com/images/I/41mC2dBKDxL._SS40_.jpg", "https://images-na.ssl-images-amazon.com/images/I/41mC2dBKDxL.jpg", "https://images-na.ssl-images-amazon.com/images/I/41juJdaiOeL._SS40_.jpg", "https://images-na.ssl-images-amazon.com/images/I/41juJdaiOeL.jpg", "https://images-na.ssl-images-amazon.com/images/I/41e0jc2%2BjUL._SS40_.jpg", "https://images-na.ssl-images-amazon.com/images/I/41e0jc2%2BjUL.jpg", "https://images-na.ssl-images-amazon.com/images/I/41QijZhmZTL._SS40_.jpg", "https://images-na.ssl-images-amazon.com/images/I/41QijZhmZTL.jpg", "https://images-na.ssl-images-amazon.com/images/I/31bl5ngKFGL._SS40_.jpg", "https://images-na.ssl-images-amazon.com/images/I/31bl5ngKFGL.jpg", "https://images-na.ssl-images-amazon.com/images/I/31arp2DvRqL._SS40_.jpg", "https://images-na.ssl-images-amazon.com/images/I/31arp2DvRqL.jpg", "https://images-na.ssl-images-amazon.com/images/I/41hOLuM5r2L._SS40_.jpg", "https://images-na.ssl-images-amazon.com/images/I/41hOLuM5r2L.jpg"],
      "totalOffers": 2,
      "totalReviews": 2,
      "avgProductRating": 5.0,
      "color": "red"
    }, {
      "title": "Xerox Phaser 3500DN - printer - B/W - laser ( 3500/DN )",
      "price": 82.5,
      "currency": "USD",
      "images": ["https://images-na.ssl-images-amazon.com/images/I/41cl5pGoo9L._SS40_.jpg", "https://images-na.ssl-images-amazon.com/images/I/41cl5pGoo9L.jpg"],
      "totalOffers": 3,
      "totalReviews": 1,
      "avgProductRating": 2.0,
      "color": ""
    }, {
      "title": "Picun D2 Metal In-Ear Headphones with Microphone, Noise Isolating Earbuds Wired Bass Stereo Earphones Compatible with Apple iOS and Android Smartphones (Matte Black)",
      "price": 20.6,
      "currency": "USD",
      "images": ["https://images-na.ssl-images-amazon.com/images/I/41xRhs%2BUvYL._SX38_SY50_CR,0,0,38,50_.jpg", "https://images-na.ssl-images-amazon.com/images/I/41xRhs%2BUvYL.jpg", "https://images-na.ssl-images-amazon.com/images/I/41XnAyciL-L._SX38_SY50_CR,0,0,38,50_.jpg", "https://images-na.ssl-images-amazon.com/images/I/41XnAyciL-L.jpg", "https://images-na.ssl-images-amazon.com/images/I/41KYnxNTTNL._SX38_SY50_CR,0,0,38,50_.jpg", "https://images-na.ssl-images-amazon.com/images/I/41KYnxNTTNL.jpg", "https://images-na.ssl-images-amazon.com/images/I/41Px66fpgbL._SX38_SY50_CR,0,0,38,50_.jpg", "https://images-na.ssl-images-amazon.com/images/I/41Px66fpgbL.jpg", "https://images-na.ssl-images-amazon.com/images/I/51o8dJp%2BllL._SX38_SY50_CR,0,0,38,50_.jpg", "https://images-na.ssl-images-amazon.com/images/I/51o8dJp%2BllL.jpg", "https://images-na.ssl-images-amazon.com/images/I/417PlU-6i9L._SX38_SY50_CR,0,0,38,50_.jpg", "https://images-na.ssl-images-amazon.com/images/I/417PlU-6i9L.jpg", "https://images-na.ssl-images-amazon.com/images/I/513U6KxD4UL._SX38_SY50_CR,0,0,38,50_.jpg", "https://images-na.ssl-images-amazon.com/images/I/513U6KxD4UL.jpg"],
      "totalOffers": 1,
      "totalReviews": 17,
      "avgProductRating": 4.5,
      "color": "Matte Black"
    }]
  }
  res.json(message);
};

api.currency = (req, res) => {
  const message = {
    "success": true,
    "base": "SGD",
    "rates": {
      "FJD": 1.5357378668053643,
      "MXN": 14.621871992377637,
      "STD": 15307.274218010149,
      "LVL": 0.4398552676667376,
      "SCR": 9.918481339159829,
      "CDF": 1180.1900042625061,
      "BBD": 1.452731507763483,
      "GTQ": 5.617430113866131,
      "CLP": 497.8156771502029,
      "HNL": 17.703215138261424,
      "UGX": 2681.716996598353,
      "ZAR": 10.44940765309501,
      "TND": 2.169895263217787,
      "CUC": 0.7271655363203451,
      "BSD": 0.7257331285444538,
      "SLL": 6253.625064693013,
      "SDG": 34.55471469818821,
      "IQD": 866.0180028198117,
      "CUP": 19.26989121287264,
      "GMD": 36.03098063999311,
      "TWD": 22.434152638864152,
      "RSD": 76.19245954315964,
      "DOP": 36.52008231844328,
      "KMF": 316.57149148495296,
      "MYR": 3.0446695207670196,
      "FKP": 0.5817620030049704,
      "XOF": 421.8943142797811,
      "GEL": 1.9397122197627268,
      "BTC": 2.2501917484825672E-4,
      "UYU": 23.39509188175821,
      "MAD": 6.984826635584017,
      "CVE": 70.92190741682488,
      "TOP": 1.637613690938092,
      "AZN": 1.2380008525012167,
      "OMR": 0.28011865582545714,
      "PGK": 2.4452036519969167,
      "KES": 74.52709905922698,
      "SEK": 6.586086228633626,
      "BTN": 52.18583819321175,
      "UAH": 20.249019077125645,
      "GNF": 6601.486424593181,
      "ERN": 10.90749204557217,
      "MZN": 44.77524441904228,
      "SVC": 6.350629378632051,
      "ARS": 27.735774127038113,
      "QAR": 2.6928764715450395,
      "IRR": 30617.312111882107,
      "MRO": 259.59821283342217,
      "CNY": 5.016207809708356,
      "THB": 23.849996431838797,
      "UZS": 6017.550983880269,
      "XPF": 76.70117324997766,
      "BDT": 60.83722434347441,
      "LYD": 1.0134870064284762,
      "BMD": 0.7271655363203451,
      "KWD": 0.22131278758254186,
      "PHP": 38.557929257828896,
      "RUB": 48.451126156678924,
      "PYG": 4300.604796894479,
      "ISK": 89.62309223921723,
      "JMD": 93.2917129295375,
      "COP": 2307.7330983275933,
      "MKD": 39.64577288621809,
      "USD": 0.7271655363203451,
      "DZD": 86.48181170009701,
      "PAB": 0.7258314940694589,
      "GGP": 0.5780189697593516,
      "SGD": 1.0,
      "ETB": 20.415927371525303,
      "JEP": 0.5780189697593516,
      "KGS": 50.783869725470176,
      "SOS": 421.75630101907973,
      "VEF": 180749.94430646842,
      "VUV": 82.57128189566438,
      "LAK": 6210.031777207872,
      "BND": 0.9991989317375402,
      "ZMK": 6545.36388943715,
      "XAF": 421.8943663556473,
      "LRD": 114.63757640204626,
      "XAG": 0.049935612370396995,
      "CHF": 0.7257832756748486,
      "HRK": 4.752973949851584,
      "ALL": 79.289802838199,
      "DJF": 129.23177810794877,
      "ZMW": 8.727081957769688,
      "TZS": 1679.9704016206524,
      "VND": 16901.803471467247,
      "XAU": 5.87621502318019E-4,
      "AUD": 1.0137197405464622,
      "ILS": 2.7434530671077897,
      "GHS": 3.5235900459231995,
      "GYD": 151.72673607115235,
      "KPW": 654.4745313654228,
      "BOB": 5.015046067854211,
      "KHR": 2917.7161376680174,
      "MDL": 12.548714401162899,
      "IDR": 10637.525385056026,
      "KYD": 0.6048348262819825,
      "AMD": 351.1955969533689,
      "BWP": 7.812307648787501,
      "SHP": 0.9605162068453404,
      "TRY": 3.9090903246255198,
      "LBP": 1094.4933860435394,
      "TJS": 6.836848239996451,
      "JOD": 0.5164312216033837,
      "AED": 2.6710258238434177,
      "HKD": 5.681891035428948,
      "RWF": 647.3447300187795,
      "EUR": 0.6429119281378763,
      "LSL": 10.465733115686216,
      "DKK": 4.800094250888665,
      "CAD": 0.9730677764183763,
      "BGN": 1.2582512924137037,
      "MMK": 1141.2499969461685,
      "MUR": 24.943751635407217,
      "NOK": 6.265478908309829,
      "SYP": 374.49062859427954,
      "IMP": 0.5780189697593516,
      "ZWL": 234.40551026955367,
      "GIP": 0.5817620030049704,
      "RON": 2.994442026381248,
      "LKR": 130.49351462592492,
      "NGN": 263.4595592324403,
      "CRC": 433.26352124148866,
      "CZK": 16.57654220106042,
      "PKR": 101.50142179972907,
      "XCD": 1.9652017489776092,
      "ANG": 1.2882437767732635,
      "HTG": 55.16315111709162,
      "BHD": 0.27413057412678093,
      "KZT": 269.2439735043136,
      "SRD": 5.42320963493532,
      "SZL": 10.441378968936423,
      "LTL": 2.147131037666281,
      "SAR": 2.728507293514369,
      "TTD": 4.8916802696115464,
      "YER": 182.02778086732678,
      "MVR": 11.234446835362471,
      "AFN": 55.19660311053649,
      "INR": 52.192328389126295,
      "AWG": 1.308897965376621,
      "KRW": 823.4354969677058,
      "NPR": 83.5622386964832,
      "JPY": 82.52747323396915,
      "MNT": 1916.0305228867003,
      "AOA": 224.36225451211664,
      "PLN": 2.759339420852077,
      "GBP": 0.5780787605686685,
      "SBD": 5.895823194076466,
      "BYN": 1.5389762141873948,
      "HUF": 208.12201375445778,
      "BYR": 14252.447922526542,
      "BIF": 1296.5001031873644,
      "MWK": 526.5498420686848,
      "MGA": 2553.880216507021,
      "XDR": 0.5268431802795767,
      "BZD": 1.462948021213522,
      "BAM": 1.2578880471743057,
      "EGP": 13.057721275820146,
      "MOP": 5.84099502193294,
      "NAD": 10.465732472774288,
      "NIO": 23.533991075096615,
      "PEN": 2.431314825613354,
      "NZD": 1.070667593317059,
      "WST": 1.8946704529893152,
      "TMT": 2.5450800200331356,
      "CLF": 0.018213694924146036,
      "BRL": 2.8486000271308836
    }
  };
  res.json(message);
};

api.product = (req, res) => {
  const message = {
    "InterClusterId": "IC1454",
    "Url": "www.amazon.com/gp/offer-listing/B00K7JPHHA",
    "Title": "Samsung 3.5mm Stereo Headset for Galaxy S5, S4, S3, Note - Non-Retail Packaging - White",
    "Category": "Bluetooth Headphones",
    "Description": "Samsung EHS64AVFWE Premium Hands Free Headset, White (3.5mm Stereo) Headset. Samsung Stereo Headset for the Samsung Galaxy S5 and Galaxy Note 3. Use these headphones to talk on your smartphone with ease while driving or working. Multi-Function remote with a built-in mic performs Answer/End, Volume Control and TrackSamsung EHS64AVFWE Premium Hands Free Headset, White (3.5mm Stereo) Headset. Samsung Stereo Headset for the Samsung Galaxy S5 and Galaxy Note 3. Use these headphones to talk on your smartphone with ease while driving or working. Multi-Function remote with a built-in mic performs Answer/End, Volume Control and TrackSamsung EHS64AVFWE Premium Hands Free Headset, White (3.5mm Stereo) Headset. Samsung Stereo Headset for the Samsung Galaxy S5 and Galaxy Note 3. Use these headphones to talk on your smartphone with ease while driving or working. Multi-Function remote with a built-in mic performs Answer/End, Volume Control and TracSamsung EHS64AVFWE Premium Hands Free Headset, White (3.5mm Stereo) Headset. Samsung Stereo Headset for the Samsung Galaxy S5 and Galaxy Note 3. Use these headphones to talk on your smartphone with ease while driving or working. Multi-Function remote with a built-in mic performs Answer/End, Volume Control and TrackSamsung EHS64AVFWE Premium Hands Free Headset, White (3.5mm Stereo) Headset. Samsung Stereo Headset for the Samsung Galaxy S5 and Galaxy Note 3. Use these headphones to talk on your smartphone with ease while driving or working. Multi-Function remote with a built-in mic performs Answer/End, Volume Control and TrackSamsung EHS64AVFWE Premium Hands Free Headset, White (3.5mm Stereo) Headset. Samsung Stereo Headset for the Samsung Galaxy S5 and Galaxy Note 3. Use these headphones to talk on your smartphone with ease while driving or working. Multi-Function remote with a built-in mic performs Answer/End, Volume Control and TrackSamsung EHS64AVFWE Premium Hands Free Headset, White (3.5mm Stereo) Headset. Samsung Stereo Headset for the Samsung Galaxy S5 and Galaxy Note 3. Use these headphones to talk on your smartphone with ease while driving or working. Multi-Function remote with a built-in mic performs Answer/End, Volume Control and Trackk",
    "Currency": "SGD",
    "Price": 4.11,
    "ShippingPrice": 0.0,
    "PriceWithShipping": 4.11,
    "SellerId": "A1VN55VW53MIXD",
    "Specifications": ["Multi-Function remote with a built-in mic performs Answer/End, Volume Control and Track Advance", "Compact, Light-Weight Design", "Use these headphones to talk on your smartphone with ease while driving or working", "Samsung Stereo Headset for the Samsung Galaxy S5 and Galaxy Note 3", "Part # EHS64AVFWE"],
    "Images": ["https://images-na.ssl-images-amazon.com/images/I/31tZplZhyEL._SX38_SY50_CR,0,0,38,50_.jpg", "https://images-na.ssl-images-amazon.com/images/I/51IPfja7b0L.jpg", "https://images-na.ssl-images-amazon.com/images/I/51IPfja7b0L.jpg", "https://images-na.ssl-images-amazon.com/images/I/51IPfja7b0L.jpg"],
    "CrawlerUrls": [{
      "Retailer": "Lazada",
      "Url": "www.lazada.sg/samsung-earphone-headset-for-samsung-galaxy-s4-non-retail-packaging-white-intl-80928469.html"
    }, {
      "Retailer": "Lazada",
      "Url": "www.lazada.sg/samsung-level-on-bluetooth-wireless-white-49425324.html"
    }, {
      "Retailer": "Amazon",
      "Url": "www.amazon.com/gp/offer-listing/B00K7JPHHA"
    }],
    "NumberOfOffers": 12,
    "Offers": [{
      "ProductId": "SA356ELABC6KT1SGAMZ_Lazada",
      "Url": "www.lazada.sg/samsung-earphone-headset-for-samsung-galaxy-s4-non-retail-packaging-white-intl-80928469.html",
      "Title": "Samsung Earphone Headset for Samsung Galaxy S4 - Non-Retail Packaging - White - intl",
      "SellerName": "UCHEOL",
      "SellerRating": 0.0,
      "SellerId": "UCHEOL",
      "Retailer": "Lazada",
      "Condition": "New",
      "Currency": "SGD",
      "Category": "Bluetooth Headphones",
      "Price": 48.42,
      "ShippingPrice": 0.0,
      "PriceWithShipping": 48.42,
      "ShippingCountries": ["SGP"]
    }, {
      "ProductId": "SA356ELAATFCTOSGAMZ_Lazada",
      "Url": "www.lazada.sg/samsung-level-on-bluetooth-wireless-white-49425324.html",
      "Title": "Samsung Level On Bluetooth Wireless - White",
      "SellerName": "NMTWorld",
      "SellerRating": 0.0,
      "SellerId": "NMTWorld",
      "Retailer": "Lazada",
      "Condition": "New",
      "Currency": "SGD",
      "Category": "Bluetooth Headphones",
      "Price": 240.0,
      "ShippingPrice": 0.0,
      "PriceWithShipping": 240.0,
      "ShippingCountries": ["SGP"]
    }, {
      "ProductId": "B00K7JPHHA_Amazon",
      "Url": "www.amazon.com/gp/offer-listing/B00K7JPHHA",
      "Title": "Samsung 3.5mm Stereo Headset for Galaxy S5, S4, S3, Note - Non-Retail Packaging - White",
      "SellerName": "Mi cho shop",
      "SellerRating": 0.0,
      "SellerId": "A2UZPA79B8KE5W",
      "Retailer": "Amazon",
      "Condition": "Used - Like New",
      "Currency": "SGD",
      "Category": "Bluetooth Headphones",
      "Price": 41.12,
      "ShippingPrice": 0.0,
      "PriceWithShipping": 41.12,
      "ShippingCountries": []
    }, {
      "ProductId": "B00K7JPHHA_Amazon",
      "Url": "www.amazon.com/gp/offer-listing/B00K7JPHHA",
      "Title": "Samsung 3.5mm Stereo Headset for Galaxy S5, S4, S3, Note - Non-Retail Packaging - White",
      "SellerName": "Rock\u0026Roll Systems",
      "SellerRating": 96.0,
      "SellerId": "A3HLH8C3MAIGJY",
      "Retailer": "Amazon",
      "Condition": "Used - Like New",
      "Currency": "SGD",
      "Category": "Bluetooth Headphones",
      "Price": 27.37,
      "ShippingPrice": 0.0,
      "PriceWithShipping": 27.37,
      "ShippingCountries": []
    }, {
      "ProductId": "B00K7JPHHA_Amazon",
      "Url": "www.amazon.com/gp/offer-listing/B00K7JPHHA",
      "Title": "Samsung 3.5mm Stereo Headset for Galaxy S5, S4, S3, Note - Non-Retail Packaging - White",
      "SellerName": "Mehak Imtiaz",
      "SellerRating": 100.0,
      "SellerId": "AEYMOZLJ6MJQR",
      "Retailer": "Amazon",
      "Condition": "Refurbished",
      "Currency": "SGD",
      "Category": "Bluetooth Headphones",
      "Price": 38.39,
      "ShippingPrice": 0.0,
      "PriceWithShipping": 38.39,
      "ShippingCountries": []
    }, {
      "ProductId": "B00K7JPHHA_Amazon",
      "Url": "www.amazon.com/gp/offer-listing/B00K7JPHHA",
      "Title": "Samsung 3.5mm Stereo Headset for Galaxy S5, S4, S3, Note - Non-Retail Packaging - White",
      "SellerName": "DTruce",
      "SellerRating": 100.0,
      "SellerId": "A3V1ZVNG0I2LO1",
      "Retailer": "Amazon",
      "Condition": "Used - Like New",
      "Currency": "SGD",
      "Category": "Bluetooth Headphones",
      "Price": 20.57,
      "ShippingPrice": 0.0,
      "PriceWithShipping": 20.57,
      "ShippingCountries": []
    }, {
      "ProductId": "B00K7JPHHA_Amazon",
      "Url": "www.amazon.com/gp/offer-listing/B00K7JPHHA",
      "Title": "Samsung 3.5mm Stereo Headset for Galaxy S5, S4, S3, Note - Non-Retail Packaging - White",
      "SellerName": "laughing sir",
      "SellerRating": 0.0,
      "SellerId": "A2QFKVRKKXW98S",
      "Retailer": "Amazon",
      "Condition": "Used - Good",
      "Currency": "SGD",
      "Category": "Bluetooth Headphones",
      "Price": 13.71,
      "ShippingPrice": 0.0,
      "PriceWithShipping": 13.71,
      "ShippingCountries": []
    }, {
      "ProductId": "B00K7JPHHA_Amazon",
      "Url": "www.amazon.com/gp/offer-listing/B00K7JPHHA",
      "Title": "Samsung 3.5mm Stereo Headset for Galaxy S5, S4, S3, Note - Non-Retail Packaging - White",
      "SellerName": "FRC technologies",
      "SellerRating": 93.0,
      "SellerId": "A1VN55VW53MIXD",
      "Retailer": "Amazon",
      "Condition": "Used - Like New",
      "Currency": "SGD",
      "Category": "Bluetooth Headphones",
      "Price": 4.11,
      "ShippingPrice": 0.0,
      "PriceWithShipping": 4.11,
      "ShippingCountries": []
    }, {
      "ProductId": "B00K7JPHHA_Amazon",
      "Url": "www.amazon.com/gp/offer-listing/B00K7JPHHA",
      "Title": "Samsung 3.5mm Stereo Headset for Galaxy S5, S4, S3, Note - Non-Retail Packaging - White",
      "SellerName": "Teslatronic",
      "SellerRating": 92.0,
      "SellerId": "A25241C6EWMUO7",
      "Retailer": "Amazon",
      "Condition": "New",
      "Currency": "SGD",
      "Category": "Bluetooth Headphones",
      "Price": 13.7,
      "ShippingPrice": 0.0,
      "PriceWithShipping": 13.7,
      "ShippingCountries": []
    }, {
      "ProductId": "B00K7JPHHA_Amazon",
      "Url": "www.amazon.com/gp/offer-listing/B00K7JPHHA",
      "Title": "Samsung 3.5mm Stereo Headset for Galaxy S5, S4, S3, Note - Non-Retail Packaging - White",
      "SellerName": "The Slick Zone",
      "SellerRating": 95.0,
      "SellerId": "AOE8HPY81R7P5",
      "Retailer": "Amazon",
      "Condition": "New",
      "Currency": "SGD",
      "Category": "Bluetooth Headphones",
      "Price": 10.96,
      "ShippingPrice": 0.0,
      "PriceWithShipping": 10.96,
      "ShippingCountries": []
    }, {
      "ProductId": "B00K7JPHHA_Amazon",
      "Url": "www.amazon.com/gp/offer-listing/B00K7JPHHA",
      "Title": "Samsung 3.5mm Stereo Headset for Galaxy S5, S4, S3, Note - Non-Retail Packaging - White",
      "SellerName": "Grand O\u0027s",
      "SellerRating": 85.0,
      "SellerId": "A1S6KJMUK3OS6N",
      "Retailer": "Amazon",
      "Condition": "New",
      "Currency": "SGD",
      "Category": "Bluetooth Headphones",
      "Price": 10.9,
      "ShippingPrice": 0.0,
      "PriceWithShipping": 10.9,
      "ShippingCountries": []
    }, {
      "ProductId": "B00K7JPHHA_Amazon",
      "Url": "www.amazon.com/gp/offer-listing/B00K7JPHHA",
      "Title": "Samsung 3.5mm Stereo Headset for Galaxy S5, S4, S3, Note - Non-Retail Packaging - White",
      "SellerName": "EZCellular",
      "SellerRating": 82.0,
      "SellerId": "A2VY4BAWWKK1IS",
      "Retailer": "Amazon",
      "Condition": "Refurbished",
      "Currency": "SGD",
      "Category": "Bluetooth Headphones",
      "Price": 6.84,
      "ShippingPrice": 0.0,
      "PriceWithShipping": 6.84,
      "ShippingCountries": []
    }]
  }
  res.json(message);
};

api.reviews = (req, res) => {
  const message = {
    "InterClusterId": "IC1454",
    "Reviews": [{
      "Title": "Best earbuds I\u0027ve ever owned",
      "Text": "These are the best earbuds I\u0027ve ever owned, and I\u0027ve tried \u0027em all. I\u0027ve tried everything from your standard Sony, to trendy colorful Skullcandies, to expensive Bose, and my earbuds always seem to suffer similar fates: crackly sound after I\u0027ve blown out the tiny speaker from playing too loud (this usually happens within a week or two), or the jack somehow becomes dislodged from the wires inside and the headphones stop working altogether. But these Samsung headphones, which usually come pre-packed when you get a Samsung phone, have been the most durable, with the best sound, that I\u0027ve ever owned. My only complaint is that there is a \"volume\" adjuster on the cable, and it doesn\u0027t work. But I\u0027ve never had a pair of headphones with that feature that has ever worked, so it seems like an unreliable feature anyway. Overall excellent quality earbuds, I will continue to buy these for all my headphone needs.",
      "Date": "16 Jul 2016",
      "Username": "amzn1.account.AHFLYKVDCABDFQZJNCHASLMPFW7Q",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Best choice for a simple Xbox One headset for game audio and chat",
      "Text": "Bought these to use as a mic for my Xbox One controller as the iPhone headphones that come with it won\u0027t work. Works perfect. My only wish is that the small mute button above the volume controls would be one press to mute. If you want to mute yourself (at least on xbox chat) you have to hold that button which is annoying. It would be more convenient to have it as one press to mute yourself, and then another press to unmute yourself. The audio isn\u0027t great but for $4 what can you expect.",
      "Date": "05 Jul 2017",
      "Username": "amzn1.account.AEAXSBMLR3BUMRBEBCLDCEMICGKQ",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "This product is so amazing I had to purchase two of them",
      "Text": "This product is so amazing I had to purchase two of them! This is the standard ones that come with a typical smart phone purchase and they are great! I still have a pair that work till this day and they have quality sound with great bass. The sound on my other pair went out in the right ear bud due to wiring issues. I\u0027m sure this is due to wear and tear that earbuds go through but they didn\u0027t last long at all. That wasn\u0027t what I was expecting for those but the other lone I still have. I love this product and would recommend this to anyone try to find affordable earbuds with great sound quality, bass and decent durability! Samsung 3.5mm Stereo Headset for Galaxy S5, S4, S3, Note - Non-Retail Packaging - White",
      "Date": "03 Feb 2017",
      "Username": "amzn1.account.AFVSRCYA6I4NNL73GHRSAMX5OJHA",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Great for back to school list",
      "Text": "My children needed ear buds for school this year and I could not find any in the store for under $10 that did not seem junky. These are made incredibly well, packaged nicely with additional ear covers, all for a reasonable price. I am very happy with this purchase. Volume is easy to adjust. Sound quality is great for children. Definitely worth the money.",
      "Date": "28 Jul 2016",
      "Username": "amzn1.account.AHB6JI2FZR7L73EKQ4QB2IMV3DEQ",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Good at blocking noise on airplanes",
      "Text": "I love these. I travel for work on some very small, very loud airplanes. These block the noise really well without turning the music on. The sound is good for me when I do play music. I also use them for conference calls and have no trouble hearing or being heard. I recently bought additional pairs to replace the more expensive but lower quality headsets my teens use for their phones. I will buy them again to have on hand in case we lose a pair. My only issue is that the earbuds slip out of my ear while walking which is a little frustrating in an airport while moving your luggage. I\u0027ve purchased smaller covers to see if that helps. I\u0027ll still use them regardless. They seem to be lasting longer than countless other brands we\u0027ve purchased.",
      "Date": "08 Aug 2016",
      "Username": "amzn1.account.AFKXGKXPEQAPBX2LXSHUWX2VW4IA",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "finally!",
      "Text": "I received a pair of these with my phone and I absolutely loved them! I use them as a hands-free device for talking on my phone rather than for music. They somehow disappeared and I\u0027ve bought others from the grocery store and electronics stores but they never matched the quality of my Samsung set. Either there was too much background noise and I couldn\u0027t hear the person I was talking to or they couldn\u0027t hear me. It was completely aggravating. I ended up breaking down and looking for these on amazon. I should have done that first! I\u0027m so glad to have found them for a good price . I\u0027ve already used them a few times today and am thrilled that they work just as well as my original set. For the record, they did not come with replacement ear pieces though. I\u0027ll have to put some on from another set because the ones that came with it are too big for my ears. Other than that, I am happy with them and would definitely buy again.",
      "Date": "18 Aug 2015",
      "Username": "amzn1.account.AFYFRBNFUY762CFLYTE3D267QASQ",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Buy this one!",
      "Text": "Great quality headset and the mic works very well. I have had no complaints from those I call. Can\u0027t beat the price either. Why go to big lots and pay for a subpar headset for 5 bucks when you can get the name brand quality headset for about the same price. I couldn\u0027t pass this up.",
      "Date": "22 Aug 2016",
      "Username": "amzn1.account.AH5TVB45S2WQQXZL2FVPRFMQQT5Q",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "I have used many different types and before the Samsung I used a different type that was also good and lasted about 2 months(lon",
      "Text": "I use earbuds to listen to my books on tape all of the time, it helps me to keep working and get to sleep. I have used many different types and before the Samsung I used a different type that was also good and lasted about 2 months(longer than any others I had tried). I got Samsung earbuds with my new phone and don\u0027t use them with it so I tried it on my CD player and found that after 8 months they are still going strong. Both ears still work and the sound it great. I am not listening to music so quality isn\u0027t as important with books on disc, but I have used earbuds that were awful. The tonal quality is great and I have hearing problems. These are the best I have tried.",
      "Date": "02 Jul 2016",
      "Username": "amzn1.account.AEPSBN2NC6HCRBN5Q3XDP2VF3ZUA",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Works with CameraMX",
      "Text": "Using these with a camera app for my phone for use in a 3D scanner. For some reason 3rd party headsets don\u0027t work, but these, when used with the camera app, allow me to take photos using the volume + button.",
      "Date": "07 Apr 2017",
      "Username": "amzn1.account.AE4J52SBFRBUO3SUOPNM7Y6RRZOQ",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Works great!",
      "Text": "Sound is awesome, and if you do the enhanced performance test on your phone (for Galaxy s5) the sound couldn\u0027t get any more clear and loud. It makes a world of difference. Anyways the volume and song pause/change buttons works perfect and great sound. For the price these can\u0027t be beaten.",
      "Date": "11 Jul 2016",
      "Username": "amzn1.account.AHMIALOD5PBECMS3YMLHBCUCEVTQ",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Good quality and convenient",
      "Text": "These are my favorite to buy, especially since I own a samsung. They have a button for the volume and a separate one to pause and play the music- very convenient so you don\u0027t have to take the phone out of your pocket. Really great for the price",
      "Date": "03 Mar 2017",
      "Username": "amzn1.account.AEKSF3TH5ZHALBIMMB6DKVA7WRPQ",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "The product itself is very nice and looks expensive",
      "Text": "The product itself is very nice and looks expensive. As if I bought them from Verizon. I am very happy with it . It arrived earlier than I thought it would . Thank you so much. One happy customer!!",
      "Date": "11 Mar 2017",
      "Username": "amzn1.account.AGMEZ4VB2LE4OSVPDSTE7RR7YTDA",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Five Stars",
      "Text": "nice earphones",
      "Date": "14 Apr 2017",
      "Username": "amzn1.account.AEXSBNZXALY26LCIA4PLK3JLYMGQ",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Professional headphone destoryer",
      "Text": "I\u0027ve had these babies for 5 months, which is longer than I\u0027ve ever managed to keep most ear buds alive. Works with samsung phones to adjust, play/pause/skip songs.",
      "Date": "01 Jun 2017",
      "Username": "amzn1.account.AFTP4EC4XCPVOXHVHGYW2RQBSVLQ",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Quality",
      "Text": "They perform perfectly. The cord even feels more durable than the average pair, so I think it will last longer. I\u0027ve been using them for weeks and have only had one concern. The buds themselves are a bit too big and round, or simply too firm perhaps, to stay in my ear easily. I often have to poke them back in and adjust. The microphone works very well and is a useful thing as the speakerphone option on my phone is very poor and without this I must hold the phone to my face throughout every conversation.",
      "Date": "26 Sep 2016",
      "Username": "amzn1.account.AEGFFBLVGCQ7PSQ5Q76EMGXHZVZQ",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Superb",
      "Text": "High quality, highly reliable, and long-lasting. This is an item that I always simply reorder because it is so dependable",
      "Date": "11 Apr 2017",
      "Username": "amzn1.account.AGMOD6CPJKWFVVFKCIMT5LDJ4PXA",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Nice product!",
      "Text": "These babies are nice. Not sure if they are OEM but the price is right and they work nice and that\u0027s ok with me.",
      "Date": "01 Apr 2017",
      "Username": "amzn1.account.AHFB4CIPKNHTVNZIGVJTF54VAX2A",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "I am very happy with my purchase",
      "Text": "I am very happy with my purchase. I ordered more than one set of these earbuds from different vendors because I\u0027ve read reviews about people receiving knock-off (non OEM) earbuds. I received this set first (fastest) even though I ordered everything the same day and all were prime. The others have not arrived yet. This set works perfectly. I\u0027m most happy that the pause button even works when I\u0027m using them with my ipod. So I can use them with my Samsung cell phone or my ipod and use the pause button. I have some older earbuds that do not pause the ipod.",
      "Date": "16 Jan 2016",
      "Username": "amzn1.account.AF6XVLWHMFQPOQYCVUCMKJ4SNATA",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "I love these earphones",
      "Text": "I love these earphones. I have difficulty with earphones fitting in my ear properly, they always work themselves out. When I purchased a new Samsung phone, these are the earphones that were included with the phone. I have never had an issue with the fit, quality or sound. On a recent visit with our daughter, her cat found my earphones and had a good time with them rendering them useless. I was so happy to find the same ones on Amazon, ordered them and they are the same and the quality just as fantastic.",
      "Date": "04 Apr 2016",
      "Username": "amzn1.account.AFEJEI62TXL6OD57TQHISTOEV6SA",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "RECOMMEND!!",
      "Text": "As for the actual product... great.. amazing.. perfect!!! I always order these Samsung ear buds bc they fit to perfection and the sound great! Also can talk on the phone through them if needed. I have ordered these exact ones but from several different sellers on amazon (amazon always amazing!) usually the pkging is better, this was just wrapped in some type of tape/plastic, usually i get a little zipper baggy but either way, i could care less about pkging when the product is as it should be and it was! happy with this order and will order again!",
      "Date": "08 Dec 2015",
      "Username": "amzn1.account.AHFOYCO3SLYVEKACKDAZB4TCSJ2A",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Exactly What I Needed",
      "Text": "I loved my Samsung headphones so much I had to buy another pair to keep at work. These are perfect. Super quick shipping, product was in perfect condition, and they work great. They hold up very well with continuous use, and are very comfortable to wear. Definitely would recommend 10/10.",
      "Date": "02 Aug 2016",
      "Username": "amzn1.account.AHH5DQDAV5GZ4PUKCLUOLWXP6L5Q",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Brand Name Headphones for $5",
      "Text": "I have a Samsung Galaxy S7. I have been looking for a pair of headphones with microphone since purchasing my phone back in March because unfortunately, the phone only comes with a standard pair of headphones. The Samsung OEM Samsung 3.5mm Stereo Headset for Galaxy S5, S4, S3, Note work great. They are comfortable to wear. The sound is very crisp and clear. The earbuds provide a tight yet comfortable fit thanks to the silicone bud covers. They work well to help fight background noise. The microphone includes in-line volume control. This is great for hands-free in the car, or long conference calls at work. I can\u0027t wait to abandon my old uncomfortable handset! The Samsung OEM Samsung 3.5mm Stereo Headset for Galaxy S5, S4, S3, Note are a great price, how can you go wrong with a brand name headphone for $5. I feel comfortable keeping these in my purse with my phone. If the wiring breaks down or shorts out over time, they were not a huge investment and worth the convenience. They are prime eligible so they shipped quickly and arrived at my house within 2 days. If you are in the market for a set of Samsung-compatible earbuds, these are definately a great option.\u003cbr\u003e\u003cbr\u003eI hope you found this review helpful. If so, I\u0027d appreciate you clicking the \"helpful\" button!",
      "Date": "15 Jul 2016",
      "Username": "amzn1.account.AESST6T2B5I6VBYBGR7YSEMLDIEA",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Very Very Very happy with these!!",
      "Text": "I was very happy with these, when I bought my Galaxy a pair came with the phone and these sound just like the ones that came with the phone. The sound quality was amazing for finding these on amazon. Reason why I bought these was because I remember the bass. The bass on this pair was exactly like the ones that came with my Galaxy! In my opinion, you dont need those pairs of headphones and cost like 50 bucks and more! These far surpass anything I have ever owned on earbuds! I highly recommend these!",
      "Date": "08 Mar 2016",
      "Username": "amzn1.account.AEF2VU7WDVWBDWFVAES2KPPVMDHA",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "I love these earbuds and they are the only kind I ...",
      "Text": "I love these earbuds and they are the only kind I buy. They fit and feel nice. They don\u0027t hurt like all of the other earbuds I\u0027ve tried (I have pretty small ears). Eventually after using a pair, they will stop working like a year later. But for the price, I don\u0027t mind repurchasing. Also comes with extra little ear squishy covers.. the clear things, haha. So you can clean them or change them out.",
      "Date": "21 Dec 2016",
      "Username": "amzn1.account.AGEXAJEJBUCIZVJSEOCFUYDYE4AQ",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "they carry Samsung products so theirs should be better, and I still didn\u0027t care for them",
      "Text": "I tell what, before I got the Samsung ear buds from amazon, I went to Walmart and bought a pair of ear buds and I didn\u0027t care for them, so I went to sprint figuring well, they carry Samsung products so theirs should be better, and I still didn\u0027t care for them. So I finally went to amazon and bought me a pair, and boy I tell you what a difference that makes. I\u0027m so happy with them, I ended up buying two pairs. And I also paid three times less than Walmart and sprint store.",
      "Date": "22 Apr 2016",
      "Username": "amzn1.account.AEJEJD7GNHIHJF35VFNAWI6CGWEQ",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Great replacements",
      "Text": "Great price for oem earbuds that needed to be replaced for my mom... no issues at all...",
      "Date": "26 Apr 2017",
      "Username": "amzn1.account.AHCQPGTBLNQ2B2E67EOAEL2YE34A",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Five Stars",
      "Text": "It\u0027s very good I like it nice sound protective very comfortable",
      "Date": "25 Jun 2017",
      "Username": "amzn1.account.AEHHGDIJGE36BC2TINH4RYQT5MRA",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "I keep going back to these. I\u0027ve tried many other sets, but these are most comfortable with good sound.",
      "Text": "I keep going back to these, each set lasts me 9-12 months. Because of multiple fusions in my neck I can\u0027t cradle a phone and haven\u0027t found a bluetooth that has battery length, comfort or portability (case) that I need. I simply tie these in a loose knot and shove them in my pocket. The weakest point is the wires break at the end of the plug... ultimately from lots of use.",
      "Date": "04 Jan 2017",
      "Username": "amzn1.account.AHYJEVHXAAMIXMONSY2CJ2OUDUPQ",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Maybe not for music, but perfect and affordable if you\u0027re a podcast junkie",
      "Text": "These aren\u0027t Beats. But *for the price* they\u0027re great! I listen to podcasts more than music, and they work well: the sound is rich and full. They earbuds come with different sized thingees (I don\u0027t know what those are called) that are comfortable for my small-ish ear canals. These would not be my go-to headsets if I were listening to music, but I know I\u0027m not alone in using earbuds for podcasts. No need to spend a ton for that, these work great for me.",
      "Date": "10 Apr 2016",
      "Username": "amzn1.account.AGGMTEMTZTKKEPU6BFSHA3DJFEBA",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "everything was in great condition upon arrival",
      "Text": "Ordered as expected, everything was in great condition upon arrival.",
      "Date": "05 May 2017",
      "Username": "amzn1.account.AHS6S3NZJ4I64YKQ2OW2TJ6XBDPA",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Great sound for a tiny price.",
      "Text": "After I purchased the first headset I reordered so I would have a spare. Now I want another set to keep attached to my player in the bedroom. The ear pieces are so comfortable that you forget you are wearing them. Sound quality is excellent and several people I\u0027ve been talking with have commented that they hear me much clearer now on my android smart phone. The headset works equally well on my tablet and my pc. Yep, got to order another one.",
      "Date": "18 May 2016",
      "Username": "amzn1.account.AG5HGTR3OKWB3NWIHIBG5OS6MA6Q",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Best Headsets in History!",
      "Text": "All I wanted was some \"loud\" earphones, and these Samsung 3.5mm Stereo Headsets are the exact definition. The first thing I got from plugging these into the computer was at the max, and I forgot to turn down my music LOL. Guys, if you\u0027re looking for some earphones that are a 5-star quality, non-breaking (unless you rip the cord up), then these are the perfect ones for you.",
      "Date": "14 Nov 2016",
      "Username": "amzn1.account.AFB2SYBVKHDZWA5JSYLBU5RLH54A",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Same good quality earbuds that came with my phone",
      "Text": "I bought two pairs because they were so inexpensive figuring they may be knockoffs but they seem to be of the same quality that my factory buds were. I wound up accidentally washing and drying both pairs a few weeks back and after carefully unraveling them they amazingly still work (including the volume control and microphone) and the wires did not kink or distort at all.",
      "Date": "24 Nov 2016",
      "Username": "amzn1.account.AGVN3N7FNTI5G2XYUWSRDLRPLFMA",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Cheap but we\u0027ll worth it.",
      "Text": "I use these headphones everyday. Bought them to use when my beats headphones need a charging. When I use them they are just as good as the Bluetooth headphones I have. For the price it was a well worth it purchase. If I ever need another pair of wired headphones this will be my go to choice.",
      "Date": "11 Apr 2017",
      "Username": "amzn1.account.AF7VIY7C4QXDFODKOZOUY6QDLAWQ",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Five Stars",
      "Text": "Product as described. Will purchase again. Thanks",
      "Date": "22 Jun 2017",
      "Username": "amzn1.account.AEYFAVRQPAOWZWPROZWWMOX33S2A",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Great quality earbud Samsung",
      "Text": "Love love them one purchased 2, I received 4 it was a 2pkg combo\u0027s and the quality is like my original that came with my phone very good and durable.",
      "Date": "15 May 2017",
      "Username": "amzn1.account.AH4ROHOY5MU6LLRIWQMX7N6YUDQQ",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Great with up and down sides.",
      "Text": "Although no instructions accompanied it, had lot learn that it answers automatically after two rings- and I can say hold on and the caller hears me until I can insert the earbud- the upsides...2 Downsides I must have phone within eyesight to see the call flash in and hear the quick beep to know there is an incoming call AND since it answers without action from me the caller can hear what\u0027s going on in my environment when i don\u0027t respond. Any solutions out there, I\u0027m all ears!",
      "Date": "10 Nov 2015",
      "Username": "amzn1.account.AHT3KPI4O6HTKPGTC4HHQKYAH2MA",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "They work very well and have excellent sound. I am so glad to find them ...",
      "Text": "These are the exact replacement for my Samsung Galaxy S5, They work very well and have excellent sound. I am so glad to find them here on Amazon due to mine disappearing one day, I think the grew legs and walked out with a \"friend\". They are a great price and always my go to when my bluetooth headphones battery powers out. I hope this helps your decision to purchase. Happy Amazon shopping!",
      "Date": "23 Jul 2016",
      "Username": "amzn1.account.AGRDARMUQRSRRBXFABG6F4ELZSGQ",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Five Stars",
      "Text": "Great set of headphones. Makes a nice gift.",
      "Date": "25 May 2017",
      "Username": "amzn1.account.AHGNWVTZCKBA6653BEQYV52DHPZQ",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Great headset",
      "Text": "This headset has surprising good sound quality. The ear buds have nice retention, even when exercising with them in. The microphone works well; no one that I\u0027ve talked to has had any problems with the quality of the phone call. There is also a volume control and answer button on the plastic housing that holds the microphone near your mouth (it\u0027s on the same wire as the right earbud and hangs conveniently near your mouth. This is a great product for the price.",
      "Date": "28 Dec 2015",
      "Username": "amzn1.account.AGMRJ4E4DHBP5SCZG3FAUQ4MHB7A",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "That bass though...",
      "Text": "Bruh... I\u0027ve ordered many of these and I finally got a pair with some KNOCK. That\u0027s all I ask for. Steal for the price.",
      "Date": "13 Jul 2016",
      "Username": "amzn1.account.AF7B5QDGKLJQISCXIHYT6GCI3NYQ",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Just awesome!",
      "Text": "Absolutely amazing, especially for the price. Super comfortable, true to size and they look amazing. They look exactky as pictured.\u003cbr\u003eThe first few times they colored my feet, but now it\u0027s completely fine.\u003cbr\u003eLove them!",
      "Date": "15 Sep 2016",
      "Username": "amzn1.account.AECESRK2MRYFK6DXYJBH4KGOF37Q",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Impressed",
      "Text": "I am very satisfied with this purchase. I am a big believer and user of samsung products. I have owned several galaxy phones and tablets; however I always purchased apple headphones because they lasted for years. Then, I discovered these gems and they work just was well but they are way less expensive. I love these headphones. They are supper comfortable and an amazing value",
      "Date": "08 Sep 2016",
      "Username": "amzn1.account.AEAY4JZ5N7IBMU4SDXE2W5RFMKCA",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Five Stars",
      "Text": "great item at a greatprice",
      "Date": "11 Jul 2017",
      "Username": "amzn1.account.AHXSAUEX62GNA56L6WTGCYL3FVXQ",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Five Stars",
      "Text": "Great .....Quick and good",
      "Date": "04 Apr 2017",
      "Username": "amzn1.account.AHNN7QLZOPGWWMW3VFIJ364FNDVA",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Five Stars",
      "Text": "Great buy! Valued price.",
      "Date": "13 Jul 2017",
      "Username": "amzn1.account.AG246X5FXSCHKKKHLVAHBFRPLK5A",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Get Stereo Samsung earbuds in lightening speed!!",
      "Text": "These ear buds are soft, comfortable, high quality stereo Samsung brand ear buds. They\u0027re sooooo comfortable you forget they\u0027re in your ears! They have the built-in mic with volume control and call answer/hang up thingy. But, even better than any of that, they arrived quickly!! I was lying in bed on a Friday night when I placed the order and they arrived mid-day Sunday!! Now THAT\u0027S good service!!",
      "Date": "26 Apr 2016",
      "Username": "amzn1.account.AHALYBIUKFZEIPXJ6U2QUOUUHY2A",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Great headphones.",
      "Text": "Great headphones. Stay in place in ear.",
      "Date": "10 Apr 2017",
      "Username": "amzn1.account.AGPLQN5XJGVRZWBAQVV6LKN7ECFQ",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Five Stars",
      "Text": "Just like the originals",
      "Date": "24 Sep 2017",
      "Username": "amzn1.account.AFWPRLXRNCQKZH3RLJYQJUP6VARQ",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }, {
      "Title": "Decent",
      "Text": "Late but good price",
      "Date": "20 Mar 2017",
      "Username": "amzn1.account.AGYWTYTW5NQOO6ZREY5IPDKHRC6A",
      "Rating": 5.0,
      "ReviewRating": 0.0
    }]
  }
  res.json(message);
};

api.getUpdate = (req, res) => {
  let message = {};
  console.log(req.query.url);
  switch (req.query.url) {
    case "https://www.lazada.sg/samsung-earphone-headset-for-samsung-galaxy-s4-non-retail-packaging-white-intl-80928469.html?mp=1":
      message = {
        "message": "There are price updates.",
        "updates": [{
          "condition": "New",
          "sellerId": "",
          "shippingPrice": 0,
          "retailer": "Lazada",
          "price": 48.42,
          "sellerRating": 0,
          "sellerName": "UCHEOL",
          "deposit": 0,
          "priceWithShipping": 48.42,
          "title": "Samsung Earphone Headset for Samsung Galaxy S4 - Non-Retail Packaging - White - intl",
          "url": "https://www.lazada.sg/samsung-earphone-headset-for-samsung-galaxy-s4-non-retail-packaging-white-intl-80928469.html?mp=1"
        }],
        "last update": "Thu Dec 20 10:58:22 SGT 2018"
      };
      break;
    case "https://www.lazada.sg/samsung-level-on-bluetooth-wireless-white-49425324.html?mp=1":
      message = {
        "message": "Item has been delisted.",
        "last update": "Thu Dec 20 10:55:42 SGT 2018"
      };
      break;
    case "https://www.amazon.com/gp/offer-listing/B00K7JPHHA":
      message = {
        "message": "There are price updates.",
        "updates": [{
          "condition": "New",
          "sellerId": "AHNZI6VWLAE6",
          "productId": "B00K7JPHHA",
          "shippingPrice": 24.95,
          "retailer": "Amazon",
          "price": 5.62,
          "sellerRating": 89,
          "sellerName": "Onogo US",
          "deposit": 0,
          "priceWithShipping": 30.57,
          "title": "Samsung 3.5mm Stereo Headset for Galaxy S5, S4, S3, Note - Non-Retail Packaging - White",
          "url": "https://www.amazon.com/dp/B00K7JPHHA/?smid=AHNZI6VWLAE6"
        }, {
          "condition": "Refurbished",
          "sellerId": "A2VY4BAWWKK1IS",
          "productId": "B00K7JPHHA",
          "shippingPrice": -1,
          "retailer": "Amazon",
          "price": 4.99,
          "sellerRating": 81,
          "sellerName": "EZCellular",
          "deposit": 0,
          "priceWithShipping": 4.99,
          "title": "Samsung 3.5mm Stereo Headset for Galaxy S5, S4, S3, Note - Non-Retail Packaging - White",
          "url": "https://www.amazon.com/gp/offer-listing/B00K7JPHHA"
        }, {
          "condition": "Used - Like New",
          "sellerId": "A1VN55VW53MIXD",
          "productId": "B00K7JPHHA",
          "shippingPrice": -1,
          "retailer": "Amazon",
          "price": 8,
          "sellerRating": 83,
          "sellerName": "FRC technologies",
          "deposit": 0,
          "priceWithShipping": 8,
          "title": "Samsung 3.5mm Stereo Headset for Galaxy S5, S4, S3, Note - Non-Retail Packaging - White",
          "url": "https://www.amazon.com/gp/offer-listing/B00K7JPHHA"
        }, {
          "condition": "New",
          "sellerId": "A156LQ5AGEVX6D",
          "productId": "B00K7JPHHA",
          "shippingPrice": -1,
          "retailer": "Amazon",
          "price": 5.78,
          "sellerRating": 96,
          "sellerName": "Cell Emporium",
          "deposit": 0,
          "priceWithShipping": 5.78,
          "title": "Samsung 3.5mm Stereo Headset for Galaxy S5, S4, S3, Note - Non-Retail Packaging - White",
          "url": "https://www.amazon.com/gp/offer-listing/B00K7JPHHA"
        }, {
          "condition": "New",
          "sellerId": "A3ECUL0C31ETR4",
          "productId": "B00K7JPHHA",
          "shippingPrice": -1,
          "retailer": "Amazon",
          "price": 3.18,
          "sellerRating": 92,
          "sellerName": "JORA",
          "deposit": 0,
          "priceWithShipping": 3.18,
          "title": "Samsung 3.5mm Stereo Headset for Galaxy S5, S4, S3, Note - Non-Retail Packaging - White",
          "url": "https://www.amazon.com/gp/offer-listing/B00K7JPHHA"
        }, {
          "condition": "Refurbished",
          "sellerId": "AEYMOZLJ6MJQR",
          "productId": "B00K7JPHHA",
          "shippingPrice": -1,
          "retailer": "Amazon",
          "price": 28,
          "sellerRating": 100,
          "sellerName": "Mehak Imtiaz",
          "deposit": 0,
          "priceWithShipping": 28,
          "title": "Samsung 3.5mm Stereo Headset for Galaxy S5, S4, S3, Note - Non-Retail Packaging - White",
          "url": "https://www.amazon.com/gp/offer-listing/B00K7JPHHA"
        }, {
          "condition": "Used - Like New",
          "sellerId": "A3V1ZVNG0I2LO1",
          "productId": "B00K7JPHHA",
          "shippingPrice": -1,
          "retailer": "Amazon",
          "price": 15,
          "sellerRating": 100,
          "sellerName": "DTruce",
          "deposit": 0,
          "priceWithShipping": 15,
          "title": "Samsung 3.5mm Stereo Headset for Galaxy S5, S4, S3, Note - Non-Retail Packaging - White",
          "url": "https://www.amazon.com/gp/offer-listing/B00K7JPHHA"
        }],
        "last update": "Thu Dec 20 10:57:04 SGT 2018"
      };
      break;
    default:
      break;
  }
  setTimeout(() => res.json(message), 4000);
}

module.exports = api;