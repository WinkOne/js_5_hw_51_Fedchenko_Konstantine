import React from 'react'

const Card = (props) => {
    return(
        <div className={'cards'}>
            <p className={'title'}>Film:{props.film}</p>
            <p className={'years'}>Years:{props.years}</p>
            <img src={props.img} alt=""/>
        </div>
    )

};

export default Card;