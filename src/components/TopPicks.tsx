import { useState } from 'react';
import { motion } from 'framer-motion';
import { leadership } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';

export default function TopPicks() {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? leadership : leadership.slice(0, 5);
  return <>
    <SectionHeading kicker="Beyond the code" title="Leadership & Involvement" aside={<p className="max-w-xs text-sm text-mist">Developer community, alumni engagement, and university operations.</p>} />
    <div className="gutter mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
      {shown.map((item, index) => <motion.article key={`${item.role}-${item.organization}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6, delay: Math.min(index, 4) * .05, ease: EASE }} className="rounded-2xl bg-ink-2 p-6 ring-1 ring-white/10">
        <p className="text-xs font-semibold tracking-wider text-crimson-2">{item.period}</p>
        <h3 className="mt-3 font-display text-3xl leading-none tracking-wide text-bone">{item.role}</h3>
        <p className="mt-2 text-sm font-semibold text-mist">{item.organization}</p>
        <ul className="mt-4 space-y-2">{item.points.map((point) => <li key={point} className="flex gap-2 text-sm leading-relaxed text-bone/75"><span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson-2" />{point}</li>)}</ul>
      </motion.article>)}
    </div>
    <div className="gutter mt-7 text-center"><button type="button" onClick={() => setExpanded(!expanded)} aria-expanded={expanded} className="glass min-h-11 rounded-full px-6 text-sm font-semibold text-bone hover:bg-white/15">{expanded ? 'Show highlights' : `View all ${leadership.length} roles`}</button></div>
  </>;
}
