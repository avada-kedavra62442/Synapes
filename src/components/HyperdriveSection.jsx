import { motion } from "framer-motion";
import {
  ArrowUpRight, Boxes, CheckCircle2, CircleDot, Clock3, Cog, FileText,
  Flag, Gauge, Layers3, Play, ShieldCheck, Sparkles, Target, Trophy, Zap
} from "lucide-react";
import SectionLabel from "./SectionLabel.jsx";

const gamePhases = [
  {
    time: "00:00–02:00",
    title: "COLLECT & SCORE",
    text: "Drive to collect your squad’s CORE rings. Score them on your HIGH POLES, STAR POLES or in the DROP ZONE. Each route has a different point value.",
    color: "orange",
  },
  {
    time: "STARBURST",
    title: "UNLOCK THE GOLDEN CORES",
    text: "STARBURST activates at 10 squad-specific COREs. Score your team PAYLOAD in the DROP ZONE to lower the threshold by six, then activate early at four COREs. Retrieve GOLDEN COREs and complete the revealed STAR MAP for a bonus.",
    color: "gold",
  },
  {
    time: "FINAL 00:30",
    title: "LEVEL UP",
    text: "The endgame begins. ENGAGE with or DOCK on your tilting SPACE STATION—or coordinate to BALANCE it. A robot stationed there can also score a CORE on the APEX POLE for extra points.",
    color: "cyan",
  },
];

const scoring = [
  { label: "Squad CORE · Drop Zone", points: "1", color: "orange" },
  { label: "Squad CORE · High Pole", points: "3", color: "orange" },
  { label: "Squad CORE · Star Pole", points: "5", color: "orange" },
  { label: "Squad CORE · Apex Pole", points: "9", color: "orange" },
  { label: "Golden CORE · Drop Zone", points: "3", color: "gold" },
  { label: "Golden CORE · Star Pole", points: "7", color: "gold" },
  { label: "Space Station · Engage / Dock / Balance", points: "3 / 8 / 15", color: "cyan" },
  { label: "Completed STAR MAP", points: "+10", color: "gold" },
  { label: "Payload bonus · both squad robots score", points: "+10", color: "cyan" },
];

