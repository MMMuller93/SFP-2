import { useEffect } from 'react';

interface ServiceSchemaProps {
  name: string;
  description: string;
  serviceType: string;
  provider?: {
    name: string;
    url: string;
  };
}

export const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  name,
  description,
  serviceType,
  provider = {
    name: 'Strategic Fund Partners',
    url: 'https://strategicfundpartners.com'
  }
}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'service-schema';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": name,
      "description": description,
      "serviceType": serviceType,
      "provider": {
        "@type": "Organization",
        "name": provider.name,
        "url": provider.url
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      }
    });

    // Remove existing service schema if present
    const existing = document.getElementById('service-schema');
    if (existing) {
      existing.remove();
    }

    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('service-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [name, description, serviceType, provider.name, provider.url]);

  return null;
};
