'use strict';

// Wit.ai parameters
const WIT_TOKEN = "PYXTTSIPB2OKB3D6F4WYGEOXFSGMWIS6";
if (!WIT_TOKEN) {
  throw new Error('missing WIT_TOKEN');
}

// Messenger API parameters
const FB_PAGE_TOKEN = "EAAND1xDzMrYBAHeS9oir5Iktpecy7WmOKcgQVG988HvlOw26nkB2ZAKcrhRQjJ4cxNjuOBVuZASCQPlTx2dXRXMW8YkXA5EcgVlwFmi8rb4Y3WboCMFo0SQZCbDpRnQZBIAydHC5BvxK3lAIDYmyC7lBnL5uteoUmkVXQa0slwZDZD";

var FB_VERIFY_TOKEN = "rebootkamp";
if (!FB_VERIFY_TOKEN) {
  FB_VERIFY_TOKEN = "just_do_it";
}

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
};