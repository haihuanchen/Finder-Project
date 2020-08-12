import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';
import "./FinderCards.css"

function FinderCards () {
    const [people, setPeople] = useState([]);

    useEffect(()=>{
        database.collection('people').onSnapshot(snapshot =>(
            setPeople(snapshot.docs.map(doc => doc.data()))
        ))
    }, []); //run this code once when the component loads and never again

    return(
        <div>
            <div className="card-container">
                {people.map(person => (
                    <TinderCard className="swipe" key={person.name} preventSwipe={["up","down"]}>
                        <div
                        style={{backgroundImage: `url(${person.url})`}}
                        className='card'
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default FinderCards;