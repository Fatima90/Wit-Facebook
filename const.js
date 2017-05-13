'use strict';

// Wit.ai parameters
const WIT_TOKEN = "PYXTTSIPB2OKB3D6F4WYGEOXFSGMWIS6";
if (!WIT_TOKEN) {
  throw new Error('missing WIT_TOKEN');
}

// Messenger API parameters
const FB_PAGE_TOKEN = "EAAND1xDzMrYBAMaLOc8cmQUwQgTsaAkRE6AmVw8sYJ13dBcSpOI64QnL34xn51dLIKvCxwGQY4pHB7zWpXojZCPVvmEFcTpb8kKPcfi2bN2fxz9b4tueZBA6MjYdkYTkYh6XzMEeq1Og5rNY2ODzb1zf31K40U8wkLThZB13wZDZD";

var FB_VERIFY_TOKEN = "rebootkamp";
if (!FB_VERIFY_TOKEN) {
  FB_VERIFY_TOKEN = "just_do_it";
}

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
};