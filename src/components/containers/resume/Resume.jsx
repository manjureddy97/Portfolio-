import React from 'react'
import './resume.scss'
import PageHeaderContent from '../../page_Header_Content.jsx/PageHeaderContent'
import { BsInfoCircle } from 'react-icons/bs'

function Resume() {
  return (
     <section id='about' className='about'>
    <PageHeaderContent
    headerText="Resume"
    icon={<BsInfoCircle size={40}/>}
    />
    </section>
  )
}

export default Resume
