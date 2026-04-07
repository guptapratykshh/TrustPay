export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 sm:px-10">
        <section className="space-y-5">
          <p className="inline-block rounded-full border border-zinc-600 bg-zinc-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-300">
            SCF Build Interest Draft
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            TrustPay
          </h1>
          <p className="max-w-4xl text-lg text-zinc-300">
            I am building TrustPay, a milestone-based escrow platform for
            freelancers and clients working across borders on Stellar. Today,
            proof of delivery and proof of payment are usually scattered across
            chats, invoices, and separate payment tools, which leads to delays
            and avoidable disputes.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-zinc-200">
            <span className="rounded-full border border-zinc-700 px-3 py-1">
              Milestone-bound release
            </span>
            <span className="rounded-full border border-zinc-700 px-3 py-1">
              Deterministic payout state machine
            </span>
            <span className="rounded-full border border-zinc-700 px-3 py-1">
              On-chain settlement verification
            </span>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-5">
            <h2 className="text-lg font-semibold">Problem Definition</h2>
            <p className="mt-2 text-sm text-zinc-300">
              From my perspective, global freelancing payments break because
              proof of work and proof of payment live in different places:
              chats, invoices, and third-party processors. That fragmentation
              causes disputes, delayed cashflow, and low trust between clients
              and contributors.
            </p>
          </article>
          <article className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-5">
            <h2 className="text-lg font-semibold">Technical Solution</h2>
            <p className="mt-2 text-sm text-zinc-300">
              TrustPay uses a contract-driven workflow where each milestone
              moves through explicit approval states:
              <span className="text-zinc-100">
                {" "}
                Draft {"->"} Funded {"->"} Submitted {"->"} Approved {"->"} Released
              </span>
              . Funds are released only after explicit confirmation, and payouts
              are backed by ledger-based settlement records for transparency and
              auditability.
            </p>
          </article>

          <article className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-5">
            <h2 className="text-lg font-semibold">System Architecture</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-300">
              <li>I use Next.js for contract setup and milestone approvals.</li>
              <li>I run an API service for metadata, signatures, and alerts.</li>
              <li>I execute escrow funding and payouts on Stellar.</li>
              <li>I track receipts through indexed transaction events.</li>
            </ul>
          </article>
          <article className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-5">
            <h2 className="text-lg font-semibold">Controls and Reliability</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-300">
              <li>I enforce role-based actions for client and freelancer.</li>
              <li>I add state guards to prevent invalid or duplicate release.</li>
              <li>I log every transition and payout event for auditability.</li>
              <li>I include timeout and cancellation paths for stalled work.</li>
            </ul>
          </article>
        </section>

        <section className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
          <h2 className="text-2xl font-semibold">Why This Solves a Real Pain</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-300">
            This is not a generic payout tool. It is a trust layer for service
            contracts where payment depends on milestone approval. I am
            focusing on reducing friction between delivery and settlement so
            both sides can work with higher confidence.
          </p>
        </section>

        <section className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
          <h2 className="text-2xl font-semibold">Implementation Approach</h2>
          <ul className="mt-4 grid gap-3 text-sm text-zinc-300 md:grid-cols-2">
            <li className="rounded-lg border border-zinc-800 p-4">
              <p className="font-semibold text-zinc-100">
                Phase 1: Escrow core
              </p>
              <p>
                I will model contracts, transitions, and escrow funding flow on
                Stellar testnet.
              </p>
            </li>
            <li className="rounded-lg border border-zinc-800 p-4">
              <p className="font-semibold text-zinc-100">
                Phase 2: Workflow UI + API
              </p>
              <p>
                I will build client/freelancer dashboards, milestone actions,
                and reliable API endpoints.
              </p>
            </li>
            <li className="rounded-lg border border-zinc-800 p-4">
              <p className="font-semibold text-zinc-100">
                Phase 3: Observability + hardening
              </p>
              <p>
                I will add transaction reconciliation, audit views, and robust
                error handling for failed or delayed operations.
              </p>
            </li>
            <li className="rounded-lg border border-zinc-800 p-4">
              <p className="font-semibold text-zinc-100">
                Phase 4: Pilot and launch readiness
              </p>
              <p>
                I will run a pilot cohort, collect completion metrics, and
                promote stable contract flows to mainnet.
              </p>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6">
          <h2 className="text-2xl font-semibold">SCF Build Fit</h2>
          <p className="mt-2 text-sm text-zinc-300">
            I plan to submit this to the Integration Track. TrustPay combines
            existing Stellar capabilities into a production-focused end-user
            workflow with clear engineering milestones and launch criteria.
          </p>
          <p className="mt-3 text-sm text-zinc-300">
            I also see this as complementary to Stellar Disbursement Platform:
            SDP handles bulk disbursement very well, while TrustPay focuses on
            milestone approval and escrow release logic before payout.
          </p>
        </section>
      </main>
    </div>
  );
}
