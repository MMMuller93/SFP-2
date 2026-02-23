import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from './types';

export const technicalPosts: BlogPost[] = [
  {
    id: 'api-quickstart',
    title: 'API Quickstart: Form an Entity in Under 5 Minutes',
    category: 'technical',
    audience: 'developer',
    date: 'February 19, 2026',
    readTime: '9 min read',
    excerpt: 'Full walkthrough: create an entity order, run a name check, collect owner info via human kernel, and track formation status — all with curl.',
    tags: ['api', 'quickstart', 'entity-formation', 'rest', 'curl'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          This guide walks you through the complete entity formation flow using the SFP Formation API. You will create an order, check name availability, collect owner information, and track the entity through to completion — all from your terminal.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Prerequisites</h2>

        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li>An API key (format: <code>sfp_live_...</code>). See the <Link to="/agents/insights/authentication-guide" className="text-accent hover:underline">authentication guide</Link> to generate one.</li>
          <li>curl installed (or any HTTP client).</li>
        </ul>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Step 1: Create an Entity Order</h2>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto"><pre className="text-text-secondary whitespace-pre-wrap">{`curl -X POST https://formation.strategicfundpartners.com/v1/entity-orders \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: sfp_live_your_key_here" \\
  -d '{
    "entity_name": "Atlas Trading LLC",
    "jurisdiction": "delaware",
    "vehicle_type": "llc",
    "agent_id": "agent-001"
  }'`}</pre></div>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto"><pre className="text-text-secondary whitespace-pre-wrap">{`{
  "id": "ord_8xk2m9v3",
  "status": "draft",
  "entity_name": "Atlas Trading LLC",
  "jurisdiction": "delaware",
  "created_at": "2026-02-19T14:30:00Z"
}`}</pre></div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Step 2: Check Name Availability</h2>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto"><pre className="text-text-secondary whitespace-pre-wrap">{`curl -X POST https://formation.strategicfundpartners.com/v1/entity-orders/ord_8xk2m9v3/name-check \\
  -H "X-API-Key: sfp_live_your_key_here"`}</pre></div>

        <p className="leading-relaxed text-text-secondary mb-6">
          If the name is taken, the order moves to <code>name_check_failed</code>. Create a new order with a different name. If available, the status advances to <code>name_check_passed</code>.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Step 3: Start a Human Kernel Session</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Owner identity and payment require human interaction. The human kernel creates a secure, time-limited session for this data collection.
        </p>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto"><pre className="text-text-secondary whitespace-pre-wrap">{`curl -X POST https://formation.strategicfundpartners.com/v1/entity-orders/ord_8xk2m9v3/human-kernel \\
  -H "X-API-Key: sfp_live_your_key_here"

# Response:
{
  "kernel_url": "https://formation.strategicfundpartners.com/kernel/sess_abc123",
  "expires_at": "2026-02-19T15:30:00Z"
}`}</pre></div>

        <p className="leading-relaxed text-text-secondary mb-6">
          Relay <code>kernel_url</code> to the human owner. When they complete the session, a <code>kernel.completed</code> webhook fires and the order continues automatically. See <Link to="/agents/insights/human-kernel-callbacks" className="text-accent hover:underline">Handling Human Kernel Callbacks</Link> for details.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Step 4: Track Order Status</h2>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto"><pre className="text-text-secondary whitespace-pre-wrap">{`curl https://formation.strategicfundpartners.com/v1/entity-orders/ord_8xk2m9v3 \\
  -H "X-API-Key: sfp_live_your_key_here"

# Terminal success state: "active"
# Terminal failure state: "failed"`}</pre></div>

        <div className="border-l-2 border-accent pl-6 py-2 mb-8">
          <p className="text-text-secondary"><strong>Tip:</strong> Use <Link to="/agents/insights/webhook-integration" className="text-accent hover:underline">webhooks</Link> instead of polling. Register for <code>order.state_changed</code> events to get real-time updates.</p>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">REST API</h4>
            <p className="text-sm text-text-secondary">Full formation flow via POST/GET endpoints. Create orders, check names, generate documents, and track status programmatically.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">MCP Integration</h4>
            <p className="text-sm text-text-secondary">Native tool use for Claude and other MCP-compatible agents. Same capabilities, natural language interface.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation. Entity formation requirements vary by jurisdiction and use case.
        </p>
      </>
    ),
  },
  {
    id: 'mcp-integration',
    title: 'MCP Server Setup: Entity Formation Tools for Claude',
    category: 'technical',
    audience: 'developer',
    date: 'February 15, 2026',
    readTime: '8 min read',
    excerpt: 'Connect Claude Desktop to the SFP Formation MCP server. Your agent gets native entity formation tools — create orders, check names, and track status through natural language.',
    tags: ['mcp', 'claude', 'agent-tools', 'integration', 'model-context-protocol'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          The Model Context Protocol (MCP) gives Claude native access to entity formation tools. Instead of writing HTTP requests, your agent calls tools like <code>create_entity_order</code> and <code>check_name_availability</code> directly. This guide covers setup, available tools, and example usage.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Claude Desktop Configuration</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Add the SFP Formation server to your Claude Desktop config file (<code>claude_desktop_config.json</code>):
        </p>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto"><pre className="text-text-secondary whitespace-pre-wrap">{`{
  "mcpServers": {
    "sfp-formation": {
      "url": "https://mcp.strategicfundpartners.com",
      "transport": "streamable-http",
      "headers": {
        "X-API-Key": "sfp_live_your_key_here"
      }
    }
  }
}`}</pre></div>

        <p className="leading-relaxed text-text-secondary mb-6">
          Restart Claude Desktop after saving. The formation tools will appear in Claude's tool list automatically.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Available Tools</h2>

        <table className="w-full border border-grid mb-8">
          <thead className="bg-surface/30">
            <tr>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Tool</th>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">create_entity_order</td>
              <td className="p-4 text-text-secondary">Create a new entity formation order</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">check_name_availability</td>
              <td className="p-4 text-text-secondary">Check if an entity name is available in a jurisdiction</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">get_entity_status</td>
              <td className="p-4 text-text-secondary">Get current status and details of an order</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">start_human_kernel</td>
              <td className="p-4 text-text-secondary">Create a secure session for human data collection</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">list_available_vehicles</td>
              <td className="p-4 text-text-secondary">List entity types available per jurisdiction</td>
            </tr>
          </tbody>
        </table>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Example: Full Formation Flow</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          With the MCP server connected, Claude can handle a formation request conversationally:
        </p>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto"><pre className="text-text-secondary whitespace-pre-wrap">{`User: "Form a Delaware LLC called Nexus Analytics LLC for my trading agent."

Claude calls: create_entity_order({
  entity_name: "Nexus Analytics LLC",
  jurisdiction: "delaware",
  vehicle_type: "llc"
})
→ Returns order_id: "ord_9xm3n8w4"

Claude calls: check_name_availability({ order_id: "ord_9xm3n8w4" })
→ Returns { available: true, status: "name_check_passed" }

Claude calls: start_human_kernel({ order_id: "ord_9xm3n8w4" })
→ Returns { kernel_url: "https://...", expires_at: "..." }

Claude: "Name is available. I need your owner to complete identity
verification. Here's the secure link: [kernel_url]"`}</pre></div>

        <div className="border-l-2 border-accent pl-6 py-2 mb-8">
          <p className="text-text-secondary"><strong>Note:</strong> The MCP server uses the same API underneath. All <Link to="/agents/insights/formation-state-machine" className="text-accent hover:underline">state machine rules</Link> and <Link to="/agents/insights/webhook-integration" className="text-accent hover:underline">webhook events</Link> apply identically.</p>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">MCP Server</h4>
            <p className="text-sm text-text-secondary">Streamable HTTP transport at mcp.strategicfundpartners.com. Compatible with Claude Desktop and any MCP client.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">REST API Fallback</h4>
            <p className="text-sm text-text-secondary">Same capabilities via standard HTTP for agents that don't support MCP. See the <Link to="/agents/insights/api-quickstart" className="text-accent hover:underline">API quickstart</Link>.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation. Entity formation requirements vary by jurisdiction and use case.
        </p>
      </>
    ),
  },
  {
    id: 'webhook-integration',
    title: 'Webhook Integration: Responding to Formation Events',
    category: 'technical',
    audience: 'developer',
    date: 'February 11, 2026',
    readTime: '8 min read',
    excerpt: 'Register webhook endpoints to receive real-time formation events. Handle state changes, verify HMAC signatures, and build reliable event-driven integrations.',
    tags: ['webhooks', 'events', 'integration', 'hmac', 'real-time'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Webhooks let your agent react to formation events in real time instead of polling. When an order changes state, a document is ready, or a human kernel completes, the API sends a signed POST request to your endpoint.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Register a Webhook</h2>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto"><pre className="text-text-secondary whitespace-pre-wrap">{`curl -X POST https://formation.strategicfundpartners.com/v1/webhooks \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: sfp_live_your_key_here" \\
  -d '{
    "url": "https://your-app.com/webhooks/formation",
    "events": ["order.state_changed", "order.completed", "kernel.completed"],
    "secret": "whsec_your_signing_secret"
  }'`}</pre></div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Event Types</h2>

        <table className="w-full border border-grid mb-8">
          <thead className="bg-surface/30">
            <tr>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Event</th>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Fires When</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">order.state_changed</td>
              <td className="p-4 text-text-secondary">Order transitions to any new state</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">order.completed</td>
              <td className="p-4 text-text-secondary">Order reaches <code>active</code> state</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">order.failed</td>
              <td className="p-4 text-text-secondary">Order reaches <code>failed</code> state</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">kernel.completed</td>
              <td className="p-4 text-text-secondary">Human kernel session completed</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">kernel.expired</td>
              <td className="p-4 text-text-secondary">Human kernel session expired unused</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">documents.ready</td>
              <td className="p-4 text-text-secondary">Formation documents generated</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">filing.confirmed</td>
              <td className="p-4 text-text-secondary">State filing accepted</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">ein.issued</td>
              <td className="p-4 text-text-secondary">IRS EIN assigned to entity</td>
            </tr>
          </tbody>
        </table>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Payload Shape</h2>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto"><pre className="text-text-secondary whitespace-pre-wrap">{`{
  "event": "order.state_changed",
  "order_id": "ord_8xk2m9v3",
  "timestamp": "2026-02-11T16:45:00Z",
  "data": {
    "previous_state": "payment_complete",
    "current_state": "human_kernel_required",
    "entity_name": "Atlas Trading LLC"
  }
}`}</pre></div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">HMAC Signature Verification</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Every webhook includes an <code>X-SFP-Signature</code> header containing an HMAC-SHA256 signature of the request body. Always verify this before processing.
        </p>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto"><pre className="text-text-secondary whitespace-pre-wrap">{`import crypto from 'crypto';