function HyperdriveArena() {
  return (
    <div className="hd-arena glass-panel">
      <div className="hd-arena-header">
        <div>
          <span className="hd-kicker"><ActivityDot /> OFFICIAL NRL FIELD / FIGURE 3.1</span>
          <h3>THE ACTUAL HYPERDRIVE FIELD MAP</h3>
        </div>
        <span className="hd-field-size">12 FT × 12 FT</span>
      </div>
      <div className="hd-official-field-frame hd-field-map-wrap">
        <svg className="hd-field-map" viewBox="0 0 1000 690" role="img" aria-labelledby="hd-map-title hd-map-desc">
          <title id="hd-map-title">HYPERDRIVE 12 by 12 foot field map</title>
          <desc id="hd-map-desc">Top-down field layout showing red and blue squad zones, high poles, star poles, apex poles, vaults, drop zones, source zones, and space stations.</desc>
          <defs>
            <linearGradient id="hd-field-floor" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#101f35"/><stop offset="100%" stopColor="#08111f"/></linearGradient>
            <pattern id="hd-field-grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="#7894b5" strokeOpacity=".12" strokeWidth="1"/></pattern>
            <filter id="hd-map-glow"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          </defs>
          <rect x="96" y="46" width="808" height="598" rx="18" fill="#020711" stroke="#7894b5" strokeOpacity=".7" strokeWidth="3"/>
          <rect x="111" y="61" width="778" height="568" rx="8" fill="url(#hd-field-floor)" stroke="#d6e5f7" strokeOpacity=".42" strokeWidth="2"/>
          <rect x="111" y="61" width="778" height="568" fill="url(#hd-field-grid)"/>
          <path d="M500 61V629" stroke="#b5c8df" strokeOpacity=".22" strokeDasharray="7 9"/>
          <rect x="111" y="61" width="778" height="284" fill="#e94b63" fillOpacity=".055"/>
          <rect x="111" y="345" width="778" height="284" fill="#2d9dff" fillOpacity=".055"/>
          <g fontFamily="Inter, Arial, sans-serif" fontWeight="800" fontSize="16" letterSpacing="2">
            <text x="135" y="88" fill="#ff7182">RED SQUAD</text><text x="865" y="610" textAnchor="end" fill="#65b8ff">BLUE SQUAD</text>
          </g>
          <g strokeWidth="2">
            <rect x="128" y="103" width="150" height="76" rx="8" fill="#e94b63" fillOpacity=".15" stroke="#f05d70" strokeOpacity=".8"/>
            <text x="203" y="135" fill="#ffd6dc" fontSize="13" textAnchor="middle" fontWeight="700">RED SOURCE</text><text x="203" y="154" fill="#ffd6dc" fontSize="11" textAnchor="middle">ZONE</text>
            <rect x="722" y="511" width="150" height="76" rx="8" fill="#2d9dff" fillOpacity=".15" stroke="#429fff" strokeOpacity=".8"/>
            <text x="797" y="543" fill="#d5ebff" fontSize="13" textAnchor="middle" fontWeight="700">BLUE SOURCE</text><text x="797" y="562" fill="#d5ebff" fontSize="11" textAnchor="middle">ZONE</text>
            <rect x="128" y="511" width="150" height="76" rx="8" fill="#e94b63" fillOpacity=".1" stroke="#f05d70" strokeDasharray="5 4"/>
            <text x="203" y="544" fill="#ffd6dc" fontSize="12" textAnchor="middle" fontWeight="700">RED DROP</text><text x="203" y="562" fill="#ffd6dc" fontSize="11" textAnchor="middle">ZONE</text>
            <rect x="722" y="103" width="150" height="76" rx="8" fill="#2d9dff" fillOpacity=".1" stroke="#429fff" strokeDasharray="5 4"/>
            <text x="797" y="136" fill="#d5ebff" fontSize="12" textAnchor="middle" fontWeight="700">BLUE DROP</text><text x="797" y="154" fill="#d5ebff" fontSize="11" textAnchor="middle">ZONE</text>
          </g>
          <g fill="#f5b84b" stroke="#ffe4a3" strokeWidth="2" filter="url(#hd-map-glow)">
            <circle cx="355" cy="170" r="12"/><circle cx="645" cy="170" r="12"/><circle cx="355" cy="520" r="12"/><circle cx="645" cy="520" r="12"/>
          </g>
          <g fill="#e9f2ff" stroke="#8bb5e8" strokeWidth="2">
            <circle cx="390" cy="255" r="10"/><circle cx="500" cy="255" r="10"/><circle cx="610" cy="255" r="10"/>
            <circle cx="390" cy="435" r="10"/><circle cx="500" cy="435" r="10"/><circle cx="610" cy="435" r="10"/>
          </g>
          <g fill="#8b7cff" stroke="#c5beff" strokeWidth="2">
            <circle cx="445" cy="305" r="13"/><circle cx="555" cy="305" r="13"/><circle cx="445" cy="385" r="13"/><circle cx="555" cy="385" r="13"/>
          </g>
          <g fill="none" strokeWidth="4">
            <rect x="295" y="194" width="72" height="40" rx="8" stroke="#f05d70" fill="#e94b63" fillOpacity=".18"/>
            <rect x="633" y="456" width="72" height="40" rx="8" stroke="#429fff" fill="#2d9dff" fillOpacity=".18"/>
          </g>
          <g fill="#fff" fontFamily="Inter, Arial, sans-serif" fontSize="11" fontWeight="700" textAnchor="middle">
            <text x="331" y="218">RED VAULT</text><text x="669" y="480">BLUE VAULT</text>
            <text x="500" y="120" fontSize="13" letterSpacing="1.5">HIGH POLES × 3</text><text x="500" y="582" fontSize="13" letterSpacing="1.5">HIGH POLES × 3</text>
            <text x="500" y="288" fontSize="10" fill="#d7d0ff">STAR POLES</text><text x="500" y="410" fontSize="10" fill="#d7d0ff">STAR POLES</text>
          </g>
          <g stroke="#9cb5d4" strokeWidth="2" fill="#132a45"><rect x="454" y="72" width="92" height="30" rx="6"/><rect x="454" y="588" width="92" height="30" rx="6"/></g>
          <g fill="#eaf4ff" fontFamily="Inter, Arial, sans-serif" fontSize="11" fontWeight="800" textAnchor="middle"><text x="500" y="91">SPACE STATION</text><text x="500" y="607">SPACE STATION</text></g>
          <g fontFamily="Inter, Arial, sans-serif" fontSize="12" fill="#c6d7eb">
            <text x="500" y="25" textAnchor="middle" fontSize="13" fontWeight="800" letterSpacing="2">FIELD BOUNDARY · 12 FT × 12 FT</text>
            <text x="500" y="674" textAnchor="middle" fontSize="11" fill="#90a8c5">SCHEMATIC TOP-DOWN FIELD MAP · NOT TO SCALE</text>
          </g>
        </svg>
      </div>
      <div className="hd-arena-legend">
        <span><i className="legend-dot legend-red" /> RED SQUAD</span>
        <span><i className="legend-dot legend-blue" /> BLUE SQUAD</span>
        <span><i className="legend-dot legend-gold" /> GOLDEN CORE / STAR MAP</span>
        <span className="hd-field-count">OFFICIAL FIELD · 6 HIGH POLES · 4 STAR POLES · 4 APEX POLES · 2 SPACE STATIONS · 2 VAULTS</span>
      </div>
      <p className="hd-official-field-note">
        Top-down field map showing the main HYPERDRIVE zones and scoring elements. Use the official manual below for exact dimensions and setup details.
      </p>
    </div>
  );
}

