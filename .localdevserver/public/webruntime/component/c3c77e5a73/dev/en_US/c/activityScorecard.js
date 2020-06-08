Webruntime.moduleRegistry.define('c/activityScorecard', ['lwc', '@salesforce/i18n/locale', 'lightning/configProvider', '@salesforce/i18n/dir', '@salesforce/i18n/number.numberFormat', '@salesforce/i18n/number.percentFormat', '@salesforce/i18n/number.currencyFormat', '@salesforce/i18n/currency', '@salesforce/i18n/dateTime.mediumDateFormat', '@salesforce/i18n/dateTime.mediumTimeFormat'], function (lwc, locale, configProvider, dir, numberFormat, percentFormat, currencyFormat, currency, mediumDateFormat, mediumTimeFormat) { 'use strict';

  locale = locale && locale.hasOwnProperty('default') ? locale['default'] : locale;
  dir = dir && dir.hasOwnProperty('default') ? dir['default'] : dir;
  numberFormat = numberFormat && numberFormat.hasOwnProperty('default') ? numberFormat['default'] : numberFormat;
  percentFormat = percentFormat && percentFormat.hasOwnProperty('default') ? percentFormat['default'] : percentFormat;
  currencyFormat = currencyFormat && currencyFormat.hasOwnProperty('default') ? currencyFormat['default'] : currencyFormat;
  currency = currency && currency.hasOwnProperty('default') ? currency['default'] : currency;
  mediumDateFormat = mediumDateFormat && mediumDateFormat.hasOwnProperty('default') ? mediumDateFormat['default'] : mediumDateFormat;
  mediumTimeFormat = mediumTimeFormat && mediumTimeFormat.hasOwnProperty('default') ? mediumTimeFormat['default'] : mediumTimeFormat;

  function stylesheet(hostSelector, shadowSelector, nativeShadow) {
    return "h1.cardTitle" + shadowSelector + "{font-weight: 700;}\n.kpi-positive" + shadowSelector + " {font-size: xx-large;color: #028048;}\n.kpi-negative" + shadowSelector + " {font-size: xx-large;color: #c23934;}\n.card" + shadowSelector + " {border: 1px solid rgb(216, 221, 230);border-radius: 4px;}\n.icon" + shadowSelector + " {margin-top: 3px;}\n.text-bold" + shadowSelector + "{font-weight: 700;}\n";
  }
  var _implicitStylesheets = [stylesheet];

  function stylesheet$1(hostSelector, shadowSelector, nativeShadow) {
    return "_:-ms-lang(x)" + shadowSelector + ", svg" + shadowSelector + " {pointer-events: none;}\n";
  }
  var _implicitStylesheets$1 = [stylesheet$1];

  function tmpl($api, $cmp, $slotset, $ctx) {
    const {
      fid: api_scoped_frag_id,
      h: api_element
    } = $api;
    return [api_element("svg", {
      className: $cmp.computedClass,
      attrs: {
        "focusable": "false",
        "data-key": $cmp.name,
        "aria-hidden": "true"
      },
      key: 2
    }, [api_element("use", {
      attrs: {
        "xlink:href": lwc.sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", api_scoped_frag_id($cmp.href))
      },
      key: 3
    }, [])])];
  }

  var _tmpl = lwc.registerTemplate(tmpl);
  tmpl.stylesheets = [];

  if (_implicitStylesheets$1) {
    tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets$1);
  }
  tmpl.stylesheetTokens = {
    hostAttribute: "lightning-primitiveIcon_primitiveIcon-host",
    shadowAttribute: "lightning-primitiveIcon_primitiveIcon"
  };

  const proto = {
    add(className) {
      if (typeof className === 'string') {
        this[className] = true;
      } else {
        Object.assign(this, className);
      }

      return this;
    },

    invert() {
      Object.keys(this).forEach(key => {
        this[key] = !this[key];
      });
      return this;
    },

    toString() {
      return Object.keys(this).filter(key => this[key]).join(' ');
    }

  };
  function classSet(config) {
    if (typeof config === 'string') {
      const key = config;
      config = {};
      config[key] = true;
    }

    return Object.assign(Object.create(proto), config);
  }

  /**
   * Takes label strings with placeholder params (`{0}`) and updates the label with given `args`
   * @param {string} str - any label string requiring injections of other strings/params (e.g., 'foo {0}')
   * @param  {string|array} arguments - string(s) to be injected into the `string` param
   * @returns {string} fully replaced string, e.g., '{0} is a {1}' -> 'Hal Jordan is a Green Lantern'
   */

  // NOTE: lightning-utils is a public library. adding new utils here means we

  /**
   * Create a deep copy of an object or array
   * @param {object|array} obj - item to be copied
   * @returns {object|array} copy of the item
   */

  /**
   * Utility function to generate an unique guid.
   * used on state objects to provide a performance aid when iterating
   * through the items and marking them for render
   * @returns {String} an unique string ID
   */

  function classListMutation(classList, config) {
    Object.keys(config).forEach(key => {
      if (typeof key === 'string' && key.length) {
        if (config[key]) {
          classList.add(key);
        } else {
          classList.remove(key);
        }
      }
    });
  }

  /**
  A string normalization utility for attributes.
  @param {String} value - The value to normalize.
  @param {Object} config - The optional configuration object.
  @param {String} [config.fallbackValue] - The optional fallback value to use if the given value is not provided or invalid. Defaults to an empty string.
  @param {Array} [config.validValues] - An optional array of valid values. Assumes all input is valid if not provided.
  @return {String} - The normalized value.
  **/
  function normalizeString(value, config = {}) {
    const {
      fallbackValue = '',
      validValues,
      toLowerCase = true
    } = config;
    let normalized = typeof value === 'string' && value.trim() || '';
    normalized = toLowerCase ? normalized.toLowerCase() : normalized;

    if (validValues && validValues.indexOf(normalized) === -1) {
      normalized = fallbackValue;
    }

    return normalized;
  }
  /**
  A boolean normalization utility for attributes.
  @param {Any} value - The value to normalize.
  @return {Boolean} - The normalized value.
  **/

  function normalizeBoolean(value) {
    return typeof value === 'string' || !!value;
  }

  const isIE11 = isIE11Test(navigator);
  const isChrome = isChromeTest(navigator);
  const isSafari = isSafariTest(window.safari); // The following functions are for tests only

  function isIE11Test(navigator) {
    // https://stackoverflow.com/questions/17447373/how-can-i-target-only-internet-explorer-11-with-javascript
    return /Trident.*rv[ :]*11\./.test(navigator.userAgent);
  }
  function isChromeTest(navigator) {
    // https://stackoverflow.com/questions/4565112/javascript-how-to-find-out-if-the-user-browser-is-chrome
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  }
  function isSafariTest(safari) {
    // via https://stackoverflow.com/a/9851769
    return safari && safari.pushNotification && safari.pushNotification.toString() === '[object SafariRemoteNotification]';
  }

  /**
   * Set an attribute on an element, if it's a normal element
   * it will use setAttribute, if it's an LWC component
   * it will use the public property
   *
   * @param {HTMLElement} element The element to act on
   * @param {String} attribute the attribute to set
   * @param {Any} value the value to set
   */

  // hide panel on scroll

  var _tmpl$1 = void 0;

  // Taken from https://github.com/jonathantneal/svg4everybody/pull/139
  // Remove this iframe-in-edge check once the following is resolved https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8323875/
  const isEdgeUA = /\bEdge\/.(\d+)\b/.test(navigator.userAgent);
  const inIframe = window.top !== window.self;
  const isIframeInEdge = isEdgeUA && inIframe;
  var isIframeInEdge$1 = lwc.registerComponent(isIframeInEdge, {
    tmpl: _tmpl$1
  });

  // Taken from https://git.soma.salesforce.com/aura/lightning-global/blob/999dc35f948246181510df6e56f45ad4955032c2/src/main/components/lightning/SVGLibrary/stamper.js#L38-L60
  function fetchSvg(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.send();

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.responseText);
          } else {
            reject(xhr);
          }
        }
      };
    });
  }

  // Which looks like it was inspired by https://github.com/jonathantneal/svg4everybody/blob/377d27208fcad3671ed466e9511556cb9c8b5bd8/lib/svg4everybody.js#L92-L107
  // Modify at your own risk!

  const newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/;
  const webkitUA = /\bAppleWebKit\/(\d+)\b/;
  const olderEdgeUA = /\bEdge\/12\.(\d+)\b/;
  const isIE = newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537;
  const supportsSvg = !isIE && !isIframeInEdge$1;
  var supportsSvg$1 = lwc.registerComponent(supportsSvg, {
    tmpl: _tmpl$1
  });

  /**
  This polyfill injects SVG sprites into the document for clients that don't
  fully support SVG. We do this globally at the document level for performance
  reasons. This causes us to lose namespacing of IDs across sprites. For example,
  if both #image from utility sprite and #image from doctype sprite need to be
  rendered on the page, both end up as #image from the doctype sprite (last one
  wins). SLDS cannot change their image IDs due to backwards-compatibility
  reasons so we take care of this issue at runtime by adding namespacing as we
  polyfill SVG elements.

  For example, given "/assets/icons/action-sprite/svg/symbols.svg#approval", we
  replace the "#approval" id with "#${namespace}-approval" and a similar
  operation is done on the corresponding symbol element.
  **/
  const svgTagName = /svg/i;

  const isSvgElement = el => el && svgTagName.test(el.nodeName);

  const requestCache = {};
  const symbolEls = {};
  const svgFragments = {};
  const spritesContainerId = 'slds-svg-sprites';
  let spritesEl;
  function polyfill(el) {
    if (!supportsSvg$1 && isSvgElement(el)) {
      if (!spritesEl) {
        spritesEl = document.createElement('svg');
        spritesEl.xmlns = 'http://www.w3.org/2000/svg';
        spritesEl['xmlns:xlink'] = 'http://www.w3.org/1999/xlink';
        spritesEl.style.display = 'none';
        spritesEl.id = spritesContainerId;
        document.body.insertBefore(spritesEl, document.body.childNodes[0]);
      }

      Array.from(el.getElementsByTagName('use')).forEach(use => {
        // We access the href differently in raptor and in aura, probably
        // due to difference in the way the svg is constructed.
        const src = use.getAttribute('xlink:href') || use.getAttribute('href');

        if (src) {
          // "/assets/icons/action-sprite/svg/symbols.svg#approval" =>
          // ["/assets/icons/action-sprite/svg/symbols.svg", "approval"]
          const parts = src.split('#');
          const url = parts[0];
          const id = parts[1];
          const namespace = url.replace(/[^\w]/g, '-');
          const href = `#${namespace}-${id}`;

          if (url.length) {
            // set the HREF value to no longer be an external reference
            if (use.getAttribute('xlink:href')) {
              use.setAttribute('xlink:href', href);
            } else {
              use.setAttribute('href', href);
            } // only insert SVG content if it hasn't already been retrieved


            if (!requestCache[url]) {
              requestCache[url] = fetchSvg(url);
            }

            requestCache[url].then(svgContent => {
              // create a document fragment from the svgContent returned (is parsed by HTML parser)
              if (!svgFragments[url]) {
                const svgFragment = document.createRange().createContextualFragment(svgContent);
                svgFragments[url] = svgFragment;
              }

              if (!symbolEls[href]) {
                const svgFragment = svgFragments[url];
                const symbolEl = svgFragment.querySelector(`#${id}`);
                symbolEls[href] = true;
                symbolEl.id = `${namespace}-${id}`;
                spritesEl.appendChild(symbolEl);
              }
            });
          }
        }
      });
    }
  }

  const validNameRe = /^([a-zA-Z]+):([a-zA-Z]\w*)$/;
  const underscoreRe = /_/g;
  let pathPrefix;
  const tokenNameMap = Object.assign(Object.create(null), {
    action: 'lightning.actionSprite',
    custom: 'lightning.customSprite',
    doctype: 'lightning.doctypeSprite',
    standard: 'lightning.standardSprite',
    utility: 'lightning.utilitySprite'
  });
  const tokenNameMapRtl = Object.assign(Object.create(null), {
    action: 'lightning.actionSpriteRtl',
    custom: 'lightning.customSpriteRtl',
    doctype: 'lightning.doctypeSpriteRtl',
    standard: 'lightning.standardSpriteRtl',
    utility: 'lightning.utilitySpriteRtl'
  });
  const defaultTokenValueMap = Object.assign(Object.create(null), {
    'lightning.actionSprite': '/assets/icons/action-sprite/svg/symbols.svg',
    'lightning.actionSpriteRtl': '/assets/icons/action-sprite/svg/symbols.svg',
    'lightning.customSprite': '/assets/icons/custom-sprite/svg/symbols.svg',
    'lightning.customSpriteRtl': '/assets/icons/custom-sprite/svg/symbols.svg',
    'lightning.doctypeSprite': '/assets/icons/doctype-sprite/svg/symbols.svg',
    'lightning.doctypeSpriteRtl': '/assets/icons/doctype-sprite/svg/symbols.svg',
    'lightning.standardSprite': '/assets/icons/standard-sprite/svg/symbols.svg',
    'lightning.standardSpriteRtl': '/assets/icons/standard-sprite/svg/symbols.svg',
    'lightning.utilitySprite': '/assets/icons/utility-sprite/svg/symbols.svg',
    'lightning.utilitySpriteRtl': '/assets/icons/utility-sprite/svg/symbols.svg'
  });

  const getDefaultBaseIconPath = (category, nameMap) => defaultTokenValueMap[nameMap[category]];

  const getBaseIconPath = (category, direction) => {
    const nameMap = direction === 'rtl' ? tokenNameMapRtl : tokenNameMap;
    return configProvider.getToken(nameMap[category]) || getDefaultBaseIconPath(category, nameMap);
  };

  const getMatchAtIndex = index => iconName => {
    const result = validNameRe.exec(iconName);
    return result ? result[index] : '';
  };

  const getCategory = getMatchAtIndex(1);
  const getName = getMatchAtIndex(2);
  const isValidName = iconName => validNameRe.test(iconName);
  const getIconPath = (iconName, direction = 'ltr') => {
    pathPrefix = pathPrefix !== undefined ? pathPrefix : configProvider.getPathPrefix();

    if (isValidName(iconName)) {
      const baseIconPath = getBaseIconPath(getCategory(iconName), direction);

      if (baseIconPath) {
        // This check was introduced the following MS-Edge issue:
        // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/9655192/
        // If and when this get fixed, we can safely remove this block of code.
        if (isIframeInEdge$1) {
          // protocol => 'https:' or 'http:'
          // host => hostname + port
          const origin = `${window.location.protocol}//${window.location.host}`;
          return `${origin}${pathPrefix}${baseIconPath}#${getName(iconName)}`;
        }

        return `${pathPrefix}${baseIconPath}#${getName(iconName)}`;
      }
    }

    return '';
  };
  const computeSldsClass = iconName => {
    if (isValidName(iconName)) {
      const category = getCategory(iconName);
      const name = getName(iconName).replace(underscoreRe, '-');
      return `slds-icon-${category}-${name}`;
    }

    return '';
  };

  class LightningPrimitiveIcon extends lwc.LightningElement {
    constructor(...args) {
      super(...args);
      this.iconName = void 0;
      this.src = void 0;
      this.svgClass = void 0;
      this.size = 'medium';
      this.variant = void 0;
      this.privateIconSvgTemplates = configProvider.getIconSvgTemplates();
    }

    get inlineSvgProvided() {
      return !!this.privateIconSvgTemplates;
    }

    renderedCallback() {
      if (this.iconName !== this.prevIconName && !this.inlineSvgProvided) {
        this.prevIconName = this.iconName;
        const svgElement = this.template.querySelector('svg');
        polyfill(svgElement);
      }
    }

    get href() {
      return this.src || getIconPath(this.iconName, dir);
    }

    get name() {
      return getName(this.iconName);
    }

    get normalizedSize() {
      return normalizeString(this.size, {
        fallbackValue: 'medium',
        validValues: ['xx-small', 'x-small', 'small', 'medium', 'large']
      });
    }

    get normalizedVariant() {
      // NOTE: Leaving a note here because I just wasted a bunch of time
      // investigating why both 'bare' and 'inverse' are supported in
      // lightning-primitive-icon. lightning-icon also has a deprecated
      // 'bare', but that one is synonymous to 'inverse'. This 'bare' means
      // that no classes should be applied. So this component needs to
      // support both 'bare' and 'inverse' while lightning-icon only needs to
      // support 'inverse'.
      return normalizeString(this.variant, {
        fallbackValue: '',
        validValues: ['bare', 'error', 'inverse', 'warning', 'success']
      });
    }

    get computedClass() {
      const {
        normalizedSize,
        normalizedVariant
      } = this;
      const classes = classSet(this.svgClass);

      if (normalizedVariant !== 'bare') {
        classes.add('slds-icon');
      }

      switch (normalizedVariant) {
        case 'error':
          classes.add('slds-icon-text-error');
          break;

        case 'warning':
          classes.add('slds-icon-text-warning');
          break;

        case 'success':
          classes.add('slds-icon-text-success');
          break;

        case 'inverse':
        case 'bare':
          break;

        default:
          // if custom icon is set, we don't want to set
          // the text-default class
          if (!this.src) {
            classes.add('slds-icon-text-default');
          }

      }

      if (normalizedSize !== 'medium') {
        classes.add(`slds-icon_${normalizedSize}`);
      }

      return classes.toString();
    }

    resolveTemplate() {
      const name = this.iconName;

      if (isValidName(name)) {
        const [spriteName, iconName] = name.split(':');
        const template = this.privateIconSvgTemplates[`${spriteName}_${iconName}`];

        if (template) {
          return template;
        }
      }

      return _tmpl;
    }

    render() {
      if (this.inlineSvgProvided) {
        return this.resolveTemplate();
      }

      return _tmpl;
    }

  }

  lwc.registerDecorators(LightningPrimitiveIcon, {
    publicProps: {
      iconName: {
        config: 0
      },
      src: {
        config: 0
      },
      svgClass: {
        config: 0
      },
      size: {
        config: 0
      },
      variant: {
        config: 0
      }
    }
  });

  var _lightningPrimitiveIcon = lwc.registerComponent(LightningPrimitiveIcon, {
    tmpl: _tmpl
  });

  function tmpl$1($api, $cmp, $slotset, $ctx) {
    const {
      c: api_custom_element,
      d: api_dynamic,
      h: api_element
    } = $api;
    return [api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, {
      props: {
        "iconName": $cmp.state.iconName,
        "size": $cmp.size,
        "variant": $cmp.variant,
        "src": $cmp.state.src
      },
      key: 2
    }, []), $cmp.alternativeText ? api_element("span", {
      classMap: {
        "slds-assistive-text": true
      },
      key: 3
    }, [api_dynamic($cmp.alternativeText)]) : null];
  }

  var _tmpl$2 = lwc.registerTemplate(tmpl$1);
  tmpl$1.stylesheets = [];
  tmpl$1.stylesheetTokens = {
    hostAttribute: "lightning-icon_icon-host",
    shadowAttribute: "lightning-icon_icon"
  };

  /**
   * Represents a visual element that provides context and enhances usability.
   */

  class LightningIcon extends lwc.LightningElement {
    constructor(...args) {
      super(...args);
      this.state = {};
      this.alternativeText = void 0;
    }

    /**
     * A uri path to a custom svg sprite, including the name of the resouce,
     * for example: /assets/icons/standard-sprite/svg/test.svg#icon-heart
     * @type {string}
     */
    get src() {
      return this.privateSrc;
    }

    set src(value) {
      this.privateSrc = value; // if value is not present, then we set the state back
      // to the original iconName that was passed
      // this might happen if the user sets a custom icon, then
      // decides to revert back to SLDS by removing the src attribute

      if (!value) {
        this.state.iconName = this.iconName;
        this.classList.remove('slds-icon-standard-default');
      } // if isIE11 and the src is set
      // we'd like to show the 'standard:default' icon instead
      // for performance reasons.


      if (value && isIE11) {
        this.setDefault();
        return;
      }

      this.state.src = value;
    }
    /**
     * The Lightning Design System name of the icon.
     * Names are written in the format 'utility:down' where 'utility' is the category,
     * and 'down' is the specific icon to be displayed.
     * @type {string}
     * @required
     */


    get iconName() {
      return this.privateIconName;
    }

    set iconName(value) {
      this.privateIconName = value; // if src is set, we don't need to validate
      // iconName

      if (this.src) {
        return;
      }

      if (isValidName(value)) {
        const isAction = getCategory(value) === 'action'; // update classlist only if new iconName is different than state.iconName
        // otherwise classListMutation receives class:true and class: false and removes slds class

        if (value !== this.state.iconName) {
          classListMutation(this.classList, {
            'slds-icon_container_circle': isAction,
            [computeSldsClass(value)]: true,
            [computeSldsClass(this.state.iconName)]: false
          });
        }

        this.state.iconName = value;
      } else {
        console.warn(`<lightning-icon> Invalid icon name ${value}`); // eslint-disable-line no-console
        // Invalid icon names should render a blank icon. Remove any
        // classes that might have been previously added.

        classListMutation(this.classList, {
          'slds-icon_container_circle': false,
          [computeSldsClass(this.state.iconName)]: false
        });
        this.state.iconName = undefined;
      }
    }
    /**
     * The size of the icon. Options include xx-small, x-small, small, medium, or large.
     * The default is medium.
     * @type {string}
     * @default medium
     */


    get size() {
      return normalizeString(this.state.size, {
        fallbackValue: 'medium',
        validValues: ['xx-small', 'x-small', 'small', 'medium', 'large']
      });
    }

    set size(value) {
      this.state.size = value;
    }
    /**
     * The variant changes the appearance of a utility icon.
     * Accepted variants include inverse, success, warning, and error.
     * Use the inverse variant to implement a white fill in utility icons on dark backgrounds.
     * @type {string}
     */


    get variant() {
      return normalizeVariant(this.state.variant, this.state.iconName);
    }

    set variant(value) {
      this.state.variant = value;
    }

    connectedCallback() {
      this.classList.add('slds-icon_container');
    }

    setDefault() {
      this.state.src = undefined;
      this.state.iconName = 'standard:default';
      this.classList.add('slds-icon-standard-default');
    }

  }

  lwc.registerDecorators(LightningIcon, {
    publicProps: {
      alternativeText: {
        config: 0
      },
      src: {
        config: 3
      },
      iconName: {
        config: 3
      },
      size: {
        config: 3
      },
      variant: {
        config: 3
      }
    },
    track: {
      state: 1
    }
  });

  var _lightningIcon = lwc.registerComponent(LightningIcon, {
    tmpl: _tmpl$2
  });

  function normalizeVariant(variant, iconName) {
    // Unfortunately, the `bare` variant was implemented to do what the
    // `inverse` variant should have done. Keep this logic for as long as
    // we support the `bare` variant.
    if (variant === 'bare') {
      // TODO: Deprecation warning using strippable assertion
      variant = 'inverse';
    }

    if (getCategory(iconName) === 'utility') {
      return normalizeString(variant, {
        fallbackValue: '',
        validValues: ['error', 'inverse', 'warning', 'success']
      });
    }

    return 'inverse';
  }

  function tmpl$2($api, $cmp, $slotset, $ctx) {
    const {
      c: api_custom_element,
      h: api_element,
      d: api_dynamic,
      s: api_slot
    } = $api;
    return [api_element("article", {
      className: $cmp.computedWrapperClassNames,
      key: 2
    }, [api_element("header", {
      classMap: {
        "slds-card__header": true,
        "slds-grid": true
      },
      key: 3
    }, [api_element("div", {
      classMap: {
        "slds-media": true,
        "slds-media_center": true,
        "slds-has-flexi-truncate": true
      },
      key: 4
    }, [$cmp.hasIcon ? api_element("div", {
      classMap: {
        "slds-media__figure": true
      },
      key: 6
    }, [api_custom_element("lightning-icon", _lightningIcon, {
      props: {
        "iconName": $cmp.iconName,
        "size": "small"
      },
      key: 7
    }, [])]) : null, api_element("div", {
      classMap: {
        "slds-media__body": true,
        "slds-truncate": true
      },
      key: 8
    }, [api_element("h2", {
      key: 9
    }, [api_element("span", {
      classMap: {
        "slds-text-heading_small": true
      },
      key: 10
    }, [$cmp.hasStringTitle ? api_dynamic($cmp.title) : null, !$cmp.hasStringTitle ? api_slot("title", {
      attrs: {
        "name": "title"
      },
      key: 13
    }, [], $slotset) : null])])])]), api_element("div", {
      classMap: {
        "slds-no-flex": true
      },
      key: 14
    }, [api_slot("actions", {
      attrs: {
        "name": "actions"
      },
      key: 15
    }, [], $slotset)])]), api_element("div", {
      classMap: {
        "slds-card__body": true
      },
      key: 16
    }, [api_slot("", {
      key: 17
    }, [], $slotset)]), $cmp.showFooter ? api_element("div", {
      classMap: {
        "slds-card__footer": true
      },
      key: 19
    }, [api_slot("footer", {
      attrs: {
        "name": "footer"
      },
      key: 20
    }, [], $slotset)]) : null])];
  }

  var _tmpl$3 = lwc.registerTemplate(tmpl$2);
  tmpl$2.slots = ["title", "actions", "", "footer"];
  tmpl$2.stylesheets = [];
  tmpl$2.stylesheetTokens = {
    hostAttribute: "lightning-card_card-host",
    shadowAttribute: "lightning-card_card"
  };

  function isNarrow(variant) {
    return typeof variant === 'string' && variant.toLowerCase() === 'narrow';
  }
  function isBase(variant) {
    return typeof variant === 'string' && variant.toLowerCase() === 'base';
  }

  /**
   * Cards apply a container around a related grouping of information.
   * @slot title Placeholder for the card title, which can be represented by a header or h1 element.
   * The title is displayed at the top of the card, to the right of the icon.
   * Alternatively, use the title attribute if you don't need to pass in extra markup in your title.
   * @slot actions Placeholder for actionable components, such as lightning-button or lightning-button-menu.
   * Actions are displayed on the top right corner of the card next to the title.
   * @slot footer Placeholder for the card footer, which is displayed at the bottom of the card and is usually optional.
   * For example, the footer can display a "View All" link to navigate to a list view.
   * @slot default Placeholder for your content in the card body.
   */

  class LightningCard extends lwc.LightningElement {
    constructor(...args) {
      super(...args);
      this.title = void 0;
      this.iconName = void 0;
      this.privateVariant = 'base';
      this.showFooter = true;
    }

    set variant(value) {
      if (isNarrow(value) || isBase(value)) {
        this.privateVariant = value;
      } else {
        this.privateVariant = 'base';
      }
    }
    /**
     * The variant changes the appearance of the card.
     * Accepted variants include base or narrow.
     * This value defaults to base.
     *
     * @type {string}
     * @default base
     */


    get variant() {
      return this.privateVariant;
    }

    renderedCallback() {
      // initial check for no items
      if (this.footerSlot) {
        this.showFooter = this.footerSlot.assignedElements().length !== 0;
      }
    }

    get footerSlot() {
      return this.template.querySelector('slot[name=footer]');
    }

    get computedWrapperClassNames() {
      return classSet('slds-card').add({
        'slds-card_narrow': isNarrow(this.privateVariant)
      });
    }

    get hasIcon() {
      return !!this.iconName;
    }

    get hasStringTitle() {
      return !!this.title;
    }

  }

  lwc.registerDecorators(LightningCard, {
    publicProps: {
      title: {
        config: 0
      },
      iconName: {
        config: 0
      },
      variant: {
        config: 3
      }
    },
    track: {
      privateVariant: 1,
      showFooter: 1
    }
  });

  var _lightningCard = lwc.registerComponent(LightningCard, {
    tmpl: _tmpl$3
  });

  function stylesheet$2(hostSelector, shadowSelector, nativeShadow) {
    return "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {.slds-slot" + shadowSelector + " {display: flex;}\n}";
  }
  var _implicitStylesheets$2 = [stylesheet$2];

  function tmpl$3($api, $cmp, $slotset, $ctx) {
    const {
      s: api_slot
    } = $api;
    return [api_slot("", {
      classMap: {
        "slds-slot": true
      },
      key: 2
    }, [], $slotset)];
  }

  var _tmpl$4 = lwc.registerTemplate(tmpl$3);
  tmpl$3.slots = [""];
  tmpl$3.stylesheets = [];

  if (_implicitStylesheets$2) {
    tmpl$3.stylesheets.push.apply(tmpl$3.stylesheets, _implicitStylesheets$2);
  }
  tmpl$3.stylesheetTokens = {
    hostAttribute: "lightning-layout_layout-host",
    shadowAttribute: "lightning-layout_layout"
  };

  const HALIN_CLASS = {
    center: 'slds-grid_align-center',
    space: 'slds-grid_align-space',
    spread: 'slds-grid_align-spread',
    end: 'slds-grid_align-end'
  };
  const VALIN_CLASS = {
    start: 'slds-grid_vertical-align-start',
    center: 'slds-grid_vertical-align-center',
    end: 'slds-grid_vertical-align-end',
    stretch: 'slds-grid_vertical-stretch'
  };
  const BOUNDARY_CLASS = {
    small: 'slds-grid_pull-padded',
    medium: 'slds-grid_pull-padded-medium',
    large: 'slds-grid_pull-padded-large'
  };
  const VERTICAL_ALIGN = Object.keys(VALIN_CLASS);
  const BOUNDARY = Object.keys(BOUNDARY_CLASS);
  const HORIZONTAL_ALIGN = Object.keys(HALIN_CLASS);
  const ROWS_CLASS = 'slds-wrap';
  const GRID_CLASS = 'slds-grid';
  function normalizeParam(value, valid, fallback) {
    value = value ? value.toLowerCase() : ' ';
    return normalizeString(value, {
      fallbackValue: fallback || ' ',
      validValues: valid || []
    });
  }
  function computeLayoutClass(hAlign, vAlign, boundary, multiRows) {
    const computedClass = classSet(GRID_CLASS);

    if (hAlign !== ' ' && HALIN_CLASS[hAlign]) {
      computedClass.add(HALIN_CLASS[hAlign]);
    }

    if (vAlign !== ' ' && VALIN_CLASS[vAlign]) {
      computedClass.add(VALIN_CLASS[vAlign]);
    }

    if (boundary !== ' ' && BOUNDARY_CLASS[boundary]) {
      computedClass.add(BOUNDARY_CLASS[boundary]);
    }

    if (multiRows) {
      computedClass.add(ROWS_CLASS);
    }

    return computedClass;
  }

  /**
   * Represents a responsive grid system for arranging containers on a page.
   */

  class LightningLayout extends lwc.LightningElement {
    constructor(...args) {
      super(...args);
      this._horizontalAlign = void 0;
      this._verticalAlign = void 0;
      this._pullToBoundary = void 0;
      this._multipleRows = void 0;
      this._layoutClass = [];
    }

    /**
     * Determines how to spread the layout items horizontally.
     * The alignment options are center, space, spread, and end.
     * @type {string}
     * @default
     */
    get horizontalAlign() {
      return this._horizontalAlign;
    }

    set horizontalAlign(value) {
      this._horizontalAlign = normalizeParam(value, HORIZONTAL_ALIGN);
      this.updateClassList();
    }

    /**
     * Determines how to align the layout items vertically in the container.
     * The alignment options are start, center, end, and stretch.
     * @type {string}
     * @default
     */
    get verticalAlign() {
      return this._verticalAlign;
    }

    set verticalAlign(value) {
      this._verticalAlign = normalizeParam(value, VERTICAL_ALIGN);
      this.updateClassList();
    }

    /**
     * Pulls layout items to the layout boundaries and corresponds
     * to the padding size on the layout item. Possible values are small, medium, or large.
     * @type {string}
     * @default
     *
     */
    get pullToBoundary() {
      return this._pullToBoundary;
    }

    set pullToBoundary(value) {
      this._pullToBoundary = normalizeParam(value, BOUNDARY);
      this.updateClassList();
    }

    /**
     * If present, layout items wrap to the following line when they exceed the layout width.
     * @type {boolean}
     * @default false
     */
    get multipleRows() {
      return this._multipleRows || false;
    }

    set multipleRows(value) {
      this._multipleRows = normalizeBoolean(value);
      this.updateClassList();
    }

    connectedCallback() {
      this.updateClassList();
    }

    updateClassList() {
      this.classList.remove(...this._layoutClass);
      const config = computeLayoutClass(this.horizontalAlign, this.verticalAlign, this.pullToBoundary, this.multipleRows);
      this._layoutClass = Object.keys(config);
      this.classList.add(...this._layoutClass);
    }

  }

  lwc.registerDecorators(LightningLayout, {
    publicProps: {
      horizontalAlign: {
        config: 3
      },
      verticalAlign: {
        config: 3
      },
      pullToBoundary: {
        config: 3
      },
      multipleRows: {
        config: 3
      }
    },
    track: {
      _horizontalAlign: 1,
      _verticalAlign: 1,
      _pullToBoundary: 1,
      _multipleRows: 1
    }
  });

  var _lightningLayout = lwc.registerComponent(LightningLayout, {
    tmpl: _tmpl$4
  });

  function tmpl$4($api, $cmp, $slotset, $ctx) {
    const {
      s: api_slot
    } = $api;
    return [api_slot("", {
      key: 2
    }, [], $slotset)];
  }

  var _tmpl$5 = lwc.registerTemplate(tmpl$4);
  tmpl$4.slots = [""];
  tmpl$4.stylesheets = [];
  tmpl$4.stylesheetTokens = {
    hostAttribute: "lightning-layoutItem_layoutItem-host",
    shadowAttribute: "lightning-layoutItem_layoutItem"
  };

  const SIZE_MIN = 1;
  const SIZE_MAX = 12;
  const DEFAULT_LAYOUT_SIZE = {
    default: null,
    small: null,
    medium: null,
    large: null
  };
  const PADDING = ['horizontal-small', 'horizontal-medium', 'horizontal-large', 'around-small', 'around-medium', 'around-large'];
  const PADDING_CLASS = {
    'slds-p-right_small': 'horizontal-small',
    'slds-p-left_small': 'horizontal-small',
    'slds-p-right_medium': 'horizontal-medium',
    'slds-p-left_medium': 'horizontal-medium',
    'slds-p-right_large': 'horizontal-large',
    'slds-p-left_large': 'horizontal-large',
    'slds-p-around_small': 'around-small',
    'slds-p-around_medium': 'around-medium',
    'slds-p-around_large': 'around-large'
  };
  const FLEXIBILITY = ['auto', 'shrink', 'no-shrink', 'grow', 'no-grow', 'no-flex'];
  const FLEX_CLASS = {
    'slds-col': 'auto',
    'slds-grow': 'grow',
    'slds-shrink': 'shrink',
    'slds-grow-none': 'no-grow',
    'slds-shrink-none': 'no-shrink',
    'slds-no-flex': 'no-flex'
  };
  const SIZE_CLASS = {
    default: 'slds-size_',
    small: 'slds-small-size_',
    medium: 'slds-medium-size_',
    large: 'slds-large-size_'
  };
  const DIRECTION = ['left', 'top', 'right', 'bottom'];
  const STYLE_ERROR = {
    FLEX_CONFLICT: 'You cannot have `flexibility` value to be set to `auto` and `no-flex` together for <lightning-layout-item> component',
    SIZE_RANGE: 'Invalid `size` attribute for <lightning-layout-item> component. The `size` attribute should be an integer between 1 and 12',
    SMALL_SIZE_RANGE: 'Invalid `smallDeviceSize` attribute for <lightning-layout-item> component. The `smallDeviceSize` attribute should be an integer between 1 and 12',
    MEDIUM_SIZE_RANGE: 'Invalid `mediumDeviceSize` attribute for <lightning-layout-item> component. The `mediumDeviceSize` attribute should be an integer between 1 and 12',
    LARGE_SIZE_RANGE: 'Invalid `largeDeviceSize` attribute for <lightning-layout-item> component. The `largeDeviceSize` attribute should be an integer between 1 and 12',
    SIZE_REQUIRED: 'You cannot have device specific size attributes for <lightning-layout-item> component without specifying the `size` attribute'
  };

  function hasConflict(value) {
    return value.some(item => item === 'auto') && value.some(item => item === 'no-flex');
  }

  function toArray(value) {
    if (Array.isArray(value)) {
      return value;
    } else if (typeof value === 'string') {
      value = value.split(',');
      return value.map(item => item.trim());
    }

    return [value];
  }

  function normalizeDirection(value, fallback) {
    value = value ? value.toLowerCase() : ' ';
    return normalizeString(value, {
      fallbackValue: fallback || '',
      validValues: DIRECTION
    });
  }
  function normalizePadding(value) {
    value = value ? value.toLowerCase() : ' ';
    return normalizeString(value, {
      fallbackValue: ' ',
      validValues: PADDING
    });
  }
  function normalizeFlexibility(value) {
    value = toArray(value);

    if (hasConflict(value)) {
      throw new Error(STYLE_ERROR.FLEX_CONFLICT);
    }

    return value.filter(item => FLEXIBILITY.some(allowed => item === allowed));
  }
  function normalizeSize(value) {
    if (value != null) {
      const size = parseFloat(value);
      return isNaN(size) ? null : Math.round(size);
    }

    return value;
  }

  function computePaddingClass(padding, computedClass) {
    computedClass = computedClass || classSet();
    padding = padding || ' ';
    Object.keys(PADDING_CLASS).forEach(key => {
      if (PADDING_CLASS[key].toLowerCase() === padding) {
        computedClass.add(key);
      }
    });
    return computedClass;
  }

  function computeFlexibilityClass(flexibility, computedClass) {
    computedClass = computedClass || classSet();
    flexibility = flexibility || [];
    Object.keys(FLEX_CLASS).forEach(key => {
      if (flexibility.some(flex => flex === FLEX_CLASS[key])) {
        computedClass.add(key);
      }
    });
    return computedClass;
  }

  function computeSizeClass(layoutSize, computedClass) {
    computedClass = computedClass || classSet();
    layoutSize = layoutSize || DEFAULT_LAYOUT_SIZE;
    Object.keys(SIZE_CLASS).forEach(key => {
      const size = layoutSize[key];

      if (size != null && size !== 0) {
        computedClass.add(`${SIZE_CLASS[key]}${size}-of-12`);
      }
    });
    return computedClass;
  }

  function computeBumpClass(direction, computedClass) {
    computedClass = computedClass || classSet();
    direction = direction || '';

    if (direction !== '') {
      computedClass.add(`slds-col_bump-${direction}`);
    }

    return computedClass;
  }

  function computeLayoutClass$1(layoutSize, flexibility, padding, bump) {
    const computedClass = computePaddingClass(padding);
    computeFlexibilityClass(flexibility, computedClass);
    computeSizeClass(layoutSize, computedClass);
    computeBumpClass(bump, computedClass);
    return computedClass;
  }
  function validateSize(size, smallDeviceSize, mediumDeviceSize, largeDeviceSize) {
    if (size != null && !(SIZE_MIN <= size && size <= SIZE_MAX)) {
      throw new Error(STYLE_ERROR.SIZE_RANGE);
    }

    if (smallDeviceSize != null && !(SIZE_MIN <= smallDeviceSize && smallDeviceSize <= SIZE_MAX)) {
      throw new Error(STYLE_ERROR.SMALL_SIZE_RANGE);
    }

    if (mediumDeviceSize != null && !(SIZE_MIN <= mediumDeviceSize && mediumDeviceSize <= SIZE_MAX)) {
      throw new Error(STYLE_ERROR.MEDIUM_SIZE_RANGE);
    }

    if (largeDeviceSize && !(SIZE_MIN <= largeDeviceSize && largeDeviceSize <= SIZE_MAX)) {
      throw new Error(STYLE_ERROR.LARGE_SIZE_RANGE);
    }

    if (size == null && (smallDeviceSize != null || mediumDeviceSize != null || largeDeviceSize != null)) {
      throw new Error(STYLE_ERROR.SIZE_REQUIRED);
    }

    return true;
  }

  /**
   * The basic element in a lightning-layout component.
   * A layout item groups information together to define visual grids, spacing, and sections.
   * @slot default Placeholder for your content in lightning-layout-item.
   */

  class LightningLayoutItem extends lwc.LightningElement {
    constructor(...args) {
      super(...args);
      this._flexibility = void 0;
      this._alignmentBump = void 0;
      this._padding = void 0;
      this._size = void 0;
      this._smallDeviceSize = void 0;
      this._mediumDeviceSize = void 0;
      this._largeDeviceSize = void 0;
      this._layoutClass = [];
    }

    /**
     * Make the item fluid so that it absorbs any extra space in its
     * container or shrinks when there is less space. Allowed values are:
     * auto (columns grow or shrink equally as space allows),
     * shrink (columns shrink equally as space decreases),
     * no-shrink (columns don't shrink as space reduces),
     * grow (columns grow equally as space increases),
     * no-grow (columns don't grow as space increases),
     * no-flex (columns don't grow or shrink as space changes).
     * Use a comma-separated value for multiple options, such as 'auto, no-shrink'.
     * @type {object}
     */
    get flexibility() {
      return this._flexibility;
    }

    set flexibility(value) {
      this._flexibility = normalizeFlexibility(value);
      this.updateClassList();
    }

    /**
     * Specifies a direction to bump the alignment of adjacent layout items. Allowed values are left, top, right, bottom.
     * @type {string}
     */
    get alignmentBump() {
      return this._alignmentBump;
    }

    set alignmentBump(value) {
      this._alignmentBump = normalizeDirection(value);
      this.updateClassList();
    }

    /**
     * Sets padding to either the right and left sides of a container,
     * or all sides of a container. Allowed values are horizontal-small,
     * horizontal-medium, horizontal-large, around-small, around-medium, around-large.
     * @type {string}
     */
    get padding() {
      return this._padding;
    }

    set padding(value) {
      this._padding = normalizePadding(value);
      this.updateClassList();
    }

    /**
     * If the viewport is divided into 12 parts, size indicates the
     * relative space the container occupies. Size is expressed as
     * an integer from 1 through 12. This applies for all device-types.
     * @type {number}
     */
    get size() {
      return this._size;
    }

    set size(value) {
      this._size = normalizeSize(value);
      this.validateSize();
      this.updateClassList();
    }

    /**
     * If the viewport is divided into 12 parts, this attribute indicates
     * the relative space the container occupies on device-types larger than
     * mobile. It is expressed as an integer from 1 through 12.
     * @type {number}
     */
    get smallDeviceSize() {
      return this._smallDeviceSize;
    }

    set smallDeviceSize(value) {
      this._smallDeviceSize = normalizeSize(value);
      this.validateSize();
      this.updateClassList();
    }

    /**
     * If the viewport is divided into 12 parts, this attribute indicates
     * the relative space the container occupies on device-types larger than
     * tablet. It is expressed as an integer from 1 through 12.
     * @type {number}
     */
    get mediumDeviceSize() {
      return this._mediumDeviceSize;
    }

    set mediumDeviceSize(value) {
      this._mediumDeviceSize = normalizeSize(value);
      this.validateSize();
    }

    /**
     * If the viewport is divided into 12 parts, this attribute indicates
     * the relative space the container occupies on device-types larger than
     * desktop. It is expressed as an integer from 1 through 12.
     * @type {number}
     */
    get largeDeviceSize() {
      return this._largeDeviceSize;
    }

    set largeDeviceSize(value) {
      this._largeDeviceSize = normalizeSize(value);
      this.validateSize();
      this.updateClassList();
    }

    connectedCallback() {
      this.updateClassList();
    }

    updateClassList() {
      this.classList.remove(...this._layoutClass);
      const config = computeLayoutClass$1({
        default: this.size,
        small: this.smallDeviceSize,
        medium: this.mediumDeviceSize,
        large: this.largeDeviceSize
      }, this.flexibility, this.padding, this.alignmentBump);
      this._layoutClass = Object.keys(config);
      this.classList.add(...this._layoutClass);
    }

    validateSize() {
      validateSize(this.size, this.smallDeviceSize, this.mediumDeviceSize, this.largeDeviceSize);
    }

  }

  lwc.registerDecorators(LightningLayoutItem, {
    publicProps: {
      flexibility: {
        config: 3
      },
      alignmentBump: {
        config: 3
      },
      padding: {
        config: 3
      },
      size: {
        config: 3
      },
      smallDeviceSize: {
        config: 3
      },
      mediumDeviceSize: {
        config: 3
      },
      largeDeviceSize: {
        config: 3
      }
    },
    track: {
      _flexibility: 1,
      _alignmentBump: 1,
      _padding: 1,
      _size: 1,
      _smallDeviceSize: 1,
      _mediumDeviceSize: 1,
      _largeDeviceSize: 1
    }
  });

  var _lightningLayoutItem = lwc.registerComponent(LightningLayoutItem, {
    tmpl: _tmpl$5
  });

  function tmpl$5($api, $cmp, $slotset, $ctx) {
    const {
      d: api_dynamic,
      h: api_element
    } = $api;
    return [api_element("div", {
      className: $cmp.computedClass,
      attrs: {
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-valuenow": $cmp.percentValue,
        "aria-busy": $cmp.ariaBusy,
        "role": "progressbar"
      },
      key: 2
    }, [api_element("span", {
      classMap: {
        "slds-progress-bar__value": true
      },
      style: $cmp.computedStyle,
      key: 3
    }, [api_element("span", {
      classMap: {
        "slds-assistive-text": true
      },
      key: 4
    }, [api_dynamic($cmp.assistiveText)])])])];
  }

  var _tmpl$6 = lwc.registerTemplate(tmpl$5);
  tmpl$5.stylesheets = [];
  tmpl$5.stylesheetTokens = {
    hostAttribute: "lightning-progressBar_progressBar-host",
    shadowAttribute: "lightning-progressBar_progressBar"
  };

  var labelProgress = 'Progress';

  // This is a library built from Globalization's repo
  /**
   * Define address format patterns.
   */

  var AddressFormatPattern = Object.freeze({
    /**
     *
     * N: Name (The formatting of names for this field is outside of the scope of the address elements.)
     * O: Organization
     * A: Address Lines (2 or 3 lines address)
     * D: District (Sub-locality): smaller than a city, and could be a neighborhood, suburb or dependent locality.
     * C: City (Locality)
     * S: State (Administrative Area)
     * K: Country
     * Z: ZIP Code / Postal Code
     * X: Sorting code, for example, CEDEX as used in France
     * n: newline
     */
    A: Symbol('Address Lines'),
    C: Symbol('City'),
    S: Symbol('State'),
    K: Symbol('Country'),
    Z: Symbol('Zip Code'),
    n: Symbol('New Line'),
    fromPlaceHolder: function fromPlaceHolder(placeHolder) {
      switch (placeHolder) {
        case 'A':
          return AddressFormatPattern.A;

        case 'C':
          return AddressFormatPattern.C;

        case 'S':
          return AddressFormatPattern.S;

        case 'K':
          return AddressFormatPattern.K;

        case 'Z':
          return AddressFormatPattern.Z;

        case 'n':
          return AddressFormatPattern.n;
      }

      return null;
    },
    getPlaceHolder: function getPlaceHolder(pattern) {
      switch (pattern) {
        case AddressFormatPattern.A:
          return 'A';

        case AddressFormatPattern.C:
          return 'C';

        case AddressFormatPattern.S:
          return 'S';

        case AddressFormatPattern.K:
          return 'K';

        case AddressFormatPattern.Z:
          return 'Z';

        case AddressFormatPattern.n:
          return 'n';
      }

      return null;
    },
    getData: function getData(pattern, data) {
      if (data) {
        switch (pattern) {
          case AddressFormatPattern.A:
            return data.address;

          case AddressFormatPattern.C:
            return data.city;

          case AddressFormatPattern.S:
            return data.state;

          case AddressFormatPattern.K:
            return data.country;

          case AddressFormatPattern.Z:
            return data.zipCode;

          case AddressFormatPattern.n:
            return data.newLine;
        }
      }

      return null;
    }
  });

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  /**
   * Address token types enum
   *
   * @private
   */


  var AddressTokenTypes = Object.freeze({
    DATA: Symbol('data'),
    STRING: Symbol('string'),
    NEWLINE: Symbol('newline'),
    GROUP: Symbol('group')
  });
  /**
   * AddressToken class
   *
   * @private
   */

  var AddressToken = function () {
    /**
     *
     * @param {AddressTokenTypes} type
     * @param {string} string
     * @param {*} pattern
     */
    function AddressToken(type, string, pattern) {
      classCallCheck(this, AddressToken);
      this.type = type;
      this.string = string;
      this.pattern = pattern;
    }
    /**
     * Construct a string type token
     *
     * @param {string} string String
     * @return {AddressToken} Address Token
     */


    createClass(AddressToken, null, [{
      key: 'string',
      value: function string(_string) {
        return new AddressToken(AddressTokenTypes.STRING, _string);
      }
      /**
       * Construct a data type token
       *
       * @param {pattern} pattern Address Format Pattern
       * @return {AddressToken} Address Token
       */

    }, {
      key: 'data',
      value: function data(pattern) {
        return new AddressToken(AddressTokenTypes.DATA, undefined, pattern);
      }
      /**
       * Construct a new line type token
       *
       * @return {AddressToken} Address Token
       */

    }, {
      key: 'newLine',
      value: function newLine() {
        return new AddressToken(AddressTokenTypes.NEWLINE);
      }
    }]);
    return AddressToken;
  }();

  // This is a library built from Globalization's repo

  /**
   S: Salutation
   F: First Name(givenName)
   M: Middle Name
   L: Last Name(familyName)
   X: Suffix
   I: Informal Name
   */

  var fieldConstants = {
    SALUTATION: Symbol('Salutation'),
    FIRST: Symbol('First Name'),
    MIDDLE: Symbol('Middle Name'),
    LAST: Symbol('Last Name'),
    SUFFIX: Symbol('Suffix'),
    INFORMAL: Symbol('Informal Name')
  };

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  var Format = function Format(parts) {
    _classCallCheck(this, Format);

    this.parts = Object.freeze(parts);
    Object.freeze(this);
  };
  /**
   * Represents a field within the format
   */


  var FieldFormatPart = function FieldFormatPart(field) {
    _classCallCheck(this, FieldFormatPart);

    this.field = field;
    this.type = 'field';
    Object.freeze(this);
  };
  /**
   * Represents text to be output directly
   */


  var TextFormatPart = function TextFormatPart(text) {
    _classCallCheck(this, TextFormatPart);

    this.type = 'text';
    this.text = text;
    Object.freeze(this);
  };

  var fieldFormatParts = Object.freeze({
    SALUTATION: new FieldFormatPart(fieldConstants.SALUTATION),
    FIRST: new FieldFormatPart(fieldConstants.FIRST),
    MIDDLE: new FieldFormatPart(fieldConstants.MIDDLE),
    LAST: new FieldFormatPart(fieldConstants.LAST),
    SUFFIX: new FieldFormatPart(fieldConstants.SUFFIX),
    INFORMAL: new FieldFormatPart(fieldConstants.INFORMAL)
  });

  var FormatParser = function () {
    function FormatParser() {
      _classCallCheck(this, FormatParser);
    }

    _createClass(FormatParser, [{
      key: 'parse',

      /**
       * Parses the format
       * @param {string} fmt the format to be parsed
       * @returns {Format}
       */
      value: function parse(fmt) {
        var nodes = [];
        var textBuffer = ''; // parse the format string

        for (var i = 0; i < fmt.length; i = i + 1) {
          if (fmt[i] === '%') {
            i = i + 1; // move to the next character after %
            // end the last text buffer

            if (textBuffer.length > 0) {
              nodes.push(Object.freeze(new TextFormatPart(textBuffer)));
              textBuffer = '';
            }

            if (i >= fmt.length) {
              throw new Error('Unexpected end of format. Symbol at ' + (i - 1) + ' should be followed by a valid field code');
            }

            var code = fmt[i];

            switch (code) {
              case 'S':
                nodes.push(fieldFormatParts.SALUTATION);
                break;

              case 'F':
                nodes.push(fieldFormatParts.FIRST);
                break;

              case 'M':
                nodes.push(fieldFormatParts.MIDDLE);
                break;

              case 'L':
                nodes.push(fieldFormatParts.LAST);
                break;

              case 'X':
                nodes.push(fieldFormatParts.SUFFIX);
                break;

              case 'I':
                nodes.push(fieldFormatParts.INFORMAL);
                break;

              default:
                // TODO log the bad symbol and continue
                break;
            }
          } else {
            // if it wasn't a symbol, then just output the value directly
            textBuffer += fmt[i];
          }
        }

        if (textBuffer.length > 0) {
          nodes.push(new TextFormatPart(textBuffer));
        }

        return new Format(nodes);
      }
    }]);

    return FormatParser;
  }();

  var formatParser = new FormatParser();

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat#Parameters

  const POSSIBLE_OPTS = {
    style: true,
    currency: true,
    currencyDisplay: true,
    useGrouping: true,
    minimumIntegerDigits: true,
    minimumFractionDigits: true,
    maximumFractionDigits: true,
    minimumSignificantDigits: true,
    maximumSignificantDigits: true
  };
  const STYLE = {
    DECIMAL: 'decimal',
    CURRENCY: 'currency',
    PERCENT: 'percent'
  };
  const CURRENCY_DISPLAY = {
    CODE: 'code',
    // USD
    SYMBOL: 'symbol',
    // $
    NAME: 'name' // US Dollars

  };
  const SAFE_NUM_LENGTH = 15;
  const numberFormatInstancesCache = {};

  function getStringOfChar(char, amount) {
    return new Array(amount + 1).join(char);
  }

  function getGroupingCount(skeleton) {
    const match = skeleton.match(/,[#0]*\./);
    return match ? match[0].length - 2 : 0;
  }

  function getOptionsUniqueKey(options) {
    return Object.keys(options).sort().reduce((prev, optionName) => {
      if (POSSIBLE_OPTS[optionName]) {
        return prev + optionName + options[optionName] + '';
      }

      return prev;
    }, '');
  }

  function toNumber(value, defaultValue) {
    const number = parseInt(value, 10);

    if (isNaN(number)) {
      return defaultValue;
    }

    return number;
  }

  function getFractionPart(options) {
    const minimumDigits = toNumber(options.minimumFractionDigits, 0);
    const maximumDigits = Math.max(toNumber(options.maximumFractionDigits, 0), minimumDigits);
    return '.' + new Array(minimumDigits + 1).join('0') + new Array(maximumDigits - minimumDigits + 1).join('#');
  }

  function updateFractionPart(skeleton, options) {
    const fractionPart = getFractionPart(options);
    return fractionPart ? skeleton.replace(/\.(0|#)*/, fractionPart) : skeleton;
  }

  function updateCurrencySymbol(skeleton, currencyCode, options) {
    const symbol = String.fromCharCode(164);

    if (options.currencyDisplay === CURRENCY_DISPLAY.NAME) {
      // append the currency code at the end.
      return skeleton.replace(symbol, '') + currencyCode;
    }

    return skeleton.replace(symbol, currencyCode);
  }

  function updateIntegerPart(skeleton, options) {
    const minimumIntegerDigits = options.minimumIntegerDigits;
    const groupingCount = getGroupingCount(skeleton);

    if (!minimumIntegerDigits) {
      return skeleton;
    }

    if (minimumIntegerDigits <= groupingCount) {
      return skeleton.replace(/,[#0]*\./, ',' + getStringOfChar('#', groupingCount - minimumIntegerDigits) + getStringOfChar('0', minimumIntegerDigits) + '.');
    }

    return skeleton.replace(/[#0]*\./, getStringOfChar('0', minimumIntegerDigits - groupingCount) + ',' + getStringOfChar('0', groupingCount) + '.');
  }

  function getBestMatchCurrencySymbol(code, currencyDisplay) {
    if (!('Intl' in window)) {
      return code; // fail gracefully.
    }

    const opts = {
      style: 'currency',
      currency: code,
      minimumFractionDigits: 0
    };

    if (currencyDisplay) {
      opts.currencyDisplay = currencyDisplay;
    }

    const nf = getFromCache(opts);
    return nf.format(2).replace(/2/g, '');
  }

  function getCurrency(options) {
    const currencyDisplay = options.currencyDisplay || CURRENCY_DISPLAY.SYMBOL;

    if (currencyDisplay === CURRENCY_DISPLAY.SYMBOL || currencyDisplay === CURRENCY_DISPLAY.NAME) {
      return getBestMatchCurrencySymbol(options.currency, currencyDisplay);
    }

    return options.currency;
  }

  function getFromCache(options) {
    const optionsUniqueKey = getOptionsUniqueKey(options);
    let numberFormatInstance = numberFormatInstancesCache[optionsUniqueKey];

    if (numberFormatInstance) {
      return numberFormatInstance;
    }

    numberFormatInstance = new Intl.NumberFormat(locale, options);
    numberFormatInstancesCache[optionsUniqueKey] = numberFormatInstance;
    return numberFormatInstance;
  }

  function exceedsSafeLength(value, maxFractionDigits) {
    const str = value.toString();
    const intPart = str.split('.')[0];
    return intPart.length + toNumber(maxFractionDigits, 0) >= SAFE_NUM_LENGTH;
  }

  function normalizedMinimumFractionDigits(options) {
    const fractionSkeleton = getFallbackFractionSkeleton(options.style);
    const fractionDigits = fractionSkeleton.replace(/[^0]/g, '');
    return fractionDigits.length;
  }

  function normalizedMaximumFractionDigits(options) {
    const fractionSkeleton = getFallbackFractionSkeleton(options.style);
    const fractionDigits = fractionSkeleton.replace(/[^0#]/g, '');
    return Math.max(options.minimumFractionDigits, fractionDigits.length);
  }

  function getFallbackFractionSkeleton(style) {
    let styleFormat = numberFormat;

    if (style === STYLE.CURRENCY) {
      styleFormat = currencyFormat;
    } else if (style === STYLE.PERCENT) {
      styleFormat = percentFormat;
    }

    const format = styleFormat.split(';')[0];
    return format.split('.')[1] || '';
  }

  function normalizeOptions(options) {
    const normalizedOpts = Object.assign({}, options);
    normalizedOpts.currency = normalizedOpts.currency || currency;

    if (normalizedOpts.minimumFractionDigits === undefined) {
      normalizedOpts.minimumFractionDigits = normalizedMinimumFractionDigits(normalizedOpts);
    }

    if (normalizedOpts.maximumFractionDigits === undefined || normalizedOpts.maximumFractionDigits < normalizedOpts.minimumFractionDigits) {
      normalizedOpts.maximumFractionDigits = normalizedMaximumFractionDigits(normalizedOpts);
    }

    return normalizedOpts;
  }

  function NumberOptions(options) {
    this.options = options || {};
  }

  NumberOptions.prototype.isCurrency = function () {
    return this.options.style === 'currency';
  };

  NumberOptions.prototype.isPercent = function () {
    return this.options.style === 'percent';
  };

  NumberOptions.prototype.isDefaultCurrency = function () {
    return !this.options.currency || currency === this.options.currency;
  };

  NumberOptions.prototype.getDefaultSkeleton = function () {
    return this.isCurrency() ? currencyFormat : this.isPercent() ? percentFormat : numberFormat;
  };

  NumberOptions.prototype.getSkeleton = function () {
    const options = this.options;
    const defaultSkeleton = this.getDefaultSkeleton();
    let skeleton = updateFractionPart(defaultSkeleton, options);
    skeleton = updateIntegerPart(skeleton, options);

    if (!this.isDefaultCurrency()) {
      skeleton = updateCurrencySymbol(skeleton, getCurrency(options), options);
    }

    return skeleton;
  };

  /*
   * Regex to test a string for an ISO8601 Date. The following formats are matched.
   * Note that if a time element is present (e.g. 'T'), the string should have a time zone designator (Z or +hh:mm or -hh:mm).
   *
   *  YYYY
   *  YYYY-MM
   *  YYYY-MM-DD
   *  YYYY-MM-DDThh:mmTZD
   *  YYYY-MM-DDThh:mm:ssTZD
   *  YYYY-MM-DDThh:mm:ss.STZD
   *
   *
   * @see: https://www.w3.org/TR/NOTE-datetime
   */

  // This is a library for all calls to the aura localizationService.

  function getNumberFormat(format) {
    return configProvider.getLocalizationService().getNumberFormat(format);
  }

  function numberFormatFallback(options) {
    const skeleton = new NumberOptions(options).getSkeleton();
    return {
      format: value => {
        return getNumberFormat(skeleton).format(value);
      }
    };
  }

  function numberFormat$1(options) {
    const normalizedOpts = Object.assign({}, normalizeOptions(options));

    if (!('Intl' in window)) {
      return numberFormatFallback(normalizedOpts);
    }

    return {
      format: value => {
        if (value && exceedsSafeLength(value, normalizedOpts.maximumFractionDigits)) {
          return numberFormatFallback(normalizedOpts).format(value);
        }

        const numberFormatInstance = getFromCache(normalizedOpts);
        return numberFormatInstance.format(value);
      }
    };
  }

  // also be added to the static `labels` prop inside the class.
  // https://git.soma.salesforce.com/raptor/raptor/issues/196

  const i18n = {
    progress: labelProgress
  };
  const DEFAULT_SIZE = 'medium';
  const DEFAULT_VARIANT = 'base';
  /**
   * Displays a horizontal progress bar from left to right to indicate the progress of an operation.
   */

  class LightningProgressBar extends lwc.LightningElement {
    constructor(...args) {
      super(...args);
      this.privateVariant = DEFAULT_VARIANT;
      this.privateSize = DEFAULT_SIZE;
      this.value = 0;
    }

    /**
     * The variant changes the appearance of the progress bar.
     * Accepted variants include base or circular.
     * This value defaults to base.
     *
     * @type {string}
     * @default base
     */
    get variant() {
      return this.privateVariant;
    }

    set variant(value) {
      this.privateVariant = normalizeString(value, {
        fallbackValue: DEFAULT_VARIANT,
        validValues: ['base', 'circular']
      });
    }
    /**
     * The size of the progress bar.
     * Valid values are x-small, small, medium, and large.
     * The default value is medium.
     * @type {string}
     * @default medium
     */


    get size() {
      return this.privateSize;
    }

    set size(value) {
      this.privateSize = normalizeString(value, {
        fallbackValue: DEFAULT_SIZE,
        validValues: ['x-small', 'small', 'medium', 'large']
      });
    }

    get ariaBusy() {
      const value = this.percentValue;

      if (value > 0 && value < 100) {
        return 'true';
      }

      return null;
    }

    get computedClass() {
      const {
        size,
        variant
      } = this;
      const classes = classSet('slds-progress-bar');
      classes.add(`slds-progress-bar_${size}`);

      if (variant === 'circular') {
        classes.add('slds-progress-bar_circular');
      }

      return classes.toString();
    }

    get percentValue() {
      const {
        value
      } = this;

      if (!value || value <= 0) {
        return 0;
      }

      if (value >= 100) {
        return 100;
      }

      return Math.round(value);
    }

    get computedStyle() {
      return `width: ${this.percentValue}%;`;
    }

    get assistiveText() {
      const formattedPercent = numberFormat$1({
        style: 'percent'
      }).format(this.percentValue / 100);
      return `${i18n.progress} ${formattedPercent}`;
    }

  }

  lwc.registerDecorators(LightningProgressBar, {
    publicProps: {
      value: {
        config: 0
      },
      variant: {
        config: 3
      },
      size: {
        config: 3
      }
    },
    track: {
      privateVariant: 1,
      privateSize: 1
    }
  });

  var _lightningProgressBar = lwc.registerComponent(LightningProgressBar, {
    tmpl: _tmpl$6
  });

  function tmpl$6($api, $cmp, $slotset, $ctx) {
    const {
      d: api_dynamic,
      h: api_element,
      c: api_custom_element,
      t: api_text
    } = $api;
    return [api_custom_element("lightning-card", _lightningCard, {
      props: {
        "iconName": "standard:performance"
      },
      key: 2
    }, [api_element("h1", {
      classMap: {
        "cardTitle": true
      },
      attrs: {
        "slot": "title"
      },
      key: 3
    }, [api_dynamic($cmp.title)]), api_custom_element("lightning-layout", _lightningLayout, {
      classMap: {
        "slds-p-horizontal_x-small": true,
        "slds-p-vertical_small": true
      },
      key: 4
    }, [api_custom_element("lightning-layout-item", _lightningLayoutItem, {
      props: {
        "padding": "horizontal-small",
        "size": "6"
      },
      key: 5
    }, [api_element("div", {
      classMap: {
        "slds-box": true,
        "slds-text-align_center": true
      },
      key: 6
    }, [api_element("div", {
      classMap: {
        "slds-text-heading_small": true,
        "slds-text-align_center": true
      },
      key: 7
    }, [api_dynamic($cmp.kpiTitle1)]), $cmp.kpiSign1 ? api_element("div", {
      classMap: {
        "kpi-positive": true,
        "slds-text-align_center": true
      },
      key: 8
    }, [api_dynamic($cmp.kpiValue1)]) : null, !$cmp.kpiSign1 ? api_element("div", {
      classMap: {
        "kpi-negative": true,
        "slds-text-align_center": true
      },
      key: 9
    }, [api_dynamic($cmp.kpiValue1)]) : null])]), api_custom_element("lightning-layout-item", _lightningLayoutItem, {
      props: {
        "padding": "horizontal-small",
        "size": "6"
      },
      key: 10
    }, [api_element("div", {
      classMap: {
        "slds-box": true,
        "slds-text-align_center": true
      },
      key: 11
    }, [api_element("div", {
      classMap: {
        "slds-text-heading_small": true,
        "slds-text-align_center": true
      },
      key: 12
    }, [api_dynamic($cmp.kpiTitle2)]), $cmp.kpiSign2 ? api_element("div", {
      classMap: {
        "kpi-positive": true,
        "slds-text-align_center": true
      },
      key: 13
    }, [api_dynamic($cmp.kpiValue2)]) : null, !$cmp.kpiSign2 ? api_element("div", {
      classMap: {
        "kpi-negative": true,
        "slds-text-align_center": true
      },
      key: 14
    }, [api_dynamic($cmp.kpiValue2)]) : null])])]), api_element("div", {
      classMap: {
        "progress-bar-container": true,
        "slds-p-around_medium": true
      },
      key: 15
    }, [api_element("div", {
      classMap: {
        "slds-media": true,
        "slds-m-top_medium": true,
        "slds-m-bottom_small": true
      },
      key: 16
    }, [api_element("div", {
      classMap: {
        "slds-media__figure": true
      },
      key: 17
    }, [api_custom_element("lightning-icon", _lightningIcon, {
      classMap: {
        "icon": true
      },
      props: {
        "iconName": $cmp.activityIcon1,
        "size": "medium"
      },
      key: 18
    }, [])]), api_element("div", {
      classMap: {
        "slds-media__body": true,
        "slds-m-left_x-small": true
      },
      key: 19
    }, [api_element("div", {
      classMap: {
        "slds-text-body_regular": true,
        "slds-m-bottom_xx-small": true
      },
      key: 20
    }, [api_dynamic($cmp.activitiesCompleted1), api_text(" \xA0 "), api_dynamic($cmp.activitiesDescription1)]), $cmp.conditional1 ? api_element("div", {
      key: 21
    }, [api_custom_element("lightning-progress-bar", _lightningProgressBar, {
      props: {
        "variant": "circular",
        "value": $cmp.progress1
      },
      key: 22
    }, []), api_element("div", {
      classMap: {
        "slds-text-body_regular": true,
        "slds-text-color_weak": true,
        "slds-text-align_right": true,
        "slds-m-top_xx-small": true
      },
      key: 23
    }, [api_text("Personal Best: "), api_dynamic($cmp.personalBest1)])]) : null, !$cmp.conditional1 ? api_element("div", {
      key: 24
    }, [api_custom_element("lightning-progress-bar", _lightningProgressBar, {
      props: {
        "variant": "circular",
        "value": "100"
      },
      key: 25
    }, []), api_element("div", {
      classMap: {
        "slds-text-body_regular": true,
        "slds-text-color_weak": true,
        "slds-text-align_right": true,
        "slds-m-top_xx-small": true,
        "text-bold": true
      },
      key: 26
    }, [api_text("New Personal Best: "), api_dynamic($cmp.activitiesCompleted1)])]) : null])]), api_element("div", {
      classMap: {
        "slds-media": true,
        "slds-m-top_medium": true,
        "slds-m-bottom_small": true
      },
      key: 27
    }, [api_element("div", {
      classMap: {
        "slds-media__figure": true
      },
      key: 28
    }, [api_custom_element("lightning-icon", _lightningIcon, {
      classMap: {
        "icon": true
      },
      props: {
        "iconName": $cmp.activityIcon2,
        "size": "medium"
      },
      key: 29
    }, [])]), api_element("div", {
      classMap: {
        "slds-media__body": true,
        "slds-m-left_x-small": true
      },
      key: 30
    }, [api_element("div", {
      classMap: {
        "slds-text-body_regular": true,
        "slds-m-bottom_xx-small": true
      },
      key: 31
    }, [api_dynamic($cmp.activitiesCompleted2), api_text(" \xA0 "), api_dynamic($cmp.activitiesDescription2)]), $cmp.conditional2 ? api_element("div", {
      key: 32
    }, [api_custom_element("lightning-progress-bar", _lightningProgressBar, {
      props: {
        "variant": "circular",
        "value": $cmp.progress2
      },
      key: 33
    }, []), api_element("div", {
      classMap: {
        "slds-text-body_regular": true,
        "slds-text-color_weak": true,
        "slds-text-align_right": true,
        "slds-m-top_xx-small": true
      },
      key: 34
    }, [api_text("Personal Best: "), api_dynamic($cmp.personalBest2)])]) : null, !$cmp.conditional2 ? api_element("div", {
      key: 35
    }, [api_custom_element("lightning-progress-bar", _lightningProgressBar, {
      props: {
        "variant": "circular",
        "value": "100"
      },
      key: 36
    }, []), api_element("div", {
      classMap: {
        "slds-text-body_regular": true,
        "slds-text-color_weak": true,
        "slds-text-align_right": true,
        "slds-m-top_xx-small": true,
        "text-bold": true
      },
      key: 37
    }, [api_text("New Personal Best: {activitiesCompleted12")])]) : null])]), api_element("div", {
      classMap: {
        "slds-media": true,
        "slds-m-top_medium": true,
        "slds-m-bottom_small": true
      },
      key: 38
    }, [api_element("div", {
      classMap: {
        "slds-media__figure": true
      },
      key: 39
    }, [api_custom_element("lightning-icon", _lightningIcon, {
      classMap: {
        "icon": true
      },
      props: {
        "iconName": $cmp.activityIcon3,
        "size": "medium"
      },
      key: 40
    }, [])]), api_element("div", {
      classMap: {
        "slds-media__body": true,
        "slds-m-left_x-small": true
      },
      key: 41
    }, [api_element("div", {
      classMap: {
        "slds-text-body_regular": true,
        "slds-m-bottom_xx-small": true
      },
      key: 42
    }, [api_dynamic($cmp.activitiesCompleted3), api_text(" \xA0 "), api_dynamic($cmp.activitiesDescription3)]), $cmp.conditional3 ? api_element("div", {
      key: 43
    }, [api_custom_element("lightning-progress-bar", _lightningProgressBar, {
      props: {
        "variant": "circular",
        "value": $cmp.progress3
      },
      key: 44
    }, []), api_element("div", {
      classMap: {
        "slds-text-body_regular": true,
        "slds-text-color_weak": true,
        "slds-text-align_right": true,
        "slds-m-top_xx-small": true
      },
      key: 45
    }, [api_text("Personal Best: "), api_dynamic($cmp.personalBest3)])]) : null, !$cmp.conditional3 ? api_element("div", {
      key: 46
    }, [api_custom_element("lightning-progress-bar", _lightningProgressBar, {
      props: {
        "variant": "circular",
        "value": "100"
      },
      key: 47
    }, []), api_element("div", {
      classMap: {
        "slds-text-body_regular": true,
        "slds-text-color_weak": true,
        "slds-text-align_right": true,
        "slds-m-top_xx-small": true,
        "text-bold": true
      },
      key: 48
    }, [api_text("New Personal Best: "), api_dynamic($cmp.activitiesCompleted3)])]) : null])]), api_element("div", {
      classMap: {
        "slds-media": true,
        "slds-m-top_medium": true,
        "slds-m-bottom_small": true
      },
      key: 49
    }, [api_element("div", {
      classMap: {
        "slds-media__figure": true
      },
      key: 50
    }, [api_custom_element("lightning-icon", _lightningIcon, {
      classMap: {
        "icon": true
      },
      props: {
        "iconName": $cmp.activityIcon4,
        "size": "medium"
      },
      key: 51
    }, [])]), api_element("div", {
      classMap: {
        "slds-media__body": true,
        "slds-m-left_x-small": true
      },
      key: 52
    }, [api_element("div", {
      classMap: {
        "slds-text-body_regular": true,
        "slds-m-bottom_xx-small": true
      },
      key: 53
    }, [api_dynamic($cmp.activitiesCompleted4), api_text(" \xA0 "), api_dynamic($cmp.activitiesDescription4)]), $cmp.conditional4 ? api_element("div", {
      key: 54
    }, [api_custom_element("lightning-progress-bar", _lightningProgressBar, {
      props: {
        "variant": "circular",
        "value": $cmp.progress4
      },
      key: 55
    }, []), api_element("div", {
      classMap: {
        "slds-text-body_regular": true,
        "slds-text-color_weak": true,
        "slds-text-align_right": true,
        "slds-m-top_xx-small": true
      },
      key: 56
    }, [api_text("Personal Best: "), api_dynamic($cmp.personalBest4)])]) : null, !$cmp.conditional4 ? api_element("div", {
      key: 57
    }, [api_custom_element("lightning-progress-bar", _lightningProgressBar, {
      props: {
        "variant": "circular",
        "value": "100"
      },
      key: 58
    }, []), api_element("div", {
      classMap: {
        "slds-text-body_regular": true,
        "slds-text-color_weak": true,
        "slds-text-align_right": true,
        "slds-m-top_xx-small": true,
        "text-bold": true
      },
      key: 59
    }, [api_text("New Personal Best: "), api_dynamic($cmp.activitiesCompleted4)])]) : null])])])])];
  }

  var _tmpl$7 = lwc.registerTemplate(tmpl$6);
  tmpl$6.stylesheets = [];

  if (_implicitStylesheets) {
    tmpl$6.stylesheets.push.apply(tmpl$6.stylesheets, _implicitStylesheets);
  }
  tmpl$6.stylesheetTokens = {
    hostAttribute: "lwc-activityScorecard_activityScorecard-host",
    shadowAttribute: "lwc-activityScorecard_activityScorecard"
  };

  class ActivityScorecard extends lwc.LightningElement {
    constructor(...args) {
      super(...args);
      this.title = "Activity Scorecard";
      this.kpiTitle1 = "Deals Won";
      this.kpiValue1 = "10";
      this.kpiSign1 = "true";
      this.kpiTitle2 = "Deals Lost";
      this.kpiValue2 = "7";
      this.kpiSign2 = "false";
      this.activityIcon1 = "standard:task";
      this.activitiesCompleted1 = "90";
      this.activitiesDescription1 = "tasks completed";
      this.personalBest1 = "78";
      this.progressBarColor1 = "#4bca81";
      this.activityIcon2 = "standard:log_a_call";
      this.activitiesCompleted2 = "98";
      this.activitiesDescription2 = "calls logged";
      this.personalBest2 = "120";
      this.progressBarColor2 = "#48C3CC";
      this.activityIcon3 = "standard:email";
      this.activitiesCompleted3 = "98";
      this.activitiesDescription3 = "emails sent";
      this.personalBest3 = "150";
      this.progressBarColor3 = "#95AEC5";
      this.activityIcon4 = "standard:event";
      this.activitiesCompleted4 = "23";
      this.activitiesDescription4 = "events logged";
      this.personalBest4 = "35";
      this.progressBarColor4 = "#EB7092";
    }

    get progress1() {
      return this.activitiesCompleted1 / this.personalBest1 * 100;
    }

    get conditional1() {
      if (this.activitiesCompleted1 <= this.personalBest1) {
        return true;
      }
    }

    get progress2() {
      return this.activitiesCompleted2 / this.personalBest2 * 100;
    }

    get conditional2() {
      if (this.activitiesCompleted2 <= this.personalBest2) {
        return true;
      }
    }

    get progress3() {
      return this.activitiesCompleted3 / this.personalBest3 * 100;
    }

    get conditional3() {
      if (this.activitiesCompleted3 <= this.personalBest3) {
        return true;
      }
    }

    get progress4() {
      return this.activitiesCompleted4 / this.personalBest4 * 100;
    }

    get conditional4() {
      if (this.activitiesCompleted4 <= this.personalBest4) {
        return true;
      }
    }

  }

  lwc.registerDecorators(ActivityScorecard, {
    publicProps: {
      title: {
        config: 0
      },
      kpiTitle1: {
        config: 0
      },
      kpiValue1: {
        config: 0
      },
      kpiSign1: {
        config: 0
      },
      kpiTitle2: {
        config: 0
      },
      kpiValue2: {
        config: 0
      },
      kpiSign2: {
        config: 0
      },
      activityIcon1: {
        config: 0
      },
      activitiesCompleted1: {
        config: 0
      },
      activitiesDescription1: {
        config: 0
      },
      personalBest1: {
        config: 0
      },
      progressBarColor1: {
        config: 0
      },
      activityIcon2: {
        config: 0
      },
      activitiesCompleted2: {
        config: 0
      },
      activitiesDescription2: {
        config: 0
      },
      personalBest2: {
        config: 0
      },
      progressBarColor2: {
        config: 0
      },
      activityIcon3: {
        config: 0
      },
      activitiesCompleted3: {
        config: 0
      },
      activitiesDescription3: {
        config: 0
      },
      personalBest3: {
        config: 0
      },
      progressBarColor3: {
        config: 0
      },
      activityIcon4: {
        config: 0
      },
      activitiesCompleted4: {
        config: 0
      },
      activitiesDescription4: {
        config: 0
      },
      personalBest4: {
        config: 0
      },
      progressBarColor4: {
        config: 0
      }
    }
  });

  var activityScorecard = lwc.registerComponent(ActivityScorecard, {
    tmpl: _tmpl$7
  });

  return activityScorecard;

});
