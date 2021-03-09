import React from 'react'
import Icon1 from '../../images/icon1.png'
import Icon2 from '../../images/icon2.png'
import Icon3 from '../../images/icon3.png'

import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'


const Services = () => {
  return (
    <>
    <ServicesContainer id='services'>
      <ServicesH1>Our services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Reduce Expenses</ServicesH2>
          <ServicesP>
            We help redyce your fees and increase your overall revenue
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP>
            You can acces your platform online anywhere in the world
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>
            Unlock our special membership card that returns 5% cashback
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
    </>
  )
}

export default Services
