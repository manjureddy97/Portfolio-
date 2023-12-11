import React from 'react'
import './skills.scss'
import PageHeaderContent from '../../page_Header_Content.jsx/PageHeaderContent'
import { BsInfoCircle } from 'react-icons/bs'
import { skillsData } from './utils'
import { Animate, AnimateKeyframes } from 'react-simple-animate'
import { Line } from 'rc-progress'

function Skills() {
  return (
     <section id='skills' className='skills'>
    <PageHeaderContent 
    headerText="My Skills"
    icon={<BsInfoCircle size={40}/>}
    />
    <div className='skills__contentWrapper'>
   {
  skillsData.map((item, index) => (
    <div key={index} className='skills__contentWrapper__inner-content'>
      <Animate
        play
        duration={1.5}
 delay={1}
        start={{
          transform: 'translateX(-900)',
        }}
        end={{
          transform: 'translateY(0px)',
        }}
      >
        <h3 className='skills__contentWrapper__inner-content__category-text'>{item.label}</h3>
        <div className='skills__contentWrapper__inner-content__progressbar-contaier'>
          {item.data && item.data.map((skillItem, j) => (
            <AnimateKeyframes
              play
              duration={1}
              keyframes={["opacity:1", "opacity:0"]}
              iterationCount={1}
            >
              <div className='progressbar-Wrapper' key={j}>
                <p>{skillItem.skillName}</p>
                <Line
                  percent={skillItem.percentage}
                  strokeColor={'#ffdd40'}
                  strokeWidth={2}
                  trailWidth={"2"}
                  strokeLinecap='square'
                />
              </div>
            </AnimateKeyframes>
          ))}
        </div>
      </Animate>
    </div>
  ))
}

    
    </div>
    </section>
  )
}

export default Skills
