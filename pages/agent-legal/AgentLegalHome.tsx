import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Shield, Zap, Globe, CheckCircle } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

const tickerItems = [
  'API-First',
  '$349 All-In',
  '5-Min Human Involvement',
  'MCP Server',
  'Webhook Updates',
];

const steps = [
  {
    number: '01',
    endpoint: 'POST /v1/entity-orders',
    title: 'Agent Creates Order',
    description: 'Agent submits jurisdiction, entity type, member details, and authority scope in a single API call. Formation ID returned immediately.',
    icon: Terminal,
  },
  {
    number: '02',
    endpoint: 'Name Check + Payment',
    title: 'Name & Payment',
    description: 'Agent runs name availability against the state entity database. On confirmation, formation fee is charged to the payment method on file.',
    icon: CheckCircle,
  },
  {
    number: '03',
    endpoint: 'Human Kernel',
    title: '5-Minute Human Session',
    description: 'Agent creates a secure kernel session via API and relays the URL to the human owner. They complete SSN, KYC, and operating agreement signature. Webhook fires on completion.',
    icon: Shield,
  },
  {
    number: '04',
    endpoint: 'Formation Complete',
    title: 'Entity Active',
    description: 'Documents generated, state filing submitted, EIN applied for automatically. Formation webhooks pushed at each stage: filed, active, EIN assigned.',
    icon: Zap,
  },
];

const discoveryMethods = [
  {
    label: 'llms.txt',
    description: 'Structured discovery file for LLM-native agents. Lists endpoints, entity types, pricing, and formation flow.',
    href: 'https://sfp-formation-api.up.railway.app/llms.txt',
  },
  {
    label: 'OpenAPI 3.1',
    description: 'Full OpenAPI spec for REST clients. Describes every endpoint, schema, and webhook payload.',
    href: 'https://sfp-formation-api.up.railway.app/openapi.json',
  },
  {
    label: 'MCP Server',
    description: 'Claude and compatible agents can use native MCP tools. No REST client required for supported agent frameworks.',
    href: 'https://sfp-formation-api.up.railway.app/docs',
  },
  {
    label: 'ai-plugin.json',
    description: 'ChatGPT Plugin manifest for GPT-based agents. Auto-discoverable at the well-known path.',
    href: 'https://sfp-formation-api.up.railway.app/ai-plugin.json',
  },
];

const curlExample = `curl -X POST \\
  https://sfp-formation-api.up.railway.app/v1/entity-orders \\
  -H "Authorization: Bearer $SFP_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "entity_type": "llc",
    "jurisdiction": "delaware",
    "proposed_name": "Aria Commerce LLC",
    "member": {
      "name": "Jane Smith",
      "role": "sole_member"
    },
    "authority_scope": {
      "sign_documents": { "enabled": true, "limit_usd": 25000 },
      "accept_payments": { "enabled": true },
      "execute_contracts": { "limit_usd": 25000 }
    },
    "webhook_url": "https://your-agent.example.com/webhooks/sfp"
  }'`;

