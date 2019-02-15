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
    "InterClusterId":"IC70571",
    "Url":"www.amazon.com/gp/offer-listing/B00EHDZMGI",
    "Title":"Canon PIXMA Color Printer MG5520 (Discontinued by Manufacturer)",
    "Category":"Printers",
    "Description":"The Canon PIXMA MG5520 all-in-one wireless inkjet photo printer is an advanced printer with a smart design delivering a combination of high performance and real convenience. Print beautiful, borderless photos up to 8.5\" x 11\" and crisp documents with remarkable quality. The MG5520 offers 4800 x 1200 maximum color dpi with 2pl technology, five individual ink tanks and the ChromaLife100+ system. If a color runs out, you only replace the ink tank you need. Plus, the Snap Edge feature allows for quick access to the ink tanks for easy replacement. With a 2.5\" LCD screen, the MG5520 lets you preview your images before you print, and correct your photos with Auto Photo Fix II.",
    "Currency":"SGD",
    "Price":106.92,
    "ShippingPrice":0.0,
    "PriceWithShipping":106.92,
    "SellerId":"AIWIY4OLMONIH",
    "Specifications":[  
       "\u003cspan id\u003d\"replacementPartsFitmentBulletInner\"\u003e \u003ca class\u003d\"a-link-normal hsx-rpp-fitment-focus\" href\u003d\"https://www\\uff0eamazon\\uff0ecom#\"\u003eEnter your model number\u003c/a\u003e \u003cspan\u003eto make sure this fits\\uff0e\u003c/span\u003e \u003c/span\u003e",
       "Easily print and scan from your mobile devices and popular online cloud services with our free Canon PRINT app\\uff0e",
       "Built-In Auto Duplex Printing: Duplex Printing: Automatically print on both sides of the page without the hassle of turning it over manually\\uff0e This can reduce your paper consumption and cost by up to 50%\\uff0e",
       "Compatible with Individual/Combo CLI-251 XL Ink Tanks (Cyan, Magenta, Yellow, Black) \u0026amp; PGI-250 XL Pigment Black Ink Tanks\\uff0e",
       "AirPrint: Wirelessly print photos, emails, web pages, documents and more from compatible iPad, iPhone or iPod touch devices",
       "4800 x 1200 dpi photo resolution, Load plain and photo paper right into of the printer at the same time!"
    ],
    "Images":[  
       "https://images-na.ssl-images-amazon.com/images/I/41HkWAsR9FL._SS40_.jpg",
       "https://images-na.ssl-images-amazon.com/images/I/41HkWAsR9FL.jpg",
       "https://images-na.ssl-images-amazon.com/images/I/415hkneRHFL._SS40_.jpg",
       "https://images-na.ssl-images-amazon.com/images/I/415hkneRHFL.jpg",
       "https://images-na.ssl-images-amazon.com/images/I/41FiVQ8SJ9L._SS40_.jpg",
       "https://images-na.ssl-images-amazon.com/images/I/41FiVQ8SJ9L.jpg",
       "https://images-na.ssl-images-amazon.com/images/I/41sLa3jwxIL._SS40_.jpg",
       "https://images-na.ssl-images-amazon.com/images/I/41sLa3jwxIL.jpg",
       "https://images-na.ssl-images-amazon.com/images/I/416KA6sJDcL._SS40_.jpg",
       "https://images-na.ssl-images-amazon.com/images/I/416KA6sJDcL.jpg",
       "https://images-na.ssl-images-amazon.com/images/I/51lhSPelpbL._SS40_.jpg",
       "https://images-na.ssl-images-amazon.com/images/I/51lhSPelpbL.jpg",
       "https://images-na.ssl-images-amazon.com/images/I/41FM1Cj7oTL._SS40_.jpg",
       "https://images-na.ssl-images-amazon.com/images/I/41FM1Cj7oTL.jpg",
       "https://images-na.ssl-images-amazon.com/images/I/31IJK%2BeTRyL._SS40_.jpg",
       "https://images-na.ssl-images-amazon.com/images/I/31IJK%2BeTRyL.jpg"
    ],
    "CrawlerUrls":[  
       {  
          "Retailer":"Amazon",
          "Url":"www.amazon.com/gp/offer-listing/B00EHDZMGI"
       }
    ],
    "NumberOfOffers":22,
    "Offers":[  
       {  
          "ProductId":"B00EHDZMGI_Amazon",
          "Url":"www.amazon.com/gp/offer-listing/B00EHDZMGI",
          "Title":"Canon PIXMA Color Printer MG5520 (Discontinued by Manufacturer)",
          "SellerName":"SOUTHWEST COMPUTERS",
          "SellerRating":85.0,
          "SellerId":"A12M9MB5GL364Y",
          "Retailer":"Amazon",
          "Condition":"New",
          "Currency":"SGD",
          "Category":"Printers",
          "Price":407.51,
          "ShippingPrice":0.0,
          "PriceWithShipping":407.51,
          "ShippingCountries":[  
 
          ]
       },
       {  
          "ProductId":"B00EHDZMGI_Amazon",
          "Url":"www.amazon.com/gp/offer-listing/B00EHDZMGI",
          "Title":"Canon PIXMA Color Printer MG5520 (Discontinued by Manufacturer)",
          "SellerName":"PacificTech",
          "SellerRating":88.0,
          "SellerId":"A17LFE53QSA0DN",
          "Retailer":"Amazon",
          "Condition":"New",
          "Currency":"SGD",
          "Category":"Printers",
          "Price":243.19,
          "ShippingPrice":0.0,
          "PriceWithShipping":243.19,
          "ShippingCountries":[  
 
          ]
       },
       {  
          "ProductId":"B00EHDZMGI_Amazon",
          "Url":"www.amazon.com/gp/offer-listing/B00EHDZMGI",
          "Title":"Canon PIXMA Color Printer MG5520 (Discontinued by Manufacturer)",
          "SellerName":"welltopinc",
          "SellerRating":97.0,
          "SellerId":"AHXBXO79UALHM",
          "Retailer":"Amazon",
          "Condition":"New",
          "Currency":"SGD",
          "Category":"Printers",
          "Price":338.28,
          "ShippingPrice":0.0,
          "PriceWithShipping":338.28,
          "ShippingCountries":[  
 
          ]
       },
       {  
          "ProductId":"B00EHDZMGI_Amazon",
          "Url":"www.amazon.com/gp/offer-listing/B00EHDZMGI",
          "Title":"Canon PIXMA Color Printer MG5520 (Discontinued by Manufacturer)",
          "SellerName":"BestPrinters",
          "SellerRating":69.0,
          "SellerId":"AIWIY4OLMONIH",
          "Retailer":"Amazon",
          "Condition":"Used",
          "Currency":"SGD",
          "Category":"Printers",
          "Price":106.92,
          "ShippingPrice":0.0,
          "PriceWithShipping":106.92,
          "ShippingCountries":[  
 
          ]
       },
       {  
          "ProductId":"B00EHDZMGI_Amazon",
          "Url":"www.amazon.com/gp/offer-listing/B00EHDZMGI",
          "Title":"Canon PIXMA Color Printer MG5520 (Discontinued by Manufacturer)",
          "SellerName":"punchbanana",
          "SellerRating":77.0,
          "SellerId":"A1VR96VXS6BLLT",
          "Retailer":"Amazon",
          "Condition":"New",
          "Currency":"SGD",
          "Category":"Printers",
          "Price":334.76,
          "ShippingPrice":0.0,
          "PriceWithShipping":334.76,
          "ShippingCountries":[  
 
          ]
       },
       {  
          "ProductId":"B00EHDZMGI_Amazon",
          "Url":"www.amazon.com/gp/offer-listing/B00EHDZMGI",
          "Title":"Canon PIXMA Color Printer MG5520 (Discontinued by Manufacturer)",
          "SellerName":"killow electronics",
          "SellerRating":100.0,
          "SellerId":"A1K3QKPZWKYMC0",
          "Retailer":"Amazon",
          "Condition":"New",
          "Currency":"SGD",
          "Category":"Printers",
          "Price":271.71,
          "ShippingPrice":0.0,
          "PriceWithShipping":271.71,
          "ShippingCountries":[  
 
          ]
       },
       {  
          "ProductId":"B00EHDZMGI_Amazon",
          "Url":"www.amazon.com/gp/offer-listing/B00EHDZMGI",
          "Title":"Canon PIXMA Color Printer MG5520 (Discontinued by Manufacturer)",
          "SellerName":"Reliable Home Supplies",
          "SellerRating":100.0,
          "SellerId":"A31B1CAFXRQ9BV",
          "Retailer":"Amazon",
          "Condition":"New",
          "Currency":"SGD",
          "Category":"Printers",
          "Price":271.38,
          "ShippingPrice":0.0,
          "PriceWithShipping":271.38,
          "ShippingCountries":[  
 
          ]
       },
       {  
          "ProductId":"B00EHDZMGI_Amazon",
          "Url":"www.amazon.com/gp/offer-listing/B00EHDZMGI",
          "Title":"Canon PIXMA Color Printer MG5520 (Discontinued by Manufacturer)",
          "SellerName":"TechWoods",
          "SellerRating":97.0,
          "SellerId":"A15QMLFSVCH3T6",
          "Retailer":"Amazon",
          "Condition":"New",
          "Currency":"SGD",
          "Category":"Printers",
          "Price":270.36,
          "ShippingPrice":0.0,
          "PriceWithShipping":270.36,
          "ShippingCountries":[  
 
          ]
       },
       {  
          "ProductId":"B00EHDZMGI_Amazon",
          "Url":"www.amazon.com/gp/offer-listing/B00EHDZMGI",
          "Title":"Canon PIXMA Color Printer MG5520 (Discontinued by Manufacturer)",
          "SellerName":"HappyShopping13",
          "SellerRating":91.0,
          "SellerId":"A383QGXZQ626S5",
          "Retailer":"Amazon",
          "Condition":"New",
          "Currency":"SGD",
          "Category":"Printers",
          "Price":271.71,
          "ShippingPrice":0.0,
          "PriceWithShipping":271.71,
          "ShippingCountries":[  
 
          ]
       },
       {  
          "ProductId":"B00EHDZMGI_Amazon",
          "Url":"www.amazon.com/gp/offer-listing/B00EHDZMGI",
          "Title":"Canon PIXMA Color Printer MG5520 (Discontinued by Manufacturer)",
          "SellerName":"Phase 3, LLC",
          "SellerRating":99.0,
          "SellerId":"A3HSHD0T91F47D",
          "Retailer":"Amazon",
          "Condition":"New",
          "Currency":"SGD",
          "Category":"Printers",
          "Price":238.15,
          "ShippingPrice":0.0,
          "PriceWithShipping":238.15,
          "ShippingCountries":[  
 
          ]
       },
       {  
          "ProductId":"B00EHDZMGI_Amazon",
          "Url":"www.amazon.com/gp/offer-listing/B00EHDZMGI",
          "Title":"Canon PIXMA Color Printer MG5520 (Discontinued by Manufacturer)",
          "SellerName":"eDirect",
          "SellerRating":95.0,
          "SellerId":"A3FDNO47PM80XV",
          "Retailer":"Amazon",
          "Condition":"New",
          "Currency":"SGD",
          "Category":"Printers",
          "Price":256.61,
          "ShippingPrice":0.0,
          "PriceWithShipping":256.61,
          "ShippingCountries":[  
 
          ]
       },
       {  
          "ProductId":"B00EHDZMGI_Amazon",
          "Url":"www.amazon.com/gp/offer-listing/B00EHDZMGI",
          "Title":"Canon PIXMA Color Printer MG5520 (Discontinued by Manufacturer)",
          "SellerName":"etrader2008",
          "SellerRating":97.0,
          "SellerId":"A2ZDOQCTP71F2K",
          "Retailer":"Amazon",
          "Condition":"New",
          "Currency":"SGD",
          "Category":"Printers",
          "Price":240.46,
          "ShippingPrice":0.0,
          "PriceWithShipping":240.46,
          "ShippingCountries":[  
 
          ]
       },
       {  
          "ProductId":"B00EHDZMGI_Amazon",
          "Url":"www.amazon.com/gp/offer-listing/B00EHDZMGI",
          "Title":"Canon PIXMA Color Printer MG5520 (Discontinued by Manufacturer)",
          "SellerName":"gold stars printer",
          "SellerRating":87.0,
          "SellerId":"A20D6SB0465L0J",
          "Retailer":"Amazon",
          "Condition":"New",
          "Currency":"SGD",
          "Category":"Printers",
          "Price":228.24,
          "ShippingPrice":0.0,
          "PriceWithShipping":228.24,
          "ShippingCountries":[  
 
          ]
       },
       {  
          "ProductId":"B00EHDZMGI_Amazon",
          "Url":"www.amazon.com/gp/offer-listing/B00EHDZMGI",
          "Title":"Canon PIXMA Color Printer MG5520 (Discontinued by Manufacturer)",
          "SellerName":"thehappystore",
          "SellerRating":89.0,
          "SellerId":"A3QZEZE55VH2T8",
          "Retailer":"Amazon",
          "Condition":"New",
          "Currency":"SGD",
          "Category":"Printers",
          "Price":191.29,
          "ShippingPrice":0.0,
          "PriceWithShipping":191.29,
          "ShippingCountries":[  
 
          ]
       },
       {  
          "ProductId":"B00EHDZMGI_Amazon",
          "Url":"www.amazon.com/gp/offer-listing/B00EHDZMGI",
          "Title":"Canon PIXMA Color Printer MG5520 (Discontinued by Manufacturer)",
          "SellerName":"Wish Upon A Moment",
          "SellerRating":0.0,
          "SellerId":"A2Q96EZN4UUK5I",
          "Retailer":"Amazon",
          "Condition":"New",
          "Currency":"SGD",
          "Category":"Printers",
          "Price":169.82,
          "ShippingPrice":0.0,
          "PriceWithShipping":169.82,
          "ShippingCountries":[  
 
          ]
       },
       {  
          "ProductId":"B00EHDZMGI_Amazon",
          "Url":"www.amazon.com/gp/offer-listing/B00EHDZMGI",
          "Title":"Canon PIXMA Color Printer MG5520 (Discontinued by Manufacturer)",
          "SellerName":"ELIFE (NO TAX)",
          "SellerRating":94.0,
          "SellerId":"AG1CHDZF8IHG2",
          "Retailer":"Amazon",
          "Condition":"New",
          "Currency":"SGD",
          "Category":"Printers",
          "Price":203.79,
          "ShippingPrice":0.0,
          "PriceWithShipping":203.79,
          "ShippingCountries":[  
 
          ]
       },
       {  
          "ProductId":"B00EHDZMGI_Amazon",
          "Url":"www.amazon.com/gp/offer-listing/B00EHDZMGI",
          "Title":"Canon PIXMA Color Printer MG5520 (Discontinued by Manufacturer)",
          "SellerName":"Amazing Lighting deal",
          "SellerRating":88.0,
          "SellerId":"AVUBP608KDX58",
          "Retailer":"Amazon",
          "Condition":"Used - Like New",
          "Currency":"SGD",
          "Category":"Printers",
          "Price":148.09,
          "ShippingPrice":0.0,
          "PriceWithShipping":148.09,
          "ShippingCountries":[  
 
          ]
       },
       {  
          "ProductId":"B00EHDZMGI_Amazon",
          "Url":"www.amazon.com/gp/offer-listing/B00EHDZMGI",
          "Title":"Canon PIXMA Color Printer MG5520 (Discontinued by Manufacturer)",
          "SellerName":"Bob of CA",
          "SellerRating":100.0,
          "SellerId":"A24JIWS6X9NLWQ",
          "Retailer":"Amazon",
          "Condition":"New",
          "Currency":"SGD",
          "Category":"Printers",
          "Price":169.82,
          "ShippingPrice":0.0,
          "PriceWithShipping":169.82,
          "ShippingCountries":[  
 
          ]
       },
       {  
          "ProductId":"B00EHDZMGI_Amazon",
          "Url":"www.amazon.com/gp/offer-listing/B00EHDZMGI",
          "Title":"Canon PIXMA Color Printer MG5520 (Discontinued by Manufacturer)",
          "SellerName":"LEESANCHRIS",
          "SellerRating":0.0,
          "SellerId":"A2EH4E5ZJRTTO1",
          "Retailer":"Amazon",
          "Condition":"Used - Good",
          "Currency":"SGD",
          "Category":"Printers",
          "Price":108.67,
          "ShippingPrice":0.0,
          "PriceWithShipping":108.67,
          "ShippingCountries":[  
 
          ]
       },
       {  
          "ProductId":"B00EHDZMGI_Amazon",
          "Url":"www.amazon.com/gp/offer-listing/B00EHDZMGI",
          "Title":"Canon PIXMA Color Printer MG5520 (Discontinued by Manufacturer)",
          "SellerName":"cemalim21",
          "SellerRating":100.0,
          "SellerId":"AVKJVZKGPQQ6X",
          "Retailer":"Amazon",
          "Condition":"Used - Good",
          "Currency":"SGD",
          "Category":"Printers",
          "Price":116.15,
          "ShippingPrice":0.0,
          "PriceWithShipping":116.15,
          "ShippingCountries":[  
 
          ]
       },
       {  
          "ProductId":"B00EHDZMGI_Amazon",
          "Url":"www.amazon.com/gp/offer-listing/B00EHDZMGI",
          "Title":"Canon PIXMA Color Printer MG5520 (Discontinued by Manufacturer)",
          "SellerName":"BOUZA\u0027S STORE",
          "SellerRating":97.0,
          "SellerId":"A3JIZALIK8V2SH",
          "Retailer":"Amazon",
          "Condition":"Used - Good",
          "Currency":"SGD",
          "Category":"Printers",
          "Price":122.26,
          "ShippingPrice":0.0,
          "PriceWithShipping":122.26,
          "ShippingCountries":[  
 
          ]
       },
       {  
          "ProductId":"B00EHDZMGI_Amazon",
          "Url":"www.amazon.com/gp/offer-listing/B00EHDZMGI",
          "Title":"Canon PIXMA Color Printer MG5520 (Discontinued by Manufacturer)",
          "SellerName":"Toyarcade",
          "SellerRating":89.0,
          "SellerId":"A3GIFK3NGJQKTP",
          "Retailer":"Amazon",
          "Condition":"Used - Good",
          "Currency":"SGD",
          "Category":"Printers",
          "Price":122.25,
          "ShippingPrice":0.0,
          "PriceWithShipping":122.25,
          "ShippingCountries":[  
 
          ]
       }
    ]
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
    case "https://www.amazon.com/gp/offer-listing/B00EHDZMGI":
      message = {  
        "message":"There are price updates.",
        "updates":[  
           {  
              "condition":"New",
              "sellerId":"A1K3QKPZWKYMC0",
              "productId":"B00EHDZMGI",
              "shippingPrice":-1,
              "retailer":"Amazon",
              "price":199.99,
              "sellerRating":100,
              "sellerName":"killow electronics",
              "deposit":0,
              "priceWithShipping":199.99,
              "title":"Canon PIXMA Color Printer MG5520 (Discontinued by Manufacturer)",
              "url":"https://www.amazon.com/gp/offer-listing/B00EHDZMGI"
           },
           {  
              "condition":"New",
              "sellerId":"A1FD0WQQIOI0IX",
              "productId":"B00EHDZMGI",
              "shippingPrice":-1,
              "retailer":"Amazon",
              "price":236.2,
              "sellerRating":75,
              "sellerName":"GO-DEAL",
              "deposit":0,
              "priceWithShipping":236.2,
              "title":"Canon PIXMA Color Printer MG5520 (Discontinued by Manufacturer)",
              "url":"https://www.amazon.com/gp/offer-listing/B00EHDZMGI"
           },
           {  
              "condition":"New",
              "sellerId":"A35U3EQJ0U5CZ3",
              "productId":"B00EHDZMGI",
              "shippingPrice":-1,
              "retailer":"Amazon",
              "price":249.99,
              "sellerRating":100,
              "sellerName":"TopHillsideStore",
              "deposit":0,
              "priceWithShipping":249.99,
              "title":"Canon PIXMA Color Printer MG5520 (Discontinued by Manufacturer)",
              "url":"https://www.amazon.com/gp/offer-listing/B00EHDZMGI"
           }
        ],
        "last update":"Thu Feb 14 20:21:27 SGT 2019"
      };
      break;
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