function verifyWebhook(body: string, signature: string, secret: string): boolean {
  const expected = crypto
    .createHmac('sha256', secret)
    .update(body, 'utf8')
    .digest('hex');
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expected)
  );
}`}</pre></div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Retry Behavior</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          If your endpoint returns a non-2xx status, the API retries with exponential backoff: 1s, 5s, 30s, 5m, 30m. After 5 failed attempts, the webhook is marked as failing and no further retries are attempted. Return 200 quickly and process asynchronously.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Webhook Management</h4>
            <p className="text-sm text-text-secondary">Register, update, and delete webhook endpoints via the API. Filter by event type to receive only what you need.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Signed Payloads</h4>
            <p className="text-sm text-text-secondary">Every webhook is HMAC-SHA256 signed. Verify signatures to ensure payloads are authentic and untampered.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation. Entity formation requirements vary by jurisdiction and use case.
        </p>
      </>
    ),
  },
  {
    id: 'authentication-guide',
    title: 'API Authentication: Keys, Scopes, and Security',
    category: 'technical',
    audience: 'developer',
    date: 'February 7, 2026',
    readTime: '7 min read',
    excerpt: 'Generate API keys, assign scopes, rotate credentials, and follow security best practices for the SFP Formation API.',
    tags: ['authentication', 'api-keys', 'security', 'scopes'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          The SFP Formation API uses API key authentication. Every request must include a valid key in the <code>X-API-Key</code> header. Keys are scoped to limit what each integration can do, and should be rotated regularly.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Key Format</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          All API keys follow the format <code>sfp_live_...</code> for production and <code>sfp_test_...</code> for sandbox. Test keys work against the sandbox environment and never trigger real state filings or charges.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Authentication Header</h2>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto"><pre className="text-text-secondary whitespace-pre-wrap">{`curl https://formation.strategicfundpartners.com/v1/entity-orders \\
  -H "X-API-Key: sfp_live_your_key_here"`}</pre></div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Scopes</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Each key is assigned one or more scopes that control access. Assign the minimum scopes required for each integration.
        </p>

        <table className="w-full border border-grid mb-8">
          <thead className="bg-surface/30">
            <tr>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Scope</th>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Grants Access To</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">orders:read</td>
              <td className="p-4 text-text-secondary">GET entity orders and status</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">orders:write</td>
              <td className="p-4 text-text-secondary">Create orders, run name checks, start human kernels</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">webhooks:manage</td>
              <td className="p-4 text-text-secondary">Register, update, and delete webhook endpoints</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">*</td>
              <td className="p-4 text-text-secondary">Full access to all endpoints (use sparingly)</td>
            </tr>
          </tbody>
        </table>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Key Rotation</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Rotate keys at least every 90 days. Generate a new key, update your integration, verify it works, then revoke the old key. Both keys remain valid during the transition window so you can rotate without downtime.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Security Best Practices</h2>

        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li><strong>Never expose keys in client-side code.</strong> API keys belong on the server, in environment variables or a secrets manager.</li>
          <li><strong>Use the narrowest scope possible.</strong> A read-only dashboard needs only <code>orders:read</code>.</li>
          <li><strong>Monitor usage.</strong> Unexpected spikes in API calls may indicate a compromised key.</li>
          <li><strong>Use test keys for development.</strong> Never test against production with live keys.</li>
        </ul>

        <div className="border-l-2 border-accent pl-6 py-2 mb-8">
          <p className="text-text-secondary"><strong>If a key is compromised:</strong> Revoke it immediately in the dashboard. Generate a new key and update all integrations. Compromised keys cannot be reactivated.</p>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Key Management</h4>
            <p className="text-sm text-text-secondary">Generate, scope, rotate, and revoke API keys from the dashboard. Full audit log of key usage.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Sandbox Environment</h4>
            <p className="text-sm text-text-secondary">Test keys for development. Full API surface with no real filings, no charges, and no rate limits.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation. Entity formation requirements vary by jurisdiction and use case.
        </p>
      </>
    ),
  },
  {
    id: 'formation-state-machine',
    title: 'The Formation State Machine: Understanding Order Status',
    category: 'technical',
    audience: 'developer',
    date: 'February 3, 2026',
    readTime: '8 min read',
    excerpt: 'Every entity order moves through a deterministic state machine. Learn every state, valid transition, terminal condition, and how to build reliable automations around them.',
    tags: ['state-machine', 'order-status', 'api', 'automation'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Every entity formation order is a state machine. It starts at <code>draft</code> and progresses through a defined set of states until it reaches a terminal state (<code>active</code> or <code>failed</code>). Understanding these states is essential for building reliable automations.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">State Diagram</h2>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto"><pre className="text-text-secondary whitespace-pre-wrap">{`draft
  → intake_complete
    → name_check_passed → payment_pending
    → name_check_failed (terminal or retry with new name)
      → payment_complete
        → human_kernel_required
          → human_kernel_completed → docs_generated
          → kernel_expired (retry-able)
        → sanctions_blocked (terminal)
      → payment_failed (retry-able)
        → docs_generated
          → state_filing_submitted
            → state_confirmed → ein_pending
            → filing_rejected (retry-able)
              → ein_issued → bank_pack_ready → active ✓
              → ein_manual_review → ein_issued
                                  → failed ✗`}</pre></div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">All States</h2>

        <table className="w-full border border-grid mb-8">
          <thead className="bg-surface/30">
            <tr>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">State</th>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Type</th>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">draft</td>
              <td className="p-4 text-text-secondary">Initial</td>
              <td className="p-4 text-text-secondary">Order created, awaiting intake</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">intake_complete</td>
              <td className="p-4 text-text-secondary">Progress</td>
              <td className="p-4 text-text-secondary">Entity details submitted</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">name_check_passed</td>
              <td className="p-4 text-text-secondary">Progress</td>
              <td className="p-4 text-text-secondary">Entity name available in jurisdiction</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">name_check_failed</td>
              <td className="p-4 text-text-secondary">Blocked</td>
              <td className="p-4 text-text-secondary">Name unavailable or restricted</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">payment_pending</td>
              <td className="p-4 text-text-secondary">Progress</td>
              <td className="p-4 text-text-secondary">Awaiting payment processing</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">payment_complete</td>
              <td className="p-4 text-text-secondary">Progress</td>
              <td className="p-4 text-text-secondary">Payment confirmed</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">payment_failed</td>
              <td className="p-4 text-text-secondary">Retry-able</td>
              <td className="p-4 text-text-secondary">Payment declined — can retry</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">human_kernel_required</td>
              <td className="p-4 text-text-secondary">Waiting</td>
              <td className="p-4 text-text-secondary">Human identity verification needed</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">human_kernel_completed</td>
              <td className="p-4 text-text-secondary">Progress</td>
              <td className="p-4 text-text-secondary">Human verification done</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">kernel_expired</td>
              <td className="p-4 text-text-secondary">Retry-able</td>
              <td className="p-4 text-text-secondary">Kernel session timed out — request new one</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">sanctions_blocked</td>
              <td className="p-4 text-text-secondary">Terminal</td>
              <td className="p-4 text-text-secondary">Blocked by sanctions screening</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">docs_generated</td>
              <td className="p-4 text-text-secondary">Progress</td>
              <td className="p-4 text-text-secondary">Formation documents created</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">state_filing_submitted</td>
              <td className="p-4 text-text-secondary">Progress</td>
              <td className="p-4 text-text-secondary">Filed with secretary of state</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">state_confirmed</td>
              <td className="p-4 text-text-secondary">Progress</td>
              <td className="p-4 text-text-secondary">State accepted the filing</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">filing_rejected</td>
              <td className="p-4 text-text-secondary">Retry-able</td>
              <td className="p-4 text-text-secondary">State rejected — can correct and refile</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">ein_pending</td>
              <td className="p-4 text-text-secondary">Progress</td>
              <td className="p-4 text-text-secondary">EIN application submitted to IRS</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">ein_issued</td>
              <td className="p-4 text-text-secondary">Progress</td>
              <td className="p-4 text-text-secondary">IRS assigned EIN</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">ein_manual_review</td>
              <td className="p-4 text-text-secondary">Waiting</td>
              <td className="p-4 text-text-secondary">EIN requires manual IRS review</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">bank_pack_ready</td>
              <td className="p-4 text-text-secondary">Progress</td>
              <td className="p-4 text-text-secondary">Banking documents prepared</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">active</td>
              <td className="p-4 text-text-secondary">Terminal</td>
              <td className="p-4 text-text-secondary">Entity fully formed and operational</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">failed</td>
              <td className="p-4 text-text-secondary">Terminal</td>
              <td className="p-4 text-text-secondary">Formation failed permanently</td>
            </tr>
          </tbody>
        </table>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Handling States in Your Agent</h2>

        <div className="border-l-2 border-accent pl-6 py-2 mb-8">
          <p className="text-text-secondary"><strong>Retry-able states</strong> (<code>payment_failed</code>, <code>kernel_expired</code>, <code>filing_rejected</code>) allow the order to re-enter the flow. Your agent should detect these and take corrective action automatically.</p>
        </div>

        <p className="leading-relaxed text-text-secondary mb-6">
          Subscribe to <code>order.state_changed</code> <Link to="/agents/insights/webhook-integration" className="text-accent hover:underline">webhooks</Link> to react to transitions in real time. Match states to agent behaviors: notify the human for <code>human_kernel_required</code>, retry payment for <code>payment_failed</code>, and celebrate at <code>active</code>.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Deterministic State Machine</h4>
            <p className="text-sm text-text-secondary">Every order follows a defined state graph. No ambiguity — your automations can rely on predictable transitions.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Real-Time Webhooks</h4>
            <p className="text-sm text-text-secondary">Get notified on every state transition. Build event-driven agents that react instantly.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation. Entity formation requirements vary by jurisdiction and use case.
        </p>
      </>
    ),
  },
  {
    id: 'human-kernel-callbacks',
    title: 'Handling Human Kernel Callbacks in Your Agent',
    category: 'technical',
    audience: 'developer',
    date: 'January 30, 2026',
    readTime: '7 min read',
    excerpt: 'The human kernel bridges the gap between automated agent workflows and legally required human interactions. Learn how to create sessions, relay URLs, handle callbacks, and process returned data.',
    tags: ['human-kernel', 'callbacks', 'webhooks', 'agent-workflow'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Some formation steps require a human in the loop — identity verification, payment authorization, and document signing cannot be performed by an AI agent. The human kernel creates a secure, time-limited session where the human completes these steps, then returns control to your agent.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How the Human Kernel Works</h2>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto"><pre className="text-text-secondary whitespace-pre-wrap">{`Agent                    API                     Human
  │                       │                        │
  ├─ POST /human-kernel ─→│                        │
  │←── kernel_url ────────│                        │
  │                       │                        │
  ├─ relay URL to human ──┼───────────────────────→│
  │                       │                        │
  │                       │←── completes session ──│
  │                       │                        │
  │←── webhook: kernel.completed ──│               │
  │                       │                        │
  ├─ GET /entity-orders ─→│                        │
  │←── updated order ─────│                        │`}</pre></div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Step 1: Create a Kernel Session</h2>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto"><pre className="text-text-secondary whitespace-pre-wrap">{`curl -X POST https://formation.strategicfundpartners.com/v1/entity-orders/ord_8xk2m9v3/human-kernel \\
  -H "X-API-Key: sfp_live_your_key_here"