function ActivityDot() {
  return <span className="hd-live-dot" aria-hidden="true" />;
}

export default function HyperdriveSection() {
  return (
    <section className="hyperdrive-section" id="hyperdrive">
      <div className="hyperdrive-backdrop" aria-hidden="true"><span>HD</span></div>
      <div className="section-wrap hyperdrive-inner">
        <motion.div className="hd-eyebrow glass-pill" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><span className="hd-live-dot" /> NRL 2026 GAME CHALLENGE <span className="hd-pill-divider">/</span> DELHI REGIONALS</motion.div>
        <div className="section-heading section-heading-light hd-main-heading">
          <div><SectionLabel number="04">THE GAME, EXPLAINED</SectionLabel><h2>THIS IS<br /><span>HYPERDRIVE.</span></h2><p className="hd-heading-sub">ENGINEERING THE FUTURE, ONE MISSION AT A TIME.</p></div>
          <div className="challenge-copy hd-intro">
            <p>HYPERDRIVE is NRL’s 2026 robotics game. Two Squads—RED and BLUE—each made up of two teams, compete on a 12 ft × 12 ft field. Over a 2 minute 30 second match, robots collect ring-shaped COREs, score them on poles or in drop zones, unlock Golden COREs, and finish with a high-stakes endgame. The field starts with 23 squad-coloured COREs per side plus six Golden COREs locked in each squad’s VAULT.</p>
            <p>The game rewards more than speed: the best plan balances quick scoring, a randomized STAR MAP, a team-built PAYLOAD, and the final attempt to engage with or balance on a tilting SPACE STATION.</p>
            <span className="challenge-mark">OFFICIAL GAME MANUAL <b>2026</b> <i>·</i> HYPERDRIVE</span>
          </div>
        </div>

        <div className="hd-video-layout">
          <motion.div className="hd-video glass-panel" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .65 }}>
            <div className="hd-video-top"><span><Play size={14} fill="currentColor" /> OFFICIAL GAME REVEAL</span><span>NRL × HYPERDRIVE</span></div>
            <div className="hd-video-frame"><iframe src="https://www.youtube-nocookie.com/embed/C0-qp_30QFk?rel=0" title="Official NRL 2026 HyperDrive game reveal" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>
            <div className="hd-video-caption"><span>WATCH THE CHALLENGE</span><span>OFFICIAL NRL VIDEO <ArrowUpRight size={14}/></span></div>
          </motion.div>
          <motion.div className="hd-game-brief glass-panel" initial={{ opacity: 0, x: 22 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .65, delay: .12 }}>
            <span className="hd-kicker"><Target size={14}/> THE OBJECTIVE</span>
            <h3>OUTSCORE.<br/><span>OUTTHINK.</span><br/>OUTLAST.</h3>
            <div className="hd-brief-stat"><Clock3 size={17}/><span><b>2:30</b><small>MATCH DURATION</small></span></div>
            <div className="hd-brief-stat"><UsersIcon/><span><b>2 vs 2 teams</b><small>PER SQUAD MATCH-UP</small></span></div>
            <div className="hd-brief-stat"><Layers3 size={17}/><span><b>CORE · GOLDEN CORE · PAYLOAD</b><small>THREE GAME ELEMENT TYPES</small></span></div>
            <p className="hd-brief-note">Each match reveals a randomized STAR MAP. Your squad must adapt its plan to the pattern, the field and the clock.</p>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .65 }}>
          <HyperdriveArena />
        </motion.div>

        <div className="hd-section-heading"><span className="hd-kicker"><Gauge size={14}/> HOW A MATCH UNFOLDS</span><h3>THREE PHASES.<br/><span>ONE COUNTDOWN.</span></h3></div>
        <div className="hd-phase-grid">
          {gamePhases.map((phase, index) => (
            <motion.article className={`hd-phase-card hd-phase-${phase.color}`} key={phase.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .12, duration: .55 }}>
              <div className="hd-phase-top"><span>PHASE 0{index + 1}</span><span>{phase.time}</span></div>
              <div className="hd-phase-icon">{index === 0 ? <CircleDot size={23}/> : index === 1 ? <Sparkles size={23}/> : <Zap size={23}/>}</div>
              <h4>{phase.title}</h4><p>{phase.text}</p><div className="hd-phase-track"><span/></div>
            </motion.article>
          ))}
        </div>

        <div className="hd-score-layout">
          <div className="hd-score-intro"><span className="hd-kicker"><Trophy size={14}/> KNOW THE POINTS</span><h3>EVERY MOVE<br/><span>HAS A VALUE.</span></h3><p>Official HYPERDRIVE scoring gives different rewards to different routes. These are the listed match-score values in the 2026 game manual; bonuses and ranking points are separate.</p></div>
          <div className="hd-scoreboard glass-panel">
            {scoring.map((item, index) => <motion.div className={`hd-score-row hd-score-${item.color}`} key={item.label} initial={{ opacity: 0, x: 14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .055 }}><span className="hd-score-index">0{index + 1}</span><span className="hd-score-label">{item.label}</span><strong>{item.points}</strong></motion.div>)}
            <div className="hd-score-foot"><CheckCircle2 size={15}/> Score values shown are from the NRL 2026 HYPERDRIVE game manual.</div>
          </div>
        </div>

        <div className="hd-focus-title"><span className="hd-kicker"><Cog size={14}/> WHAT THIS MEANS FOR SYNAPSE</span><h3>BUILD FOR THE GAME.<br/><span>THINK BEYOND IT.</span></h3><p>Our preparation has to connect robot design, driver practice, game strategy and the engineering portfolio—not treat them as separate jobs.</p></div>
        <div className="focus-grid">
          <motion.article className="focus-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }}><div className="focus-top"><span>01 / MECHANISM</span><Cog size={21}/></div><div className="focus-number">01</div><h3>RELIABLE PICKUP & SCORING</h3><p>Design a mechanism that can collect ring-shaped COREs consistently and place them where they earn points, without losing time to jams or resets.</p><div className="focus-rule"/></motion.article>
          <motion.article className="focus-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{delay:.08}}><div className="focus-top"><span>02 / STRATEGY</span><Flag size={21}/></div><div className="focus-number">02</div><h3>READ THE STAR MAP</h3><p>Plan for a randomized pattern, decide when to pursue Golden COREs, and coordinate with the partner team instead of relying on one fixed route.</p><div className="focus-rule"/></motion.article>
          <motion.article className="focus-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{delay:.16}}><div className="focus-top"><span>03 / ENDGAME</span><Zap size={21}/></div><div className="focus-number">03</div><h3>MAKE THE LAST 30 COUNT</h3><p>Practise approaching the tilting Space Station and choosing between engage, dock or balance, while leaving time for a safe, controlled finish.</p><div className="focus-rule"/></motion.article>
          <motion.article className="focus-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{delay:.24}}><div className="focus-top"><span>04 / EVIDENCE</span><FileText size={21}/></div><div className="focus-number">04</div><h3>DOCUMENT THE WHY</h3><p>Record prototypes, wiring, code decisions, tests and revisions in the Engineering Portfolio so our process is as clear as our robot.</p><div className="focus-rule"/></motion.article>
        </div>

        <div className="hd-manual-link glass-panel"><span className="hd-manual-icon"><FileText size={22}/></span><div><b>WANT THE EXACT RULES?</b><p>Use the official NRL 2026 HYPERDRIVE Game Manual for complete field definitions, robot rules, penalties and scoring details.</p></div><a href="https://drive.google.com/file/d/1Huwjv3W1Nv4YadcgpQLIuMZ6EhevKLcF/view" target="_blank" rel="noreferrer">OPEN GAME MANUAL <ArrowUpRight size={15}/></a></div>
        <div className="challenge-foot"><span><ShieldCheck size={17}/> SAFETY. STRATEGY. TEAMWORK.</span><span>ENGINEER THE NEXT ATTEMPT <ArrowUpRight size={15}/></span></div>
      </div>
    </section>
  );
}

function UsersIcon() {
  return <span className="hd-users-icon" aria-hidden="true">2×2</span>;
}
