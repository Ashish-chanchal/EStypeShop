import React from "react";
import { FiSend, FiCheck } from "react-icons/fi";

const Newsletter = () => {
  const [email, setEmail] = React.useState("");
  const [done, setDone] = React.useState(false);

  return (
    <section className="container py-20">
      <div className="relative overflow-hidden rounded-4xl bg-ink-900 px-6 py-14 text-center text-white sm:px-12 dark:bg-ink-800">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-primary/40 blur-3xl" />
        <div className="relative mx-auto max-w-xl">
          <p className="eyebrow text-primary-500">Newsletter</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Get 10% off your first order</h2>
          <p className="mt-3 text-sm text-white/70">Early access to drops, members-only deals and the best of the journal. No spam, unsubscribe anytime.</p>
          <form
            onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 rounded-full sm:flex-row sm:bg-white/10 sm:p-1.5 sm:backdrop-blur"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              disabled={done}
              className="flex-1 rounded-full bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none sm:bg-transparent"
            />
            <button type="submit" disabled={done} className="btn-primary shadow-none">
              {done ? <><FiCheck /> Subscribed</> : <>Subscribe <FiSend /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
