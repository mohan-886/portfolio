import { useState } from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';

const filters = ['All', 'Technical Experience', 'Internships', 'Volunteering'] as const;

export default function Seasons() {
  const [filter, setFilter] = useState<string>('All');
  const visible = experience.filter((item) => filter === 'All' || item.categories.includes(filter));
  return <>
    <SectionHeading kicker="The work" title="Professional Experience" aside={<p className="max-w-xs text-sm text-mist">Software engineering, data, automation, and platform work.</p>} />
    <div className="gutter mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter experience">
      {filters.map((item) => <button key={item} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)} className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${filter === item ? 'border-bone bg-bone text-ink' : 'border-white/20 text-mist hover:border-bone hover:text-bone'}`}>{item}</button>)}
    </div>
    <div className="gutter mx-auto max-w-6xl">
      <div className="relative space-y-4 border-l border-crimson-2/35 pl-5 sm:pl-9">
        {visible.map((item, index) => <motion.article key={`${item.role}-${item.company}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .55, delay: Math.min(index, 4) * .06, ease: EASE }} className="relative rounded-2xl bg-ink-2 p-5 ring-1 ring-white/10 sm:p-7">
          <span aria-hidden className="absolute -left-[26px] top-8 h-2.5 w-2.5 rounded-full bg-crimson-2 sm:-left-[42px]" />
          <div className="flex flex-wrap justify-between gap-2"><div><h3 className="font-display text-3xl leading-none tracking-wide text-bone sm:text-4xl">{item.role}</h3><p className="mt-2 text-sm font-semibold text-crimson-2">{item.company}</p></div><p className="text-sm text-mist">{item.period}</p></div>
          <ul className="mt-5 space-y-2">{item.points.map((point) => <li key={point} className="flex gap-3 text-sm leading-relaxed text-bone/80"><span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson-2" />{point}</li>)}</ul>
        </motion.article>)}
      </div>
    </div>
  </>;
}
