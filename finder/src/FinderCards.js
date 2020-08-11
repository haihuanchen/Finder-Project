import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import "./FinderCards.css"

function FinderCards () {
    const [people, setPeople] = useState([
        {
            name: "Steve Jobs",
            url: 'https://www.biography.com/.image/t_share/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg'
        },
        {
            name: "Mark Zuckerberg",
            url: 'https://about.fb.com/wp-content/uploads/2019/01/mz.jpg?fit=4655%2C3102'
        }
    ]);

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