{
  "kernel_url": "https://formation.strategicfundpartners.com/kernel/sess_abc123",
  "expires_at": "2026-01-30T15:30:00Z"
}`}</pre></div>

        <p className="leading-relaxed text-text-secondary mb-6">
          The <code>kernel_url</code> is a one-time, expiring link. The human opens it in a browser to complete identity verification and payment. The session expires at <code>expires_at</code> — typically 60 minutes after creation.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Step 2: Relay the URL</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          How you relay the URL depends on your agent's interface. Common patterns:
        </p>

        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li><strong>Chat interface:</strong> Display the link directly in the conversation.</li>
          <li><strong>Email/SMS:</strong> Send the link via a notification service.</li>
          <li><strong>Dashboard:</strong> Embed the link or an iframe in your app's UI.</li>
        </ul>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Step 3: Handle the Callback</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Register for <code>kernel.completed</code> and <code>kernel.expired</code> <Link to="/agents/insights/webhook-integration" className="text-accent hover:underline">webhook events</Link>. When the human finishes, you receive:
        </p>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto"><pre className="text-text-secondary whitespace-pre-wrap">{`{
  "event": "kernel.completed",
  "order_id": "ord_8xk2m9v3",
  "timestamp": "2026-01-30T14:52:00Z",
  "data": {
    "kernel_session": "sess_abc123",
    "identity_verified": true,
    "payment_authorized": true
  }
}`}</pre></div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Handling Expiration</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          If the session expires before completion, the order moves to <code>kernel_expired</code>. This is a retry-able state — call <code>POST /human-kernel</code> again to create a new session. The <code>kernel.expired</code> webhook notifies your agent automatically.
        </p>

        <div className="border-l-2 border-accent pl-6 py-2 mb-8">
          <p className="text-text-secondary"><strong>Tip:</strong> Track expiration times and proactively remind the human before the session expires. A 15-minute warning prevents most expirations.</p>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Human Kernel Sessions</h4>
            <p className="text-sm text-text-secondary">Secure, time-limited sessions for human-required steps. No sensitive data touches your agent or servers.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Webhook Notifications</h4>
            <p className="text-sm text-text-secondary">Real-time callbacks when sessions complete or expire. Your agent resumes automatically.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation. Entity formation requirements vary by jurisdiction and use case.
        </p>
      </>
    ),
  },
  {
    id: 'system-prompt-snippets',
    title: 'System Prompt Snippets: Entity Formation Knowledge for Your Agent',
    category: 'technical',
    audience: 'developer',
    date: 'January 26, 2026',
    readTime: '5 min read',
    excerpt: 'Ready-to-copy system prompt fragments that give your AI agent entity formation knowledge. Drop them into your system prompt and your agent can guide users through LLC formation.',
    tags: ['system-prompt', 'agent-design', 'llm', 'prompt-engineering'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Your agent does not need to be an expert on entity formation law. It needs the right system prompt fragments. These snippets give your agent enough knowledge to guide users through formation, answer common questions, and hand off to the API at the right moments.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Core Formation Knowledge</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Add this block to give your agent baseline entity formation awareness:
        </p>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto"><pre className="text-text-secondary whitespace-pre-wrap">{`## Entity Formation Capabilities

