import React, { useState } from 'react'
import './MainPage.css'
import AdvantageCard from '../../components/AdvantageCard/AdvantageCard'
import About from '../../components/About/About'

import cardIcon1 from '../../images/advantage1.svg';
import cardIcon2 from '../../images/advantage2.svg';
import cardIcon3 from '../../images/advantage3.svg';
import cardIcon4 from '../../images/advantage4.svg';
import cardIconHover1 from '../../images/advantage-hover1.svg';
import cardIconHover2 from '../../images/advantage-hover2.svg';
import cardIconHover3 from '../../images/advantage-hover3.svg';
import cardIconHover4 from '../../images/advantage-hover4.svg';
import TarifCard from '../../components/TarifCard/TarifCard';
import Request from '../../components/Request/Request';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';

export default function MainPage() {

const [cards, setCards] = useState([
    {
        id: 1,
        title: 'Watching ads:',
        text: 'Viewers who watch ads can be an important source of income for content creators, as ad views can generate additional revenue',
        defaultImg: cardIcon1,
        hoverImg: cardIconHover1
    },
    {
        id: 2,
        title: 'Stable number of bots (viewers)',
        text: "Our service provides exactly that - a consistent and reliable audience that will watch your content. You can focus on creating content and engaging with viewers without worrying about the number of viewers. Whether you are an experienced streamer or just starting out, our stable audience will help take your stream to the next level",
        defaultImg: cardIcon2,
        hoverImg: cardIconHover2
    },
    {
        id: 3,
        title: 'Attentive 24/7 customer support',
        text: 'We understand that some issues can arise at any time of the day or night, so we offer attentive 24/7 support to ensure that you always feel confident and at ease, knowing that we are ready to help. Our support team is available by phone, email, and chat. We guarantee a fast response and quick resolution of any issues.',
        defaultImg: cardIcon3,
        hoverImg: cardIconHover3
    },
    {
        id: 4,
        title: 'A large number of flexible settings',
        text: 'Our service provides exactly that - a consistent and reliable audience that will watch your content. You can focus on creating content and engaging with viewers without worrying about.',
        defaultImg: cardIcon4,
        hoverImg: cardIconHover4
    },
]);

const [tarifs, setTarifs] = useState([
    {
        id: 1,
        title: 'Lite',
        price: '249.99$ per month',
        items: [
            'Viewers: 10, 25, 100, 200',
            'Chatters: 10, 25, 100, 200',
            'Viewing AD',
            'Chat management panel',
            'Technical Support',
            'Raids, predictions, polls',
        ],
        hit: false,
    },
    {
        id: 2,
        title: 'Medium',
        price: '249.99$ per month',
        items: [
            'Viewers: 10, 25, 100, 200',
            'Chatters: 10, 25, 100, 200',
            'Viewing AD',
            'Chat management panel',
            'Technical Support',
            'Raids, predictions, polls',
        ],
        hit: false,
    },
    {
        id: 3,
        title: 'Super',
        price: '249.99$ per month',
        items: [
            'Viewers: 10, 25, 100, 200',
            'Chatters: 10, 25, 100, 200',
            'Viewing AD',
            'Chat management panel',
            'Technical Support',
            'Raids, predictions, polls',
        ],
        hit: true,
    },
    {
        id: 4,
        title: 'Extreme',
        price: '249.99$ per month',
        items: [
            'Viewers: 10, 25, 100, 200',
            'Chatters: 10, 25, 100, 200',
            'Viewing AD',
            'Chat management panel',
            'Technical Support',
            'Raids, predictions, polls',
        ],
        hit: false,
    },

])

const cardsBox = cards.map(el => {
return  <AdvantageCard key={el.id} title={el.title} text={el.text} defaultImg={el.defaultImg} hoverImg={el.hoverImg}/>
})

const tarrifsBox = tarifs.map(el => {
    return  <TarifCard key={el.id} title={el.title} price={el.price} items = {el.items} hit = {el.hit} />
    })

  return (
<main>
    <Header />
    <About />
<div className="transparent">
<div id='advantages' className="transparent-block"></div>
<h2 className="advantage-title">Our <span className="blue-text">advantages:</span></h2>
</div>
    <p className="advantage-subtitle">
    Our <span className="bold-text">main benefits</span> and what sets us apart from other services:
    </p>
    <div className="advantage-cards">
    {cardsBox}
    </div>
    <div className="tarif-plans">
<div className="transparent">
<div id='tarif' className="transparent-block"></div>
<h2 className="tarif-title"><span className='blue-text'>Tariff</span> plans</h2>
</div>
        <div className="tarif-cards">
{tarrifsBox}
        </div>
    </div>
    <Request />
    <Footer />
</main>
  )
}
