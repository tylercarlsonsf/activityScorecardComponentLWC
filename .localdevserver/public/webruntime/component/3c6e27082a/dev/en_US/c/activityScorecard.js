Webruntime.moduleRegistry.define('c/activityScorecard', ['lwc', '@salesforce/i18n/locale', 'lightning/configProvider', '@salesforce/i18n/dir'], function (lwc, locale, configProvider, dir) { 'use strict';

    locale = locale && locale.hasOwnProperty('default') ? locale['default'] : locale;
    dir = dir && dir.hasOwnProperty('default') ? dir['default'] : dir;

    function stylesheet(hostSelector, shadowSelector, nativeShadow) {
      return "h1.cardTitle" + shadowSelector + "{font-weight: 700;}\n";
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

    function tmpl$3($api, $cmp, $slotset, $ctx) {
      const {
        t: api_text,
        h: api_element,
        c: api_custom_element
      } = $api;
      return [api_custom_element("lightning-card", _lightningCard, {
        props: {
          "iconName": "standard:account"
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
      }, [api_text("Activity Scorecard")])])];
    }

    var _tmpl$4 = lwc.registerTemplate(tmpl$3);
    tmpl$3.stylesheets = [];

    if (_implicitStylesheets) {
      tmpl$3.stylesheets.push.apply(tmpl$3.stylesheets, _implicitStylesheets);
    }
    tmpl$3.stylesheetTokens = {
      hostAttribute: "lwc-activityScorecard_activityScorecard-host",
      shadowAttribute: "lwc-activityScorecard_activityScorecard"
    };

    class ActivityScorecard extends lwc.LightningElement {}

    var activityScorecard = lwc.registerComponent(ActivityScorecard, {
      tmpl: _tmpl$4
    });

    return activityScorecard;

});
