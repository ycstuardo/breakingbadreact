import React from 'react'


const Cast = ({img, name, nickname, birthday}) => {
    return (
        <section className='info'>
            <div className='card'>
            <img className='img' src={img} alt={name}/>
            <p>Name: {name}</p>
            <p>Nickname: {nickname}</p>
            <p>Birthday: {birthday}</p>
            </div>
        </section>
    )
}

export default Cast
