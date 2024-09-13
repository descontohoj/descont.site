
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.pt-BR.dca4460497c291a7a3cb.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5835.latest.pt-BR.6d90f9ef17e5a7215238.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3569.latest.pt-BR.9864dca70239bbd6697a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4085.latest.pt-BR.d3bc65d7a91c6d71a13d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.4dc2554193962e11ebff.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2542.latest.pt-BR.e8b98a9ed829efc0c730.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6846.latest.pt-BR.52b14d870951c1a5a741.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8070.latest.pt-BR.8ff27283522475e94436.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2080.latest.pt-BR.5117e670600bcaf49bb5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8933.latest.pt-BR.c331f7de2f28e05ba2f9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9962.latest.pt-BR.7d61afebfaecde17296e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5137.latest.pt-BR.74d2400f63dc76041598.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2594.latest.pt-BR.2e7ee61d11295651abba.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5449.latest.pt-BR.89575db39ca50a886f6e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.pt-BR.d658fbd6966ce90fdef7.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/5835.latest.pt-BR.3975c63f818b50435dd4.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.19558d19ece777c39c33.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.latest.pt-BR.8039276cabb7faecfb04.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  