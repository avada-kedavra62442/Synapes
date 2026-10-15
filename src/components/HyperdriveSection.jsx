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

function CoreRing({ x, y, color = "orange", delay = 0 }) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.65 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      style={{ transformOrigin: `${x}px ${y}px` }}
    >
      <circle cx={x} cy={y} r="10" fill="none" stroke={color === "gold" ? "#f5cf67" : color === "blue" ? "#54d8f4" : "#ff8054"} strokeWidth="7" opacity=".18" />
      <circle cx={x} cy={y} r="7" fill="none" stroke={color === "gold" ? "#f5cf67" : color === "blue" ? "#54d8f4" : "#ff8054"} strokeWidth="4" />
      <circle cx={x} cy={y} r="2" fill="#eaf4fc" opacity=".9" />
    </motion.g>
  );
}

function Pole({ x, y, color = "orange", rings = 2, label }) {
  const tone = color === "blue" ? "#54d8f4" : color === "gold" ? "#f5cf67" : "#ff8054";
  return (
    <g>
      <ellipse cx={x} cy={y + 8} rx="14" ry="5" fill="#02070d" opacity=".7" />
      <path d={`M ${x} ${y + 3} L ${x} ${y - 25}`} stroke={tone} strokeWidth="3" strokeLinecap="round" />
      {Array.from({ length: rings }).map((_, i) => (
        <ellipse key={i} cx={x} cy={y - 2 - i * 8} rx="9" ry="4" fill="none" stroke={tone} strokeWidth="3" />
      ))}
      <circle cx={x} cy={y + 3} r="3" fill={tone} />
      {label && <text x={x} y={y + 24} fill="#9db1c3" fontSize="7" textAnchor="middle" fontFamily="Space Mono, monospace">{label}</text>}
    </g>
  );
}

