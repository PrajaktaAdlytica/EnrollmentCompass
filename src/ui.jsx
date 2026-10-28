import React,{createContext,useContext} from 'react';
import {Link} from 'react-router-dom';
import {ArrowRight,ArrowUpRight,CompassRose,MapPin,CalendarBlank,FileText,Files,Question,Users,Plant,Bell,CheckCircle,WarningCircle,ShieldCheck,Trash,HandHeart,Check,Clock,Globe,LockKey,ChartBar,ClipboardText} from '@phosphor-icons/react';
export const UIContext=createContext();
export const useUI=()=>useContext(UIContext);
export const iconMap={question:Question,files:Files,calendar:CalendarBlank,bell:Bell,handoff:HandHeart,leaf:Plant,source:FileText,users:Users,check:CheckCircle,shield:ShieldCheck,trash:Trash,time:Clock,map:MapPin,report:ChartBar};
export function Icon({name,size=24,...props}){const C=iconMap[name]||CompassRose;return <C size={size} weight="regular" {...props}/>}
export function Brand(){return <Link to="/" className="brand" aria-label="EnrollmentCompass home"><CompassRose size={38} weight="light"/><span>EnrollmentCompass</span></Link>}
export function Button({to,children,secondary=false,light=false,className='',...props}){const cls=`button ${secondary?'secondary':''} ${light?'light':''} ${className}`;return to?<Link to={to} className={cls} {...props}>{children}<ArrowRight size={18}/></Link>:<button className={cls} {...props}>{children}<ArrowRight size={18}/></button>}
export function Eyebrow({children}){return <p className="eyebrow">{children}</p>}
export function Badge({children,tone=''}){return <span className={`badge ${tone}`}>{children}</span>}
export function DemoLabel(){const {lang}=useUI();return <span className="demo-label">{lang==='es'?'DEMO · DATOS SINTÉTICOS':'DEMO · SYNTHETIC DATA'}</span>}
export function External({href,children}){return <a href={href} target="_blank" rel="noopener noreferrer" className="external">{children}<ArrowUpRight size={17}/></a>}
export function SourceCard({source}){const {lang}=useUI();return <a className="source-row" href={source.url} target="_blank" rel="noopener noreferrer"><FileText size={25}/><span><strong>{lang==='es'?source.es:source.name}</strong><small>{source.description}</small></span><ArrowUpRight size={17}/></a>}
export function CTABand(){const {lang}=useUI();return <section className="cta-band"><div><Eyebrow>{lang==='es'?'COMIENCE CON UN PILOTO':'BEGIN WITH A PILOT'}</Eyebrow><h2>{lang==='es'?'Un estado. Un programa. Un propósito compartido.':'One state. One program. One shared purpose.'}</h2><p>{lang==='es'?'Explore una cohorte financiada y asistida por personas.':'Explore a funded, human-assisted cohort with your organization.'}</p></div><Button to="/pilot">{lang==='es'?'Explorar el piloto':'Explore the pilot'}</Button></section>}
export function StatusIcon({status}){return status==='Completed'?<CheckCircle size={18}/>:status==='Blocked'||status==='Rejected'?<WarningCircle size={18}/>:<Clock size={18}/>}
export {ArrowRight,ArrowUpRight,CompassRose,MapPin,CalendarBlank,FileText,Files,Question,Users,Plant,Bell,CheckCircle,WarningCircle,ShieldCheck,Trash,HandHeart,Check,Clock,Globe,LockKey,ChartBar,ClipboardText};