You can help users form legal entities (LLCs) through the SFP Formation API.

Available jurisdictions:
- Delaware: Standard LLC ($349). Best for most agent use cases. Strong legal
  precedent, no state income tax on out-of-state revenue, privacy-friendly.
- Wyoming: DAO LLC ($399). Supports decentralized governance structures.
  Explicitly recognizes DAOs in statute.

Formation flow:
1. Collect entity name and jurisdiction preference
2. Check name availability via API
3. If available, create a human kernel session for identity/payment
4. Relay the secure link to the user
5. Monitor webhooks for completion
6. Entity is active when it reaches "active" state

You CANNOT collect identity documents, payment information, or SSNs directly.
Always use the human kernel for sensitive data collection.`}</pre></div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">FAQ Handling Snippet</h2>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto"><pre className="text-text-secondary whitespace-pre-wrap">{`## Common Entity Formation Questions

- "How long does formation take?" → 1-5 business days depending on jurisdiction.
  Delaware is typically 1-2 days. Wyoming is 2-5 days.
- "What do I need to get started?" → Entity name, jurisdiction choice, and the
  owner must complete identity verification through a secure link.
- "Can my AI agent own the LLC?" → No. A human or existing legal entity must be
  the owner/member. The AI agent operates under the entity's authority via an
  Agent Authority Schedule.
