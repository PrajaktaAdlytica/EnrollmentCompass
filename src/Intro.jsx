import React,{useEffect,useRef,useState} from 'react';
import {Link} from 'react-router-dom';
import {CompassRose,Pause,Play,ArrowDown,ArrowUpRight} from '@phosphor-icons/react';
import {Brand,useUI} from './ui';

export function Intro(){
  const {motion,setMotion,lang}=useUI();
  const es=lang==='es';
  const section=useRef(null),video=useRef(null),advanced=useRef(false),endTimer=useRef(null);
  const [mounted,setMounted]=useState(false),[ready,setReady]=useState(false),[open,setOpen]=useState(false),[visible,setVisible]=useState(true),[scrolled,setScrolled]=useState(false),[blocked,setBlocked]=useState(false),[failed,setFailed]=useState(false),[finished,setFinished]=useState(false);
  const menuState=useRef(false);
  menuState.current=open;
  const navigate=target=>{
    setOpen(false);advanced.current=true;
    window.dispatchEvent(new CustomEvent('ec:scroll-lock',{detail:false}));
    const el=document.querySelector(target);if(!el)return;
    if(motion)window.dispatchEvent(new CustomEvent('ec:scroll-to',{detail:{target,offset:innerWidth<=700?-66:-82,duration:1.8}}));
    else window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-(innerWidth<=700?66:82),behavior:'instant'});
  };
  useEffect(()=>{
    const timer=setTimeout(()=>setMounted(true),100);
    const update=()=>{
      const isVisible=section.current.getBoundingClientRect().bottom>100;
      setVisible(isVisible);setScrolled(window.scrollY>40);
      document.documentElement.dataset.introVisible=String(isVisible);
    };
    update();window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);
    return()=>{clearTimeout(timer);clearTimeout(endTimer.current);window.removeEventListener('scroll',update);window.removeEventListener('resize',update);delete document.documentElement.dataset.introVisible;};
  },[]);
  useEffect(()=>{
    const el=video.current;if(!el)return;
    if(motion&&!open&&visible&&!finished&&!failed){el.play().then(()=>setBlocked(false)).catch(()=>setBlocked(true));}
    else el.pause();
  },[motion,open,visible,finished,failed]);
  useEffect(()=>{
    if(!open)return;
    const previous=document.body.style.overflow;
    document.body.style.overflow='hidden';
    window.dispatchEvent(new CustomEvent('ec:scroll-lock',{detail:true}));
    const links=Array.from(section.current.querySelectorAll('.intro-menu a'));
    links[0]?.focus({preventScroll:true});
    const key=e=>{
      if(e.key==='Escape'){setOpen(false);section.current.querySelector('.intro-menu-toggle')?.focus({preventScroll:true});}
      if(e.key==='Tab'){
        const controls=[...links,section.current.querySelector('.intro-menu-toggle')];
        const first=controls[0],last=controls.at(-1);
        if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
        else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
      }
    };
    document.addEventListener('keydown',key);
    return()=>{document.body.style.overflow=previous;window.dispatchEvent(new CustomEvent('ec:scroll-lock',{detail:false}));document.removeEventListener('keydown',key);};
  },[open]);
  const ended=()=>{
    setFinished(true);
    endTimer.current=setTimeout(()=>{
      if(!advanced.current&&!menuState.current&&!document.hidden&&section.current.getBoundingClientRect().bottom>innerHeight*.5)navigate('#top');
    },180);
  };
  const restart=()=>{advanced.current=false;setFinished(false);setBlocked(false);setMotion(true);video.current.currentTime=0;video.current.play().catch(()=>setBlocked(true));};
  const items=[['#top',es?'Inicio':'Home'],['#journey',es?'El recorrido':'The journey'],['#products',es?'Los módulos':'The modules'],['/request-demo',es?'Explorar un piloto':'Discuss a pilot']];
  return <section ref={section} id="cinematic-intro" className={`cinematic-intro ${mounted?'intro-mounted':''} ${ready?'intro-ready':''}`} aria-label={es?'Introducción de EnrollmentCompass':'EnrollmentCompass introduction'}>
    <div className="intro-video-wrap"><video ref={video} src="/video/enrollmentcompass-intro.mp4" autoPlay={motion} muted playsInline preload="auto" onLoadedData={()=>setReady(true)} onEnded={ended} onError={()=>setFailed(true)} aria-hidden="true" tabIndex={-1}/></div>
    <header className={`intro-nav ${scrolled?'intro-nav-scrolled':''} ${visible?'':'intro-nav-hidden'}`} aria-hidden={!visible} inert={!visible?true:undefined}>
      <Brand/>
      <button className={`intro-menu-toggle ${open?'is-open':''}`} aria-expanded={open} aria-controls="intro-menu" aria-label={open?'Close navigation':'Open navigation'} onClick={()=>setOpen(!open)}><span className="intro-menu-label">{open?(es?'Cerrar':'Close'):(es?'Navegar':'Navigate')}</span><span className="intro-hamburger" aria-hidden="true"><i/><i/></span></button>
      <div className="intro-nav-right"><button onClick={()=>setMotion(!motion)} aria-label={motion?'Pause intro and motion':'Play intro and enable motion'}>{motion?<Pause size={20}/>:<Play size={20}/>}</button><CompassRose size={30} weight="light" aria-hidden="true"/></div>
    </header>
    <div id="intro-menu" className={`intro-menu ${open?'is-open':''}`} role="dialog" aria-modal={open?true:undefined} aria-label="Explore EnrollmentCompass" aria-hidden={!open} inert={!open?true:undefined}>
      <nav aria-label="Intro navigation">{items.map(([to,label],i)=>to.startsWith('#')?<a href={to} key={to} style={{'--link-delay':`${150+i*80}ms`}} onClick={e=>{e.preventDefault();navigate(to)}}>{label}<ArrowUpRight size={26}/></a>:<Link key={to} style={{'--link-delay':`${150+i*80}ms`}} to={to} onClick={()=>setOpen(false)}>{label}<ArrowUpRight size={26}/></Link>)}</nav>
    </div>
    <div className="intro-copy"><h1>{es?<>Un camino más claro. <br/>Una conexión humana.</>:<>A clearer path. <br/>A human connection.</>}</h1><p>{es?'Un espacio propuesto para quienes acompañan a las personas en la inscripción.':'A proposed workspace for the people who guide enrollment.'}</p><a href="#top" className="intro-cta" onClick={e=>{e.preventDefault();navigate('#top')}}>{es?'Descubrir EnrollmentCompass':'Discover EnrollmentCompass'}<ArrowDown size={18}/></a></div>
    <div className="intro-bottom"><span>{es?'VISTA CONCEPTUAL · NO SOMOS UNA AGENCIA GUBERNAMENTAL':'CONCEPT PREVIEW · NOT A GOVERNMENT AGENCY'}</span><button onClick={()=>navigate('#top')}>{es?'Saltar introducción':'Skip intro'}<ArrowDown size={15}/></button></div>
    {(blocked||!motion||finished||failed)&&<div className="intro-playback-status">{failed?<span>{es?'La película no está disponible. Puede continuar abajo.':'The film is unavailable. You can continue below.'}</span>:<button onClick={restart}><Play size={15}/>{finished?(es?'Repetir introducción':'Replay intro'):(es?'Reproducir introducción':'Play intro')}</button>}</div>}
  </section>;
}
