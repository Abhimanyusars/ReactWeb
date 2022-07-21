import React from 'react';
import Icon1 from '../../images/img2.png'; 
import Icon2 from '../../images/img8.png'; 
import Icon3 from '../../images/img9.png'; 
import { ServicesContainer, ServicesCard, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper  } from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id="services">
    <ServicesH1>Our Services</ServicesH1>
    <ServicesWrapper>
        <ServicesCard>
            <ServicesIcon src={Icon1}></ServicesIcon>
            <ServicesH2>Reduce expenses</ServicesH2>
            <ServicesP>We help to reduce your expenses and increase your revenue.</ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon2}></ServicesIcon>
            <ServicesH2>Virtual Offices</ServicesH2>
            <ServicesP>You can access our platform onlie.</ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon3}></ServicesIcon>
            <ServicesH2>Premium Benefits</ServicesH2>
            <ServicesP>Unlock our special membership card.

            </ServicesP>
        </ServicesCard>
    </ServicesWrapper>
</ServicesContainer>
    
  );
};

export default Services;