import React from 'react'
import './portfolio.scss'
import PageHeaderContent from '../../page_Header_Content.jsx/PageHeaderContent'
import { BsInfoCircle } from 'react-icons/bs'

function Portfolio() {
  return (
 <section id='portfolio' className='portfolio'>
    <PageHeaderContent 
    headerText="Portfolio"
    icon={<BsInfoCircle size={40}/>}
    />
    </section>  )
}

export default Portfolio