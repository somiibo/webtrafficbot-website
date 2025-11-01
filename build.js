(function() {
  // Create a global variable for the config
  const config = {
  "timestamp": "2025-11-01T02:52:38.906Z",
  "repo": {
    "user": "somiibo",
    "name": "webtrafficbot-website"
  },
  "environment": "production",
  "packages": {
    "web-manager": "4.0.23",
    "ultimate-jekyll-manager": "0.0.109"
  },
  "config": {
    "source": "dist",
    "destination": "/home/runner/work/webtrafficbot-website/webtrafficbot-website/_site",
    "collections_dir": "",
    "cache_dir": ".jekyll-cache",
    "safe": false,
    "encoding": "utf-8",
    "strict_front_matter": true,
    "show_drafts": null,
    "limit_posts": 0,
    "future": false,
    "unpublished": false,
    "markdown": "kramdown",
    "highlighter": "rouge",
    "lsi": false,
    "excerpt_separator": "\n\n",
    "incremental": true,
    "detach": false,
    "port": "4000",
    "host": "127.0.0.1",
    "baseurl": "",
    "show_dir_listing": false,
    "permalink": "/blog/:title",
    "paginate_path": "/page:num",
    "timezone": null,
    "quiet": false,
    "verbose": false,
    "defaults": [
      {
        "scope": {
          "path": "",
          "type": "team"
        },
        "values": {
          "permalink": "/team/:title"
        }
      }
    ],
    "liquid": {
      "error_mode": "warn",
      "strict_filters": false,
      "strict_variables": false
    },
    "kramdown": {
      "auto_ids": true,
      "toc_levels": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "entity_output": "as_char",
      "smart_quotes": "lsquo,rsquo,ldquo,rdquo",
      "input": "GFM",
      "hard_wrap": false,
      "guess_lang": true,
      "footnote_nr": 1,
      "show_warnings": false,
      "syntax_highlighter": "rouge",
      "syntax_highlighter_opts": {
        "default_lang": "plaintext",
        "guess_lang": true
      },
      "coderay": {}
    },
    "url": "https://webtrafficbot.com",
    "theme": {
      "id": "classy",
      "target": "frontend",
      "appearance": "dark",
      "version": "latest",
      "html": {
        "class": ""
      },
      "body": {
        "class": ""
      },
      "nav": {
        "enabled": true
      },
      "main": {
        "class": ""
      },
      "footer": {
        "enabled": true
      }
    },
    "meta": {
      "title": "Traffic Bot - Unlimited free website traffic generator - {{ site.brand.name }}",
      "description": "Free web traffic bot for Mac, Windows & Linux. Lower your site's bounce rate & rank higher on search engines with our traffic generator. Generate unlimited traffic for free",
      "image": "https://cdn.itwcreativeworks.com/assets/somiibo/images/socials/somiibo-brandmark-square-blue-1024x1024.png",
      "keywords": "",
      "viewport": "",
      "index": true,
      "referrer": ""
    },
    "brand": {
      "id": "",
      "name": "Web Traffic Bot",
      "description": "Unlimited free website traffic generator",
      "type": "Corporation",
      "images": {
        "brandmark": "https://cdn.itwcreativeworks.com/assets/somiibo/images/logo/somiibo-brandmark-blue-1024x1024.png",
        "wordmark": "https://cdn.itwcreativeworks.com/assets/itw-creative-works/images/logo/itw-creative-works-wordmark-black-x.svg",
        "combomark": "https://cdn.itwcreativeworks.com/assets/itw-creative-works/images/logo/itw-creative-works-combomark-black-x.svg"
      },
      "contact": {
        "email": "support@somiibo.com",
        "phone": "+1 (000) 000 - 0000",
        "slapform-form-id": "000000"
      },
      "address": {
        "line1": "4001 Inglewood Ave",
        "line2": "Suite 101-385",
        "region": "CA",
        "postal-code": "90278",
        "city": "Redondo Beach",
        "locality": "Los Angeles",
        "country": "United States"
      }
    },
    "web_manager": {
      "auth": {
        "enabled": true,
        "config": {
          "policy": null,
          "redirects": {
            "authenticated": "/account",
            "unauthenticated": "/signup"
          },
          "allowSubdomains": true
        }
      },
      "firebase": {
        "app": {
          "enabled": true,
          "config": {
            "apiKey": "AIzaSyA3-YBkywbzpstijvMqUwn_a0GQTi3EZQc",
            "authDomain": "somiibo.com",
            "databaseURL": "https://somiibo-91d13.firebaseio.com",
            "projectId": "somiibo-91d13",
            "storageBucket": "somiibo-91d13.appspot.com",
            "messagingSenderId": "605660972329",
            "appId": "1:605660972329:web:4860b3b7afb8591f",
            "measurementId": "G-PM3ZKCHLMS"
          }
        },
        "appCheck": {
          "enabled": false,
          "config": {
            "siteKey": "6LddIDsoAAAAAIlymzmJuwr9Ktz7vS7e0LLxY4kd"
          }
        }
      },
      "cookieConsent": {
        "enabled": true,
        "config": {
          "palette": {
            "popup": {
              "background": "#1fb7f2",
              "text": "#fff"
            },
            "button": {
              "background": "#fff",
              "text": "#1fb7f2"
            }
          }
        }
      },
      "chatsy": {
        "enabled": true,
        "config": {
          "accountId": "98WVIFYdGrUbjL4jgyXLPe8ICFt1",
          "chatId": "NcEywcnfLMs1cB",
          "settings": {
            "openChatButton": {
              "background": "#1fb7f2",
              "text": "#fff"
            }
          }
        }
      },
      "sentry": {
        "enabled": true,
        "config": {
          "dsn": "",
          "release": "ultimate-jekyll-website",
          "replaysSessionSampleRate": 0.01,
          "replaysOnErrorSampleRate": 0.01
        }
      },
      "exitPopup": {
        "enabled": true,
        "config": {
          "timeout": "1000 * 60 * 60 * 4",
          "title": "Special Offer!",
          "message": "Get 15% off your purchase of our Premium plans.",
          "okButton": {
            "text": "Claim 15% Discount",
            "link": "/pricing"
          }
        }
      },
      "lazyLoading": {
        "enabled": true,
        "config": {
          "rootMargin": "50px 0px",
          "threshold": 0.01
        }
      },
      "socialSharing": {
        "enabled": false,
        "config": {
          "defaultPlatforms": [
            "facebook",
            "twitter",
            "linkedin",
            "pinterest",
            "reddit",
            "email",
            "copy"
          ],
          "buttonClass": "",
          "openInNewWindow": true
        }
      },
      "pushNotifications": {
        "enabled": true,
        "config": {
          "autoRequest": "1000 * 60"
        }
      },
      "validRedirectHosts": []
    },
    "socials": {
      "facebook": null,
      "twitter": null,
      "linkedin": null,
      "youtube": null,
      "instagram": null,
      "tumblr": null,
      "slack": null,
      "discord": null,
      "github": null,
      "dev": null,
      "tiktok": null,
      "twitch": null,
      "soundcloud": null,
      "spotify": null,
      "mixcloud": null
    },
    "tracking": {
      "google-analytics": "G-QGQX1TLWZC",
      "meta-pixel": null,
      "tiktok-pixel": null
    },
    "favicon": {
      "path": "https://cdn.itwcreativeworks.com/assets/somiibo/images/favicon",
      "safari-pinned-tab": "#5bbad5",
      "msapp-tile-color": "#da532c",
      "theme-color": "#ffffff"
    },
    "cloudflare": {
      "zone": "44df437b80ddd43477258ecbc5dbfed5"
    },
    "download": {
      "mac": {
        "universal": ""
      },
      "windows": {
        "universal": ""
      },
      "linux": {
        "debian": "",
        "snap": ""
      },
      "ios": {
        "universal": ""
      },
      "android": {
        "universal": ""
      }
    },
    "extension": ".json",
    "manifest": {
      "name": "Web Traffic Bot",
      "short-name": "Web Traffic Bot",
      "theme-color": "#ffffff",
      "background-color": "#ffffff",
      "display": "standalone",
      "start-url": "/?source=pwa",
      "scope": "/",
      "orientation": "portrait"
    },
    "translation": {
      "enabled": false,
      "default": "en",
      "languages": [
        "zh",
        "es",
        "hi",
        "ar",
        "pt",
        "ru",
        "ja",
        "de",
        "fr",
        "ko",
        "ur",
        "id",
        "bn",
        "tl",
        "vi",
        "it"
      ]
    },
    "pagination": {
      "enabled": true,
      "per_page": 6,
      "offset": 0,
      "limit": 0,
      "permalink": "/page/:num.html",
      "title": ":title - page :num",
      "sort_field": "date",
      "sort_reverse": true
    },
    "uj": {
      "cache_breaker": "1761965552328",
      "environment": "production",
      "date": {
        "year": 2025,
        "month": 11,
        "day": 1
      },
      "placeholder": {
        "src": "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
      }
    },
    "comments": {
      "gisqus": {
        "repo": "Distalk/giscus",
        "repo-id": "R_kgDOJ-chGA",
        "category": "Giscus",
        "category-id": "DIC_kwDOJ-chGM4CYD4O"
      }
    },
    "advertising": {
      "google-adsense": {
        "client": "ca-pub-7372939085773564",
        "display-slot": "9023354299",
        "in-article-slot": "7329067043",
        "in-feed-slot": "5986127415",
        "multiplex-slot": "8772072856"
      },
      "cse": {
        "site-id": "5ad46a4c7412db0ae"
      }
    },
    "characters": {
      "asterisk": "*",
      "brace-left": "{",
      "brace-right": "}",
      "brace-both": "{}",
      "bracket-left": "[",
      "bracket-right": "]",
      "bracket-both": "[]",
      "copyright": "©",
      "underscore": "_"
    },
    "config": [
      "./node_modules/ultimate-jekyll-manager/dist/defaults/src/_config.yml",
      "./node_modules/ultimate-jekyll-manager/dist/config/_config_default.yml",
      "dist/_config.yml"
    ],
    "profile": true,
    "serving": false,
    "sitemap": {
      "include": false
    },
    "random_id": 72,
    "canonical": {
      "url": "https://webtrafficbot.com/config.json",
      "path": "/config.json"
    }
  },
  "npm-build": "2025-11-01T02:52:38.906Z"
};

  // Assign to various global scopes for compatibility
  if (typeof self !== 'undefined') self.UJ_BUILD_JSON = config;
  if (typeof window !== 'undefined') window.UJ_BUILD_JSON = config;
  if (typeof globalThis !== 'undefined') globalThis.UJ_BUILD_JSON = config;
})();