export const AgentLegalHome: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative border-b border-grid bg-bg flex flex-col min-h-[90vh]">
        <div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden px-6 md:px-12 text-center">

          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.03] blur-[150px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-5xl mx-auto"
          >
            <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 text-accent text-xs font-mono uppercase tracking-widest mb-8">
              Agent Formation API
            </div>

            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-text-highlight tracking-tight mb-10 text-balance">
              Legal Infrastructure <br/>
              for <span className="text-accent italic font-light">AI Agents.</span>
            </h1>

            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-12 font-light max-w-2xl mx-auto text-balance">
              Your agent needs a legal entity to open bank accounts, sign contracts, and accept payments. Form a Delaware LLC or Wyoming DAO LLC via API — $349 all-in.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="https://sfp-formation-api.up.railway.app/docs"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-bg text-xs font-bold uppercase tracking-widest hover:bg-accentHover transition-colors duration-500 min-w-[200px]"
              >
                View API Docs
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/agents/insights/forming-llc-for-ai-agent"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-border text-text-secondary text-xs font-bold uppercase tracking-widest hover:border-accent/50 hover:text-accent transition-colors duration-300 min-w-[200px]"
                >
                  Read the Guide
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Ticker */}
        <div className="h-16 border-t border-grid bg-surface/30 backdrop-blur-sm flex items-center overflow-hidden relative">
          <div className="absolute inset-0 flex items-center whitespace-nowrap">
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, duration: 35, ease: 'linear' }}
              className="flex gap-16 items-center"
            >
              {[...Array(5)].map((_, i) => (
                <React.Fragment key={i}>
                  {tickerItems.map((item, j) => (
                    <React.Fragment key={`${i}-${j}`}>
                      <span className="text-sm font-mono uppercase tracking-widest text-text-muted">{item}</span>
                      <span className="w-1 h-1 rounded-full bg-accent/30" />
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-b border-grid bg-bg py-24 md:py-32">
        <div className="px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
          <motion.div className="mb-16" {...fadeInUp}>
            <h2 className="font-serif text-4xl md:text-5xl text-text-highlight mb-6">
              How It Works
            </h2>
            <p className="text-text-secondary text-lg font-light max-w-2xl">
              Four steps from API call to active legal entity. Only one requires human time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
                className="border border-grid bg-surface/20 p-8 hover:bg-surface/40 hover:border-accent/20 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-4xl text-accent/20 font-bold leading-none">{step.number}</span>
                  <step.icon className="w-6 h-6 text-accent/60 mt-1" />
                </div>
                <div className="mb-4">
                  <code className="text-xs font-mono text-accent bg-accent/10 px-2 py-1">{step.endpoint}</code>
                </div>
                <h3 className="font-serif text-2xl text-text-highlight mb-4">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="border-b border-grid bg-surface/10 py-24 md:py-32">
        <div className="px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
          <motion.div className="mb-16" {...fadeInUp}>
            <h2 className="font-serif text-4xl md:text-5xl text-text-highlight mb-6">
              Pricing
            </h2>
            <p className="text-text-secondary text-lg font-light max-w-2xl">
              Flat fees. No hourly billing. State filing fees and registered agent included.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Delaware LLC */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="border border-grid bg-bg p-10 relative"
            >
              <div className="inline-block px-2 py-0.5 bg-accent/10 border border-accent/30 text-accent text-xs font-mono uppercase tracking-widest mb-6">
                Most Common
              </div>
              <h3 className="font-serif text-3xl text-text-highlight mb-2">Delaware LLC</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="font-serif text-5xl text-accent">$349</span>
                <span className="text-text-muted text-sm">all-in</span>
              </div>
              <ul className="space-y-4 mb-10">
                {[
                  'Certificate of Formation',
                  'Registered agent (year 1)',
                  'Operating agreement + Agent Authority Schedule',
                  'EIN application',
                  'Webhook status updates',
                  '1–3 day formation',
                  'Bank pack generation',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <span className="text-text-secondary text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <motion.a
                href="https://sfp-formation-api.up.railway.app/docs"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-accent text-bg text-xs font-bold uppercase tracking-widest hover:bg-accentHover transition-colors duration-300"
              >
                Start Formation
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* Wyoming DAO LLC */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              className="border border-grid bg-bg p-10 relative"
            >
              <div className="inline-block px-2 py-0.5 bg-surface border border-grid text-text-muted text-xs font-mono uppercase tracking-widest mb-6">
                On-Chain Agents
              </div>
              <h3 className="font-serif text-3xl text-text-highlight mb-2">Wyoming DAO LLC</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="font-serif text-5xl text-text-highlight">$399</span>
                <span className="text-text-muted text-sm">all-in</span>
              </div>
              <ul className="space-y-4 mb-10">
                {[
                  'Everything in Delaware LLC',
                  'DAO-optimized operating agreement',
                  'Algorithmic governance clause',
                  'Smart contract reference in operating agreement',
                  'Multi-member support',
                  '2–5 day formation',
                  'Banking: Mercury + Relay recommended',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-surface/50 border border-grid flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-text-muted" />
                    </div>
                    <span className="text-text-secondary text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <motion.a
                href="https://sfp-formation-api.up.railway.app/docs"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-6 py-3 border border-border text-text-secondary text-xs font-bold uppercase tracking-widest hover:border-accent/50 hover:text-accent transition-colors duration-300"
              >
                Start Formation
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>

          <motion.p
            {...fadeInUp}
            className="text-text-muted text-sm text-center font-mono"
          >
            Need documents only?{' '}
            <Link
              to="/agents/insights/forming-llc-for-ai-agent"
              className="text-accent hover:text-accent/80 underline underline-offset-4 transition-colors"
            >
              $75 for templates only, no filing
            </Link>
          </motion.p>
        </div>
      </section>

      {/* For Agents Section */}
      <section className="border-b border-grid bg-bg">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Discovery methods */}
          <div className="p-12 md:p-16 lg:p-24 border-r border-grid">
            <motion.div {...fadeInUp}>
              <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 text-accent text-xs font-mono uppercase tracking-widest mb-8">
                Agent Discovery
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-text-highlight mb-6">
                Built for Agents
              </h2>
              <p className="text-text-secondary text-lg font-light mb-12 leading-relaxed">
                The API is designed to be discovered and consumed by autonomous agents — not just developers reading documentation.
              </p>
            </motion.div>

            <div className="space-y-6">
              {discoveryMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
                  className="group flex items-start gap-4 p-5 border border-grid hover:border-accent/30 hover:bg-surface/20 transition-all duration-300 block"
                >
                  <Globe className="w-5 h-5 text-accent/60 flex-shrink-0 mt-0.5 group-hover:text-accent transition-colors" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <code className="text-sm font-mono text-accent">{method.label}</code>
                      <ArrowRight className="w-3 h-3 text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-text-muted text-sm leading-relaxed">{method.description}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Code example */}
          <div className="p-12 md:p-16 lg:p-24 bg-surface/10 flex flex-col justify-center">
            <motion.div {...fadeInUp}>
              <h3 className="font-serif text-2xl text-text-highlight mb-3">
                Create an Entity Order
              </h3>
              <p className="text-text-secondary text-sm mb-8 leading-relaxed">
                A single POST request starts formation. The agent receives a formation ID and webhook updates at every stage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="bg-bg border border-grid overflow-x-auto"
            >
              <div className="flex items-center gap-2 px-5 py-3 border-b border-grid">
                <div className="w-2.5 h-2.5 rounded-full bg-text-muted/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-text-muted/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-text-muted/30" />
                <span className="ml-2 text-xs font-mono text-text-muted">example.sh</span>
              </div>
              <pre className="p-6 text-xs leading-relaxed text-text-secondary whitespace-pre overflow-x-auto">
                <code>{curlExample}</code>
              </pre>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-text-muted text-xs font-mono"
            >
              Webhook fires at:{' '}
              <code className="text-accent">formation.filed</code>
              {' · '}
              <code className="text-accent">formation.active</code>
              {' · '}
              <code className="text-accent">formation.ein_assigned</code>
            </motion.p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-bg py-24 md:py-32">
        <div className="px-8 md:px-16 lg:px-24 max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="font-serif text-5xl md:text-6xl text-text-highlight mb-6 leading-tight">
              Ready to give your agent <br/>
              a <span className="text-accent italic font-light">legal identity?</span>
            </h2>
            <p className="text-text-secondary text-lg mb-12 font-light max-w-xl mx-auto">
              Delaware LLC or Wyoming DAO LLC. API-first formation with five minutes of human involvement — total.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="https://sfp-formation-api.up.railway.app/docs"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-bg text-xs font-bold uppercase tracking-widest hover:bg-accentHover transition-colors duration-300"
              >
                Start Formation
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <Link
                to="/agents/insights"
                className="inline-flex items-center gap-3 px-8 py-4 text-text-secondary text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors duration-300"
              >
                Read our guide
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
