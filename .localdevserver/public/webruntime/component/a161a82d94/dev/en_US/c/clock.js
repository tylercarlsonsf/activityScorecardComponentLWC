Webruntime.moduleRegistry.define('c/clock', ['lwc', '@salesforce/i18n/locale', '@salesforce/i18n/number.numberFormat', '@salesforce/i18n/number.percentFormat', '@salesforce/i18n/number.currencyFormat', '@salesforce/i18n/currency', 'lightning/configProvider', '@salesforce/i18n/dateTime.mediumDateFormat', '@salesforce/i18n/dateTime.mediumTimeFormat'], function (lwc, locale, numberFormat, percentFormat, currencyFormat, currency, configProvider, mediumDateFormat, mediumTimeFormat) { 'use strict';

    locale = locale && locale.hasOwnProperty('default') ? locale['default'] : locale;
    numberFormat = numberFormat && numberFormat.hasOwnProperty('default') ? numberFormat['default'] : numberFormat;
    percentFormat = percentFormat && percentFormat.hasOwnProperty('default') ? percentFormat['default'] : percentFormat;
    currencyFormat = currencyFormat && currencyFormat.hasOwnProperty('default') ? currencyFormat['default'] : currencyFormat;
    currency = currency && currency.hasOwnProperty('default') ? currency['default'] : currency;
    mediumDateFormat = mediumDateFormat && mediumDateFormat.hasOwnProperty('default') ? mediumDateFormat['default'] : mediumDateFormat;
    mediumTimeFormat = mediumTimeFormat && mediumTimeFormat.hasOwnProperty('default') ? mediumTimeFormat['default'] : mediumTimeFormat;

    function stylesheet(hostSelector, shadowSelector, nativeShadow) {
      return ".container" + shadowSelector + " {overflow: hidden;}\n.bar" + shadowSelector + " {height: 36px;background-color: #f5b041;}\n";
    }
    var _implicitStylesheets = [stylesheet];

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        d: api_dynamic
      } = $api;
      return [api_dynamic($cmp.formattedValue)];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];
    tmpl.stylesheetTokens = {
      hostAttribute: "lightning-formattedDateTime_formattedDateTime-host",
      shadowAttribute: "lightning-formattedDateTime_formattedDateTime"
    };

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
    const ISO8601_STRICT_PATTERN = /^\d{4}(-\d\d(-\d\d(T\d\d:\d\d(:\d\d)?(\.\d+)?(([+-]\d\d:\d\d)|Z){1})?)?)?$/i;
    const TIME_SEPARATOR = 'T';
    function isValidISODateTimeString(dateTimeString) {
      return isValidISO8601String(dateTimeString) && isValidDate(dateTimeString);
    }

    function isValidISO8601String(dateTimeString) {
      if (typeof dateTimeString !== 'string') {
        return false;
      }

      return ISO8601_STRICT_PATTERN.test(dateTimeString);
    }

    function isValidDate(value) {
      // Date.parse returns NaN if the argument doesn't represent a valid date
      const timeStamp = Date.parse(value);
      return isFinite(timeStamp);
    }

    // This is a library for all calls to the aura localizationService.
    function formatDate(dateString, format, locale$$1) {
      return configProvider.getLocalizationService().formatDate(dateString, format, locale$$1);
    }
    function formatDateUTC(dateString, format, locale$$1) {
      return configProvider.getLocalizationService().formatDateUTC(dateString, format, locale$$1);
    }
    function syncUTCToWallTime(date, timeZone) {
      let converted = null; // eslint-disable-next-line new-cap

      configProvider.getLocalizationService().UTCToWallTime(date, timeZone, result => {
        converted = result;
      });
      return converted;
    }
    function toOtherCalendar(date) {
      return configProvider.getLocalizationService().translateToOtherCalendar(date);
    }

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

    /**
    A string normalization utility for attributes.
    @param {String} value - The value to normalize.
    @param {Object} config - The optional configuration object.
    @param {String} [config.fallbackValue] - The optional fallback value to use if the given value is not provided or invalid. Defaults to an empty string.
    @param {Array} [config.validValues] - An optional array of valid values. Assumes all input is valid if not provided.
    @return {String} - The normalized value.
    **/
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

    const FORMATTING_OPTS = ['weekday', 'year', 'month', 'day', 'hour', 'minute', 'second', 'era'];
    const FORMAT_MAP = {
      weekday: {
        short: 'EEE, ',
        narrow: 'EEE, ',
        long: 'EEEE, '
      },
      month: {
        short: 'MMM ',
        narrow: 'MMM ',
        numeric: 'MMM ',
        '2-digit': 'MMM ',
        long: 'MMMM '
      },
      day: {
        numeric: 'd, ',
        '2-digit': 'dd, '
      },
      year: {
        numeric: 'yyyy ',
        '2-digit': 'yy '
      },
      hour: {
        numeric12: 'h',
        numeric24: 'H',
        '2-digit12': 'hh',
        '2-digit24': 'HH'
      },
      minute: {
        numeric: 'mm',
        '2-digit': 'mm'
      },
      second: {
        numeric: 'ss',
        '2-digit': 'ss'
      },
      timeZoneName: {
        short: '[GMT]Z',
        long: '[GMT]Z'
      }
    };
    const SEPARATORS = [',', ' ', ':'];

    function getWeekDayPart(format, options) {
      const weekdayOptionValue = options.weekday;

      if (FORMAT_MAP.weekday[weekdayOptionValue] !== undefined) {
        format.push(FORMAT_MAP.weekday[weekdayOptionValue]);
      }
    }

    function getMonthPart(format, options) {
      const monthOptionValue = options.month;

      if (FORMAT_MAP.month[monthOptionValue] !== undefined) {
        format.push(FORMAT_MAP.month[monthOptionValue]);
      }
    }

    function getDayPart(format, options) {
      const dayOptionValue = options.day;

      if (FORMAT_MAP.day[dayOptionValue] !== undefined) {
        format.push(FORMAT_MAP.day[dayOptionValue]);
      }
    }

    function getYearPart(format, options) {
      const yearOptionValue = options.year;

      if (FORMAT_MAP.year[yearOptionValue] !== undefined) {
        format.push(FORMAT_MAP.year[yearOptionValue]);
      }
    }

    function getTZPart(format, options) {
      const timeZoneNameOptionValue = options.timeZoneName;

      if (FORMAT_MAP.timeZoneName[timeZoneNameOptionValue] !== undefined) {
        if (options.timeZone === 'UTC') {
          format.push('[GMT]');
        } else {
          format.push(FORMAT_MAP.timeZoneName[timeZoneNameOptionValue]);
        }
      }
    }

    function getTimePart(format, options) {
      const hourOptionValue = options.hour,
            minuteOptionValue = options.minute,
            secondOptionValue = options.second;
      let hasTime = false;
      let hasHourOnly = false; // hour 12 hr or 24 hr

      if (hourOptionValue === 'numeric' || hourOptionValue === '2-digit') {
        hasTime = true;

        if (options.hour12 === false) {
          if (hourOptionValue === 'numeric') {
            format.push(FORMAT_MAP.hour.numeric24);
          } else {
            format.push(FORMAT_MAP.hour['2-digit24']);
          }
        } else if (hourOptionValue === 'numeric') {
          format.push(FORMAT_MAP.hour.numeric12);
        } else {
          format.push(FORMAT_MAP.hour['2-digit12']);
        }

        if (FORMAT_MAP.minute[minuteOptionValue] !== undefined) {
          format.push(':');
        } else if (FORMAT_MAP.second[secondOptionValue] !== undefined) {
          hasHourOnly = true;
        }
      } // minute


      if (FORMAT_MAP.minute[minuteOptionValue] !== undefined) {
        hasTime = true;
        format.push(FORMAT_MAP.minute[minuteOptionValue]);

        if (FORMAT_MAP.second[secondOptionValue] !== undefined) {
          format.push(':');
        }
      } // second


      if (FORMAT_MAP.second[secondOptionValue] !== undefined && !hasHourOnly) {
        hasTime = true;
        format.push(FORMAT_MAP.second[secondOptionValue]);
      } // AM/PM marker


      if (hasTime) {
        format.push(' a ');
      }

      if (hasHourOnly) {
        format.push('[(sec]: ' + FORMAT_MAP.second[secondOptionValue] + '[)]');
      }
    }

    function DateTimeOptions(options) {
      this.options = options || {};
    }

    DateTimeOptions.prototype.hasFormattingOptions = function () {
      return FORMATTING_OPTS.some(opt => {
        return this.options[opt] !== undefined;
      });
    };

    DateTimeOptions.prototype.getSkeleton = function () {
      const format = [];
      getWeekDayPart(format, this.options);
      getMonthPart(format, this.options);
      getDayPart(format, this.options);
      getYearPart(format, this.options);
      getTimePart(format, this.options);
      getTZPart(format, this.options);
      let formatStr = format.join('');
      SEPARATORS.forEach(element => {
        if (formatStr.lastIndexOf(element) === formatStr.length - 1) {
          formatStr = formatStr.slice(0, -1);
        }
      });
      return formatStr;
    };

    const dateTimeFormatInstancesCache = {};
    const POSSIBLE_OPTS$1 = {
      weekday: true,
      era: true,
      year: true,
      month: true,
      day: true,
      hour: true,
      minute: true,
      second: true,
      timeZone: true,
      timeZoneName: true,
      hour12: true
    };

    function getOptionsUniqueKey$1(options) {
      return Object.keys(options).sort().reduce((prev, optionName) => {
        if (POSSIBLE_OPTS$1[optionName]) {
          return prev + optionName + options[optionName] + '';
        }

        return prev;
      }, '');
    }

    function getFromCache$1(options) {
      const optionsUniqueKey = getOptionsUniqueKey$1(options);
      let formatInstance = dateTimeFormatInstancesCache[optionsUniqueKey];

      if (!formatInstance) {
        formatInstance = new Intl.DateTimeFormat(locale, options);
        dateTimeFormatInstancesCache[optionsUniqueKey] = formatInstance;
      }

      return formatInstance;
    }

    function convertAndFormatDate(date, format, timeZone) {
      const translatedDate = toOtherCalendar(date);
      const converted = syncUTCToWallTime(translatedDate, timeZone);
      return formatDateUTC(converted, format);
    }

    function isDate(value) {
      return Object.prototype.toString.call(value) === '[object Date]' && !isNaN(value.getTime());
    }

    function toDate(value) {
      let dateObj = value;

      if (!isDate(value) && (typeof value === 'string' || typeof value === 'number')) {
        dateObj = new Date(isFinite(value) ? parseInt(value, 10) : Date.parse(value));
      }

      return dateObj;
    }

    const isTimeZonesSupported = function () {
      try {
      } catch (err) {
        return false;
      }

      return true;
    }();

    function dateTimeFormatFallback(dto) {
      // localization service will default to mediumDateFormat when no format is provided
      const format = dto.hasFormattingOptions() ? dto.getSkeleton() : null;
      const {
        timeZone
      } = dto.options;
      return {
        format: value => {
          // if value is an ISO date string (e.g. 2019-10-25), do not convert between timezones and just format the date
          if (isValidISODateTimeString(value) && value.indexOf(TIME_SEPARATOR) < 0) {
            return formatDate(value);
          } // FIXME use standard methods from localizationService for parsing and formatting instead


          const dateObj = toDate(value);

          if (isDate(dateObj)) {
            if (timeZone === 'UTC') {
              dateObj.setTime(dateObj.getTime() + dateObj.getTimezoneOffset() * 60 * 1000);
            }

            return convertAndFormatDate(dateObj, format, timeZone);
          }

          return '';
        }
      };
    }

    function dateTimeFormat(opts) {
      const options = opts || {};
      const dto = new DateTimeOptions(options);

      if (!('Intl' in window) || !dto.hasFormattingOptions() || !isTimeZonesSupported) {
        return dateTimeFormatFallback(dto);
      }

      return {
        format: value => {
          const dtf = getFromCache$1(options);
          return dtf.format(toDate(value));
        }
      };
    }

    /**
     * Displays formatted date and time.
     */

    class LightningFormattedDateTime extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.value = void 0;
        this.weekday = void 0;
        this.era = void 0;
        this.year = void 0;
        this.month = void 0;
        this.day = void 0;
        this.hour = void 0;
        this.minute = void 0;
        this.second = void 0;
        this.timeZoneName = void 0;
        this.timeZone = void 0;
        this._hour12 = false;
        this._hour12Set = false;
      }

      /**
       * Determines whether time is displayed as 12-hour. If false, time displays as 24-hour. The default setting is determined by the user's locale.
       * @type {boolean}
       *
       */
      get hour12() {
        return this._hour12;
      }

      set hour12(value) {
        // If hour12 is not explicitly set, or when it's set to undefined, then locale default is used instead.
        if (value === undefined) {
          this._hour12Set = false;
          this._hour12 = value;
        } else {
          this._hour12Set = true;
          this._hour12 = normalizeBoolean(value);
        }
      }

      get formattedValue() {
        return this.computeFormattedValue();
      }

      computeFormattedValue() {
        const {
          value
        } = this;

        if (!this.isEmpty(value) && this.isValid(value)) {
          const formatted = dateTimeFormat(this.getOptions()).format(value);

          if (formatted) {
            return formatted;
          }
        }

        this.printError(value);
        return '';
      }

      isEmpty(value) {
        return value === undefined || value === null || value === '';
      }

      isValid(value) {
        return isFinite(value) || isValidISODateTimeString(value);
      }

      printError(value) {
        const errorMsg = `<lightning-formatted-date-time> The value attribute accepts either a Date object, a timestamp, or a valid ISO8601 formatted string ` + `with timezone offset. but we are getting the ${typeof value} value "${value}" instead.`;
        console.warn(errorMsg); // eslint-disable-line no-console
      }

      getOptions() {
        const options = {
          weekday: this.weekday,
          era: this.era,
          year: this.year,
          month: this.month,
          day: this.day,
          hour: this.hour,
          minute: this.minute,
          second: this.second,
          timeZoneName: this.timeZoneName,
          timeZone: this.timeZone
        }; // If hour12 is set, then we use it, otherwise locale defaults will be used

        if (this._hour12Set) {
          options.hour12 = this.hour12;
        }

        return options;
      }

    }

    lwc.registerDecorators(LightningFormattedDateTime, {
      publicProps: {
        value: {
          config: 0
        },
        weekday: {
          config: 0
        },
        era: {
          config: 0
        },
        year: {
          config: 0
        },
        month: {
          config: 0
        },
        day: {
          config: 0
        },
        hour: {
          config: 0
        },
        minute: {
          config: 0
        },
        second: {
          config: 0
        },
        timeZoneName: {
          config: 0
        },
        timeZone: {
          config: 0
        },
        hour12: {
          config: 3
        }
      },
      track: {
        _hour12: 1,
        _hour12Set: 1
      }
    });

    var _lightningFormattedDateTime = lwc.registerComponent(LightningFormattedDateTime, {
      tmpl: _tmpl
    });

    function tmpl$1($api, $cmp, $slotset, $ctx) {
      const {
        c: api_custom_element
      } = $api;
      return [api_custom_element("lightning-formatted-date-time", _lightningFormattedDateTime, {
        props: {
          "value": $cmp.timestamp,
          "year": "numeric",
          "month": "numeric",
          "day": "numeric",
          "hour": "2-digit",
          "minute": "2-digit",
          "second": "2-digit",
          "timeZoneName": "short"
        },
        key: 2
      }, [])];
    }

    var _tmpl$1 = lwc.registerTemplate(tmpl$1);
    tmpl$1.stylesheets = [];

    if (_implicitStylesheets) {
      tmpl$1.stylesheets.push.apply(tmpl$1.stylesheets, _implicitStylesheets);
    }
    tmpl$1.stylesheetTokens = {
      hostAttribute: "lwc-clock_clock-host",
      shadowAttribute: "lwc-clock_clock"
    };

    class Clock extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.timestamp = new Date();
      }

      refresh() {
        this.timestamp = new Date();
      }

    }

    lwc.registerDecorators(Clock, {
      publicMethods: ["refresh"]
    });

    var clock = lwc.registerComponent(Clock, {
      tmpl: _tmpl$1
    });

    return clock;

});
