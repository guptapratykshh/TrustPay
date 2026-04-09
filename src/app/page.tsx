export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 sm:px-10">
        <section className="space-y-5">
          <p className="inline-block rounded-full border border-zinc-600 bg-zinc-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-300">
            SCF Build Interest
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            TrustPay
          </h1>
          <p className="max-w-4xl text-lg text-zinc-300">
            Cross-border freelance work often splits{" "}
            <span className="text-zinc-100">delivery proof</span> and{" "}
            <span className="text-zinc-100">payment proof</span> across chats,
            invoices, and separate tools. That fragmentation drives delays,
            disputes, and low confidence on both sides.
          </p>
          <p className="max-w-4xl text-lg text-zinc-300">
            <span className="font-semibold text-zinc-100">TrustPay</span> is a
            milestone escrow product on{" "}
            <span className="text-zinc-100">Stellar</span>: funds sit in escrow,
            each milestone moves through explicit approval states, and release
            happens only after confirmation. Settlement stays tied to{" "}
            <span className="text-zinc-100">ledger-backed</span> activity.
          </p>
          <p className="max-w-4xl text-sm leading-relaxed text-zinc-400">
            The objective is a practical trust layer for one-to-one and
            small-team service work. Bulk disbursement stacks (including
            patterns like SDP) are strong at organization-scale payouts; TrustPay
            focuses on{" "}
            <span className="text-zinc-300">
              approval-gated escrow and milestone release
            </span>{" "}
            before money moves. The build is led with that positioning in mind.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-zinc-200">
            <span className="rounded-full border border-zinc-700 px-3 py-1">
              Milestone escrow
            </span>
            <span className="rounded-full border border-zinc-700 px-3 py-1">
              Approval-gated release
            </span>
            <span className="rounded-full border border-zinc-700 px-3 py-1">
              Stellar SDK + Horizon / RPC
            </span>
          </div>
        </section>

        <section className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
          <h2 className="text-2xl font-semibold">Current stage</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-300">
            TrustPay is <span className="text-zinc-100">pre-MVP</span>: a public
            site states the problem and direction; workflow design covers client
            vs freelancer roles, milestone states, and what must be true
            on-chain versus in-product before a release is allowed. There is no
            live mainnet product or transaction volume yet, the next step is a
            testnet-first implementation, then a controlled mainnet pilot.
          </p>
        </section>

        <section className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
          <h2 className="text-2xl font-semibold">Planned Stellar integration</h2>

          <h3 className="mt-5 text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Contract-to-ledger mapping
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-300">
            Each engagement maps to Stellar with clear fund segregation, a
            dedicated holding pattern (e.g. escrow-oriented account flow or an
            equivalent approach) so contract balances are not mixed with
            personal spending. Stable, settlement-oriented assets are preferred
            for the MVP where they match real freelancer use.
          </p>

          <h3 className="mt-5 text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Funding (client → escrow)
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-300">
            The client funds a milestone plan through Stellar. The app uses the{" "}
            <span className="text-zinc-100">Stellar SDK</span> to build
            transactions appropriate to the asset (including trust and
            authorization steps when required), submits them, and tracks{" "}
            <span className="text-zinc-100">pending → confirmed</span> via{" "}
            <span className="text-zinc-100">Horizon</span> or equivalent RPC.
            Transaction identifiers are stored as receipts linked to contract and
            milestone records.
          </p>

          <h3 className="mt-5 text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Release (escrow → freelancer)
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-300">
            Releases are <span className="text-zinc-100">state-gated</span>:
            only after milestone approval does the application submit the
            Stellar transaction that pays the approved tranche. Product state
            and settlement stay aligned, approvals are not UI-only promises
            disconnected from what moved on-chain.
          </p>

          <h3 className="mt-5 text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Observability and reliability
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-300">
            A service layer indexes contract identifiers to on-chain activity for
            dashboards and audit trails.{" "}
            <span className="text-zinc-100">Idempotency, retries,</span> and
            reconciliation handle failed or delayed submissions. The path is{" "}
            <span className="text-zinc-100">testnet end-to-end</span> first
            (fund → approve → release → verify in an explorer), then mainnet
            after basic reliability and UX checks.
          </p>

          <h3 className="mt-5 text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Ecosystem fit
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-300">
            If a later phase needs bulk payouts to many recipients, that can
            align with existing disbursement patterns; the MVP stays focused on
            milestone approval and escrow release as the differentiator.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-5">
            <h2 className="text-lg font-semibold">Workflow</h2>
            <p className="mt-2 text-sm text-zinc-300">
              Each contract follows explicit states:{" "}
              <span className="text-zinc-100">
                Draft → Funded → Submitted → Approved → Released
              </span>
              . Funds move only through valid transitions with explicit
              confirmation and ledger-backed records.
            </p>
          </article>
          <article className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-5">
            <h2 className="text-lg font-semibold">Product stack (MVP)</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-300">
              <li>Next.js for contract setup and milestone actions.</li>
              <li>API layer for metadata, notifications, and indexing.</li>
              <li>Stellar SDK + Horizon/RPC for submit and observe.</li>
              <li>Role-based actions and audit-friendly event history.</li>
            </ul>
          </article>
        </section>

        <section className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
          <h2 className="text-2xl font-semibold">Implementation approach</h2>
          <ul className="mt-4 grid gap-3 text-sm text-zinc-300 md:grid-cols-2">
            <li className="rounded-lg border border-zinc-800 p-4">
              <p className="font-semibold text-zinc-100">Escrow core</p>
              <p>
                Model contracts, state transitions, and funding flow on
                Stellar testnet.
              </p>
            </li>
            <li className="rounded-lg border border-zinc-800 p-4">
              <p className="font-semibold text-zinc-100">UI + API</p>
              <p>
                Client and freelancer views, milestone actions, and reliable
                endpoints.
              </p>
            </li>
            <li className="rounded-lg border border-zinc-800 p-4">
              <p className="font-semibold text-zinc-100">
                Observability + hardening
              </p>
              <p>
                Reconciliation, audit views, and handling for failed or delayed
                submissions.
              </p>
            </li>
            <li className="rounded-lg border border-zinc-800 p-4">
              <p className="font-semibold text-zinc-100">Pilot readiness</p>
              <p>
                Controlled pilot, then stable mainnet flows once checks pass.
              </p>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6">
          <h2 className="text-2xl font-semibold">SCF Build fit</h2>
          <p className="mt-2 text-sm text-zinc-300">
            <span className="text-zinc-100">Integration Track</span> fits
            TrustPay: it composes existing Stellar capabilities into an end-user
            workflow escrow funding, approval-gated release, and RPC-backed
            confirmation, rather than reinventing organization-scale disbursement.
          </p>
        </section>
      </main>
    </div>
  );
}
