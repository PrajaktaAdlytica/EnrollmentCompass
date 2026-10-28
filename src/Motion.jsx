import {useLayoutEffect,useRef} from 'react';
import {useLocation} from 'react-router-dom';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import {useUI} from './ui';

gsap.registerPlugin(ScrollTrigger);

export function Motion(){
  const {pathname}=useLocation();
  const {motion,lang}=useUI();
  const previousPath=useRef(null);
  useLayoutEffect(()=>{
    if(previousPath.current!==pathname){window.scrollTo(0,0);previousPath.current=pathname;}
    document.title=pathname==='/'?'EnrollmentCompass — A little clarity. A human connection.':pathname.split('/').filter(Boolean).at(-1)?.replaceAll('-',' ')+' · EnrollmentCompass';
    document.documentElement.dataset.motion=motion?'on':'off';
    if(!motion)return;
    let disposed=false;
    const lenis=new Lenis({duration:1.2,smoothWheel:true,syncTouch:false,anchors:{offset:-110},autoRaf:false});
    const tick=time=>lenis.raf(time*1000);
    lenis.on('scroll',ScrollTrigger.update);
    gsap.ticker.add(tick);
    const top=()=>lenis.scrollTo(0,{duration:1.35});
    window.addEventListener('ec:top',top);
    const scrollTo=e=>{lenis.start();lenis.scrollTo(e.detail.target,{offset:e.detail.offset??-82,duration:e.detail.duration??1.5});};
    const scrollLock=e=>e.detail?lenis.stop():lenis.start();
    window.addEventListener('ec:scroll-to',scrollTo);window.addEventListener('ec:scroll-lock',scrollLock);
    const ctx=gsap.context(()=>{
      const mm=gsap.matchMedia();
      mm.add({desktop:'(min-width: 1100px) and (min-height: 760px)',mobile:'(max-width: 1099px), (max-height: 759px)'},({conditions})=>{
        const desktop=conditions.desktop;
        const distance=desktop?54:22;
        const demo=pathname.startsWith('/demo');
        const reveal=(elements,vars={},trigger)=>{
          const items=gsap.utils.toArray(elements);
          if(!items.length)return;
          return gsap.from(items,{y:distance,autoAlpha:0,duration:.95,ease:'power3.out',stagger:.09,...vars,scrollTrigger:{trigger:trigger||items[0],start:'top 94%',once:true},clearProps:'transform,opacity,visibility,clipPath'});
        };
        gsap.fromTo('.reading-progress',{scaleX:0},{scaleX:1,ease:'none',scrollTrigger:{start:0,end:()=>ScrollTrigger.maxScroll(window),scrub:.2}});
        if(!demo){
          const hero=document.querySelector('.hero');
          if(hero){
            const entry=gsap.timeline({defaults:{ease:'power3.out'},scrollTrigger:{trigger:hero,start:'top 65%',once:true}});
            entry.from('.hero-art',{scale:1.045,duration:1.6},0)
              .from('.hero-copy > .eyebrow',{y:-24,opacity:0,duration:.65,clearProps:'all'},.1)
              .from('.hero-title span',{y:-42,opacity:0,stagger:.14,duration:.9,clearProps:'all'},.25)
              .from('.hero-lead',{y:-25,opacity:0,duration:.8,clearProps:'all'},.55)
              .from('.hero-scope',{y:-25,opacity:0,duration:.8,clearProps:'all'},.75)
              .from('.hero-copy > .button,.hero-copy > .boundary',{y:-20,opacity:0,stagger:.12,duration:.75,clearProps:'all'},.95)
              .from('.floating-card',{y:-45,opacity:0,stagger:.2,duration:.95,clearProps:'all'},.45);
            if(desktop){
              gsap.to('.hero-art',{yPercent:9,ease:'none',scrollTrigger:{trigger:hero,start:'top top',end:'bottom top',scrub:1.2}});
              gsap.to('.hero-cards',{y:-70,ease:'none',scrollTrigger:{trigger:hero,start:'top top',end:'bottom top',scrub:1}});
            }
          }
          reveal('.page-hero > div > *, .product-hero > div:first-child > *, .signin-panel > *',{y:32,stagger:.1});
          reveal('.product-visual',{x:desktop?65:0,y:24,rotation:desktop?2:0,duration:1.2});
          // Each chapter has its own entrance, rather than replaying the entire page.
          gsap.utils.toArray('main .reveal').forEach(el=>{
            if(el.matches('.stage,.module-card,.process-card,.buyer-card,.metric-card,.preview-workbench')||el.closest('.consent-section'))return;
            const dir=el.dataset.from;
            reveal(el,{x:dir==='left'?-distance:dir==='right'?distance:0,y:dir?0:distance});
          });
          gsap.utils.toArray('.process-grid,.buyer-grid,.metric-grid,.related-grid,.module-bento,.platform-flow,.decision-grid').forEach(grid=>{
            reveal(Array.from(grid.children),{y:desktop?65:25,stagger:.12},grid);
          });
          gsap.utils.toArray('.section-pad > h2,.section-heading:not(.reveal) h2,.boundary-section h2,.pilot-detail h2,.footer-closing-copy h2').forEach(el=>reveal(el,{y:25,clipPath:'inset(0% 0% 100% 0%)',duration:1.1}));
          gsap.utils.toArray('.resource-entry,.resource-article,.gate,.product-details article,.faq details').forEach((el,i)=>reveal(el,{x:desktop?(i%2?25:-25):0,y:20}));
          reveal('.price-card',{y:40,rotation:desktop?-2:0});
          // Keep input controls immediately usable; only the neighboring story moves.
          reveal('.inquiry-layout > aside,.resource-aside',{x:desktop?-35:0,y:20});
          const journey=document.querySelector('.journey-section');
          if(journey){
            reveal('.stage',{y:35,stagger:.15},journey);
            if(desktop&&journey.offsetHeight<=window.innerHeight-90){
              let last=-1;
              gsap.to('.journey-scroll-progress',{scaleX:1,ease:'none',scrollTrigger:{trigger:journey,start:'top 105px',end:'+=850',pin:true,pinSpacing:true,scrub:.6,invalidateOnRefresh:true,onUpdate:self=>{
                const index=Math.min(3,Math.floor(self.progress*4));
                if(index!==last){last=index;window.dispatchEvent(new CustomEvent('ec:journey',{detail:index}));}
              }}});
            }
          }
          const consent=document.querySelector('.consent-section');
          if(consent){
            reveal('.consent-copy',{x:desktop?-50:0,y:25},consent);
            reveal('.permission-path > *',{y:22,stagger:.12},'.permission-path');
            reveal('.consent-receipt',{x:desktop?60:0,y:30,rotation:desktop?2:0,duration:1.1},consent);
          }
          const workbench=document.querySelector('.preview-workbench');
          if(workbench){
            gsap.from(workbench,{y:desktop?85:25,rotationX:desktop?8:0,transformPerspective:1200,opacity:.35,ease:'none',scrollTrigger:{trigger:workbench,start:'top 96%',end:'top 50%',scrub:.8}});
            reveal('.preview-record,.preview-evidence',{x:desktop?30:0,y:20,stagger:.18},workbench);
          }
          if(desktop){
            gsap.utils.toArray('.page-hero > img,.signin-art > img').forEach(el=>gsap.fromTo(el,{scale:1.12,yPercent:-4},{scale:1,yPercent:6,ease:'none',scrollTrigger:{trigger:el.parentElement,start:'top bottom',end:'bottom top',scrub:1.1}}));
            gsap.utils.toArray('.editorial-layout > aside').forEach(el=>{
              const parent=el.parentElement;
              if(parent.offsetHeight>el.offsetHeight+160&&el.offsetHeight<window.innerHeight-150)ScrollTrigger.create({trigger:el,start:'top 120px',end:()=>'+='+Math.max(0,parent.offsetHeight-el.offsetHeight-130),pin:true,pinSpacing:false,invalidateOnRefresh:true});
            });
          }
          gsap.utils.toArray('.cta-band').forEach(el=>{
            reveal(el.children,{x:desktop?35:0,y:30,stagger:.16},el);
          });
        }else{
          // Task controls stay stationary in the working demo.
          reveal('.demo-heading',{y:16,duration:.55});
          reveal('.demo-stats > *',{y:14,duration:.5,stagger:.06});
        }
        const footer=document.querySelector('.wall-footer');
        if(footer){
          reveal('.footer-scope',{x:desktop?35:0,y:20},'.footer-arrival');
          reveal('.footer-link-group,.footer-resource-note',{y:35,stagger:.11},'.footer-directory');
          if(desktop){
            gsap.fromTo('.footer-compass',{rotation:-35,y:35},{rotation:0,y:0,ease:'none',scrollTrigger:{trigger:'.footer-arrival',start:'top bottom',end:'bottom 45%',scrub:1.1}});
            gsap.from('.footer-signature > a',{yPercent:45,opacity:.15,ease:'none',scrollTrigger:{trigger:'.footer-signature',start:'top bottom',end:'bottom 93%',scrub:.7}});
          }else reveal('.footer-signature > a',{y:20});
        }
      });
    });
    const refresh=()=>{if(!disposed){lenis.resize();ScrollTrigger.refresh();}};
    document.fonts.ready.then(refresh);
    const images=[...document.images].filter(image=>!image.complete);
    images.forEach(image=>image.addEventListener('load',refresh,{once:true}));
    const timer=setTimeout(refresh,350);
    return()=>{disposed=true;clearTimeout(timer);images.forEach(image=>image.removeEventListener('load',refresh));window.removeEventListener('ec:top',top);window.removeEventListener('ec:scroll-to',scrollTo);window.removeEventListener('ec:scroll-lock',scrollLock);ctx.revert();gsap.ticker.remove(tick);lenis.destroy();};
  },[pathname,motion,lang]);
  return <div className="reading-progress" aria-hidden="true"/>;
}
