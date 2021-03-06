(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'vetwellsoon.myshopify.com',
      storefrontAccessToken: '2341e04e65ae2c2dab42301fbec3873d',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('collection', {
        id: '166783025196',
        node: document.getElementById('collection-component-166783025196'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "40px",
          "margin-bottom": "50px",
          "width": "calc(25% - 20px)"
        }
      },
      "button": {
        ":hover": {
          "background-color": "#cb4f1f"
        },
        "background-color": "#e25822",
        ":focus": {
          "background-color": "#cb4f1f"
        },
        "border-radius": "10px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "18rem"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        ":hover": {
          "background-color": "#cb4f1f"
        },
        "background-color": "#e25822",
        ":focus": {
          "background-color": "#cb4f1f"
        },
        "border-radius": "10px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "cart": {
    "styles": {
      "button": {
        ":hover": {
          "background-color": "#cb4f1f"
        },
        "background-color": "#e25822",
        ":focus": {
          "background-color": "#cb4f1f"
        },
        "border-radius": "10px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#e25822",
        ":hover": {
          "background-color": "#cb4f1f"
        },
        ":focus": {
          "background-color": "#cb4f1f"
        }
      }
    }
  }
},
      });
    });
  }
})();
