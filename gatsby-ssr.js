const React = require('react');

const HeadComponents = [
  <script
    id="CookieConsent"
    src="https://policy.app.cookieinformation.com/uc.js"
    data-culture="RU"
    key="cookieConsentScript"
    type="text/javascript"
    crossOrigin="anonymous"
  />,
];

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(HeadComponents);
};