declare global {
  interface Window {
    oaiq?: (...args: unknown[]) => void;
  }
}

export const trackConversion = (event: 'lead_created' | 'consultation_link_clicked' | 'email_link_clicked') => {
  try {
    if (event === 'lead_created') {
      window.oaiq?.('measure', event, { type: 'customer_action' }, { opt_out: true });
    } else {
      window.oaiq?.('measure', 'custom', { type: 'custom' }, {
        custom_event_name: event,
        opt_out: true,
      });
    }
  } catch {
    // Measurement must never interrupt an inquiry or an outbound link.
  }
};
