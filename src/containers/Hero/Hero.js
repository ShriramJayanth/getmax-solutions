import React,  { useEffect , useRef,useState} from 'react'
import {Card }from "../../components"
import "./Hero.css"
import AUlogo from '../../assets/AboutUs.svg'
import solutions from '../../assets/solutions.svg'
import careers from '../../assets/careers.svg'
import team from '../../assets/team.svg'
import blogs from '../../assets/blogs.svg'
import contactus from "../../assets/contactus.svg"
import getMaxLogo from "../../assets/getMaxLogo.svg"
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import {NavBar} from '../../components'
import {Link} from 'react-router-dom'
import {Link as ScrollLink} from 'react-scroll'

gsap.registerPlugin(ScrollTrigger);



const Hero = () => {

  const [scrolled,setHidden] = useState(false);

  const boxRef = useRef(null);
  const cardRef = useRef(null);
  const textRef = useRef(null);



  useEffect(()=>{
      


   

      const background = boxRef.current;
      const card = cardRef.current;

      const texts = textRef.current;


      const tl1 = gsap.timeline({ defaults: { ease: 'power2.inOut' } });
      const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });


      const handleScroll = () => {

        const scrollPosition = window.scrollY;
  
        console.log(scrollPosition);

        if (scrollPosition > 1200) {
          setHidden(true);
          
        } else {
          setHidden(false);
          
        }
      };

      window.addEventListener('scroll', handleScroll);
      window.addEventListener('touchmove', handleScroll);
      

      tl.fromTo(
        card,
        { scale: 1, opacity: 1 },
        {x : 2500, scale: 3, opacity: 1, duration:10 }
      )
        

      ScrollTrigger.create({
        animation: tl,
        trigger: card,
        start: 'top top',
        end: 'bottom top',
        pin: background,
        onUpdate: (self) => {
          const progress = self.progress;
          const backgroundColor = `rgba(246, 241, 255, ${progress})`; // Adjust the alpha as needed
          background.style.backgroundColor = backgroundColor;
        },
        scrub: 5,

      });


    tl1.fromTo(
      texts,
      { scale: 1, opacity: 1 },
      {x : -2500, scale: 3, opacity: 1, duration:10 }
    )
      

    ScrollTrigger.create({
      animation: tl1,
      trigger: card,
      start: 'top top',
      end: 'bottom top',

      scrub: 5,

    });

    

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('touchmove', handleScroll);
      };
      
  },[]); 

  return (
    <div className='hero' id = "hero">
    <div style={{opacity : scrolled ? 1: 0}}>
      <NavBar  />
      </div>
      <div className='hero-container' ref={boxRef} >
      
        <div className="text-container" ref={textRef}>
          <div className = 'hero-title-image'>
            <img src={getMaxLogo} />
          </div>
          
          <div className = 'hero-desc'>
            <p >
            Transforming Talent, Healing Health, Digitizing Tomorrow – Where Expertise Meets Innovation in Training, Placement, Healthcare, Digital Solutions, RPO, and Business Consulting.
            </p>
          </div>
        </div>
        <div className = "cards-container" ref= {cardRef}>
          <div className = "single-line">
            <ScrollLink to = "about-us" spy = {true} smooth = {true} offset = {-50} duration = {700}>
              <Card logo = {AUlogo} desc = "About us" />
            </ScrollLink>
            <ScrollLink to = "solutions" spy = {true} smooth = {true} offset = {20} duration = {700}>
              <Card logo = {solutions} desc = "Solutions" />
            </ScrollLink>
            <Link to = "/Careers">
              <Card logo = {careers} desc = "Careers" />
            </Link> 
          </div>
          <div className = "single-line">
            <ScrollLink to = "Team" spy = {true} smooth = {true} offset = {-70} duration = {700}>
              <Card logo = {team} desc = "Team" />
            </ScrollLink>
            <Link to='/Blogs'>
              <Card logo = {blogs} desc = "Blog" />
            </Link>
            <ScrollLink to = "contact-us" spy = {true} smooth = {true} offset = {-80} duration = {700}>
              <Card logo = {contactus} desc = "Contact Us" />
            </ScrollLink>
          </div>
          <div className = 'hero-tag'>
            <p>
            From Tech Titans to Healthcare Heroes  We Serve Them All!
            </p>
          </div>
        </div>
        </div>
        <div className='hero-mob'>
        <NavBar  />
          <div className='text-container-mob'>
            <div >
            <p className='Getmax'>
              GetMax<br/>Solutions
              </p>
            </div>
            <div className = "tag">
            <p>
              From Tech Titans to Healthcare Heroes  We Serve Them All!
              </p>
            </div>
            <div className='desc'>
            <p >
            Transforming Talent, Healing Health, Digitizing Tomorrow – Where Expertise Meets Innovation in Training, Placement, Healthcare, Digital Solutions, RPO, and Business Consulting.              </p>
            </div>
          </div>
          <div className = "cards-container-mobile" >
            <div className = "single-line-mobile">
              <ScrollLink to = "about-us" spy = {true} smooth = {true} offset = {-50} duration = {700}>
                <Card logo = {AUlogo} desc = "About us" />
              </ScrollLink>
              <ScrollLink to = "solutions" spy = {true} smooth = {true} offset = {-60} duration = {700}>
                <Card logo = {solutions} desc = "Solutions" />
              </ScrollLink>
            </div>
            <div className = "single-line-mobile">
              <ScrollLink to = "Team" spy = {true} smooth = {true} offset = {-70} duration = {700}>
                <Card logo = {team} desc = "Team" />
              </ScrollLink>
              <Link to='/Blogs'>
                <Card logo = {blogs} desc = "Blog" />
              </Link>
            </div>
            <div className='single-line-mobile'>
              <Link to='Careers'>
                <Card logo = {careers} desc = "Careers" />
              </Link>
              <ScrollLink to = "contact-us" spy = {true} smooth = {true} offset = {-80} duration = {700}>
                <Card logo = {contactus} desc = "Contact Us" />
              </ScrollLink>
            </div>
          </div>
        </div>
    </div>



  )
}

export default Hero