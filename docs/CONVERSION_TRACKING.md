# Inquiry delivery and ChatGPT Ads measurement

The contact form posts the visitor's name, company, email and message to Web3Forms. It shows success and emits a lead event only after an HTTP success response with JSON `success: true`. A failed request or a 15-second timeout leaves the form intact and provides a direct email alternative. Acceptance by the service is not proof of inbox delivery; verify the destination inbox and submission history during deployment. A hidden honeypot checkbox supplies Web3Forms' basic bot protection.

## Required before deployment

1. Create a Web3Forms Free form with contact@strategicfundpartners.com as its verified recipient. Its current free plan allows 250 submissions per month and 30 days of visible dashboard history. Account creation requires accepting the provider's terms and privacy policy; review any marketing consent at signup. The existing SendGrid account's expired trial does not affect this integration.
2. Set the GitHub repository variable `CONTACT_FORM_ENDPOINT` to `https://api.web3forms.com/submit/YOUR_FORM_ID`. Web3Forms documents the form ID as the same public UUID as its access key; it is designed for browser use and is not a secret API key. The Pages workflow exposes this URL as `VITE_CONTACT_FORM_ENDPOINT` during the build. For local development, copy `.env.example` to `.env.local` and set the equivalent value. Do not place SendGrid or other private credentials in browser variables.
3. Review the site's measurement disclosure and consent behavior before release. The OpenAI SDK uses first-party attribution cookies and may automatically include hashed form identifiers when advanced matching is enabled. If your consent policy requires approval before measurement, connect the SDK's documented consent controls before initialization.
4. Deploy the site, send one clearly labeled test inquiry, and verify provider acceptance, full field values in the free submission dashboard, and inbox receipt. Check the Ads Manager event stream immediately after testing. The quota warning emails should reach the recipient; if the monthly allowance is exhausted, the form must show an error rather than a false success.
5. Attach the event definitions to the intended campaign for reporting. A clicks campaign can measure conversions without changing its objective. Keep conversion optimization focused on actual leads; a consultation-link click is not a completed booking, and an email-link click is not a sent email.

A missing endpoint fails visibly instead of displaying a false success. Keep the pull request as a draft until the Web3Forms form is verified and its endpoint is configured. This change does not modify the separate formation application's SendGrid email delivery.

## Events

| Reporting name | Pixel event | Trigger |
| --- | --- | --- |
| SFP inquiry submitted | `lead_created` (`customer_action`) | The inquiry service accepts the form |
| SFP consultation link clicked | Custom `consultation_link_clicked` | Either desktop or mobile consultation link is clicked |
| SFP email link clicked | Custom `email_link_clicked` | The contact email or error fallback link is clicked |

The existing pixel is initialized only on strategicfundpartners.com and www.strategicfundpartners.com. Local development and build prerendering do not send OpenAI events. The event calls do not manually supply identity fields or inquiry text. SDK failures do not interrupt inquiries or outbound navigation. The events opt out of future user-level personalization.

This integration does not send server-side conversion events or claim to measure completed Google Calendar bookings.

## References

- [OpenAI Measurement Pixel](https://developers.openai.com/ads/measurement-pixel)
- [OpenAI conversion tracking and campaign attachment](https://developers.openai.com/ads/conversion-tracking)
- [Web3Forms API and response contract](https://docs.web3forms.com/getting-started/api-reference)
- [Web3Forms free plan and history limits](https://web3forms.com/pricing)
