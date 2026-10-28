import React from 'react';
import {Link} from 'react-router-dom';
import {CompassRose,ArrowUp,ArrowUpRight,MapPin} from '@phosphor-icons/react';
import {useUI} from './ui';
import {modules} from './data';

const explore=[['/why-change','Why change'],['/solutions','Solutions'],['/demo/workbench','Synthetic demo'],['/pricing','Pilot & pricing'],['/results','Evaluation framework'],['/company','Company'],['/contact','Contact']];
const responsibility=[['/coverage','Demo scope'],['/resources','Resources'],['/trust','Trust & responsibility'],['/trust/consent','Consent'],['/trust/data-lifecycle','Data lifecycle'],['/trust/source-governance','Source governance'],['/integrations','External handoffs'],['/accessibility','Accessibility']];

export function Footer(){const {motion}=useUI();return <footer className="wall-footer" lang="en">
  <div className="footer-arrival">
    <div className="footer-closing-copy"><p className="eyebrow">THE PATH CONTINUES</p><h2>Every next step<br/>starts with <em>a person.</em></h2><p>Built around the people who help.<br/>And the people finding their way.</p></div>
    <div className="footer-compass" aria-hidden="true"><span className="compass-north">N</span><CompassRose weight="thin"/><span className="compass-caption">A HUMAN DIRECTION</span></div>
    <div className="footer-scope"><span className="eyebrow">OUR STARTING POINT</span><MapPin size={22} weight="light"/><strong>California.<br/>CalFresh.<br/>Human connection.</strong><span>One proposed pilot.<br/>English + Español sample flow.</span><Link to="/pilot">Explore the pilot <ArrowUpRight size={18}/></Link></div>
  </div>
  <div className="footer-directory">
    <nav className="footer-link-group" aria-label="Footer products"><h3><span>01</span> Proposed products</h3>{modules.map(m=><Link key={m.slug} to={'/products/'+m.slug}>{m.name}</Link>)}<Link to="/features">Capabilities</Link><Link to="/platform">Platform</Link></nav>
    <nav className="footer-link-group" aria-label="Footer explore"><h3><span>02</span> Explore</h3>{explore.map(([p,n])=><Link to={p} key={p}>{n}</Link>)}</nav>
    <nav className="footer-link-group" aria-label="Footer responsibility"><h3><span>03</span> With care</h3>{responsibility.map(([p,n])=><Link to={p} key={p}>{n}</Link>)}</nav>
    <aside className="footer-resource-note"><span className="footer-note-label">A USEFUL DIRECTION</span><h3>Looking for<br/>benefits?</h3><p>Your official state resources are the place to begin.</p><Link to="/resources/official-resources">Find official resources <ArrowUpRight size={19}/></Link><small>No waitlist. No information required here.</small></aside>
  </div>
  <div className="footer-signature"><Link to="/" aria-label="EnrollmentCompass home">Enrollment<span>Compass</span></Link><button className="footer-top" onClick={()=>motion?window.dispatchEvent(new Event('ec:top')):window.scrollTo({top:0,behavior:'instant'})} aria-label="Back to top"><ArrowUp size={23}/><span>BACK TO TOP</span></button></div>
  <div className="footer-colophon"><span>© {new Date().getFullYear()} EnrollmentCompass</span><span className="footer-concept"><i aria-hidden="true"/> CONCEPT PREVIEW · SYNTHETIC DATA</span><nav aria-label="Footer legal"><Link to="/legal/privacy">Privacy</Link><Link to="/legal/terms">Terms</Link></nav><p>Not a government agency. Screening does not determine eligibility.</p></div>
</footer>}