api.search = (req, res) => {
  let message = {};
  switch (req.query.q) {
    case "blank":
      message = {
        "Status": "Success",
        "Products": []
      };
      break;
    default:
      message = {
        "DataFromCache": true,
        "DataFromCacheTime": "29 Dec 2018 14:36:20",
        "Status": "Success",
        "NumberOfProducts": 1200,
        "Products": [{
          "Title": "Brother HL-2270DW Compact Laser Printer with Wireless Networking and Duplex",
          "Color": "N.A.",
          "InterClusterId": "IC47014",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41YEaUYQK1L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41YEaUYQK1L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31iX42SeTHL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31iX42SeTHL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41fDocGpZYL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41fDocGpZYL.jpg"
          ],
          "AvgProductRating": 4.4,
          "AvgReviews": 4772.0,
          "TotalReviews": 4772.0,
          "TotalOffers": 34.0,
          "ProductPriority": 1.0,
          "Price": 117.38,
          "Currency": "SGD"
        },
        {
          "Title": "HP Envy 4500 Wireless All-in-One Color Photo Printer",
          "Color": "N.A.",
          "InterClusterId": "IC70539",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/31s7K%2BFEPAL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31s7K%2BFEPAL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41JCvGHxfVL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41JCvGHxfVL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31QNT%2BraqDL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31QNT%2BraqDL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31v9o2R%2BsfL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31v9o2R%2BsfL.jpg"
          ],
          "AvgProductRating": 3.7,
          "AvgReviews": 4219.0,
          "TotalReviews": 4219.0,
          "TotalOffers": 48.0,
          "ProductPriority": 1.0,
          "Price": 54.65,
          "Currency": "SGD"
        },
        {
          "Title": "Canon Office and Business MX922 All One Printer, Wireless and mobile printing",
          "Color": "N.A.",
          "InterClusterId": "IC952",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41EO7p9awaL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41EO7p9awaL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Z%2BBgsSg3L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Z%2BBgsSg3L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41i-4UpwemL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41i-4UpwemL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41SppsyhF8L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41SppsyhF8L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41N6GIGES%2BL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41N6GIGES%2BL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31tHA5V5cfL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31tHA5V5cfL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41jXVkh%2B3SL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41jXVkh%2B3SL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41DPuKPhhwL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41DPuKPhhwL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31tcRp%2Bu4HL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31tcRp%2Bu4HL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41qRot6VM4L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41qRot6VM4L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/4102-KpcQkL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/4102-KpcQkL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/410lDQhWtbL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/410lDQhWtbL.jpg"
          ],
          "AvgProductRating": 1.8,
          "AvgReviews": 4599.5,
          "TotalReviews": 9199.0,
          "TotalOffers": 97.0,
          "ProductPriority": 2.0,
          "Price": 101.12,
          "Currency": "SGD"
        },
        {
          "Title": "HP Envy 4520 Wireless All-in-One Photo Printer with Mobile Printing, Instant Ink ready (F0V69A)",
          "Color": "N.A.",
          "InterClusterId": "IC70478",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41USmQY22sL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41USmQY22sL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41akwjxOZJL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41akwjxOZJL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41j2RpSYL7L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41j2RpSYL7L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51bIoiolrQL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51bIoiolrQL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/61X3aXi%2BWQL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/61X3aXi%2BWQL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51NXlKhOJ0L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51NXlKhOJ0L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51pno7%2BX5pL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51pno7%2BX5pL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31%2B-EQAOF6L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31%2B-EQAOF6L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41SqRzS19qL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41SqRzS19qL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51iyUhV2FWL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51iyUhV2FWL.jpg"
          ],
          "AvgProductRating": 3.9,
          "AvgReviews": 3992.0,
          "TotalReviews": 3992.0,
          "TotalOffers": 54.0,
          "ProductPriority": 1.0,
          "Price": 54.51,
          "Currency": "SGD"
        },
        {
          "Title": "Epson XP-310 Wireless Color Photo Printer with Scanner and Copier (Discontinued by Manufacturer)",
          "Color": "N.A.",
          "InterClusterId": "IC80672",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41GaJ613HDL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41GaJ613HDL.jpg"
          ],
          "AvgProductRating": 3.1,
          "AvgReviews": 3871.0,
          "TotalReviews": 3871.0,
          "TotalOffers": 9.0,
          "ProductPriority": 1.0,
          "Price": 170.36,
          "Currency": "SGD"
        },
        {
          "Title": "Epson WorkForce WF-3620 WiFi Direct All-in-One Color Inkjet Printer, Copier, Scanner",
          "Color": "N.A.",
          "InterClusterId": "IC70430",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/51zbOBen5DL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51zbOBen5DL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41IkfHul6sL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41IkfHul6sL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/519hWMY1p-L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/519hWMY1p-L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51pFsew49LL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51pFsew49LL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41EfUolwW8L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41EfUolwW8L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41mOPd-fmyL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41mOPd-fmyL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51m-9kdJDVL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51m-9kdJDVL.jpg"
          ],
          "AvgProductRating": 3.3,
          "AvgReviews": 2116.0,
          "TotalReviews": 2116.0,
          "TotalOffers": 28.0,
          "ProductPriority": 1.0,
          "Price": 150.3,
          "Currency": "SGD"
        },
        {
          "Title": "HP OfficeJet Pro 8610 Wireless All-in-One Photo Printer with Mobile Printing, Instant Ink ready (A7F64A) - Discontinued by Manufacturer",
          "Color": "N.A.",
          "InterClusterId": "IC70490",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41BRr6KvI7L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41BRr6KvI7L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41JrLBR2mbL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41JrLBR2mbL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41VKulcr6EL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41VKulcr6EL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41ICBFOHVBL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41ICBFOHVBL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/313mjoouVxL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/313mjoouVxL.jpg"
          ],
          "AvgProductRating": 3.9,
          "AvgReviews": 3069.0,
          "TotalReviews": 3069.0,
          "TotalOffers": 64.0,
          "ProductPriority": 1.0,
          "Price": 204.96,
          "Currency": "SGD"
        },
        {
          "Title": "HP LaserJet Pro P1102w",
          "Color": "N.A.",
          "InterClusterId": "IC46675",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41HkDMBwRCL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41HkDMBwRCL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41sMoj7iQcL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41sMoj7iQcL.jpg"
          ],
          "AvgProductRating": 4.2,
          "AvgReviews": 2101.0,
          "TotalReviews": 2101.0,
          "TotalOffers": 41.0,
          "ProductPriority": 1.0,
          "Price": 135.84,
          "Currency": "SGD"
        },
        {
          "Title": "Samsung ML-2165W/XAC Wireless Monochrome Printer",
          "Color": "N.A.",
          "InterClusterId": "IC46503",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41%2B5cg9FICL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41%2B5cg9FICL.jpg"
          ],
          "AvgProductRating": 3.8,
          "AvgReviews": 1317.0,
          "TotalReviews": 1317.0,
          "TotalOffers": 49.0,
          "ProductPriority": 1.0,
          "Price": 107.16,
          "Currency": "SGD"
        },
        {
          "Title": "Epson WorkForce WF-3540 Wireless All-in-One Color Inkjet Printer, Copier, Scanner, 2-Sided Duplex, ADF, Fax. Prints from Tablet/Smartphone. AirPrint Compatible (C11CC31201)",
          "Color": "N.A.",
          "InterClusterId": "IC70661",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41zSdcAGB%2BL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41zSdcAGB%2BL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31M%2BlZ17BWL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31M%2BlZ17BWL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31Lb8nZordL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31Lb8nZordL.jpg"
          ],
          "AvgProductRating": 3.8,
          "AvgReviews": 1922.0,
          "TotalReviews": 1922.0,
          "TotalOffers": 1.0,
          "ProductPriority": 1.0,
          "Price": 819.89,
          "Currency": "SGD"
        },
        {
          "Title": "Epson WorkForce WF-3520 Wireless All-in-One Color Inkjet Printer, Copier, Scanner, 2-Sided Duplex, ADF, Fax. Prints from Tablet/Smartphone. AirPrint Compatible (C11CC33201)",
          "Color": "N.A.",
          "InterClusterId": "IC71003",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/51ff3kbP%2BTL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51ff3kbP%2BTL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31NlVzN8moL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31NlVzN8moL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41vYxur-2DL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41vYxur-2DL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31wtO%2BpWnOL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31wtO%2BpWnOL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41fQc3ZB4yL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41fQc3ZB4yL.jpg"
          ],
          "AvgProductRating": 3.9,
          "AvgReviews": 1625.0,
          "TotalReviews": 1625.0,
          "TotalOffers": 5.0,
          "ProductPriority": 1.0,
          "Price": 270.55,
          "Currency": "SGD"
        },
        {
          "Title": "Canon PIXMA Color Printer MG5520 (Discontinued by Manufacturer)",
          "Color": "Black",
          "InterClusterId": "IC70571",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41HkWAsR9FL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41HkWAsR9FL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/415hkneRHFL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/415hkneRHFL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41FiVQ8SJ9L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41FiVQ8SJ9L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41sLa3jwxIL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41sLa3jwxIL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/416KA6sJDcL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/416KA6sJDcL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51lhSPelpbL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51lhSPelpbL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41FM1Cj7oTL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41FM1Cj7oTL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31IJK%2BeTRyL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31IJK%2BeTRyL.jpg"
          ],
          "AvgProductRating": 3.7,
          "AvgReviews": 1288.0,
          "TotalReviews": 1288.0,
          "TotalOffers": 22.0,
          "ProductPriority": 1.0,
          "Price": 107.54,
          "Currency": "SGD"
        },
        {
          "Title": "Epson WorkForce WF-2630 Wireless Business AIO Color Inkjet, Print, Copy, Scan, Fax, Mobile Printing, AirPrint, Compact Size",
          "Color": "N.A.",
          "InterClusterId": "IC70509",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41xruyZBglL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41xruyZBglL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51ceV96rZ3L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51ceV96rZ3L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51WLlea%2BM8L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51WLlea%2BM8L.jpg"
          ],
          "AvgProductRating": 3.2,
          "AvgReviews": 1350.0,
          "TotalReviews": 1350.0,
          "TotalOffers": 59.0,
          "ProductPriority": 1.0,
          "Price": 64.81,
          "Currency": "SGD"
        },
        {
          "Title": "Brother HL-L2300D Monochrome Laser Printer with Duplex Printing",
          "Color": "N.A.",
          "InterClusterId": "IC46508",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/411qAtL2WmL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/411qAtL2WmL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/410ul7ZtjpL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/410ul7ZtjpL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41JDplJ0AeL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41JDplJ0AeL.jpg"
          ],
          "AvgProductRating": 4.3,
          "AvgReviews": 1341.0,
          "TotalReviews": 1341.0,
          "TotalOffers": 72.0,
          "ProductPriority": 1.0,
          "Price": 76.82,
          "Currency": "SGD"
        },
        {
          "Title": "Canon MX472 Wireless All-In-One Inkjet Printer (Discontinued by Manufacturer)",
          "Color": "N.A.",
          "InterClusterId": "IC70849",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/51UQ0JQGX6L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51UQ0JQGX6L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31ZPu-ovI4L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31ZPu-ovI4L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31P6sQtOWpL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31P6sQtOWpL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41r2DAbsj5L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41r2DAbsj5L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31yJnrFB4YL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31yJnrFB4YL.jpg"
          ],
          "AvgProductRating": 3.8,
          "AvgReviews": 1220.0,
          "TotalReviews": 1220.0,
          "TotalOffers": 16.0,
          "ProductPriority": 1.0,
          "Price": 54.66,
          "Currency": "SGD"
        },
        {
          "Title": "HP Deskjet 1000 Printer (CH340A#B1H)",
          "Color": "N.A.",
          "InterClusterId": "IC70576",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/416yy%2BgWHzL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/416yy%2BgWHzL.jpg"
          ],
          "AvgProductRating": 3.8,
          "AvgReviews": 1171.0,
          "TotalReviews": 1171.0,
          "TotalOffers": 19.0,
          "ProductPriority": 1.0,
          "Price": 68.33,
          "Currency": "SGD"
        },
        {
          "Title": "CANON PIXMA MG6620 WIRELESS ALL-IN-ONE COLOR CLOUD Printer, Mobile Smart Phone, Tablet Printing, and AirPrint(TM) Compatible, Black",
          "InterClusterId": "IC70349",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41jQeZc0rvL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41jQeZc0rvL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41RyQvQ1cTL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41RyQvQ1cTL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31pUiApBG8L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31pUiApBG8L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31dNxpGDOsL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31dNxpGDOsL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31pBmsftVLL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31pBmsftVLL.jpg"
          ],
          "AvgProductRating": 3.9,
          "AvgReviews": 1135.0,
          "TotalReviews": 1135.0,
          "TotalOffers": 10.0,
          "ProductPriority": 1.0,
          "Price": 90.87,
          "Currency": "SGD"
        },
        {
          "Title": "Canon PIXMA MG7120 Wireless Color Photo All-In-One Printer, Black (Discontinued by Manufacturer)",
          "Color": "Black",
          "InterClusterId": "IC70583",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41M1wY2%2BftL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41M1wY2%2BftL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41%2B5lcVFQvL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41%2B5lcVFQvL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/415mJXvA0LL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/415mJXvA0LL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Z8h--zUhL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Z8h--zUhL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41oNBevwwdL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41oNBevwwdL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41u%2BzqKXjrL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41u%2BzqKXjrL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41ZXNGGlEhL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41ZXNGGlEhL.jpg"
          ],
          "AvgProductRating": 3.8,
          "AvgReviews": 941.0,
          "TotalReviews": 941.0,
          "TotalOffers": 13.0,
          "ProductPriority": 1.0,
          "Price": 189.94,
          "Currency": "SGD"
        },
        {
          "Title": "Epson WorkForce WF-2650 All-In-One Wireless Color Printer with Scanner, Copier and Fax",
          "Color": "N.A.",
          "InterClusterId": "IC79392",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/51h1x%2B8ZOHL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51h1x%2B8ZOHL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51t47UamcFL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51t47UamcFL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41hCTANnI9L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41hCTANnI9L.jpg"
          ],
          "AvgProductRating": 3.0,
          "AvgReviews": 1061.0,
          "TotalReviews": 1061.0,
          "TotalOffers": 21.0,
          "ProductPriority": 1.0,
          "Price": 88.81,
          "Currency": "SGD"
        },
        {
          "Title": "Canon PIXMA MG2920 Wireless Inkjet All-in-One Printer/Copier/Scanner",
          "Color": "White",
          "InterClusterId": "IC70497",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41TueMVSd0L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41TueMVSd0L.jpg"
          ],
          "AvgProductRating": 3.5,
          "AvgReviews": 1001.0,
          "TotalReviews": 1001.0,
          "TotalOffers": 20.0,
          "ProductPriority": 1.0,
          "Price": 25.84,
          "Currency": "SGD"
        },
        {
          "Title": "HP LaserJet Pro 200 M251nw Wireless Color Printer (Old Version)",
          "Color": "N.A.",
          "InterClusterId": "IC46638",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41cgIyKBrHL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41cgIyKBrHL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41p6y4DTgIL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41p6y4DTgIL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41qrW2bxQxL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41qrW2bxQxL.jpg"
          ],
          "AvgProductRating": 4.1,
          "AvgReviews": 930.0,
          "TotalReviews": 930.0,
          "TotalOffers": 37.0,
          "ProductPriority": 1.0,
          "Price": 107.95,
          "Currency": "SGD"
        },
        {
          "Title": "Canon PIXMA iP90v Photo Inkjet Printer (2238B002)",
          "Color": "N.A.",
          "InterClusterId": "IC70328",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41LR7JAt7yL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41LR7JAt7yL.jpg"
          ],
          "AvgProductRating": 3.1,
          "AvgReviews": 823.0,
          "TotalReviews": 823.0,
          "TotalOffers": 63.0,
          "ProductPriority": 1.0,
          "Price": 196.78,
          "Currency": "SGD"
        },
        {
          "Title": "HP Officejet 6700 Premium e-All-in-One Wireless Color Photo Printer with Scanner, Copier and Fax",
          "Color": "N.A.",
          "InterClusterId": "IC79271",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41z6-m05UdL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41z6-m05UdL.jpg"
          ],
          "AvgProductRating": 3.8,
          "AvgReviews": 848.0,
          "TotalReviews": 848.0,
          "TotalOffers": 7.0,
          "ProductPriority": 1.0,
          "Price": 271.93,
          "Currency": "SGD"
        },
        {
          "Title": "HP Envy 5530 Wireless All-in-One Photo Printer with Mobile Printing, Instant Ink ready (A9J40A)",
          "InterClusterId": "IC70344",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/31KCZrKP06L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31KCZrKP06L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31qGS2ALNmL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31qGS2ALNmL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41-q9oukZGL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41-q9oukZGL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Gj4tp9yJL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Gj4tp9yJL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31rccEcY%2BEL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31rccEcY%2BEL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31nqRRzhQLL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31nqRRzhQLL.jpg"
          ],
          "AvgProductRating": 3.9,
          "AvgReviews": 810.0,
          "TotalReviews": 810.0,
          "TotalOffers": 24.0,
          "ProductPriority": 1.0,
          "Price": 54.65,
          "Currency": "SGD"
        },
        {
          "Title": "HP DJ 2540 Wireless All-in-One Color Photo Printer (Discontinued By Manufacturer)",
          "Color": "N.A.",
          "InterClusterId": "IC70320",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/31IVDFmQS1L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31IVDFmQS1L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41aIt3R59iL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41aIt3R59iL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Fs1QCEy2L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Fs1QCEy2L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41F4Gs1RhBL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41F4Gs1RhBL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41bZFJzX%2BwL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41bZFJzX%2BwL.jpg"
          ],
          "AvgProductRating": 4.1,
          "AvgReviews": 822.0,
          "TotalReviews": 822.0,
          "TotalOffers": 27.0,
          "ProductPriority": 1.0,
          "Price": 61.49,
          "Currency": "SGD"
        },
        {
          "Title": "Brother MFCL2700DW Compact Laser All-In One Printer with Wireless Networking and Duplex Printing",
          "Color": "N.A.",
          "InterClusterId": "IC178",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41pcS8FVG2L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41pcS8FVG2L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41D7tH6CvCL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41D7tH6CvCL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41BE02N1AhL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41BE02N1AhL.jpg"
          ],
          "AvgProductRating": 1.3666666666666665,
          "AvgReviews": 705.0,
          "TotalReviews": 2115.0,
          "TotalOffers": 87.0,
          "ProductPriority": 2.0,
          "Price": 171.95,
          "Currency": "SGD"
        },
        {
          "Title": "Canon PIXMA MX452 Wireless Inkjet Office All-In-One (Discontinued by Manufacturer)",
          "Color": "N.A.",
          "InterClusterId": "IC79595",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/413CfdIj7NL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/413CfdIj7NL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51CK7Pw1hlL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51CK7Pw1hlL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41gRSfAa1fL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41gRSfAa1fL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/412vwf14vWL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/412vwf14vWL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/412zeFMIDcL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/412zeFMIDcL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41oxgDHpkPL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41oxgDHpkPL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/319cRSPAI3L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/319cRSPAI3L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41kGFfRdCWL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41kGFfRdCWL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41yLPOvn8CL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41yLPOvn8CL.jpg"
          ],
          "AvgProductRating": 3.8,
          "AvgReviews": 882.0,
          "TotalReviews": 882.0,
          "TotalOffers": 10.0,
          "ProductPriority": 1.0,
          "Price": 90.18,
          "Currency": "SGD"
        },
        {
          "Title": "DYMO LabelWriter 4XL Thermal Label Printer",
          "Color": "N.A.",
          "InterClusterId": "IC972",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/51hPZENpjtL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51hPZENpjtL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51oq2dzzMNL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51oq2dzzMNL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41WMX7IjylL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41WMX7IjylL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41PCGjfxtfL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41PCGjfxtfL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51sz-Mq5XqL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51sz-Mq5XqL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51JK8vMqQEL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51JK8vMqQEL.jpg"
          ],
          "AvgProductRating": 1.9,
          "AvgReviews": 878.0,
          "TotalReviews": 1756.0,
          "TotalOffers": 12.0,
          "ProductPriority": 2.0,
          "Price": 215.89,
          "Currency": "SGD"
        },
        {
          "Title": "Canon PIXMA iP100 Mobile Photo Printer (Discontinued by Manufacturer)",
          "Color": "N.A.",
          "InterClusterId": "IC70513",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41bPUbYyxyL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41bPUbYyxyL.jpg"
          ],
          "AvgProductRating": 4.2,
          "AvgReviews": 675.0,
          "TotalReviews": 675.0,
          "TotalOffers": 34.0,
          "ProductPriority": 1.0,
          "Price": 127.51,
          "Currency": "SGD"
        },
        {
          "Title": "Canon MG7720 Wireless All-In-One Printer with Scanner and Copier: Mobile and Tablet Printing, with Airprint and Google Cloud Print compatible, Gold",
          "Color": "Gold",
          "InterClusterId": "IC2747",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41xuOa3ArDL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41xuOa3ArDL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Qk4aGzpXL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Qk4aGzpXL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41qUdupeSXL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41qUdupeSXL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41lZfaAx1LL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41lZfaAx1LL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41qBFaZmZJL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41qBFaZmZJL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51-rJl4K4BL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51-rJl4K4BL.jpg"
          ],
          "AvgProductRating": 1.95,
          "AvgReviews": 671.0,
          "TotalReviews": 1342.0,
          "TotalOffers": 6.0,
          "ProductPriority": 2.0,
          "Price": 170.81,
          "Currency": "SGD"
        },
        {
          "Title": "Epson WF-2760 All-in-One Wireless Color Printer with Scanner, Copier, Fax, Ethernet, Wi-Fi Direct \u0026 NFC",
          "Color": "N.A.",
          "InterClusterId": "IC70324",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/51oXS7O-ccL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51oXS7O-ccL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/411OyevGpdL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/411OyevGpdL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51cnAJhlrcL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51cnAJhlrcL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/516-4r6GbEL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/516-4r6GbEL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41wV5hbU8AL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41wV5hbU8AL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41oe3UVb2NL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41oe3UVb2NL.jpg"
          ],
          "AvgProductRating": 3.2,
          "AvgReviews": 850.0,
          "TotalReviews": 850.0,
          "TotalOffers": 13.0,
          "ProductPriority": 1.0,
          "Price": 133.79,
          "Currency": "SGD"
        },
        {
          "Title": "Canon PIXMA Pro9000 Mark II Inkjet Photo Printer (3295B002)",
          "Color": "N.A.",
          "InterClusterId": "IC70346",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41wrfUsXyBL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41wrfUsXyBL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31v9mATpDQL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31v9mATpDQL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41YkwdYbrDL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41YkwdYbrDL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41SFCpSq2AL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41SFCpSq2AL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31GZ38rx0VL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31GZ38rx0VL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/413zHSD2PBL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/413zHSD2PBL.jpg"
          ],
          "AvgProductRating": 4.2,
          "AvgReviews": 856.0,
          "TotalReviews": 856.0,
          "TotalOffers": 131.0,
          "ProductPriority": 1.0,
          "Price": 61.48,
          "Currency": "SGD"
        },
        {
          "Title": "HP Deskjet 1512 Inkjet All-in-One Printer",
          "Color": "N.A.",
          "InterClusterId": "IC72358",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/31O18SvMAGL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31O18SvMAGL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31L69t-FcIL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31L69t-FcIL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31Lrzmn6izL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31Lrzmn6izL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/310MgSI2%2BRL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/310MgSI2%2BRL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31gGcG5IZ-L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31gGcG5IZ-L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/318nNo0Wy3L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/318nNo0Wy3L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31zTAYr0fCL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31zTAYr0fCL.jpg"
          ],
          "AvgProductRating": 3.8,
          "AvgReviews": 719.0,
          "TotalReviews": 719.0,
          "TotalOffers": 9.0,
          "ProductPriority": 1.0,
          "Price": 75.16,
          "Currency": "SGD"
        },
        {
          "Title": "HP C5X25A Deskjet 1513 - Multifunction Color Photo Printer with Scanner and Copier",
          "Color": "N.A.",
          "InterClusterId": "IC79531",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41xXpZQE7OL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41xXpZQE7OL.jpg"
          ],
          "AvgProductRating": 4.0,
          "AvgReviews": 711.0,
          "TotalReviews": 711.0,
          "TotalOffers": 1.0,
          "ProductPriority": 1.0,
          "Price": 503.49,
          "Currency": "SGD"
        },
        {
          "Title": "Canon imageCLASS MF216n All-in-One Laser AirPrint Printer Copier Scanner Fax",
          "Color": "N.A.",
          "InterClusterId": "IC46780",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/51FR1wqwd8L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51FR1wqwd8L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41OAf3G5ZBL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41OAf3G5ZBL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/512arISLkhL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/512arISLkhL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41L5jwzT%2B4L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41L5jwzT%2B4L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51WEd6-XKCL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51WEd6-XKCL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41EuAS80f7L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41EuAS80f7L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41%2BEpfIWl-L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41%2BEpfIWl-L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41MxBLuOlaL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41MxBLuOlaL.jpg"
          ],
          "AvgProductRating": 4.0,
          "AvgReviews": 699.0,
          "TotalReviews": 699.0,
          "TotalOffers": 15.0,
          "ProductPriority": 1.0,
          "Price": 204.96,
          "Currency": "SGD"
        },
        {
          "Title": "Epson Stylus Photo 1280 Inkjet Printer (Silver)",
          "Color": "silver",
          "InterClusterId": "IC70318",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41Y5S1C3MXL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Y5S1C3MXL.jpg"
          ],
          "AvgProductRating": 3.2,
          "AvgReviews": 603.0,
          "TotalReviews": 603.0,
          "TotalOffers": 20.0,
          "ProductPriority": 1.0,
          "Price": 344.97,
          "Currency": "SGD"
        },
        {
          "Title": "HP DeskJet 1010 Printer (CX015A)",
          "Color": "N.A.",
          "InterClusterId": "IC70580",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41trctGMK4L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41trctGMK4L.jpg"
          ],
          "AvgProductRating": 4.0,
          "AvgReviews": 658.0,
          "TotalReviews": 658.0,
          "TotalOffers": 9.0,
          "ProductPriority": 1.0,
          "Price": 67.64,
          "Currency": "SGD"
        },
        {
          "Title": "Canon SELPHY CP900 Black Wireless Color Photo Printer",
          "Color": "Black",
          "InterClusterId": "IC70782",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41S8rndl%2BAL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41S8rndl%2BAL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41CPpgTSvfL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41CPpgTSvfL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/412-BRaXd-L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/412-BRaXd-L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41zFrl4knQL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41zFrl4knQL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/319oP%2BDuHvL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/319oP%2BDuHvL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41MpEPyoilL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41MpEPyoilL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41ZVYO2Df-L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41ZVYO2Df-L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41GOUyGdNyL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41GOUyGdNyL.jpg"
          ],
          "AvgProductRating": 4.0,
          "AvgReviews": 656.0,
          "TotalReviews": 656.0,
          "TotalOffers": 10.0,
          "ProductPriority": 1.0,
          "Price": 81.85,
          "Currency": "SGD"
        },
        {
          "Title": "Samsung Xpress SL-M2070FW/XAA Wireless Monochrome Printer with Scanner, Copier and Fax, Amazon Dash Replenishment Enabled",
          "Color": "N.A.",
          "InterClusterId": "IC79199",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41oM4y%2BNuEL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41oM4y%2BNuEL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41M7cbRPc%2BL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41M7cbRPc%2BL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41QZ8RHF7NL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41QZ8RHF7NL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41LpDXdhN9L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41LpDXdhN9L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41mHBu%2Ba9kL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41mHBu%2Ba9kL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41VbbbEHeJL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41VbbbEHeJL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31x1uiUPEFL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31x1uiUPEFL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41zJXxr0mAL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41zJXxr0mAL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41NLWJUJS-L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41NLWJUJS-L.jpg"
          ],
          "AvgProductRating": 3.9,
          "AvgReviews": 542.0,
          "TotalReviews": 542.0,
          "TotalOffers": 24.0,
          "ProductPriority": 1.0,
          "Price": 163.97,
          "Currency": "SGD"
        },
        {
          "Title": "HP DeskJet 1112 Compact Photo Printer (F5S23A)",
          "Color": "N.A.",
          "InterClusterId": "IC70319",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41yMNX0MtlL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41yMNX0MtlL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51hSh0S3wEL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51hSh0S3wEL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41p-ZiGUmKL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41p-ZiGUmKL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51P-dd25sdL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51P-dd25sdL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41CWfEWkKfL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41CWfEWkKfL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51IA8vhVDTL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51IA8vhVDTL.jpg"
          ],
          "AvgProductRating": 3.8,
          "AvgReviews": 573.0,
          "TotalReviews": 573.0,
          "TotalOffers": 18.0,
          "ProductPriority": 1.0,
          "Price": 28.81,
          "Currency": "SGD"
        },
        {
          "Title": "Canon PIXMA MX892 Wireless Color Photo Printer with Scanner, Copier and Fax",
          "Color": "N.A.",
          "InterClusterId": "IC79339",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41Zil0rbbAL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Zil0rbbAL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51oMjfbUtLL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51oMjfbUtLL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Oy7%2BZRRrL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Oy7%2BZRRrL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41AjHV6y3XL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41AjHV6y3XL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Rj1Z2%2BlJL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Rj1Z2%2BlJL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Ndt4lfnnL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Ndt4lfnnL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41JyW0Ob%2BcL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41JyW0Ob%2BcL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31rwYvCiNsL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31rwYvCiNsL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/419vKDQdy6L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/419vKDQdy6L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Q4xaF6fIL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Q4xaF6fIL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41rkGMhFo6L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41rkGMhFo6L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Cp0NLgkEL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Cp0NLgkEL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31BD4aLAbYL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31BD4aLAbYL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31xGxCxm7uL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31xGxCxm7uL.jpg"
          ],
          "AvgProductRating": 2.9,
          "AvgReviews": 1115.0,
          "TotalReviews": 1115.0,
          "TotalOffers": 11.0,
          "ProductPriority": 1.0,
          "Price": 217.14,
          "Currency": "SGD"
        },
        {
          "Title": "HP Photosmart D110A Wireless Printer (CN731A#B1H)",
          "Color": "N.A.",
          "InterClusterId": "IC70560",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41vcUyoebuL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41vcUyoebuL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41XT9qvrB%2BL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41XT9qvrB%2BL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41NaO%2BPhFxL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41NaO%2BPhFxL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41qWh6gHMfL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41qWh6gHMfL.jpg"
          ],
          "AvgProductRating": 3.4,
          "AvgReviews": 560.0,
          "TotalReviews": 560.0,
          "TotalOffers": 16.0,
          "ProductPriority": 1.0,
          "Price": 70.99,
          "Currency": "SGD"
        },
        {
          "Title": "Epson WorkForce WF-7620 Wireless Color All-in-One Inkjet Printer with Scanner and Copier",
          "Color": "N.A.",
          "InterClusterId": "IC70409",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/51VmXVNJJtL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51VmXVNJJtL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/413U5gVP7nL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/413U5gVP7nL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41WH7TLHg1L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41WH7TLHg1L.jpg"
          ],
          "AvgProductRating": 3.1,
          "AvgReviews": 630.0,
          "TotalReviews": 630.0,
          "TotalOffers": 28.0,
          "ProductPriority": 1.0,
          "Price": 333.95,
          "Currency": "SGD"
        },
        {
          "Title": "Brother HL2230 Monochrome Laser Printer (HL2230)",
          "Color": "N.A.",
          "InterClusterId": "IC49032",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41l7LEK578L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41l7LEK578L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/414vMZjccSL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/414vMZjccSL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41sPOFgDghL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41sPOFgDghL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41w0%2BbHoebL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41w0%2BbHoebL.jpg"
          ],
          "AvgProductRating": 4.3,
          "AvgReviews": 543.0,
          "TotalReviews": 543.0,
          "TotalOffers": 15.0,
          "ProductPriority": 1.0,
          "Price": 99.28,
          "Currency": "SGD"
        },
        {
          "Title": "HP Officejet 6500A Plus e-All-in-One (CN557A#B1H)",
          "Color": "N.A.",
          "InterClusterId": "IC70532",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/517LftdAp6L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/517LftdAp6L.jpg"
          ],
          "AvgProductRating": 3.3,
          "AvgReviews": 572.0,
          "TotalReviews": 572.0,
          "TotalOffers": 11.0,
          "ProductPriority": 1.0,
          "Price": 267.15,
          "Currency": "SGD"
        },
        {
          "Title": "Brother QL-700 High-speed, Professional Label Printer",
          "Color": "N.A.",
          "InterClusterId": "IC70310",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41V4zFakRoL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41V4zFakRoL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/516WHE4AKLL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/516WHE4AKLL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51gLlxS4hXL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51gLlxS4hXL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51Kgj3ihocL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51Kgj3ihocL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41DYMf1DX5L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41DYMf1DX5L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41RjlZHJzWL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41RjlZHJzWL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41xhXDwZxlL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41xhXDwZxlL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41yCB9EMb-L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41yCB9EMb-L.jpg"
          ],
          "AvgProductRating": 4.2,
          "AvgReviews": 760.0,
          "TotalReviews": 760.0,
          "TotalOffers": 31.0,
          "ProductPriority": 1.0,
          "Price": 91.54,
          "Currency": "SGD"
        },
        {
          "Title": "Brother DCP-7065DN Monochrome Laser Multi-Function Copier with Duplex Printing and Networking",
          "Color": "N.A.",
          "InterClusterId": "IC79665",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/413m-Bu0LZL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/413m-Bu0LZL.jpg"
          ],
          "AvgProductRating": 4.4,
          "AvgReviews": 931.0,
          "TotalReviews": 931.0,
          "TotalOffers": 9.0,
          "ProductPriority": 1.0,
          "Price": 257.87,
          "Currency": "SGD"
        },
        {
          "Title": "Epson C11CD31201 Expression Premium XP-610 Wireless Color Photo Printer with Scanner and Copier",
          "Color": "N.A.",
          "InterClusterId": "IC79386",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41QoLsgQ35L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41QoLsgQ35L.jpg"
          ],
          "AvgProductRating": 3.2,
          "AvgReviews": 544.0,
          "TotalReviews": 544.0,
          "TotalOffers": 7.0,
          "ProductPriority": 1.0,
          "Price": 109.31,
          "Currency": "SGD"
        },
        {
          "Title": "HP DeskJet 3755 Compact All-in-One Wireless Printer with Mobile Printing, Instant Ink ready - Stone Accent (J9V91A)",
          "Color": "Stone",
          "InterClusterId": "IC70322",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41h2U5UnZwL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41h2U5UnZwL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51Er5bUa7-L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51Er5bUa7-L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41ND2kGZpTL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41ND2kGZpTL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/311hwL7uREL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/311hwL7uREL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31EU89x-npL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31EU89x-npL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41n348cAD2L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41n348cAD2L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31RTUml5iVL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31RTUml5iVL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31SUxMPuqXL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31SUxMPuqXL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41b1aJbyGDL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41b1aJbyGDL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41OJx-ole4L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41OJx-ole4L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41fooMSqpFL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41fooMSqpFL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51fhPRGnwWL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51fhPRGnwWL.jpg"
          ],
          "AvgProductRating": 3.6,
          "AvgReviews": 579.0,
          "TotalReviews": 579.0,
          "TotalOffers": 15.0,
          "ProductPriority": 1.0,
          "Price": 53.29,
          "Currency": "SGD"
        },
        {
          "Title": "Canon PIXMA MG6320 Black Wireless Color Photo Printer with Scanner and Copier",
          "Color": "Black",
          "InterClusterId": "IC79276",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/314ZEK62ssL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/314ZEK62ssL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31Ir16B660L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31Ir16B660L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31cJJB-L92L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31cJJB-L92L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31sqTK4B0EL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31sqTK4B0EL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31MeWkSi-GL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31MeWkSi-GL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31N4IfBSANL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31N4IfBSANL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31%2BvPzWPEXL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31%2BvPzWPEXL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31nj00LcDTL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31nj00LcDTL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41fa83NCKSL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41fa83NCKSL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31ouqZRJdFL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31ouqZRJdFL.jpg"
          ],
          "AvgProductRating": 3.7,
          "AvgReviews": 705.0,
          "TotalReviews": 705.0,
          "TotalOffers": 26.0,
          "ProductPriority": 1.0,
          "Price": 109.31,
          "Currency": "SGD"
        },
        {
          "Title": "Canon Pixma MG5620 Wireless All-in-one Inkjet Color Cloud Printer with Scanner, Copier and Airprint Compatible, Black",
          "InterClusterId": "IC70390",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41vMpdC8yIL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41vMpdC8yIL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31LaoaMi4fL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31LaoaMi4fL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31fQfoIPvCL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31fQfoIPvCL.jpg"
          ],
          "AvgProductRating": 3.8,
          "AvgReviews": 558.0,
          "TotalReviews": 558.0,
          "TotalOffers": 2.0,
          "ProductPriority": 1.0,
          "Price": 413.75,
          "Currency": "SGD"
        },
        {
          "Title": "Epson Stylus C88+ Color Inkjet Printer (C11C617121)",
          "Color": "N.A.",
          "InterClusterId": "IC70333",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/418YQUC5vHL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/418YQUC5vHL.jpg"
          ],
          "AvgProductRating": 3.9,
          "AvgReviews": 482.0,
          "TotalReviews": 482.0,
          "TotalOffers": 26.0,
          "ProductPriority": 1.0,
          "Price": 158.23,
          "Currency": "SGD"
        },
        {
          "Title": "HP DeskJet 2130 F5S40A Compact All-in-One Photo Printer",
          "Color": "N.A.",
          "InterClusterId": "IC70522",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/31lqBRKWBxL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31lqBRKWBxL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41e3Um2gt1L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41e3Um2gt1L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41QAaNr-rfL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41QAaNr-rfL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41wIHEolgxL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41wIHEolgxL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31YD44aNIDL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31YD44aNIDL.jpg"
          ],
          "AvgProductRating": 3.8,
          "AvgReviews": 630.0,
          "TotalReviews": 630.0,
          "TotalOffers": 5.0,
          "ProductPriority": 1.0,
          "Price": 65.59,
          "Currency": "SGD"
        },
        {
          "Title": "Hewlett Packard DJ 3520 e-All-In-One Wireless Printer",
          "Color": "N.A.",
          "InterClusterId": "IC70492",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41rfxHIOKCL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41rfxHIOKCL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31BIqK4lILL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31BIqK4lILL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/314qxCqDkVL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/314qxCqDkVL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31ccIh-NzTL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31ccIh-NzTL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41JNK7-IuBL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41JNK7-IuBL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31QRluSNYKL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31QRluSNYKL.jpg"
          ],
          "AvgProductRating": 3.5,
          "AvgReviews": 514.0,
          "TotalReviews": 514.0,
          "TotalOffers": 1.0,
          "ProductPriority": 1.0,
          "Price": 191.31,
          "Currency": "SGD"
        },
        {
          "Title": "Epson WorkForce Pro WP-4530 Wireless All-in-One Color Inkjet Printer, Copier, Scanner, Fax, iOS/Tablet/Smartphone/AirPrint Compatible (C11CB33201)",
          "Color": "N.A.",
          "InterClusterId": "IC70536",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41GEVR-x7iL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41GEVR-x7iL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41JLWtj8ScL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41JLWtj8ScL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41o75zTzItL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41o75zTzItL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41HLoQrr9SL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41HLoQrr9SL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31KGfd1oePL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31KGfd1oePL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/412v-mTSA3L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/412v-mTSA3L.jpg"
          ],
          "AvgProductRating": 3.3,
          "AvgReviews": 489.0,
          "TotalReviews": 489.0,
          "TotalOffers": 5.0,
          "ProductPriority": 1.0,
          "Price": 545.23,
          "Currency": "SGD"
        },
        {
          "Title": "Canon imageCLASS D530 Monochrome Laser Printer with Scanner and Copier",
          "Color": "N.A.",
          "InterClusterId": "IC1326",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41o-jRC1VLL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41o-jRC1VLL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41fNHgHuTtL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41fNHgHuTtL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41nul9TVJqL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41nul9TVJqL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31XHxj-Jy6L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31XHxj-Jy6L.jpg"
          ],
          "AvgProductRating": 1.4000000000000001,
          "AvgReviews": 538.0,
          "TotalReviews": 1614.0,
          "TotalOffers": 23.0,
          "ProductPriority": 2.0,
          "Price": 199.3,
          "Currency": "SGD"
        },
        {
          "Title": "Brother HL-3170CDW Digital Color Printer with Wireless Networking and Duplex, Amazon Dash Replenishment Enabled",
          "Color": "N.A.",
          "InterClusterId": "IC910",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41F00ai4VjL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41F00ai4VjL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41U65iZHzUL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41U65iZHzUL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41AswOeB%2B0L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41AswOeB%2B0L.jpg"
          ],
          "AvgProductRating": 1.3,
          "AvgReviews": 476.0,
          "TotalReviews": 1428.0,
          "TotalOffers": 63.0,
          "ProductPriority": 2.0,
          "Price": 265.09,
          "Currency": "SGD"
        },
        {
          "Title": "HP Photosmart Premium All-in-One Printer (CD055A#ABA)",
          "Color": "N.A.",
          "InterClusterId": "IC2742",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/51epd8REptL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51epd8REptL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51X3eEXiS0L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51X3eEXiS0L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/417Jwz1O34L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/417Jwz1O34L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51YWsbyklSL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51YWsbyklSL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41nKp5eGeFL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41nKp5eGeFL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51MqRWVGnzL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51MqRWVGnzL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51mag0Bxw%2BL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51mag0Bxw%2BL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41qLYtLQsWL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41qLYtLQsWL.jpg"
          ],
          "AvgProductRating": 2.6809523809523665,
          "AvgReviews": 426.6666666666667,
          "TotalReviews": 1280.0,
          "TotalOffers": 51.0,
          "ProductPriority": 2.0,
          "Price": 56.01,
          "Currency": "SGD"
        },
        {
          "Title": "Brother Printer HL5470DW Wireless Monochrome Printer, Amazon Dash Replenishment Enabled",
          "Color": "N.A.",
          "InterClusterId": "IC46565",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41Ou%2BsQ0R4L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Ou%2BsQ0R4L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41aGiiup4OL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41aGiiup4OL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/413sA6narqL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/413sA6narqL.jpg"
          ],
          "AvgProductRating": 4.3,
          "AvgReviews": 544.0,
          "TotalReviews": 544.0,
          "TotalOffers": 31.0,
          "ProductPriority": 1.0,
          "Price": 312.23,
          "Currency": "SGD"
        },
        {
          "Title": "Hewlett Packard Officejet 4620 Wireless Color Photo Printer with Scanner, Copier and Fax",
          "Color": "N.A.",
          "InterClusterId": "IC79248",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41-wLpqGqfL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41-wLpqGqfL.jpg"
          ],
          "AvgProductRating": 3.1,
          "AvgReviews": 466.0,
          "TotalReviews": 466.0,
          "TotalOffers": 5.0,
          "ProductPriority": 1.0,
          "Price": 177.65,
          "Currency": "SGD"
        },
        {
          "Title": "Epson Expression ET-2550 EcoTank Wireless Color All-in-One Supertank Printer with Scanner, Copier, Wi-Fi, Wi-Fi Direct, Tablet and Smartphone (iPad, iPhone, Android) Printing, Easily Refillable Ink Tanks",
          "Color": "N.A.",
          "InterClusterId": "IC79224",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41R57w7lZJL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41R57w7lZJL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41RKFGUhoiL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41RKFGUhoiL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/411MTOafnGL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/411MTOafnGL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51GxBUkgaTL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51GxBUkgaTL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51pqR%2Bhb2JL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51pqR%2Bhb2JL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41CAvXAdEjL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41CAvXAdEjL.jpg"
          ],
          "AvgProductRating": 3.7,
          "AvgReviews": 464.0,
          "TotalReviews": 464.0,
          "TotalOffers": 16.0,
          "ProductPriority": 1.0,
          "Price": 318.94,
          "Currency": "SGD"
        },
        {
          "Title": "Canon imageCLASS MF227dw Black and White Multifunction Laser Printer",
          "Color": "black, white",
          "InterClusterId": "IC79283",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/51q139NXhsL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51q139NXhsL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41aHdY4KNrL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41aHdY4KNrL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51NlnPnFMEL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51NlnPnFMEL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41kyM7HThWL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41kyM7HThWL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51cO3uMRGXL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51cO3uMRGXL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41ZS1xUWy8L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41ZS1xUWy8L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/410jhhOlOSL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/410jhhOlOSL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41c33jUadiL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41c33jUadiL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41oi-srmh0L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41oi-srmh0L.jpg"
          ],
          "AvgProductRating": 3.9,
          "AvgReviews": 469.0,
          "TotalReviews": 469.0,
          "TotalOffers": 14.0,
          "ProductPriority": 1.0,
          "Price": 271.93,
          "Currency": "SGD"
        },
        {
          "Title": "HP OfficeJet Pro 8710 Wireless All-in-One Photo Printer with Mobile Printing, Instant Ink ready (M9L66A)",
          "Color": "N.A.",
          "InterClusterId": "IC1380",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41Zrh1%2B%2BwBL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Zrh1%2B%2BwBL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51KPSLwG4aL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51KPSLwG4aL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41A2lpKb9ZL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41A2lpKb9ZL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51o%2B4r6ljdL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51o%2B4r6ljdL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/411H9lzfGvL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/411H9lzfGvL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51XUzDdAPfL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51XUzDdAPfL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51kTiP61eWL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51kTiP61eWL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51dIJqSsj3L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51dIJqSsj3L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51ZbzQn1gsL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51ZbzQn1gsL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/417v70yEWgL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/417v70yEWgL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41dmPEMI18L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41dmPEMI18L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51Lk3Mul16L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51Lk3Mul16L.jpg"
          ],
          "AvgProductRating": 1.95,
          "AvgReviews": 419.0,
          "TotalReviews": 838.0,
          "TotalOffers": 24.0,
          "ProductPriority": 2.0,
          "Price": 95.04,
          "Currency": "SGD"
        },
        {
          "Title": "HP OfficeJet Pro 8720 Wireless All-in-One Photo Printer with Mobile Printing, Instant Ink",
          "Color": "N.A.",
          "InterClusterId": "IC70317",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41Ge6n9bqtL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Ge6n9bqtL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41SdioZUHRL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41SdioZUHRL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41dQkvjOw7L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41dQkvjOw7L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41YHoElrQwL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41YHoElrQwL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51Qv%2BU4exGL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51Qv%2BU4exGL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/5167ISooj3L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/5167ISooj3L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51AAuunBuJL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51AAuunBuJL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51z73mZ2JNL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51z73mZ2JNL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41mqKrvh00L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41mqKrvh00L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41q0lmB8J-L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41q0lmB8J-L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/517AuDBEubL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/517AuDBEubL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51mybboK5DL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51mybboK5DL.jpg"
          ],
          "AvgProductRating": 3.8,
          "AvgReviews": 549.0,
          "TotalReviews": 549.0,
          "TotalOffers": 57.0,
          "ProductPriority": 1.0,
          "Price": 132.55,
          "Currency": "SGD"
        },
        {
          "Title": "Epson WorkForce WF-2660 All-In-One Wireless Color Printer with Scanner, Copier and Fax",
          "Color": "N.A.",
          "InterClusterId": "IC70491",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/51gp-nz0odL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51gp-nz0odL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51duV9GiA0L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51duV9GiA0L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41F1uRm7hfL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41F1uRm7hfL.jpg"
          ],
          "AvgProductRating": 3.4,
          "AvgReviews": 452.0,
          "TotalReviews": 452.0,
          "TotalOffers": 24.0,
          "ProductPriority": 1.0,
          "Price": 108.69,
          "Currency": "SGD"
        },
        {
          "Title": "Brother Printer MFC7860DW Wireless Monochrome Printer with Scanner, Copier \u0026 Fax",
          "Color": "N.A.",
          "InterClusterId": "IC79342",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/4180GunFMUL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/4180GunFMUL.jpg"
          ],
          "AvgProductRating": 4.2,
          "AvgReviews": 1011.0,
          "TotalReviews": 1011.0,
          "TotalOffers": 23.0,
          "ProductPriority": 1.0,
          "Price": 232.24,
          "Currency": "SGD"
        },
        {
          "Title": "HP Photosmart 5520 e-All-in-One Printer",
          "Color": "N.A.",
          "InterClusterId": "IC70851",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41FzHvclAzL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41FzHvclAzL.jpg"
          ],
          "AvgProductRating": 3.7,
          "AvgReviews": 528.0,
          "TotalReviews": 528.0,
          "TotalOffers": 11.0,
          "ProductPriority": 1.0,
          "Price": 166.69,
          "Currency": "SGD"
        },
        {
          "Title": "HP Officejet 5610 All-in-One Printer (Q7311A#ABA)",
          "Color": "N.A.",
          "InterClusterId": "IC70584",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41RSMF1XDCL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41RSMF1XDCL.jpg"
          ],
          "AvgProductRating": 3.7,
          "AvgReviews": 389.0,
          "TotalReviews": 389.0,
          "TotalOffers": 10.0,
          "ProductPriority": 1.0,
          "Price": 94.29,
          "Currency": "SGD"
        },
        {
          "Title": "DYMO LabelWriter 450 Thermal Label Printer (1752264)",
          "Color": "N.A.",
          "InterClusterId": "IC1026",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41IWrVLa8yL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41IWrVLa8yL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41a83FJyPKL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41a83FJyPKL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/417YsfwOtLL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/417YsfwOtLL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51i36qsLyKL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51i36qsLyKL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41jOwUU08HL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41jOwUU08HL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41HKKV7v1NL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41HKKV7v1NL.jpg"
          ],
          "AvgProductRating": 4.15,
          "AvgReviews": 403.0,
          "TotalReviews": 806.0,
          "TotalOffers": 89.0,
          "ProductPriority": 2.0,
          "Price": 60.11,
          "Currency": "SGD"
        },
        {
          "Title": "Samsung SCX-3405FW/XAC Wireless Monochrome Printer with Scanner, Copier and Fax",
          "Color": "N.A.",
          "InterClusterId": "IC79703",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41IBAIdDCUL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41IBAIdDCUL.jpg"
          ],
          "AvgProductRating": 3.6,
          "AvgReviews": 343.0,
          "TotalReviews": 343.0,
          "TotalOffers": 2.0,
          "ProductPriority": 1.0,
          "Price": 505.87,
          "Currency": "SGD"
        },
        {
          "Title": "Epson WorkForce ET-4550 EcoTank Wireless Color All-in-One Supertank Printer with Scanner, Copier, Fax, Ethernet, Wi-Fi, Wi-Fi Direct",
          "Color": "N.A.",
          "InterClusterId": "IC70400",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41gdTCKfUfL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41gdTCKfUfL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41oypy7TZEL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41oypy7TZEL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41GTHqK162L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41GTHqK162L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/4121FjKe9fL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/4121FjKe9fL.jpg"
          ],
          "AvgProductRating": 3.8,
          "AvgReviews": 391.0,
          "TotalReviews": 391.0,
          "TotalOffers": 4.0,
          "ProductPriority": 1.0,
          "Price": 791.04,
          "Currency": "SGD"
        },
        {
          "Title": "Canon Office Products IP7220 Wireless Color Photo Printer",
          "Color": "N.A.",
          "InterClusterId": "IC70335",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/31LzVg2DY1L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31LzVg2DY1L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41PeJv4p8VL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41PeJv4p8VL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31LzVg2DY1L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31LzVg2DY1L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31HSw8GNLHL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31HSw8GNLHL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31Q30tXW0AL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31Q30tXW0AL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31dyqYUbF1L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31dyqYUbF1L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31%2BfKRz-D5L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31%2BfKRz-D5L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/316kLDrFx2L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/316kLDrFx2L.jpg"
          ],
          "AvgProductRating": 3.7,
          "AvgReviews": 443.0,
          "TotalReviews": 443.0,
          "TotalOffers": 54.0,
          "ProductPriority": 1.0,
          "Price": 94.29,
          "Currency": "SGD"
        },
        {
          "Title": "HP OfficeJet Pro 6978 Wireless All-in-One Photo Printer with Mobile Printing, Instant Ink ready (T0F29A)",
          "Color": "N.A.",
          "InterClusterId": "IC70314",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41zkAWDlMKL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41zkAWDlMKL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51ax6edqp6L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51ax6edqp6L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41TtDNXFHTL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41TtDNXFHTL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41dTEP4fJ4L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41dTEP4fJ4L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31dWeNvURVL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31dWeNvURVL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41RxlIoGcRL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41RxlIoGcRL.jpg"
          ],
          "AvgProductRating": 3.9,
          "AvgReviews": 504.0,
          "TotalReviews": 504.0,
          "TotalOffers": 28.0,
          "ProductPriority": 1.0,
          "Price": 81.98,
          "Currency": "SGD"
        },
        {
          "Title": "CANON PIXMA iX6820 Wireless Business Printer with AirPrint and Cloud Compatible, Black",
          "Color": "black",
          "InterClusterId": "IC70323",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41AHfErXovL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41AHfErXovL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Zt1GyCaQL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Zt1GyCaQL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41kx5sQxPoL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41kx5sQxPoL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Av39WfTIL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Av39WfTIL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31ly1ScpTHL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31ly1ScpTHL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51MIJOtZWmL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51MIJOtZWmL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/413M24288hL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/413M24288hL.jpg"
          ],
          "AvgProductRating": 4.0,
          "AvgReviews": 455.0,
          "TotalReviews": 455.0,
          "TotalOffers": 54.0,
          "ProductPriority": 1.0,
          "Price": 161.25,
          "Currency": "SGD"
        },
        {
          "Title": "Brother Printer MFC7360N Monochrome Printer with Scanner, Copier \u0026 Fax and built in Networking",
          "Color": "N.A.",
          "InterClusterId": "IC79266",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41FBPa0k1rL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41FBPa0k1rL.jpg"
          ],
          "AvgProductRating": 4.4,
          "AvgReviews": 785.0,
          "TotalReviews": 785.0,
          "TotalOffers": 13.0,
          "ProductPriority": 1.0,
          "Price": 314.28,
          "Currency": "SGD"
        },
        {
          "Title": "Brother HL-L2380DW Wireless Monochrome Laser Printer, Amazon Dash Replenishment Enabled",
          "Color": "N.A.",
          "InterClusterId": "IC2495",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41bkmKraCOL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41bkmKraCOL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41xdD42jItL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41xdD42jItL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31FyN1vzNhL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31FyN1vzNhL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41CAd-7Z6EL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41CAd-7Z6EL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41EAUAzpiJL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41EAUAzpiJL.jpg"
          ],
          "AvgProductRating": 1.075,
          "AvgReviews": 385.75,
          "TotalReviews": 1543.0,
          "TotalOffers": 86.0,
          "ProductPriority": 2.0,
          "Price": 92.92,
          "Currency": "SGD"
        },
        {
          "Title": "Brother HL5450DN High-Speed Laser Printer With Networking and Duplex, Amazon Dash Replenishment Enabled",
          "Color": "N.A.",
          "InterClusterId": "IC46678",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41Xx0szvTvL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Xx0szvTvL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41zDklRBQFL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41zDklRBQFL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41IUg7V83vL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41IUg7V83vL.jpg"
          ],
          "AvgProductRating": 4.3,
          "AvgReviews": 419.0,
          "TotalReviews": 419.0,
          "TotalOffers": 14.0,
          "ProductPriority": 1.0,
          "Price": 341.63,
          "Currency": "SGD"
        },
        {
          "Title": "Canon PIXMA MP600 All-in-One Photo Printer with Easy Scroll Wheel (1451B002)",
          "Color": "N.A.",
          "InterClusterId": "IC72437",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41V9WJJDDTL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41V9WJJDDTL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31qOOp7NCyL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31qOOp7NCyL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/4109t99otDL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/4109t99otDL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31baWnjSOTL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31baWnjSOTL.jpg"
          ],
          "AvgProductRating": 3.6,
          "AvgReviews": 325.0,
          "TotalReviews": 325.0,
          "TotalOffers": 11.0,
          "ProductPriority": 1.0,
          "Price": 184.48,
          "Currency": "SGD"
        },
        {
          "Title": "Epson WorkForce All-In-One Wireless Color Inkjet Printer WF-2540, Black",
          "Color": "black",
          "InterClusterId": "IC70330",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41lxZguNkwL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41lxZguNkwL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41gvygOAFYL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41gvygOAFYL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41WhRaBwAIL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41WhRaBwAIL.jpg"
          ],
          "AvgProductRating": 2.9,
          "AvgReviews": 415.0,
          "TotalReviews": 415.0,
          "TotalOffers": 10.0,
          "ProductPriority": 1.0,
          "Price": 80.62,
          "Currency": "SGD"
        },
        {
          "Title": "HP LaserJet P2015 Printer (CB366A#ABA)",
          "Color": "N.A.",
          "InterClusterId": "IC46485",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41TAHMKW14L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41TAHMKW14L.jpg"
          ],
          "AvgProductRating": 3.7,
          "AvgReviews": 306.0,
          "TotalReviews": 306.0,
          "TotalOffers": 62.0,
          "ProductPriority": 1.0,
          "Price": 95.66,
          "Currency": "SGD"
        },
        {
          "Title": "Samsung Xpress SL-C410W/XAA Color Printer",
          "Color": "N.A.",
          "InterClusterId": "IC46654",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41n-G-VbWyL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41n-G-VbWyL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31nqQPD6nxL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31nqQPD6nxL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31EGMIIGgkL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31EGMIIGgkL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31XwH53fNpL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31XwH53fNpL.jpg"
          ],
          "AvgProductRating": 3.7,
          "AvgReviews": 306.0,
          "TotalReviews": 306.0,
          "TotalOffers": 13.0,
          "ProductPriority": 1.0,
          "Price": 147.92,
          "Currency": "SGD"
        },
        {
          "Title": "Epson WorkForce WF-100 Wireless Mobile Printer",
          "Color": "N.A.",
          "InterClusterId": "IC70313",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41FSOQU9GeL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41FSOQU9GeL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51s6U9xPKpL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51s6U9xPKpL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/413o9gr0lNL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/413o9gr0lNL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41JdrJ-qcxL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41JdrJ-qcxL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51Vn7zY%2BP4L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51Vn7zY%2BP4L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41ZG4%2BGZLeL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41ZG4%2BGZLeL.jpg"
          ],
          "AvgProductRating": 4.0,
          "AvgReviews": 308.0,
          "TotalReviews": 308.0,
          "TotalOffers": 32.0,
          "ProductPriority": 1.0,
          "Price": 271.87,
          "Currency": "SGD"
        },
        {
          "Title": "Brother HL2240D Laser Printer",
          "Color": "N.A.",
          "InterClusterId": "IC49646",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41GYqVxgtbL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41GYqVxgtbL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31XrSVt49EL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31XrSVt49EL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41KFfnOwvzL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41KFfnOwvzL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41IFPNw2NIL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41IFPNw2NIL.jpg"
          ],
          "AvgProductRating": 4.2,
          "AvgReviews": 367.0,
          "TotalReviews": 367.0,
          "TotalOffers": 7.0,
          "ProductPriority": 1.0,
          "Price": 232.17,
          "Currency": "SGD"
        },
        {
          "Title": "HP OfficeJet Pro 8600 Wireless All-in-One Photo Printer with Mobile Printing (CN577A)",
          "Color": "N.A.",
          "InterClusterId": "IC70523",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41%2BR1xYtYvL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41%2BR1xYtYvL.jpg"
          ],
          "AvgProductRating": 4.0,
          "AvgReviews": 483.0,
          "TotalReviews": 483.0,
          "TotalOffers": 12.0,
          "ProductPriority": 1.0,
          "Price": 789.84,
          "Currency": "SGD"
        },
        {
          "Title": "DYMO LabelWriter 450 Turbo Thermal Label Printer (1750283)",
          "Color": "N.A.",
          "InterClusterId": "IC913",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41%2Bv8E-72GL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41%2Bv8E-72GL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41agxjYYlOL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41agxjYYlOL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41UIFDuHQlL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41UIFDuHQlL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41E2PkAa3IL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41E2PkAa3IL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51UTRJInr7L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51UTRJInr7L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/411o2rJoDeL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/411o2rJoDeL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41a9iFVQa-L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41a9iFVQa-L.jpg"
          ],
          "AvgProductRating": 1.4666666666666668,
          "AvgReviews": 515.0,
          "TotalReviews": 1545.0,
          "TotalOffers": 94.0,
          "ProductPriority": 2.0,
          "Price": 64.62,
          "Currency": "SGD"
        },
        {
          "Title": "Dell (C1760NW) Color Laser Printer Max Resolution (B\u0026W) 600 dpi and (Color) 600 dpi Plain Paper Print",
          "Color": "N.A.",
          "InterClusterId": "IC46488",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/31dgW1mC4CL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31dgW1mC4CL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41r-qWJyMBL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41r-qWJyMBL.jpg"
          ],
          "AvgProductRating": 4.1,
          "AvgReviews": 355.0,
          "TotalReviews": 355.0,
          "TotalOffers": 80.0,
          "ProductPriority": 1.0,
          "Price": 121.61,
          "Currency": "SGD"
        },
        {
          "Title": "HP Photosmart 7525 e-All-in-One Inkjet Printer: 4.3\" Touch Screen , Wireless, Duplex Print, Copy, Scan, Fax",
          "Color": "N.A.",
          "InterClusterId": "IC79304",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41OtztDVjyL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41OtztDVjyL.jpg"
          ],
          "AvgProductRating": 4.1,
          "AvgReviews": 292.0,
          "TotalReviews": 292.0,
          "TotalOffers": 3.0,
          "ProductPriority": 1.0,
          "Price": 327.96,
          "Currency": "SGD"
        },
        {
          "Title": "Canon MG5722 Wireless All-In-One Printer with Scanner and Copier: Mobile and Tablet Printing with Airprintcompatible",
          "Color": "White \u0026 Silver",
          "InterClusterId": "IC79186",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41fe6XwrR9L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41fe6XwrR9L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51c2WQFbW%2BL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51c2WQFbW%2BL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41BL9fI-gqL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41BL9fI-gqL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31SGinnaq7L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31SGinnaq7L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41M19WP4WkL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41M19WP4WkL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41rIlIgc51L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41rIlIgc51L.jpg"
          ],
          "AvgProductRating": 3.8,
          "AvgReviews": 343.0,
          "TotalReviews": 343.0,
          "TotalOffers": 3.0,
          "ProductPriority": 1.0,
          "Price": 114.77,
          "Currency": "SGD"
        },
        {
          "Title": "HP OfficeJet Pro 6968 All-in-One Wireless Printer with Mobile Printing, Instant Ink ready (T0F28A)",
          "Color": "N.A.",
          "InterClusterId": "IC886",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/413ZuCMT-1L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/413ZuCMT-1L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51hOjurjVcL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51hOjurjVcL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31MheixHtxL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31MheixHtxL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41XyC59orXL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41XyC59orXL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31pRrV1R6LL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31pRrV1R6LL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Heet2PohL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Heet2PohL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51-R3cQ75wL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51-R3cQ75wL.jpg"
          ],
          "AvgProductRating": 1.95,
          "AvgReviews": 327.0,
          "TotalReviews": 654.0,
          "TotalOffers": 31.0,
          "ProductPriority": 2.0,
          "Price": 94.75,
          "Currency": "SGD"
        },
        {
          "Title": "Epson Expression Home XP-440 Wireless Color Photo Printer with Scanner and Copier",
          "Color": "N.A.",
          "InterClusterId": "IC1596",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/51rfOlQE-ZL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51rfOlQE-ZL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41d-KmLos9L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41d-KmLos9L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51TFBTZLvTL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51TFBTZLvTL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41X9bKYmxaL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41X9bKYmxaL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41mGmiW4GuL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41mGmiW4GuL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41kr6%2Br9HbL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41kr6%2Br9HbL.jpg"
          ],
          "AvgProductRating": 1.1666666666666667,
          "AvgReviews": 367.3333333333333,
          "TotalReviews": 1102.0,
          "TotalOffers": 9.0,
          "ProductPriority": 2.0,
          "Price": 81.96,
          "Currency": "SGD"
        },
        {
          "Title": "HP Officejet 4630 Wireless All-in-One Color Printer (Discontinued By Manufacturer)",
          "Color": "N.A.",
          "InterClusterId": "IC2475",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/312bKFYqiCL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/312bKFYqiCL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31WyHfUKEtL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31WyHfUKEtL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/416zwGktGWL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/416zwGktGWL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41OxHncbiZL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41OxHncbiZL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31xSpv5VHuL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31xSpv5VHuL.jpg"
          ],
          "AvgProductRating": 0.78,
          "AvgReviews": 323.4,
          "TotalReviews": 1617.0,
          "TotalOffers": 52.0,
          "ProductPriority": 2.0,
          "Price": 75.14,
          "Currency": "SGD"
        },
        {
          "Title": "Epson WorkForce Pro WP-4020 Wireless Color Inkjet Printer (C11CB30201)",
          "Color": "N.A.",
          "InterClusterId": "IC71907",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41Qih5Va5eL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Qih5Va5eL.jpg"
          ],
          "AvgProductRating": 3.2,
          "AvgReviews": 340.0,
          "TotalReviews": 340.0,
          "TotalOffers": 1.0,
          "ProductPriority": 1.0,
          "Price": 1229.84,
          "Currency": "SGD"
        },
        {
          "Title": "Brother Printer MFCJ825DW Wireless Color Photo Printer with Scanner, Copier and Fax",
          "Color": "N.A.",
          "InterClusterId": "IC79314",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/414CHoaIewL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/414CHoaIewL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/413JOV3xXdL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/413JOV3xXdL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41SHC8GwaYL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41SHC8GwaYL.jpg"
          ],
          "AvgProductRating": 4.0,
          "AvgReviews": 762.0,
          "TotalReviews": 762.0,
          "TotalOffers": 4.0,
          "ProductPriority": 1.0,
          "Price": 529.92,
          "Currency": "SGD"
        },
        {
          "Title": "Hewlett Packard Envy 120 Wireless Color Photo Printer with Scanner and Copier",
          "Color": "N.A.",
          "InterClusterId": "IC79237",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41H0Xepv2IL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41H0Xepv2IL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41gMDk6xjDL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41gMDk6xjDL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41YxNkTJ7YL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41YxNkTJ7YL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31aCUOInKQL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31aCUOInKQL.jpg"
          ],
          "AvgProductRating": 3.3,
          "AvgReviews": 296.0,
          "TotalReviews": 296.0,
          "TotalOffers": 16.0,
          "ProductPriority": 1.0,
          "Price": 109.18,
          "Currency": "SGD"
        },
        {
          "Title": "Samsung Electronics SL-M2825DW Wireless Monochrome Printer",
          "Color": "N.A.",
          "InterClusterId": "IC46477",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/31rB10QHLeL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31rB10QHLeL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31bmZBtiELL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31bmZBtiELL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31bmZBtiELL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31bmZBtiELL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31CHHji1WkL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31CHHji1WkL.jpg"
          ],
          "AvgProductRating": 3.6,
          "AvgReviews": 335.0,
          "TotalReviews": 335.0,
          "TotalOffers": 7.0,
          "ProductPriority": 1.0,
          "Price": 232.24,
          "Currency": "SGD"
        },
        {
          "Title": "HP Officejet Pro 8500A Plus Wireless e-All-in-One (CM756A#B1H)",
          "Color": "N.A.",
          "InterClusterId": "IC70815",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41OSkyKYc3L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41OSkyKYc3L.jpg"
          ],
          "AvgProductRating": 2.7,
          "AvgReviews": 292.0,
          "TotalReviews": 292.0,
          "TotalOffers": 8.0,
          "ProductPriority": 1.0,
          "Price": 303.53,
          "Currency": "SGD"
        },
        {
          "Title": "Canon PIXMA MG3220 Wireless Color Photo Printer with Scanner and Copier (Discontinued by Manufacturer)",
          "Color": "N.A.",
          "InterClusterId": "IC79557",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/411OB3jj3%2BL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/411OB3jj3%2BL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31YaFoiLUwL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31YaFoiLUwL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41sXx8Hgq1L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41sXx8Hgq1L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31qws5oC9oL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31qws5oC9oL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31r-zEjvcyL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31r-zEjvcyL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41FXemvZJZL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41FXemvZJZL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31F1k-%2BH%2BRL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31F1k-%2BH%2BRL.jpg"
          ],
          "AvgProductRating": 3.6,
          "AvgReviews": 480.0,
          "TotalReviews": 480.0,
          "TotalOffers": 19.0,
          "ProductPriority": 1.0,
          "Price": 57.39,
          "Currency": "SGD"
        },
        {
          "Title": "HP OJ 7610 Wireless Color Photo Printer with Scanner, Copier and Fax",
          "Color": "N.A.",
          "InterClusterId": "IC70473",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/31iria-ivpL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31iria-ivpL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41E86qDZlsL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41E86qDZlsL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41sncBaYU1L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41sncBaYU1L.jpg"
          ],
          "AvgProductRating": 3.3,
          "AvgReviews": 316.0,
          "TotalReviews": 316.0,
          "TotalOffers": 29.0,
          "ProductPriority": 1.0,
          "Price": 169.68,
          "Currency": "SGD"
        },
        {
          "Title": "Brother HL-5250DN Network Ready Laser Printer with Duplex",
          "Color": "N.A.",
          "InterClusterId": "IC47790",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41oVfmI1cgL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41oVfmI1cgL.jpg"
          ],
          "AvgProductRating": 3.8,
          "AvgReviews": 266.0,
          "TotalReviews": 266.0,
          "TotalOffers": 9.0,
          "ProductPriority": 1.0,
          "Price": 236.38,
          "Currency": "SGD"
        },
        {
          "Title": "Canon Pixma MG2522 All-In-One Inkjet Printer, Scanner \u0026 Copier",
          "Color": "N.A.",
          "InterClusterId": "IC70456",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41yo4lIzG2L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41yo4lIzG2L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/414JGgaqB0L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/414JGgaqB0L.jpg"
          ],
          "AvgProductRating": 3.6,
          "AvgReviews": 292.0,
          "TotalReviews": 292.0,
          "TotalOffers": 38.0,
          "ProductPriority": 1.0,
          "Price": 40.45,
          "Currency": "SGD"
        },
        {
          "Title": "Canon Pixma iX6520 Inkjet Printer (4895B002)",
          "Color": "N.A.",
          "InterClusterId": "IC70526",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/310ApQKoEpL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/310ApQKoEpL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31s8ZQV6VjL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31s8ZQV6VjL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31VFNCAujJL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31VFNCAujJL.jpg"
          ],
          "AvgProductRating": 3.8,
          "AvgReviews": 333.0,
          "TotalReviews": 333.0,
          "TotalOffers": 12.0,
          "ProductPriority": 1.0,
          "Price": 218.63,
          "Currency": "SGD"
        },
        {
          "Title": "Epson PictureMate Charm Photo Printer (C11CA56203)",
          "Color": "N.A.",
          "InterClusterId": "IC70457",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41lX6STYFFL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41lX6STYFFL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41oR%2B3JY27L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41oR%2B3JY27L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41cTTPmJOIL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41cTTPmJOIL.jpg"
          ],
          "AvgProductRating": 3.8,
          "AvgReviews": 351.0,
          "TotalReviews": 351.0,
          "TotalOffers": 11.0,
          "ProductPriority": 1.0,
          "Price": 126.74,
          "Currency": "SGD"
        },
        {
          "Title": "Samsung SL-M2885FW/XAA Wireless Monochrome Printer with Scanner, Copier and Fax, Amazon Dash Replenishment Enabled",
          "Color": "N.A.",
          "InterClusterId": "IC79174",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/31iy-aCi00L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31iy-aCi00L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31gYmCvyolL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31gYmCvyolL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31zjSIyrZSL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31zjSIyrZSL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31Zeja9zOZL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31Zeja9zOZL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31YOyP-bjkL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31YOyP-bjkL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/416Rc1kXH7L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/416Rc1kXH7L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51epKAkj3UL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51epKAkj3UL.jpg"
          ],
          "AvgProductRating": 3.8,
          "AvgReviews": 239.0,
          "TotalReviews": 239.0,
          "TotalOffers": 43.0,
          "ProductPriority": 1.0,
          "Price": 150.32,
          "Currency": "SGD"
        },
        {
          "Title": "Canon Office Products MX392 Color Photo Printer with Scanner, Copier and Fax",
          "Color": "N.A.",
          "InterClusterId": "IC80114",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/411VBBVsFML._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/411VBBVsFML.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41HP7fRnsYL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41HP7fRnsYL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41ptA%2B8tZoL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41ptA%2B8tZoL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51uLHdV3F5L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51uLHdV3F5L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41huYBDeKSL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41huYBDeKSL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41NO5ZPkDZL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41NO5ZPkDZL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41XVOmcac%2BL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41XVOmcac%2BL.jpg"
          ],
          "AvgProductRating": 3.8,
          "AvgReviews": 281.0,
          "TotalReviews": 281.0,
          "TotalOffers": 2.0,
          "ProductPriority": 1.0,
          "Price": 150.3,
          "Currency": "SGD"
        },
        {
          "Title": "Canon imageCLASS MF229dw Black and White Multifunction Laser Printer",
          "Color": "black, white",
          "InterClusterId": "IC79270",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/51TOY3G%2B6WL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51TOY3G%2B6WL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41GlnOCvpmL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41GlnOCvpmL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51fl1OxFgLL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51fl1OxFgLL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41I0J4wP4wL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41I0J4wP4wL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51j1BYHrwDL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51j1BYHrwDL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41gtA%2BspEuL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41gtA%2BspEuL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41MphIej9WL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41MphIej9WL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41IgFMVyo-L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41IgFMVyo-L.jpg"
          ],
          "AvgProductRating": 3.8,
          "AvgReviews": 287.0,
          "TotalReviews": 287.0,
          "TotalOffers": 8.0,
          "ProductPriority": 1.0,
          "Price": 546.59,
          "Currency": "SGD"
        },
        {
          "Title": "Canon PIXMA MG2922 Wireless All-In-One Inkjet Printer, 4800 x 600 dpi - Blue Finish",
          "Color": "blue",
          "InterClusterId": "IC1453",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41%2BXFWzZJEL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41%2BXFWzZJEL.jpg"
          ],
          "AvgProductRating": 1.85,
          "AvgReviews": 261.5,
          "TotalReviews": 523.0,
          "TotalOffers": 11.0,
          "ProductPriority": 2.0,
          "Price": 54.65,
          "Currency": "SGD"
        },
        {
          "Title": "Canon Laser imageCLASS MF4890dw Wireless Monochrome Printer (Discontinued by Manufacturer)",
          "Color": "N.A.",
          "InterClusterId": "IC1866",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/418FL5r20nL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/418FL5r20nL.jpg"
          ],
          "AvgProductRating": 2.0,
          "AvgReviews": 318.5,
          "TotalReviews": 637.0,
          "TotalOffers": 9.0,
          "ProductPriority": 2.0,
          "Price": 409.94,
          "Currency": "SGD"
        },
        {
          "Title": "HP LaserJet Pro CP1525nw Color Printer (CE875A)",
          "Color": "N.A.",
          "InterClusterId": "IC46946",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41xAdGIHq2L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41xAdGIHq2L.jpg"
          ],
          "AvgProductRating": 3.8,
          "AvgReviews": 241.0,
          "TotalReviews": 241.0,
          "TotalOffers": 18.0,
          "ProductPriority": 1.0,
          "Price": 95.63,
          "Currency": "SGD"
        },
        {
          "Title": "Brother HL-2070N Network Monochrome Laser Printer (Black)",
          "Color": "black",
          "InterClusterId": "IC48214",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41HMNQRWDSL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41HMNQRWDSL.jpg"
          ],
          "AvgProductRating": 3.7,
          "AvgReviews": 243.0,
          "TotalReviews": 243.0,
          "TotalOffers": 5.0,
          "ProductPriority": 1.0,
          "Price": 204.96,
          "Currency": "SGD"
        },
        {
          "Title": "HP LaserJet 1020 Printer (Q5911A#ABA)",
          "Color": "N.A.",
          "InterClusterId": "IC46633",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41ME6ZVEETL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41ME6ZVEETL.jpg"
          ],
          "AvgProductRating": 4.0,
          "AvgReviews": 235.0,
          "TotalReviews": 235.0,
          "TotalOffers": 20.0,
          "ProductPriority": 1.0,
          "Price": 121.62,
          "Currency": "SGD"
        },
        {
          "Title": "HP LaserJet P1006 Printer",
          "Color": "N.A.",
          "InterClusterId": "IC46600",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/418IWcZPCyL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/418IWcZPCyL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/411RxMmpWyL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/411RxMmpWyL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41z0GhZ4DzL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41z0GhZ4DzL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41MQ-CyLigL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41MQ-CyLigL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/410M6S4iH-L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/410M6S4iH-L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41UakKaUHWL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41UakKaUHWL.jpg"
          ],
          "AvgProductRating": 4.1,
          "AvgReviews": 238.0,
          "TotalReviews": 238.0,
          "TotalOffers": 32.0,
          "ProductPriority": 1.0,
          "Price": 102.49,
          "Currency": "SGD"
        },
        {
          "Title": "Brother HLL6200DW Wireless Monochrome Laser Printer with Large Paper Capacity, Amazon Dash Replenishment Enabled",
          "Color": "N.A.",
          "InterClusterId": "IC46465",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/31TSA83efNL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31TSA83efNL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51YVQIqkNZL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51YVQIqkNZL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51tXZJ%2BZxPL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51tXZJ%2BZxPL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41ut3XIKP%2BL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41ut3XIKP%2BL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51%2B9aDMMFuL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51%2B9aDMMFuL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41n4J2LXdBL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41n4J2LXdBL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41IiOTvB%2BiL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41IiOTvB%2BiL.jpg"
          ],
          "AvgProductRating": 4.2,
          "AvgReviews": 275.0,
          "TotalReviews": 275.0,
          "TotalOffers": 53.0,
          "ProductPriority": 1.0,
          "Price": 271.93,
          "Currency": "SGD"
        },
        {
          "Title": "HP OfficeJet Pro X576dw Office Printer with Wireless Network Printing, Remote Fleet Management \u0026 Fast Printing (CN598A)",
          "Color": "N.A.",
          "InterClusterId": "IC70486",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/31nxJtveqcL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31nxJtveqcL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31yCo4cOSfL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31yCo4cOSfL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31z8ob51qdL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31z8ob51qdL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31pvXYUTKpL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31pvXYUTKpL.jpg"
          ],
          "AvgProductRating": 3.9,
          "AvgReviews": 341.0,
          "TotalReviews": 341.0,
          "TotalOffers": 3.0,
          "ProductPriority": 1.0,
          "Price": 2321.69,
          "Currency": "SGD"
        },
        {
          "Title": "HP Officejet Pro 8000 Wireless Printer",
          "Color": "N.A.",
          "InterClusterId": "IC70721",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41HyGM266PL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41HyGM266PL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/4182ptqdQTL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/4182ptqdQTL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31QkmKLQu6L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31QkmKLQu6L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41H8pH-7LKL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41H8pH-7LKL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41wW0gzec9L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41wW0gzec9L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/318x6Cm2JxL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/318x6Cm2JxL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/316AjAAYQ0L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/316AjAAYQ0L.jpg"
          ],
          "AvgProductRating": 2.6,
          "AvgReviews": 248.0,
          "TotalReviews": 248.0,
          "TotalOffers": 10.0,
          "ProductPriority": 1.0,
          "Price": 169.1,
          "Currency": "SGD"
        },
        {
          "Title": "Epson WorkForce Pro WF-4630 Wireless Color All-in-One Inkjet Printer with Scanner and Copier",
          "Color": "N.A.",
          "InterClusterId": "IC2578",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/51EX4gkMpML._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51EX4gkMpML.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41jwS9kcNmL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41jwS9kcNmL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/410l5Ee3fHL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/410l5Ee3fHL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41ASDqAfjWL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41ASDqAfjWL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41uOTKxMQhL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41uOTKxMQhL.jpg"
          ],
          "AvgProductRating": 0.7,
          "AvgReviews": 237.75,
          "TotalReviews": 951.0,
          "TotalOffers": 29.0,
          "ProductPriority": 2.0,
          "Price": 232.29,
          "Currency": "SGD"
        },
        {
          "Title": "Canon PIXMA iP2702 Inkjet Photo Printer (4103B002) with PP-201 Photo Paper",
          "Color": "N.A.",
          "InterClusterId": "IC70726",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41qn2jAku3L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41qn2jAku3L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51NPuMZYvLL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51NPuMZYvLL.jpg"
          ],
          "AvgProductRating": 4.1,
          "AvgReviews": 263.0,
          "TotalReviews": 263.0,
          "TotalOffers": 9.0,
          "ProductPriority": 1.0,
          "Price": 81.98,
          "Currency": "SGD"
        },
        {
          "Title": "Brother MFCJ450DW Wireless with Scanner, Copier and Fax Inkjet Printer",
          "Color": "N.A.",
          "InterClusterId": "IC2267",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41bLG%2BL7n3L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41bLG%2BL7n3L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41pld6HinWL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41pld6HinWL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41csgBF6wdL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41csgBF6wdL.jpg"
          ],
          "AvgProductRating": 4.266666666666667,
          "AvgReviews": 583.6666666666666,
          "TotalReviews": 1751.0,
          "TotalOffers": 8.0,
          "ProductPriority": 2.0,
          "Price": 202.22,
          "Currency": "SGD"
        },
        {
          "Title": "Brother HL-5370DW Laser Printer",
          "Color": "N.A.",
          "InterClusterId": "IC47542",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41c59i8OcML._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41c59i8OcML.jpg"
          ],
          "AvgProductRating": 4.2,
          "AvgReviews": 282.0,
          "TotalReviews": 282.0,
          "TotalOffers": 13.0,
          "ProductPriority": 1.0,
          "Price": 292.43,
          "Currency": "SGD"
        },
        {
          "Title": "Canon Office Products MX532 Wireless Office All-In-One Printer",
          "Color": "N.A.",
          "InterClusterId": "IC70397",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/51iALXRpXML._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51iALXRpXML.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51maw6-8r%2BL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51maw6-8r%2BL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41w45i4nUdL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41w45i4nUdL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41XTqEiDKyL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41XTqEiDKyL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51GAdJqOWeL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51GAdJqOWeL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51mUkRZNlVL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51mUkRZNlVL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41jBgH6KpYL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41jBgH6KpYL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41mxawmtAHL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41mxawmtAHL.jpg"
          ],
          "AvgProductRating": 3.7,
          "AvgReviews": 292.0,
          "TotalReviews": 292.0,
          "TotalOffers": 57.0,
          "ProductPriority": 1.0,
          "Price": 40.97,
          "Currency": "SGD"
        },
        {
          "Title": "HP Officejet 6100 e-Printer Wireless Color Printer",
          "Color": "N.A.",
          "InterClusterId": "IC70581",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41Hh9cazZVL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Hh9cazZVL.jpg"
          ],
          "AvgProductRating": 2.9,
          "AvgReviews": 232.0,
          "TotalReviews": 232.0,
          "TotalOffers": 9.0,
          "ProductPriority": 1.0,
          "Price": 191.24,
          "Currency": "SGD"
        },
        {
          "Title": "Epson XP-630 Wireless Color Photo Printer with Scanner \u0026 Copier (C11CE79201)",
          "Color": "N.A.",
          "InterClusterId": "IC79198",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41S9VJnCgSL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41S9VJnCgSL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41SJ5mNIV%2BL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41SJ5mNIV%2BL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41S9VJnCgSL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41S9VJnCgSL.jpg"
          ],
          "AvgProductRating": 3.3,
          "AvgReviews": 280.0,
          "TotalReviews": 280.0,
          "TotalOffers": 41.0,
          "ProductPriority": 1.0,
          "Price": 79.09,
          "Currency": "SGD"
        },
        {
          "Title": "Konica Minolta Magicolor 1600W Laser Printer",
          "Color": "N.A.",
          "InterClusterId": "IC47665",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41B7KmgsOqL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41B7KmgsOqL.jpg"
          ],
          "AvgProductRating": 3.8,
          "AvgReviews": 202.0,
          "TotalReviews": 202.0,
          "TotalOffers": 6.0,
          "ProductPriority": 1.0,
          "Price": 341.63,
          "Currency": "SGD"
        },
        {
          "Title": "Canon PIXMA MG6120 Wireless Inkjet Photo All-in-One Printer (4503B002)",
          "Color": "N.A.",
          "InterClusterId": "IC71541",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41oTq%2BAwCSL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41oTq%2BAwCSL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31JtDMm2tOL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31JtDMm2tOL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/414PG0x06EL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/414PG0x06EL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41jSF4acbDL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41jSF4acbDL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41AZ77lO7EL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41AZ77lO7EL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41STWaYxE5L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41STWaYxE5L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31VMrRKoLWL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31VMrRKoLWL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31Uq2NCZpDL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31Uq2NCZpDL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31ZdSzcH0ML._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31ZdSzcH0ML.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41BohJFd3IL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41BohJFd3IL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41aEPEQRB6L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41aEPEQRB6L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41e6pnhQXuL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41e6pnhQXuL.jpg"
          ],
          "AvgProductRating": 3.8,
          "AvgReviews": 310.0,
          "TotalReviews": 310.0,
          "TotalOffers": 3.0,
          "ProductPriority": 1.0,
          "Price": 341.61,
          "Currency": "SGD"
        },
        {
          "Title": "HP OfficeJet Pro 8100 Wireless Photo Printer with Mobile Printing (CM752A)",
          "Color": "N.A.",
          "InterClusterId": "IC70458",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/31fGcJVp-qL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31fGcJVp-qL.jpg"
          ],
          "AvgProductRating": 3.7,
          "AvgReviews": 303.0,
          "TotalReviews": 303.0,
          "TotalOffers": 24.0,
          "ProductPriority": 1.0,
          "Price": 122.99,
          "Currency": "SGD"
        },
        {
          "Title": "HP Deskjet 6940 Color Printer (C8970A#B1H)",
          "Color": "N.A.",
          "InterClusterId": "IC70487",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41AR95H357L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41AR95H357L.jpg"
          ],
          "AvgProductRating": 4.0,
          "AvgReviews": 194.0,
          "TotalReviews": 194.0,
          "TotalOffers": 8.0,
          "ProductPriority": 1.0,
          "Price": 153.05,
          "Currency": "SGD"
        },
        {
          "Title": "Brother Printer HL6180DW Wireless Monochrome Printer, Amazon Dash Replenishment Enabled",
          "Color": "N.A.",
          "InterClusterId": "IC46514",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41cIbdAopHL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41cIbdAopHL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41dC5ZZFrQL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41dC5ZZFrQL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41iZBzhzPNL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41iZBzhzPNL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41s-IavZ5jL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41s-IavZ5jL.jpg"
          ],
          "AvgProductRating": 3.9,
          "AvgReviews": 264.0,
          "TotalReviews": 264.0,
          "TotalOffers": 14.0,
          "ProductPriority": 1.0,
          "Price": 409.94,
          "Currency": "SGD"
        },
        {
          "Title": "Canon Pixma MX410 Wireless Office All-In-One Printer (4788B018)",
          "Color": "N.A.",
          "InterClusterId": "IC71983",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/419jNO%2BD-yL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/419jNO%2BD-yL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31wf4Jjsr8L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31wf4Jjsr8L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/414MqkoFYdL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/414MqkoFYdL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41GBpaKC-PL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41GBpaKC-PL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Qoy8JWUzL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Qoy8JWUzL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41NBe7P0rqL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41NBe7P0rqL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41ypjUcS1%2BL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41ypjUcS1%2BL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31lMCckVFEL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31lMCckVFEL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31x1m2O%2BdXL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31x1m2O%2BdXL.jpg"
          ],
          "AvgProductRating": 3.7,
          "AvgReviews": 257.0,
          "TotalReviews": 257.0,
          "TotalOffers": 9.0,
          "ProductPriority": 1.0,
          "Price": 177.37,
          "Currency": "SGD"
        },
        {
          "Title": "Brother HL-L2360DW Compact Laser Printer with Wireless Networking and Duplex, Amazon Dash Replenishment Enabled",
          "Color": "N.A.",
          "InterClusterId": "IC46498",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41CpjXIoKFL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41CpjXIoKFL.jpg"
          ],
          "AvgProductRating": 4.0,
          "AvgReviews": 204.0,
          "TotalReviews": 204.0,
          "TotalOffers": 31.0,
          "ProductPriority": 1.0,
          "Price": 120.24,
          "Currency": "SGD"
        },
        {
          "Title": "Epson Expression ET-2650 EcoTank Wireless Color All-in-One Supertank Printer with Scanner and Copier",
          "Color": "N.A.",
          "InterClusterId": "IC79164",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/4156TLFVobL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/4156TLFVobL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/410fvOrBXaL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/410fvOrBXaL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41XEu%2BpV4DL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41XEu%2BpV4DL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41DwyfJa-LL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41DwyfJa-LL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41edLhrwPVL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41edLhrwPVL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/414qVAj5W8L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/414qVAj5W8L.jpg"
          ],
          "AvgProductRating": 4.0,
          "AvgReviews": 229.0,
          "TotalReviews": 229.0,
          "TotalOffers": 4.0,
          "ProductPriority": 1.0,
          "Price": 341.6,
          "Currency": "SGD"
        },
        {
          "Title": "HP LaserJet Pro CP1025nw Color Printer (CE914A)",
          "Color": "N.A.",
          "InterClusterId": "IC46951",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41peO108ckL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41peO108ckL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/414vZRlL3eL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/414vZRlL3eL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31Px9m8LrdL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31Px9m8LrdL.jpg"
          ],
          "AvgProductRating": 4.0,
          "AvgReviews": 185.0,
          "TotalReviews": 185.0,
          "TotalOffers": 2.0,
          "ProductPriority": 1.0,
          "Price": 245.96,
          "Currency": "SGD"
        },
        {
          "Title": "Brother Printer MFCJ425W Wireless Color Photo Printer with Scanner, Copier and Fax",
          "Color": "N.A.",
          "InterClusterId": "IC79290",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41v28-mcg8L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41v28-mcg8L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41OpGP9ZYbL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41OpGP9ZYbL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41ynYsgroFL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41ynYsgroFL.jpg"
          ],
          "AvgProductRating": 3.8,
          "AvgReviews": 473.0,
          "TotalReviews": 473.0,
          "TotalOffers": 5.0,
          "ProductPriority": 1.0,
          "Price": 339.78,
          "Currency": "SGD"
        },
        {
          "Title": "Brother HL-1440 Laser Printer",
          "Color": "N.A.",
          "InterClusterId": "IC49629",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41T4XZ3H82L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41T4XZ3H82L.jpg"
          ],
          "AvgProductRating": 3.3,
          "AvgReviews": 198.0,
          "TotalReviews": 198.0,
          "TotalOffers": 2.0,
          "ProductPriority": 1.0,
          "Price": 532.94,
          "Currency": "SGD"
        },
        {
          "Title": "Brother Monochrome Laser Printer HL2240",
          "Color": "N.A.",
          "InterClusterId": "IC46700",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41BfMR5kKHL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41BfMR5kKHL.jpg"
          ],
          "AvgProductRating": 4.4,
          "AvgReviews": 225.0,
          "TotalReviews": 225.0,
          "TotalOffers": 31.0,
          "ProductPriority": 1.0,
          "Price": 95.59,
          "Currency": "SGD"
        },
        {
          "Title": "HP Envy 100 e-All-in-One D410a Printer (CN517A#B1H)",
          "Color": "N.A.",
          "InterClusterId": "IC70878",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/31G7%2B1C9m-L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31G7%2B1C9m-L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41ZQ-%2BItblL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41ZQ-%2BItblL.jpg"
          ],
          "AvgProductRating": 3.2,
          "AvgReviews": 230.0,
          "TotalReviews": 230.0,
          "TotalOffers": 3.0,
          "ProductPriority": 1.0,
          "Price": 136.5,
          "Currency": "SGD"
        },
        {
          "Title": "HP Laserjet Pro M452dw Wireless Color Printer, (CF394A)",
          "Color": "N.A.",
          "InterClusterId": "IC46452",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/31-zt9yRoiL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31-zt9yRoiL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31XOUUya2ZL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31XOUUya2ZL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31ztffhXBzL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31ztffhXBzL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31L%2BWLBy3zL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31L%2BWLBy3zL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41SU%2B-7a4DL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41SU%2B-7a4DL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31jibD7dO1L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31jibD7dO1L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51ilkBgmFpL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51ilkBgmFpL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51tr%2B3xI50L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51tr%2B3xI50L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/61UWMRYFioL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/61UWMRYFioL.jpg"
          ],
          "AvgProductRating": 3.9,
          "AvgReviews": 207.0,
          "TotalReviews": 207.0,
          "TotalOffers": 25.0,
          "ProductPriority": 1.0,
          "Price": 277.86,
          "Currency": "SGD"
        },
        {
          "Title": "Epson Expression Home XP-340 Wireless Color Photo Printer with Scanner and Copier",
          "Color": "N.A.",
          "InterClusterId": "IC79161",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/51TVzI4HgiL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51TVzI4HgiL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41g9VIRP7RL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41g9VIRP7RL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51jQZKGYZ9L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51jQZKGYZ9L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41p3Z1jQgCL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41p3Z1jQgCL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51AEV0qEmSL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51AEV0qEmSL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41qbCmJer8L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41qbCmJer8L.jpg"
          ],
          "AvgProductRating": 3.8,
          "AvgReviews": 198.0,
          "TotalReviews": 198.0,
          "TotalOffers": 4.0,
          "ProductPriority": 1.0,
          "Price": 81.98,
          "Currency": "SGD"
        },
        {
          "Title": "Epson WorkForce Pro WP-4540 All-in-One Printer",
          "Color": "N.A.",
          "InterClusterId": "IC70524",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41GjSN6-eZL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41GjSN6-eZL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41CLi-a8QlL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41CLi-a8QlL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41oJ0LONx-L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41oJ0LONx-L.jpg"
          ],
          "AvgProductRating": 2.8,
          "AvgReviews": 259.0,
          "TotalReviews": 259.0,
          "TotalOffers": 3.0,
          "ProductPriority": 1.0,
          "Price": 578.15,
          "Currency": "SGD"
        },
        {
          "Title": "HP LaserJet 1012 Printer",
          "Color": "N.A.",
          "InterClusterId": "IC48109",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/414VKDA9KEL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/414VKDA9KEL.jpg"
          ],
          "AvgProductRating": 4.0,
          "AvgReviews": 171.0,
          "TotalReviews": 171.0,
          "TotalOffers": 28.0,
          "ProductPriority": 1.0,
          "Price": 46.72,
          "Currency": "SGD"
        },
        {
          "Title": "HP OJ 150 Mobile Wireless Color Printer with Copier",
          "Color": "N.A.",
          "InterClusterId": "IC70477",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41mj4QV%2BFfL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41mj4QV%2BFfL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41zUsnAfUcL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41zUsnAfUcL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/418wDOWRQpL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/418wDOWRQpL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/312ewryzNwL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/312ewryzNwL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41AAct0uRXL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41AAct0uRXL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31YqAjGfoEL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31YqAjGfoEL.jpg"
          ],
          "AvgProductRating": 3.5,
          "AvgReviews": 273.0,
          "TotalReviews": 273.0,
          "TotalOffers": 45.0,
          "ProductPriority": 1.0,
          "Price": 159.87,
          "Currency": "SGD"
        },
        {
          "Title": "Brother HL4150CDN Color Laser Printer with Duplex and Networking",
          "Color": "N.A.",
          "InterClusterId": "IC47579",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41UORYxvrrL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41UORYxvrrL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41V633mSR6L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41V633mSR6L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41JJoOGKLeL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41JJoOGKLeL.jpg"
          ],
          "AvgProductRating": 3.9,
          "AvgReviews": 222.0,
          "TotalReviews": 222.0,
          "TotalOffers": 9.0,
          "ProductPriority": 1.0,
          "Price": 686.16,
          "Currency": "SGD"
        },
        {
          "Title": "HP LaserJet Pro 400 M401n Monochrome Printer (CZ195A) (Discontinued By Manufacturer)",
          "Color": "N.A.",
          "InterClusterId": "IC46456",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41y-v25QnxL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41y-v25QnxL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31EDBlsRDjL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31EDBlsRDjL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31wyGNdeA5L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31wyGNdeA5L.jpg"
          ],
          "AvgProductRating": 4.3,
          "AvgReviews": 198.0,
          "TotalReviews": 198.0,
          "TotalOffers": 54.0,
          "ProductPriority": 1.0,
          "Price": 124.75,
          "Currency": "SGD"
        },
        {
          "Title": "Canon MG7720 Wireless All-In-One Printer with Scanner and Copier: Mobile and Tablet Printing, with Airprint and Google Cloud Print compatible, Red",
          "Color": "red",
          "InterClusterId": "IC70511",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/412CRL8BXTL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/412CRL8BXTL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51Ege6qbcqL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51Ege6qbcqL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41503VuQ00L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41503VuQ00L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41PFzd-KeSL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41PFzd-KeSL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41IDbotNeRL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41IDbotNeRL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51uKF7mbNnL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51uKF7mbNnL.jpg"
          ],
          "AvgProductRating": 3.9,
          "AvgReviews": 203.0,
          "TotalReviews": 203.0,
          "TotalOffers": 7.0,
          "ProductPriority": 1.0,
          "Price": 189.12,
          "Currency": "SGD"
        },
        {
          "Title": "Epson WorkForce Pro WF-3720 Wireless All-in-One Color Inkjet Printer, Copier, Scanner with Wi-Fi Direct",
          "Color": "N.A.",
          "InterClusterId": "IC79165",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41qQrsXc3WL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41qQrsXc3WL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41B33qVKavL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41B33qVKavL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41B66kyIYgL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41B66kyIYgL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/519oQIHAv%2BL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/519oQIHAv%2BL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51q9Sr8IK6L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51q9Sr8IK6L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51qfv5J8G%2BL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51qfv5J8G%2BL.jpg"
          ],
          "AvgProductRating": 3.9,
          "AvgReviews": 196.0,
          "TotalReviews": 196.0,
          "TotalOffers": 19.0,
          "ProductPriority": 1.0,
          "Price": 153.34,
          "Currency": "SGD"
        },
        {
          "Title": "Canon PIXMA MX922 Wireless Inkjet Office All-In-One Printer with Corel PaintShop Pro X9 Bundle",
          "Color": "N.A.",
          "InterClusterId": "IC70315",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/51dKTSkzynL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51dKTSkzynL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41xP6PBaMjL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41xP6PBaMjL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51WOV%2B7H3mL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51WOV%2B7H3mL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51Khp5oDM4L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51Khp5oDM4L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41kSbBCVZ1L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41kSbBCVZ1L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41O8ul6JFUL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41O8ul6JFUL.jpg"
          ],
          "AvgProductRating": 4.1,
          "AvgReviews": 215.0,
          "TotalReviews": 215.0,
          "TotalOffers": 15.0,
          "ProductPriority": 1.0,
          "Price": 68.31,
          "Currency": "SGD"
        },
        {
          "Title": "DYMO Desktop Mailing Solution: LabelWriter Twin Turbo Label Printer and Scale (1757660)",
          "Color": "N.A.",
          "InterClusterId": "IC1893",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/416vgxRVXFL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/416vgxRVXFL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Is9eTdESL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Is9eTdESL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41vXe4vrK0L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41vXe4vrK0L.jpg"
          ],
          "AvgProductRating": 1.05,
          "AvgReviews": 187.75,
          "TotalReviews": 751.0,
          "TotalOffers": 63.0,
          "ProductPriority": 2.0,
          "Price": 187.12,
          "Currency": "SGD"
        },
        {
          "Title": "Epson Stylus Photo R280 Ultra Hi-Definition Photo Printer (C11C691201)",
          "Color": "N.A.",
          "InterClusterId": "IC70506",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41a7r3AxdCL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41a7r3AxdCL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41QJy7brOOL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41QJy7brOOL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41RhVbTzCAL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41RhVbTzCAL.jpg"
          ],
          "AvgProductRating": 3.1,
          "AvgReviews": 162.0,
          "TotalReviews": 162.0,
          "TotalOffers": 12.0,
          "ProductPriority": 1.0,
          "Price": 218.59,
          "Currency": "SGD"
        },
        {
          "Title": "HP Officejet Pro 8500A Premium Wireless e-All-in-One (CM758A#B1H)",
          "Color": "N.A.",
          "InterClusterId": "IC72380",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/419%2BdtDCl3L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/419%2BdtDCl3L.jpg"
          ],
          "AvgProductRating": 3.2,
          "AvgReviews": 193.0,
          "TotalReviews": 193.0,
          "TotalOffers": 7.0,
          "ProductPriority": 1.0,
          "Price": 362.12,
          "Currency": "SGD"
        },
        {
          "Title": "HP Photosmart Premium Wireless e-All-in-One (CN503A#B1H)",
          "Color": "N.A.",
          "InterClusterId": "IC71612",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/410NPizxolL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/410NPizxolL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51wQfllZmqL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51wQfllZmqL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41cj8KclQyL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41cj8KclQyL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41znbXKNg7L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41znbXKNg7L.jpg"
          ],
          "AvgProductRating": 3.0,
          "AvgReviews": 223.0,
          "TotalReviews": 223.0,
          "TotalOffers": 3.0,
          "ProductPriority": 1.0,
          "Price": 327.89,
          "Currency": "SGD"
        },
        {
          "Title": "Canon PIXMA MG2120 Color Photo Printer with Scanner and Copier",
          "Color": "N.A.",
          "InterClusterId": "IC79599",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41s60oa5zQL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41s60oa5zQL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31Ztctk9BuL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31Ztctk9BuL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41h53foj%2BkL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41h53foj%2BkL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31Has14bDPL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31Has14bDPL.jpg"
          ],
          "AvgProductRating": 3.7,
          "AvgReviews": 236.0,
          "TotalReviews": 236.0,
          "TotalOffers": 8.0,
          "ProductPriority": 1.0,
          "Price": 97.1,
          "Currency": "SGD"
        },
        {
          "Title": "Brother Printer HL3140CW Digital Color Printer with Wireless Networking, Amazon Dash Replenishment Enabled",
          "Color": "N.A.",
          "InterClusterId": "IC1214",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41s8AoTqlkL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41s8AoTqlkL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51pksfphhbL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51pksfphhbL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/312IT2EOOrL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/312IT2EOOrL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41p%2BmQHuj6L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41p%2BmQHuj6L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41o52A999IL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41o52A999IL.jpg"
          ],
          "AvgProductRating": 2.0,
          "AvgReviews": 174.0,
          "TotalReviews": 348.0,
          "TotalOffers": 47.0,
          "ProductPriority": 2.0,
          "Price": 191.31,
          "Currency": "SGD"
        },
        {
          "Title": "HP Laserjet Pro M451dn Color Printer (Discontinued By Manufacturer)",
          "Color": "N.A.",
          "InterClusterId": "IC46542",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/416zQnBSM5L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/416zQnBSM5L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51XsuZ-9TmL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51XsuZ-9TmL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51o2c4LdbuL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51o2c4LdbuL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/61aXrAMet5L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/61aXrAMet5L.jpg"
          ],
          "AvgProductRating": 4.2,
          "AvgReviews": 210.0,
          "TotalReviews": 210.0,
          "TotalOffers": 32.0,
          "ProductPriority": 1.0,
          "Price": 249.05,
          "Currency": "SGD"
        },
        {
          "Title": "Samsung ML-2510 Monochrome Laser Printer",
          "Color": "N.A.",
          "InterClusterId": "IC48153",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41rOajPly0L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41rOajPly0L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/314ZLDcz5DL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/314ZLDcz5DL.jpg"
          ],
          "AvgProductRating": 3.2,
          "AvgReviews": 161.0,
          "TotalReviews": 161.0,
          "TotalOffers": 10.0,
          "ProductPriority": 1.0,
          "Price": 191.3,
          "Currency": "SGD"
        },
        {
          "Title": "Brother HL-4070CDW Color Laser Printer with Built-In Duplex Printing and Wireless Interface",
          "Color": "N.A.",
          "InterClusterId": "IC46932",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41xtt89b3oL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41xtt89b3oL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Y1cMZrwxL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Y1cMZrwxL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41ibrE7rBiL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41ibrE7rBiL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/410fM4TvYrL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/410fM4TvYrL.jpg"
          ],
          "AvgProductRating": 3.0,
          "AvgReviews": 175.0,
          "TotalReviews": 175.0,
          "TotalOffers": 2.0,
          "ProductPriority": 1.0,
          "Price": 478.28,
          "Currency": "SGD"
        },
        {
          "Title": "Canon PIXMA MG3522 Wireless Inkjet Photo All-in-One Printer - Print, Copy, Scan",
          "Color": "N.A.",
          "InterClusterId": "IC79332",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/31gMzxfp2-L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31gMzxfp2-L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41pKp6TpJYL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41pKp6TpJYL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31e%2Bdj8sRoL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31e%2Bdj8sRoL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41IrmSqYjwL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41IrmSqYjwL.jpg"
          ],
          "AvgProductRating": 3.8,
          "AvgReviews": 210.0,
          "TotalReviews": 210.0,
          "TotalOffers": 10.0,
          "ProductPriority": 1.0,
          "Price": 68.33,
          "Currency": "SGD"
        },
        {
          "Title": "Canon imageCLASS Monochrome Laser Printer, LBP6200D (Discontinued by Manufacturer)",
          "Color": "N.A.",
          "InterClusterId": "IC47087",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/31Elf3XtLVL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31Elf3XtLVL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41JtfPKnDSL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41JtfPKnDSL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41VJPqkKfSL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41VJPqkKfSL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41JtfPKnDSL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41JtfPKnDSL.jpg"
          ],
          "AvgProductRating": 4.3,
          "AvgReviews": 192.0,
          "TotalReviews": 192.0,
          "TotalOffers": 23.0,
          "ProductPriority": 1.0,
          "Price": 75.16,
          "Currency": "SGD"
        },
        {
          "Title": "HP LaserJet 1018 Printer (CB419A#ABA)",
          "Color": "N.A.",
          "InterClusterId": "IC47462",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41GYRDEYDAL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41GYRDEYDAL.jpg"
          ],
          "AvgProductRating": 4.0,
          "AvgReviews": 147.0,
          "TotalReviews": 147.0,
          "TotalOffers": 18.0,
          "ProductPriority": 1.0,
          "Price": 129.75,
          "Currency": "SGD"
        },
        {
          "Title": "Epson WorkForce WF-M1030 Wireless Monochrome Printer C11CC82201",
          "Color": "N.A.",
          "InterClusterId": "IC70810",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41LGIFkRMoL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41LGIFkRMoL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41uCkK-OqAL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41uCkK-OqAL.jpg"
          ],
          "AvgProductRating": 3.6,
          "AvgReviews": 171.0,
          "TotalReviews": 171.0,
          "TotalOffers": 3.0,
          "ProductPriority": 1.0,
          "Price": 333.77,
          "Currency": "SGD"
        },
        {
          "Title": "Canon PIXMA iP4200 Photo Printer",
          "Color": "N.A.",
          "InterClusterId": "IC71845",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41WJ1N86P6L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41WJ1N86P6L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/416LUv7CSfL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/416LUv7CSfL.jpg"
          ],
          "AvgProductRating": 3.5,
          "AvgReviews": 169.0,
          "TotalReviews": 169.0,
          "TotalOffers": 5.0,
          "ProductPriority": 1.0,
          "Price": 217.27,
          "Currency": "SGD"
        },
        {
          "Title": "U) CANON PRO 9000 PHOTO PRINTER",
          "Color": "N.A.",
          "InterClusterId": "IC71578",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41%2BevAzL4vL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41%2BevAzL4vL.jpg"
          ],
          "AvgProductRating": 3.4,
          "AvgReviews": 178.0,
          "TotalReviews": 178.0,
          "TotalOffers": 4.0,
          "ProductPriority": 1.0,
          "Price": 546.59,
          "Currency": "SGD"
        },
        {
          "Title": "Epson Artisan 835 Wireless All-in-One Color Inkjet Printer, Copier, Scanner, Fax (C11CA73201)",
          "Color": "N.A.",
          "InterClusterId": "IC71674",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41hgFRlJ-GL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41hgFRlJ-GL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41KjwbDrX6L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41KjwbDrX6L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41rA%2BlyLMuL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41rA%2BlyLMuL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51jfNqchXfL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51jfNqchXfL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41XaWiBVYZL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41XaWiBVYZL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41-NfsddZLL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41-NfsddZLL.jpg"
          ],
          "AvgProductRating": 3.8,
          "AvgReviews": 329.0,
          "TotalReviews": 329.0,
          "TotalOffers": 2.0,
          "ProductPriority": 1.0,
          "Price": 1792.85,
          "Currency": "SGD"
        },
        {
          "Title": "Canon PIXMA iP4300 Photo Printer (1438B002)",
          "Color": "N.A.",
          "InterClusterId": "IC70738",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/317R9XSWAZL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/317R9XSWAZL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31K0n5MHxML._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31K0n5MHxML.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41X9VWi-V7L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41X9VWi-V7L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41J4N-j2CaL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41J4N-j2CaL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41wTnLdkuUL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41wTnLdkuUL.jpg"
          ],
          "AvgProductRating": 3.0,
          "AvgReviews": 162.0,
          "TotalReviews": 162.0,
          "TotalOffers": 11.0,
          "ProductPriority": 1.0,
          "Price": 95.64,
          "Currency": "SGD"
        },
        {
          "Title": "HP LaserJet Pro M1212nf  Printer (CE841A#BGJ)",
          "Color": "N.A.",
          "InterClusterId": "IC47574",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/412-i9X%2BwXL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/412-i9X%2BwXL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41DBDjCgrKL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41DBDjCgrKL.jpg"
          ],
          "AvgProductRating": 3.9,
          "AvgReviews": 173.0,
          "TotalReviews": 173.0,
          "TotalOffers": 18.0,
          "ProductPriority": 1.0,
          "Price": 191.24,
          "Currency": "SGD"
        },
        {
          "Title": "Canon Pixma iP4500 Photo Inkjet Printer (2171B002)",
          "Color": "N.A.",
          "InterClusterId": "IC70764",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/31wLEiY3-pL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31wLEiY3-pL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41y%2BqXgfmsL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41y%2BqXgfmsL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41lH9RGNT9L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41lH9RGNT9L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/419gvAUOYpL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/419gvAUOYpL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31v6TcGEgbL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31v6TcGEgbL.jpg"
          ],
          "AvgProductRating": 4.0,
          "AvgReviews": 192.0,
          "TotalReviews": 192.0,
          "TotalOffers": 6.0,
          "ProductPriority": 1.0,
          "Price": 136.65,
          "Currency": "SGD"
        },
        {
          "Title": "Epson WorkForce 635 Color Inkjet All-in-One (C11CA69201)",
          "Color": "N.A.",
          "InterClusterId": "IC72568",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41cEh--QtlL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41cEh--QtlL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41POw8VHkmL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41POw8VHkmL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41qD8RFDbYL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41qD8RFDbYL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/419rG4ECFXL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/419rG4ECFXL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41-ba-KzDsL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41-ba-KzDsL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/417U-4bsFKL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/417U-4bsFKL.jpg"
          ],
          "AvgProductRating": 3.5,
          "AvgReviews": 202.0,
          "TotalReviews": 202.0,
          "TotalOffers": 2.0,
          "ProductPriority": 1.0,
          "Price": 341.63,
          "Currency": "SGD"
        },
        {
          "Title": "HP OfficeJet Pro 6230 Wireless Photo Printer with Mobile Printing (E3E03A)",
          "Color": "N.A.",
          "InterClusterId": "IC70332",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41Au%2BWUuNPL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Au%2BWUuNPL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31dPIx-KN4L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31dPIx-KN4L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31CUOdWICHL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31CUOdWICHL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31BllgOJj9L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31BllgOJj9L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/3103Aycl96L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/3103Aycl96L.jpg"
          ],
          "AvgProductRating": 3.0,
          "AvgReviews": 217.0,
          "TotalReviews": 217.0,
          "TotalOffers": 31.0,
          "ProductPriority": 1.0,
          "Price": 54.62,
          "Currency": "SGD"
        },
        {
          "Title": "HP Color LaserJet 2600n Printer (Q6455A#ABA)",
          "Color": "N.A.",
          "InterClusterId": "IC46798",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41FGMD4K6FL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41FGMD4K6FL.jpg"
          ],
          "AvgProductRating": 3.4,
          "AvgReviews": 139.0,
          "TotalReviews": 139.0,
          "TotalOffers": 16.0,
          "ProductPriority": 1.0,
          "Price": 228.21,
          "Currency": "SGD"
        },
        {
          "Title": "HP LaserJet Pro M12w Wireless Laser Printer (T0L46A)",
          "Color": "N.A.",
          "InterClusterId": "IC46463",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41GNqswkJjL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41GNqswkJjL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51xTwQzNQUL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51xTwQzNQUL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41cOezixbdL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41cOezixbdL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41pcq-9-y-L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41pcq-9-y-L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41xBfEJIF6L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41xBfEJIF6L.jpg"
          ],
          "AvgProductRating": 3.7,
          "AvgReviews": 153.0,
          "TotalReviews": 153.0,
          "TotalOffers": 13.0,
          "ProductPriority": 1.0,
          "Price": 148.94,
          "Currency": "SGD"
        },
        {
          "Title": "Kodak ESP 9250 All-in-One Printer (2773635)",
          "Color": "N.A.",
          "InterClusterId": "IC72190",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/516McEmxtzL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/516McEmxtzL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Kns7s23%2BL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Kns7s23%2BL.jpg"
          ],
          "AvgProductRating": 3.0,
          "AvgReviews": 192.0,
          "TotalReviews": 192.0,
          "TotalOffers": 2.0,
          "ProductPriority": 1.0,
          "Price": 258.09,
          "Currency": "SGD"
        },
        {
          "Title": "Epson WorkForce 30 Color Inkjet Printer (C11CA19201)",
          "Color": "N.A.",
          "InterClusterId": "IC70884",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41cknWiUZWL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41cknWiUZWL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41-SOnac4JL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41-SOnac4JL.jpg"
          ],
          "AvgProductRating": 3.9,
          "AvgReviews": 199.0,
          "TotalReviews": 199.0,
          "TotalOffers": 2.0,
          "ProductPriority": 1.0,
          "Price": 886.86,
          "Currency": "SGD"
        },
        {
          "Title": "Brother Wireless All-In-One Color Printer with Scanner, Copier and Fax (MFC9330CDW), Amazon Dash Replenishment Enabled",
          "Color": "N.A.",
          "InterClusterId": "IC179",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41Xx1UwrmiL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Xx1UwrmiL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/61EdsQ9cCSL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/61EdsQ9cCSL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41SQfnIc7-L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41SQfnIc7-L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41RWra8cGVL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41RWra8cGVL.jpg"
          ],
          "AvgProductRating": 1.2666666666666666,
          "AvgReviews": 175.66666666666666,
          "TotalReviews": 527.0,
          "TotalOffers": 49.0,
          "ProductPriority": 2.0,
          "Price": 512.44,
          "Currency": "SGD"
        },
        {
          "Title": "HP Officejet 7500A Wide Format e-All-in-One E910a (C9309A#B1H)",
          "Color": "N.A.",
          "InterClusterId": "IC70769",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41M9pBcuFIL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41M9pBcuFIL.jpg"
          ],
          "AvgProductRating": 3.5,
          "AvgReviews": 203.0,
          "TotalReviews": 203.0,
          "TotalOffers": 10.0,
          "ProductPriority": 1.0,
          "Price": 273.29,
          "Currency": "SGD"
        },
        {
          "Title": "Epson WorkForce WF-7010 Wide-Format Color Inkjet Printer (C11CB59201)",
          "Color": "N.A.",
          "InterClusterId": "IC71792",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/51OI%2BwBa3pL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51OI%2BwBa3pL.jpg"
          ],
          "AvgProductRating": 3.4,
          "AvgReviews": 156.0,
          "TotalReviews": 156.0,
          "TotalOffers": 4.0,
          "ProductPriority": 1.0,
          "Price": 545.23,
          "Currency": "SGD"
        },
        {
          "Title": "Epson Stylus Photo R200 Ink Jet Printer (C11C546011)",
          "Color": "N.A.",
          "InterClusterId": "IC70854",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41BS5CMAMAL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41BS5CMAMAL.jpg"
          ],
          "AvgProductRating": 3.2,
          "AvgReviews": 161.0,
          "TotalReviews": 161.0,
          "TotalOffers": 6.0,
          "ProductPriority": 1.0,
          "Price": 230.78,
          "Currency": "SGD"
        },
        {
          "Title": "Dell Computer B1160w Wireless Monochrome Printer",
          "Color": "N.A.",
          "InterClusterId": "IC46608",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/411d-4NblCL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/411d-4NblCL.jpg"
          ],
          "AvgProductRating": 3.7,
          "AvgReviews": 166.0,
          "TotalReviews": 166.0,
          "TotalOffers": 13.0,
          "ProductPriority": 1.0,
          "Price": 136.65,
          "Currency": "SGD"
        },
        {
          "Title": "HP Deskjet D1660 Printer (CB770A#B1H)",
          "Color": "N.A.",
          "InterClusterId": "IC70758",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/31UudgI0ZBL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31UudgI0ZBL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41QWCisBawL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41QWCisBawL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41lov8iexDL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41lov8iexDL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31DNicet0OL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31DNicet0OL.jpg"
          ],
          "AvgProductRating": 3.5,
          "AvgReviews": 184.0,
          "TotalReviews": 184.0,
          "TotalOffers": 3.0,
          "ProductPriority": 1.0,
          "Price": 69.12,
          "Currency": "SGD"
        },
        {
          "Title": "HP Officejet Pro 8000",
          "Color": "N.A.",
          "InterClusterId": "IC71487",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41HyGM266PL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41HyGM266PL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/4182ptqdQTL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/4182ptqdQTL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31QkmKLQu6L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31QkmKLQu6L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41H8pH-7LKL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41H8pH-7LKL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41wW0gzec9L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41wW0gzec9L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/318x6Cm2JxL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/318x6Cm2JxL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/316AjAAYQ0L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/316AjAAYQ0L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51oVOtiQjIL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51oVOtiQjIL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41xWkOSBF0L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41xWkOSBF0L.jpg"
          ],
          "AvgProductRating": 2.9,
          "AvgReviews": 146.0,
          "TotalReviews": 146.0,
          "TotalOffers": 11.0,
          "ProductPriority": 1.0,
          "Price": 111.79,
          "Currency": "SGD"
        },
        {
          "Title": "HP Laserjet Pro M452nw Wireless Color Printer, (CF388A)",
          "Color": "N.A.",
          "InterClusterId": "IC46464",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/31KosyQdN0L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31KosyQdN0L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31yxPGaQJDL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31yxPGaQJDL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31HytQk2m3L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31HytQk2m3L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/319ScnSvrKL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/319ScnSvrKL.jpg"
          ],
          "AvgProductRating": 3.9,
          "AvgReviews": 159.0,
          "TotalReviews": 159.0,
          "TotalOffers": 44.0,
          "ProductPriority": 1.0,
          "Price": 218.63,
          "Currency": "SGD"
        },
        {
          "Title": "Canon Selphy CP1200 Black Wireless Color Photo Printer",
          "Color": "Black",
          "InterClusterId": "IC1349",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41aOG9uSZvL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41aOG9uSZvL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41-gYQk-kHL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41-gYQk-kHL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41vXvnxUtpL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41vXvnxUtpL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41dqLwq7bUL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41dqLwq7bUL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41NO5pwihjL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41NO5pwihjL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51TS-RiQ2mL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51TS-RiQ2mL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41WNxkWZTiL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41WNxkWZTiL.jpg"
          ],
          "AvgProductRating": 2.325,
          "AvgReviews": 156.75,
          "TotalReviews": 627.0,
          "TotalOffers": 48.0,
          "ProductPriority": 2.0,
          "Price": 100.42,
          "Currency": "SGD"
        },
        {
          "Title": "HP OfficeJet H470 Mobile Printer",
          "Color": "N.A.",
          "InterClusterId": "IC70484",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41dj00cyVrL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41dj00cyVrL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41fhzSUt0DL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41fhzSUt0DL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31eYiASaCkL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31eYiASaCkL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31VCrqWQiML._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31VCrqWQiML.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41HH37KRk2L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41HH37KRk2L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/3176I4co9pL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/3176I4co9pL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31PTXVN5XfL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31PTXVN5XfL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/415x10cG%2BRL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/415x10cG%2BRL.jpg"
          ],
          "AvgProductRating": 3.9,
          "AvgReviews": 136.0,
          "TotalReviews": 136.0,
          "TotalOffers": 19.0,
          "ProductPriority": 1.0,
          "Price": 88.82,
          "Currency": "SGD"
        },
        {
          "Title": "HP Officejet 2620 All-in-One Printer",
          "Color": "N.A.",
          "InterClusterId": "IC70565",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41Tg-F4IAnL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Tg-F4IAnL.jpg"
          ],
          "AvgProductRating": 4.0,
          "AvgReviews": 155.0,
          "TotalReviews": 155.0,
          "TotalOffers": 16.0,
          "ProductPriority": 1.0,
          "Price": 84.52,
          "Currency": "SGD"
        },
        {
          "Title": "Canon imageCLASS LBP6030w Wireless Laser Printer",
          "Color": "N.A.",
          "InterClusterId": "IC1546",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41vz6v-OjAL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41vz6v-OjAL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Vpyl2j6zL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Vpyl2j6zL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51kPI2WB3KL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51kPI2WB3KL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/416tHoWqc8L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/416tHoWqc8L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51Y1lzzrymL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51Y1lzzrymL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41rtw4SR1IL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41rtw4SR1IL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31qtpdEBQ7L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31qtpdEBQ7L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/4170VyxNIfL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/4170VyxNIfL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/419O9bfgOeL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/419O9bfgOeL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41r-W0V10YL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41r-W0V10YL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Ax6NBF6oL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Ax6NBF6oL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41WgEOgQR%2BL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41WgEOgQR%2BL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41MgywRyceL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41MgywRyceL.jpg"
          ],
          "AvgProductRating": 1.0,
          "AvgReviews": 177.25,
          "TotalReviews": 709.0,
          "TotalOffers": 55.0,
          "ProductPriority": 2.0,
          "Price": 84.71,
          "Currency": "SGD"
        },
        {
          "Title": "Brother MFC7460DN Ethernet Monochrome Printer with Scanner, Copier \u0026 Fax",
          "Color": "N.A.",
          "InterClusterId": "IC70295",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41xRS46y0ML._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41xRS46y0ML.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41hm66jIHUL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41hm66jIHUL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/414PUqDezRL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/414PUqDezRL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/414iwGP7SLL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/414iwGP7SLL.jpg"
          ],
          "AvgProductRating": 4.0,
          "AvgReviews": 150.0,
          "TotalReviews": 150.0,
          "TotalOffers": 44.0,
          "ProductPriority": 1.0,
          "Price": 210.44,
          "Currency": "SGD"
        },
        {
          "Title": "Canon Lasers color imageCLASS MF726Cdw Wireless color Photo Printer with Scanner, Copier \u0026 Fax",
          "Color": "N.A.",
          "InterClusterId": "IC79179",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/319hrskwyRL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/319hrskwyRL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31JzPshS5gL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31JzPshS5gL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41-F3-ZW8pL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41-F3-ZW8pL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41iLtTQNmzL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41iLtTQNmzL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41b97jz0BgL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41b97jz0BgL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41stQOsHQnL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41stQOsHQnL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41%2BWWz3nLjL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41%2BWWz3nLjL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41iPCo2kh-L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41iPCo2kh-L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41geBCZXkwL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41geBCZXkwL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41dLRQsuZtL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41dLRQsuZtL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41wNQI4D1bL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41wNQI4D1bL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/417sOyxKF-L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/417sOyxKF-L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41QSYbuIV7L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41QSYbuIV7L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41PO2bqs40L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41PO2bqs40L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/312GbMQy2wL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/312GbMQy2wL.jpg"
          ],
          "AvgProductRating": 4.1,
          "AvgReviews": 160.0,
          "TotalReviews": 160.0,
          "TotalOffers": 20.0,
          "ProductPriority": 1.0,
          "Price": 421.91,
          "Currency": "SGD"
        },
        {
          "Title": "HP Photosmart D7560 Printer",
          "Color": "N.A.",
          "InterClusterId": "IC70869",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41T6CZWMO-L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41T6CZWMO-L.jpg"
          ],
          "AvgProductRating": 3.3,
          "AvgReviews": 164.0,
          "TotalReviews": 164.0,
          "TotalOffers": 7.0,
          "ProductPriority": 1.0,
          "Price": 232.76,
          "Currency": "SGD"
        },
        {
          "Title": "Samsung Electronics CLP-365W Wireless Color Printer",
          "Color": "N.A.",
          "InterClusterId": "IC48425",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/31clWFGLwHL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31clWFGLwHL.jpg"
          ],
          "AvgProductRating": 3.2,
          "AvgReviews": 130.0,
          "TotalReviews": 130.0,
          "TotalOffers": 3.0,
          "ProductPriority": 1.0,
          "Price": 353.92,
          "Currency": "SGD"
        },
        {
          "Title": "Epson PictureMate Personal Photo Printer",
          "Color": "N.A.",
          "InterClusterId": "IC70866",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41P36F8RRQL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41P36F8RRQL.jpg"
          ],
          "AvgProductRating": 2.6,
          "AvgReviews": 146.0,
          "TotalReviews": 146.0,
          "TotalOffers": 19.0,
          "ProductPriority": 1.0,
          "Price": 39.61,
          "Currency": "SGD"
        },
        {
          "Title": "Epson WorkForce 500 All-in-One Printer (Black) (C11CA40201)",
          "Color": "black",
          "InterClusterId": "IC72140",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41zPfgj8SwL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41zPfgj8SwL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41q9ZwXzOfL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41q9ZwXzOfL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51IIu6krYrL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51IIu6krYrL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41fzxia1GqL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41fzxia1GqL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51vkToUu38L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51vkToUu38L.jpg"
          ],
          "AvgProductRating": 3.2,
          "AvgReviews": 142.0,
          "TotalReviews": 142.0,
          "TotalOffers": 8.0,
          "ProductPriority": 1.0,
          "Price": 113.42,
          "Currency": "SGD"
        },
        {
          "Title": "Epson Stylus Photo R1800 Ink Jet Printer (C11C589011)",
          "Color": "N.A.",
          "InterClusterId": "IC72149",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41EP20VM7KL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41EP20VM7KL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31pNU6DU4KL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31pNU6DU4KL.jpg"
          ],
          "AvgProductRating": 3.1,
          "AvgReviews": 157.0,
          "TotalReviews": 157.0,
          "TotalOffers": 5.0,
          "ProductPriority": 1.0,
          "Price": 1024.86,
          "Currency": "SGD"
        },
        {
          "Title": "HP Photosmart 8250 Printer (Q3470A#ABA)",
          "Color": "N.A.",
          "InterClusterId": "IC71571",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41W9D59WBZL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41W9D59WBZL.jpg"
          ],
          "AvgProductRating": 3.1,
          "AvgReviews": 146.0,
          "TotalReviews": 146.0,
          "TotalOffers": 7.0,
          "ProductPriority": 1.0,
          "Price": 334.79,
          "Currency": "SGD"
        },
        {
          "Title": "HP CP2025DN Color LaserJet Printer",
          "Color": "N.A.",
          "InterClusterId": "IC46765",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41mEMpGJxRL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41mEMpGJxRL.jpg"
          ],
          "AvgProductRating": 2.9,
          "AvgReviews": 130.0,
          "TotalReviews": 130.0,
          "TotalOffers": 32.0,
          "ProductPriority": 1.0,
          "Price": 118.89,
          "Currency": "SGD"
        },
        {
          "Title": "HP LaserJet 1022 Printer (Q5912A#ABA)",
          "Color": "N.A.",
          "InterClusterId": "IC46711",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/410NBHNDZGL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/410NBHNDZGL.jpg"
          ],
          "AvgProductRating": 4.1,
          "AvgReviews": 121.0,
          "TotalReviews": 121.0,
          "TotalOffers": 21.0,
          "ProductPriority": 1.0,
          "Price": 88.82,
          "Currency": "SGD"
        },
        {
          "Title": "Epson Stylus CX7400 All-in-One Printer (C11C689201)",
          "Color": "N.A.",
          "InterClusterId": "IC71940",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41AYZRpa5-L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41AYZRpa5-L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/4159JIvIVfL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/4159JIvIVfL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Gp4V%2B4%2BuL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Gp4V%2B4%2BuL.jpg"
          ],
          "AvgProductRating": 2.5,
          "AvgReviews": 132.0,
          "TotalReviews": 132.0,
          "TotalOffers": 2.0,
          "ProductPriority": 1.0,
          "Price": 240.49,
          "Currency": "SGD"
        },
        {
          "Title": "Brother HL-L2320D Mono Laser Printer",
          "Color": "N.A.",
          "InterClusterId": "IC46501",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41vJ4ivFvrL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41vJ4ivFvrL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41vbyoTuZ8L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41vbyoTuZ8L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41RJqcLmvjL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41RJqcLmvjL.jpg"
          ],
          "AvgProductRating": 4.5,
          "AvgReviews": 137.0,
          "TotalReviews": 137.0,
          "TotalOffers": 54.0,
          "ProductPriority": 1.0,
          "Price": 86.8,
          "Currency": "SGD"
        },
        {
          "Title": "Canon PIXMA MX512 Wireless Color Photo Printer with Scanner, Copier and Fax",
          "Color": "N.A.",
          "InterClusterId": "IC79795",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/312vVYTM1oL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/312vVYTM1oL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41y5-BFsECL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41y5-BFsECL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/410Mh51qSbL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/410Mh51qSbL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51NAeIrFCbL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51NAeIrFCbL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41xRWRZFk1L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41xRWRZFk1L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41b8-3Z6zxL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41b8-3Z6zxL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/4194mfJqthL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/4194mfJqthL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41HrK%2BdyMAL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41HrK%2BdyMAL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Sh%2BsfS%2BsL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Sh%2BsfS%2BsL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41apvguBL3L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41apvguBL3L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41pCUQUuTRL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41pCUQUuTRL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31nB4ijYEfL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31nB4ijYEfL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41%2BgcFBJ8DL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41%2BgcFBJ8DL.jpg"
          ],
          "AvgProductRating": 3.7,
          "AvgReviews": 238.0,
          "TotalReviews": 238.0,
          "TotalOffers": 6.0,
          "ProductPriority": 1.0,
          "Price": 150.32,
          "Currency": "SGD"
        },
        {
          "Title": "HP OfficeJet 200 Portable Printer with Wireless \u0026 Mobile Printing (CZ993A)",
          "Color": "N.A.",
          "InterClusterId": "IC70309",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41QVh1GZ1sL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41QVh1GZ1sL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41oKWmeggYL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41oKWmeggYL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41BFpYoCSUL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41BFpYoCSUL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41quJ%2Bz67uL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41quJ%2Bz67uL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31ZkBFYg3sL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31ZkBFYg3sL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/314hkDsps-L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/314hkDsps-L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31EiRJQuZmL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31EiRJQuZmL.jpg"
          ],
          "AvgProductRating": 4.1,
          "AvgReviews": 123.0,
          "TotalReviews": 123.0,
          "TotalOffers": 21.0,
          "ProductPriority": 1.0,
          "Price": 235.04,
          "Currency": "SGD"
        },
        {
          "Title": "Epson Stylus C82 Inkjet Printer",
          "Color": "N.A.",
          "InterClusterId": "IC72188",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41TK70M6QFL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41TK70M6QFL.jpg"
          ],
          "AvgProductRating": 3.1,
          "AvgReviews": 141.0,
          "TotalReviews": 141.0,
          "TotalOffers": 3.0,
          "ProductPriority": 1.0,
          "Price": 129.8,
          "Currency": "SGD"
        },
        {
          "Title": "Epson WorkForce 1100 Wide-Format Color Inkjet Printer (C11CA58201)",
          "Color": "N.A.",
          "InterClusterId": "IC71584",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/51Fdq-RyeEL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51Fdq-RyeEL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41D7CUb1R2L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41D7CUb1R2L.jpg"
          ],
          "AvgProductRating": 3.6,
          "AvgReviews": 139.0,
          "TotalReviews": 139.0,
          "TotalOffers": 7.0,
          "ProductPriority": 1.0,
          "Price": 315.24,
          "Currency": "SGD"
        },
        {
          "Title": "HP LaserJet 1320 Laser Printer",
          "Color": "N.A.",
          "InterClusterId": "IC46567",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/417X2Z8ADXL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/417X2Z8ADXL.jpg"
          ],
          "AvgProductRating": 4.4,
          "AvgReviews": 116.0,
          "TotalReviews": 116.0,
          "TotalOffers": 38.0,
          "ProductPriority": 1.0,
          "Price": 57.38,
          "Currency": "SGD"
        },
        {
          "Title": "Xerox Phaser 6500/N Color Laser Printer",
          "Color": "N.A.",
          "InterClusterId": "IC46664",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/31uX9D3G71L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31uX9D3G71L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31uX9D3G71L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31uX9D3G71L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41n1VbZknxL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41n1VbZknxL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/417sMj9eDML._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/417sMj9eDML.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/313MjTKafyL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/313MjTKafyL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41W9HrC2hML._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41W9HrC2hML.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Xxrix-pxL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Xxrix-pxL.jpg"
          ],
          "AvgProductRating": 3.5,
          "AvgReviews": 126.0,
          "TotalReviews": 126.0,
          "TotalOffers": 10.0,
          "ProductPriority": 1.0,
          "Price": 314.28,
          "Currency": "SGD"
        },
        {
          "Title": "Epson Stylus Pro 3880 Color Inkjet Printer (CA61201-VM)",
          "Color": "N.A.",
          "InterClusterId": "IC70827",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/31WG%2BRti5EL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31WG%2BRti5EL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31r589cVAdL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31r589cVAdL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41gc60OGl-L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41gc60OGl-L.jpg"
          ],
          "AvgProductRating": 3.8,
          "AvgReviews": 138.0,
          "TotalReviews": 138.0,
          "TotalOffers": 3.0,
          "ProductPriority": 1.0,
          "Price": 1708.12,
          "Currency": "SGD"
        },
        {
          "Title": "HP Photosmart B8550 Inkjet Photo Printer",
          "Color": "N.A.",
          "InterClusterId": "IC73585",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41U-Ww-mFtL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41U-Ww-mFtL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31lY5sAe66L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31lY5sAe66L.jpg"
          ],
          "AvgProductRating": 3.0,
          "AvgReviews": 137.0,
          "TotalReviews": 137.0,
          "TotalOffers": 3.0,
          "ProductPriority": 1.0,
          "Price": 1202.45,
          "Currency": "SGD"
        },
        {
          "Title": "HP Deskjet 3000 Printer (CH393A#B1H)",
          "Color": "N.A.",
          "InterClusterId": "IC70805",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41ljPFQlPLL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41ljPFQlPLL.jpg"
          ],
          "AvgProductRating": 3.4,
          "AvgReviews": 135.0,
          "TotalReviews": 135.0,
          "TotalOffers": 8.0,
          "ProductPriority": 1.0,
          "Price": 81.99,
          "Currency": "SGD"
        },
        {
          "Title": "HP DeskJet 2655 All-in-One Compact Printer, Instant Ink ready - Noble Blue (V1N01A)",
          "Color": "Blue",
          "InterClusterId": "IC2296",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41bvkINhjjL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41bvkINhjjL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51oBTmU-DXL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51oBTmU-DXL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/417Kww9nB7L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/417Kww9nB7L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51rzPhIDl1L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51rzPhIDl1L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51vhM1nT0uL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51vhM1nT0uL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51luWYN6P-L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51luWYN6P-L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41xJQY2FaxL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41xJQY2FaxL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31cAdriT-2L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31cAdriT-2L.jpg"
          ],
          "AvgProductRating": 1.75,
          "AvgReviews": 116.0,
          "TotalReviews": 232.0,
          "TotalOffers": 12.0,
          "ProductPriority": 2.0,
          "Price": 55.34,
          "Currency": "SGD"
        },
        {
          "Title": "Brother HLL8350CDW Wireless Color Laser Printer, Amazon Dash Replenishment Enabled",
          "Color": "N.A.",
          "InterClusterId": "IC2458",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41FY8UIvSOL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41FY8UIvSOL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41ZXIDlE2ML._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41ZXIDlE2ML.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41e0AB57rVL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41e0AB57rVL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41-XRu32dDL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41-XRu32dDL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/413PzVCXyNL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/413PzVCXyNL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41gImjtfETL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41gImjtfETL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41p8XylHLsL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41p8XylHLsL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/418xLyG0O3L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/418xLyG0O3L.jpg"
          ],
          "AvgProductRating": 1.3333333333333333,
          "AvgReviews": 127.33333333333333,
          "TotalReviews": 382.0,
          "TotalOffers": 27.0,
          "ProductPriority": 2.0,
          "Price": 380.57,
          "Currency": "SGD"
        },
        {
          "Title": "Brother Wireless Digital Color Printer with Convenience Copying and Scanning (HL-3180CDW), Amazon Dash Replenishment Enabled",
          "Color": "N.A.",
          "InterClusterId": "IC46453",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41QS%2BZ42VqL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41QS%2BZ42VqL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41NuK04k5GL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41NuK04k5GL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/419s4D5kWPL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/419s4D5kWPL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51uS1i12OqL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51uS1i12OqL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51Pd0fvDIbL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51Pd0fvDIbL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41YFcvYCR1L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41YFcvYCR1L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41UmpyKHHGL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41UmpyKHHGL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41W4bY-v3kL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41W4bY-v3kL.jpg"
          ],
          "AvgProductRating": 4.2,
          "AvgReviews": 154.0,
          "TotalReviews": 154.0,
          "TotalOffers": 32.0,
          "ProductPriority": 1.0,
          "Price": 349.81,
          "Currency": "SGD"
        },
        {
          "Title": "HP LaserJet P3015dn Printer - Black/Silver - CE528A",
          "Color": "black, silver",
          "InterClusterId": "IC46511",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/417OgE61zdL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/417OgE61zdL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41pdRfhKEyL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41pdRfhKEyL.jpg"
          ],
          "AvgProductRating": 4.3,
          "AvgReviews": 136.0,
          "TotalReviews": 136.0,
          "TotalOffers": 41.0,
          "ProductPriority": 1.0,
          "Price": 134.23,
          "Currency": "SGD"
        },
        {
          "Title": "Canon Pixma MP970 Photo All-In-One Inkjet Printer (2181B002)",
          "Color": "N.A.",
          "InterClusterId": "IC71631",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41sY6djZ40L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41sY6djZ40L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41ytCnBEyoL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41ytCnBEyoL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41rZimTXTTL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41rZimTXTTL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41O1Nfl6wKL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41O1Nfl6wKL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/511KuheYS0L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/511KuheYS0L.jpg"
          ],
          "AvgProductRating": 3.4,
          "AvgReviews": 136.0,
          "TotalReviews": 136.0,
          "TotalOffers": 3.0,
          "ProductPriority": 1.0,
          "Price": 136.64,
          "Currency": "SGD"
        },
        {
          "Title": "Epson Stylus C80 Inkjet Printer",
          "Color": "N.A.",
          "InterClusterId": "IC73515",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41J5FWZ9V6L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41J5FWZ9V6L.jpg"
          ],
          "AvgProductRating": 3.2,
          "AvgReviews": 139.0,
          "TotalReviews": 139.0,
          "TotalOffers": 2.0,
          "ProductPriority": 1.0,
          "Price": 150.32,
          "Currency": "SGD"
        },
        {
          "Title": "Canon PIXMA iP4700 Premium Inkjet Photo Printer (3742B002)",
          "Color": "N.A.",
          "InterClusterId": "IC72346",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/31EpBS8tNsL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31EpBS8tNsL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31xs-FIJfmL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31xs-FIJfmL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/316qpD%2BiVQL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/316qpD%2BiVQL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41uWBGku0yL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41uWBGku0yL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41km2XdOLVL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41km2XdOLVL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41TC1sXhftL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41TC1sXhftL.jpg"
          ],
          "AvgProductRating": 3.7,
          "AvgReviews": 127.0,
          "TotalReviews": 127.0,
          "TotalOffers": 3.0,
          "ProductPriority": 1.0,
          "Price": 1024.88,
          "Currency": "SGD"
        },
        {
          "Title": "Dell Computer c1660w Wireless Color Printer",
          "Color": "N.A.",
          "InterClusterId": "IC47564",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41dI1G8%2BmFL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41dI1G8%2BmFL.jpg"
          ],
          "AvgProductRating": 3.5,
          "AvgReviews": 138.0,
          "TotalReviews": 138.0,
          "TotalOffers": 13.0,
          "ProductPriority": 1.0,
          "Price": 122.89,
          "Currency": "SGD"
        },
        {
          "Title": "HP Officejet 6000 Wireless Color Inkjet Printer (C9295A#B1H)",
          "Color": "N.A.",
          "InterClusterId": "IC70761",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41Zfdb9JcSL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41Zfdb9JcSL.jpg"
          ],
          "AvgProductRating": 3.1,
          "AvgReviews": 112.0,
          "TotalReviews": 112.0,
          "TotalOffers": 8.0,
          "ProductPriority": 1.0,
          "Price": 368.89,
          "Currency": "SGD"
        },
        {
          "Title": "Lexmark Impact Wireless Multi-function Inkjet Printer (S305)",
          "Color": "N.A.",
          "InterClusterId": "IC72506",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41BOPe5T6WL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41BOPe5T6WL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41NQiiaghvL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41NQiiaghvL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41aS-f4GHML._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41aS-f4GHML.jpg"
          ],
          "AvgProductRating": 2.5,
          "AvgReviews": 186.0,
          "TotalReviews": 186.0,
          "TotalOffers": 4.0,
          "ProductPriority": 1.0,
          "Price": 117.53,
          "Currency": "SGD"
        },
        {
          "Title": "Canon i850 Photo Printer",
          "Color": "N.A.",
          "InterClusterId": "IC70930",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41B39JKE6ML._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41B39JKE6ML.jpg"
          ],
          "AvgProductRating": 3.1,
          "AvgReviews": 134.0,
          "TotalReviews": 134.0,
          "TotalOffers": 2.0,
          "ProductPriority": 1.0,
          "Price": 409.95,
          "Currency": "SGD"
        },
        {
          "Title": "Canon PIXMA MG3022 Wireless Inkjet All-in-One Printer, 8 ipm Black, 4800x600 Color, - Print, Copy, Scan",
          "Color": "black",
          "InterClusterId": "IC70449",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41fS1yZLpnL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41fS1yZLpnL.jpg"
          ],
          "AvgProductRating": 3.7,
          "AvgReviews": 134.0,
          "TotalReviews": 134.0,
          "TotalOffers": 25.0,
          "ProductPriority": 1.0,
          "Price": 34.14,
          "Currency": "SGD"
        },
        {
          "Title": "Canon MP480 All-in-One Photo Printer",
          "Color": "N.A.",
          "InterClusterId": "IC72178",
          "Images": [
            "https://images-na.ssl-images-amazon.com/images/I/41F7GzxVgAL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41F7GzxVgAL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31ZHQeE0VrL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31ZHQeE0VrL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31z5hgeBQyL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/31z5hgeBQyL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41SkRJ4PMdL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41SkRJ4PMdL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/4177ukrvE%2BL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/4177ukrvE%2BL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41MFG3ttf0L._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41MFG3ttf0L.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41NxWtGC0wL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/41NxWtGC0wL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51TFtKZOFzL._SS40_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51TFtKZOFzL.jpg"
          ],
          "AvgProductRating": 3.3,
          "AvgReviews": 130.0,
          "TotalReviews": 130.0,
          "TotalOffers": 10.0,
          "ProductPriority": 1.0,
          "Price": 72.41,
          "Currency": "SGD"
        }
        ]
      }
      break;
  };
  res.json(message);
};

api.like = (req, res) => {
  let message = "";
  switch (req.query.action) {
    case "u":
      message = {
        status: 0,
        message: "NM$L"
      };
      break;
    case "r":
      message = {
        status: 0,
        message: "NMSL",
        LikeList: ["IC47014", "IC952"]
      };
      break;
    default:
      break;
  } 
  console.log(message)
  res.json(message);
};

module.exports = api;