- "What's included?" → State filing, operating agreement, registered agent (1yr),
  EIN, and banking resolution.
- "Do I need a lawyer?" → Not required for standard formation, but recommended
  for complex structures or multi-member entities.`}</pre></div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Guardrails Snippet</h2>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto"><pre className="text-text-secondary whitespace-pre-wrap">{`## Entity Formation Guardrails

DO NOT:
- Provide legal advice or guarantee outcomes
- Collect SSNs, driver's license numbers, or payment card numbers
- Claim expertise in tax planning or regulatory compliance
- Suggest formation as a way to avoid taxes or hide assets
- Proceed without the human owner's explicit consent

ALWAYS:
- Disclose that you are not a lawyer
- Recommend consulting an attorney for complex situations
- Use the human kernel for all sensitive data collection
- Confirm jurisdiction choice before initiating formation`}</pre></div>

        <div className="border-l-2 border-accent pl-6 py-2 mb-8">
          <p className="text-text-secondary"><strong>Tip:</strong> You can also point your agent at <code>GET /llms.txt</code> on the API to fetch machine-readable formation context dynamically. This keeps your system prompt current as our offerings evolve.</p>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">llms.txt Endpoint</h4>
            <p className="text-sm text-text-secondary">Machine-readable context at <code>GET /llms.txt</code>. Always up-to-date formation knowledge for your agent's system prompt.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">MCP Integration</h4>
            <p className="text-sm text-text-secondary">Skip the prompt engineering — connect your Claude agent to the <Link to="/agents/insights/mcp-integration" className="text-accent hover:underline">MCP server</Link> for native tool access.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation. Entity formation requirements vary by jurisdiction and use case.
        </p>
      </>
    ),
  },
  {
    id: 'error-handling-retries',
    title: 'Error Handling and Retry Strategies',
    category: 'technical',
    audience: 'developer',
    date: 'January 22, 2026',
    readTime: '7 min read',
    excerpt: 'Handle API errors gracefully with proper status code handling, exponential backoff, and idempotent request patterns. Build agents that recover from failures automatically.',
    tags: ['error-handling', 'retries', 'idempotency', 'reliability'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Your agent will encounter errors — network failures, invalid inputs, rate limits, and transient server issues. This guide covers every error code the API returns, when to retry, and how to build retry logic that does not create duplicate orders.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">HTTP Status Codes</h2>

        <table className="w-full border border-grid mb-8">
          <thead className="bg-surface/30">
            <tr>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Code</th>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Meaning</th>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Retry?</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">400</td>
              <td className="p-4 text-text-secondary">Bad Request — invalid parameters</td>
              <td className="p-4 text-text-secondary">No — fix the request</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">401</td>
              <td className="p-4 text-text-secondary">Unauthorized — invalid or missing API key</td>
              <td className="p-4 text-text-secondary">No — check credentials</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">404</td>
              <td className="p-4 text-text-secondary">Not Found — order or resource doesn't exist</td>
              <td className="p-4 text-text-secondary">No — check the ID</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">409</td>
              <td className="p-4 text-text-secondary">Conflict — invalid state transition</td>
              <td className="p-4 text-text-secondary">No — check order state first</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">422</td>
              <td className="p-4 text-text-secondary">Unprocessable — valid JSON but business rule violation</td>
              <td className="p-4 text-text-secondary">No — fix the data</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">429</td>
              <td className="p-4 text-text-secondary">Rate Limited — too many requests</td>
              <td className="p-4 text-text-secondary">Yes — with backoff</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary font-mono text-sm">500</td>
              <td className="p-4 text-text-secondary">Internal Server Error — transient failure</td>
              <td className="p-4 text-text-secondary">Yes — with backoff</td>
            </tr>
          </tbody>
        </table>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Retry Strategy</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Only retry on 429 and 5xx responses. Use exponential backoff with jitter to avoid thundering herd. Never retry 4xx errors (except 429) — the request itself is wrong.
        </p>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto"><pre className="text-text-secondary whitespace-pre-wrap">{`async function fetchWithRetry(url: string, options: RequestInit, maxRetries = 3) {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    const response = await fetch(url, options);

    if (response.ok) return response;

    if (response.status === 429 || response.status >= 500) {
      if (attempt === maxRetries) throw new Error(\`Failed after \${maxRetries} retries\`);
      const delay = Math.min(1000 * Math.pow(2, attempt), 30000);
      const jitter = delay * (0.5 + Math.random() * 0.5);
      await new Promise(r => setTimeout(r, jitter));
      continue;
    }

    // 4xx (except 429): don't retry, throw immediately
    const body = await response.json();
    throw new Error(\`API error \${response.status}: \${body.message}\`);
  }
}`}</pre></div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Idempotency</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          When retrying <code>POST</code> requests, include an <code>Idempotency-Key</code> header to prevent duplicate resource creation. The API returns the same response for repeated requests with the same key within 24 hours.
        </p>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto"><pre className="text-text-secondary whitespace-pre-wrap">{`curl -X POST https://formation.strategicfundpartners.com/v1/entity-orders \\
  -H "X-API-Key: sfp_live_your_key_here" \\
  -H "Idempotency-Key: idem_a1b2c3d4e5f6" \\
  -H "Content-Type: application/json" \\
  -d '{ "entity_name": "Atlas Trading LLC", "jurisdiction": "delaware" }'`}</pre></div>

        <div className="border-l-2 border-accent pl-6 py-2 mb-8">
          <p className="text-text-secondary"><strong>Best practice:</strong> Generate idempotency keys deterministically from order parameters (e.g., hash of entity name + jurisdiction + timestamp). This ensures retries of the same logical request always use the same key.</p>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Error Response Format</h2>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto"><pre className="text-text-secondary whitespace-pre-wrap">{`{
  "error": {
    "code": "invalid_state_transition",
    "message": "Cannot start name check: order is in 'payment_pending' state",
    "order_id": "ord_8xk2m9v3",
    "current_state": "payment_pending"
  }
}`}</pre></div>

        <p className="leading-relaxed text-text-secondary mb-6">
          Error responses always include a machine-readable <code>code</code> and a human-readable <code>message</code>. Use the <code>code</code> field for programmatic handling and the <code>message</code> for logging. See the <Link to="/agents/insights/formation-state-machine" className="text-accent hover:underline">state machine guide</Link> for valid transitions.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Structured Errors</h4>
            <p className="text-sm text-text-secondary">Every error includes a machine-readable code, message, and relevant context. No guessing what went wrong.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Idempotency Support</h4>
            <p className="text-sm text-text-secondary">Send an Idempotency-Key header on POST requests. Safe to retry without creating duplicates.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation. Entity formation requirements vary by jurisdiction and use case.
        </p>
      </>
    ),
  },
];
