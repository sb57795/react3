import React from 'react'
//Не забываем импортировать компонент
import Card1 from './card1';
import Card2 from './card2';
import Card3 from './card3';
import Card4 from './card4';


function CardList() {
    return (
        <React.Fragment>
            <Card1
                title="безлимитный 300"
                rub="руб"
                main=" 300/мес"
                p="до 10 Mбит/сек"
                description="обьем включенного трафика не ограничен"
                
            />
            <Card2
                title="безлимитный 450"
                rub="руб"
                main=" 450/мес"
                p="до 50 Mбит/сек"
                description="обьем включенного трафика не ограничен"
               
            />
            <Card3
                title="безлимитный 550"
                
 rub="руб"
                main=" 550/мес"
                p="до 100 Mбит/сек"
                description="обьем включенного трафика не ограничен"
                
            />
             <Card1
                title="безлимитный 1000"
                 rub="руб"
                main="1000/мес"
                p="до 200 Mбит/сек"
                description="обьем включенного трафика не ограничен"
                
            />
        </React.Fragment>
    );
}

export default CardList;