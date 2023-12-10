import React from 'react'
import './contsct.scss'
import PageHeaderContent from '../../page_Header_Content.jsx/PageHeaderContent'
import { BsInfoCircle } from 'react-icons/bs'

function Contact() {
  return (
 <section id='contact' className='contact'>
    <PageHeaderContent 
    headerText="My Contact"
    icon={<BsInfoCircle size={40}/>}
    />
    </section>  )
}

export default Contact