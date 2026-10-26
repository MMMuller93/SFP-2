# Inquiry delivery and ChatGPT Ads measurement

The contact form posts the visitor's name, company, email and message to the approved form service. It shows success and emits a lead event only after that service accepts the request. A failed request or a 15-second timeout leaves the form intact and provides a direct email alternative. Acceptance by a form service is not proof of inbox delivery; verify the destination inbox during deployment.

## Required before deployment

1. Approve the inquiry provider and create its form with contact@strategicfundpartners.com as the verified destination. Formspree supports the multipart AJAX request used here; a replacement endpoint must support the same request and HTTP success/error contract.
2. Set the GitHub repository variable `CONTACT_FORM_ENDPOINT` to the full HTTPS form endpoint. The Pages workflow exposes this public URL as `VITE_CONTACT_FORM_ENDPOINT` during the build. It is not an API secret. For local development, copy `.env.example` to `.env.local` and set the equivalent value.
3. Review the site's measurement disclosure and consent behavior before release. The OpenAI SDK uses first-party attribution cookies and may automatically include hashed form identifiers when advanced matching is enabled. If your consent policy requires approval before measurement, connect the SDK's documented consent controls before initialization.
4. Deploy the site, send one clearly labeled test inquiry, and verify both provider acceptance and inbox receipt. Check the Ads Manager event stream immediately after testing.
5. Attach the event definitions to the intended campaign for reporting. A clicks campaign can measure conversions without changing its objective. Keep conversion optimization focused on actual leads; a consultation-link click is not a completed booking, and an email-link click is not a sent email.

A missing endpoint fails visibly instead of displaying a false success. Keep the pull request as a draft until the provider and endpoint are configured.

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
- [Formspree AJAX request example](https://formspree.io/blog/formspree-ajax/)
