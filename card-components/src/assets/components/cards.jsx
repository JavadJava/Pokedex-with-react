import React,{useEffect, useRef, useState} from 'react';
import axios from 'axios';
import {default as data} from './../../source.js'

function Cards(props) {
    const button = useRef(null)
    const [addedNumber, setAddedNumber] = useState(null)

    const clickHandler = (e) => {
        if(e.target.textContent == "add to favorite"){
            e.target.textContent = "added" 
            setAddedNumber(addedNumber + 1)
    }else{
        e.target.textContent = "add to favorite"
        setAddedNumber(addedNumber - 1)
    }
}



    return (
        <div> 
             <header className='flex justify-center p-10'>
                <h1 className='text-4xl'>added mags:{addedNumber}</h1>
             </header>
            
            <div className='w-full flex justify-around flex-wrap'>
            {data.map((card,index) => {
                console.log(card);
                return(
                    <div className='flex flex-col w-60 border rounded-2xl m-8 shadow-2xl justify-between'>
                        <img src={card.image} alt="some picture"className='rounded-2xl' />
                        <h1 className='text-sm'>{card.title}</h1>
                        <button onClick={clickHandler} ref={button} className='border shadow-2xl hover:bg-slate-300 rounded-2xl'>add to favorite</button>
                    </div>
                )
            })}
        
            </div>
        </div>
    );
}

export default Cards;