function HyperdriveArena() {
  return (
    <div className="hd-arena glass-panel">
      <div className="hd-arena-header">
        <div><span className="hd-kicker"><ActivityDot /> FIELD SCHEMATIC / 01</span><h3>THE HYPERDRIVE ARENA</h3></div>
        <span className="hd-field-size">12 FT × 12 FT</span>
      </div>
      <div className="hd-arena-art">
        <svg viewBox="0 0 720 470" role="img" aria-label="Illustrated top-down schematic of the HyperDrive arena with red and blue squads, core rings, scoring poles, vaults, drop zones and space stations">
          <defs>
            <linearGradient id="hdField" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#152b3c"/><stop offset="100%" stopColor="#0a131e"/></linearGradient>
            <linearGradient id="hdStation" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#a8bacb"/><stop offset="100%" stopColor="#42576a"/></linearGradient>
            <pattern id="hdGrid" width="36" height="36" patternUnits="userSpaceOnUse"><path d="M36 0H0V36" fill="none" stroke="#8ca5bb" strokeOpacity=".11" strokeWidth="1"/></pattern>
            <filter id="hdGlow"><feGaussianBlur stdDeviation="8"/></filter>
          </defs>
          <rect x="56" y="24" width="608" height="408" rx="16" fill="#03080e" opacity=".8" />
          <rect x="66" y="34" width="588" height="388" rx="11" fill="url(#hdField)" stroke="#7890a5" strokeOpacity=".55" strokeWidth="2"/>
          <rect x="66" y="34" width="588" height="388" rx="11" fill="url(#hdGrid)"/>
          <path d="M360 35V421" stroke="#a2b7ca" strokeOpacity=".2" strokeDasharray="5 7"/>
          <rect x="80" y="49" width="274" height="358" rx="8" fill="#ff8054" fillOpacity=".035" stroke="#ff8054" strokeOpacity=".23" strokeDasharray="4 6"/>
          <rect x="366" y="49" width="274" height="358" rx="8" fill="#54d8f4" fillOpacity=".035" stroke="#54d8f4" strokeOpacity=".23" strokeDasharray="4 6"/>
          <text x="94" y="68" fill="#ff9b79" fontSize="10" fontFamily="Space Mono, monospace" letterSpacing="2">RED SQUAD</text>
          <text x="625" y="68" fill="#78e5f7" fontSize="10" textAnchor="end" fontFamily="Space Mono, monospace" letterSpacing="2">BLUE SQUAD</text>
          <rect x="95" y="91" width="84" height="55" rx="7" fill="#ff8054" fillOpacity=".1" stroke="#ff8054" strokeOpacity=".6"/>
          <text x="137" y="113" fill="#ff9b79" textAnchor="middle" fontSize="8" fontFamily="Space Mono, monospace">RED</text><text x="137" y="126" fill="#ff9b79" textAnchor="middle" fontSize="8" fontFamily="Space Mono, monospace">VAULT</text>
          <rect x="541" y="91" width="84" height="55" rx="7" fill="#54d8f4" fillOpacity=".1" stroke="#54d8f4" strokeOpacity=".6"/>
          <text x="583" y="113" fill="#78e5f7" textAnchor="middle" fontSize="8" fontFamily="Space Mono, monospace">BLUE</text><text x="583" y="126" fill="#78e5f7" textAnchor="middle" fontSize="8" fontFamily="Space Mono, monospace">VAULT</text>
          <rect x="95" y="320" width="112" height="65" rx="7" fill="#ff8054" fillOpacity=".08" stroke="#ff8054" strokeOpacity=".65" strokeDasharray="4 4"/>
          <text x="151" y="349" fill="#ff9b79" textAnchor="middle" fontSize="9" fontFamily="Space Mono, monospace">DROP ZONE</text><text x="151" y="364" fill="#a7b6c4" textAnchor="middle" fontSize="7" fontFamily="Space Mono, monospace">+ CORE POINTS</text>
          <rect x="513" y="320" width="112" height="65" rx="7" fill="#54d8f4" fillOpacity=".08" stroke="#54d8f4" strokeOpacity=".65" strokeDasharray="4 4"/>
          <text x="569" y="349" fill="#78e5f7" textAnchor="middle" fontSize="9" fontFamily="Space Mono, monospace">DROP ZONE</text><text x="569" y="364" fill="#a7b6c4" textAnchor="middle" fontSize="7" fontFamily="Space Mono, monospace">+ CORE POINTS</text>
          <g>
            <rect x="277" y="66" width="166" height="44" rx="8" fill="#d4e1ed" fillOpacity=".06" stroke="#9eb5c9" strokeOpacity=".3"/>
            <text x="360" y="83" fill="#d9e5ee" fontSize="8" textAnchor="middle" fontFamily="Space Mono, monospace">RANDOMIZED</text><text x="360" y="96" fill="#d9e5ee" fontSize="9" textAnchor="middle" fontFamily="Space Mono, monospace">STAR MAP</text>
          </g>
          <g stroke="#9eb5c9" strokeOpacity=".28" fill="none"><path d="M216 168H504M216 248H504M216 298H504"/></g>
          <Pole x={228} y={174} color="orange" rings={3} label="HIGH POLE"/>
          <Pole x={284} y={174} color="orange" rings={2} label="STAR POLE"/>
          <Pole x={436} y={174} color="blue" rings={2} label="STAR POLE"/>
          <Pole x={492} y={174} color="blue" rings={3} label="HIGH POLE"/>
          <Pole x={228} y={269} color="orange" rings={1}/>
          <Pole x={492} y={269} color="blue" rings={1}/>
          <rect x="297" y="224" width="126" height="44" rx="8" fill="#f5cf67" fillOpacity=".07" stroke="#f5cf67" strokeOpacity=".65"/>
          <text x="360" y="242" fill="#f5cf67" textAnchor="middle" fontSize="8" fontFamily="Space Mono, monospace">STAR MAP</text>
          <text x="360" y="255" fill="#d4dfeb" textAnchor="middle" fontSize="7" fontFamily="Space Mono, monospace">MATCH THE PATTERN</text>
          <g transform="translate(285 333)">
            <ellipse cx="0" cy="0" rx="44" ry="17" fill="#54d8f4" opacity=".12" filter="url(#hdGlow)"/>
            <rect x="-42" y="-13" width="84" height="26" rx="7" fill="url(#hdStation)" stroke="#c6d4e0" strokeOpacity=".7"/>
            <path d="M-34 0H34" stroke="#1b2b3a" strokeWidth="3" strokeDasharray="5 4"/>
            <text x="0" y="30" fill="#b9cbd9" textAnchor="middle" fontSize="7" fontFamily="Space Mono, monospace">SPACE STATION</text>
          </g>
          <g transform="translate(435 333)">
            <ellipse cx="0" cy="0" rx="44" ry="17" fill="#54d8f4" opacity=".12" filter="url(#hdGlow)"/>
            <rect x="-42" y="-13" width="84" height="26" rx="7" fill="url(#hdStation)" stroke="#c6d4e0" strokeOpacity=".7"/>
            <path d="M-34 0H34" stroke="#1b2b3a" strokeWidth="3" strokeDasharray="5 4"/>
            <text x="0" y="30" fill="#b9cbd9" textAnchor="middle" fontSize="7" fontFamily="Space Mono, monospace">SPACE STATION</text>
          </g>
          <CoreRing x={198} y={218} color="orange" delay={0.05}/><CoreRing x={250} y={226} color="orange" delay={0.1}/><CoreRing x={312} y={184} color="gold" delay={0.15}/><CoreRing x={390} y={184} color="gold" delay={0.2}/><CoreRing x={460} y={225} color="blue" delay={0.25}/><CoreRing x={518} y={218} color="blue" delay={0.3}/>
          <motion.path d="M174 280Q235 302 278 278T360 287T443 278T546 280" fill="none" stroke="#a6c7dc" strokeOpacity=".55" strokeWidth="1.5" strokeDasharray="4 7" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, delay: .2 }}/>
          <circle cx="360" cy="287" r="5" fill="#f5cf67"><animate attributeName="opacity" values=".45;1;.45" dur="2s" repeatCount="indefinite"/></circle>
          <text x="360" y="401" fill="#72899c" textAnchor="middle" fontSize="8" fontFamily="Space Mono, monospace" letterSpacing="1.5">ILLUSTRATIVE FIELD MAP · NOT TO SCALE</text>
        </svg>
      </div>
      <div className="hd-arena-legend">
        <span><i className="legend-dot legend-red" /> RED SQUAD</span><span><i className="legend-dot legend-blue" /> BLUE SQUAD</span><span><i className="legend-dot legend-gold" /> GOLDEN CORE / STAR MAP</span>
        <span className="hd-field-count">FIELD KIT · 6 HIGH POLES · 4 STAR POLES · 4 APEX POLES · 2 SPACE STATIONS</span>
      </div>
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

        <div className="hd-focus-title"><span className="hd-kicker"><Cog size={14}/> WHAT THIS MEANS FOR SYNAPES</span><h3>BUILD FOR THE GAME.<br/><span>THINK BEYOND IT.</span></h3><p>Our preparation has to connect robot design, driver practice, game strategy and the engineering portfolio—not treat them as separate jobs.</p></div>
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
