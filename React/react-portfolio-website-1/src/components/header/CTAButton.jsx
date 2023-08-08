import React from 'react'
import CVResume from '../../assets/Dale-Anthony Hines Resume 082022.pdf';


const CTAButton = () => {
  return (
    <div className='ctabutton'>
        <a href={CVResume} download className='btn'>Download CV</a>
        <a href="" id="contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTAButton