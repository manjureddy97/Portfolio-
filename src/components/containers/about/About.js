import React from 'react'
import './about.scss'
import PageHeaderContent from '../../page_Header_Content.jsx/PageHeaderContent';
import {BsInfoCircle} from 'react-icons/bs'
import { Animate } from 'react-simple-animate';

import {FaDev,FaDatabase} from 'react-icons/fa'
import {DiApple,DiAndroid} from 'react-icons/di'



const personalDetails=[
  {
    label:"Name",
    value:"Manju Reddy",

  },
  {
    label:"Age",
    value:"30",

  },
  {
    label:"Address",
    value:"India",

  },
  {
    label:"Email",
    value:"manjureddyc97@gmail.com",

  },
  {
    label:"Contact No",
    value:"+91 9652167081",

  },


]

const jobSummery='Focused & dedicated professional with over 5 years of experience in Full Stack Development including Mobile and Web Application Development, Created 14+ Fully Functionally Applications for Web Android & IOS Devices, Excellence in driving cross-functional coordination for understanding requirements of clients & other multiple stakeholders, followed by translation into functional specifications, Highly skilled in leading all technical aspects of application development lifecycle (including inception, elaboration, construction & transition), Proven success in achieving on-time & quality delivery of multiple product releases for clients, Proficient in exploring various design options in order to arrive at an optimal product or solution, Possess clear thinking from technology perspective with strong skills to identify functional needs and transform them into technology terms.'

function About() {
  return (
    <section id='about' className='about'>
    <PageHeaderContent 
    headerText="About Me"
    icon={<BsInfoCircle size={40}/>}
    />

    
    <div className='about__content'>
    <div className='about__content__personalWrapper'>
      <Animate play
 
 duration={1.5}
 delay={1}
 start={{
  transform:'translateX(-900px)'
 }}
  end={{
  transform:'translateY(0px)'
 }}
 >
    <h3>Full Stack Developer</h3>
    <p>{jobSummery}</p>
    </Animate>


     <Animate play
 
 duration={1.5}
 delay={1}
 start={{
  transform:'translateX(500px)'
 }}
  end={{
  transform:'translateY(0px)'
 }}
 >
    <h3 className='personalInformationHeaderText'>Personal Information</h3>
    <ul>
    {
      personalDetails.map((item,index)=>(
        <li key={index}>
        <span className='title'>{item.label}</span>
        <span className='value'>{item.value}</span>
        </li>
        
      ))
    }
    </ul></Animate>
    </div>
    <div className='about__content__servicesWrapper'>

     <Animate play
 
 duration={1.5}
 delay={1}
 start={{
  transform:'translateX(600px)'
 }}
  end={{
  transform:'translateY(0px)'
 }}
 >
  <div className='about__content__servicesWrapper__innerContent'>
    <div>
    <FaDev size={60} color='#ffdd40'/>
    </div>
    <div>     <DiAndroid size={60} color="#ffdd40"/>
</div>
    <div>
        <FaDatabase size={60} color='#ffdd40'/>

    </div>
    <div>
        <DiApple size={60} color='#ffdd40'/>

    </div>
  </div>
   </Animate>
    </div>
  
 
    
    </div>
    </section>
  )
}

export default About