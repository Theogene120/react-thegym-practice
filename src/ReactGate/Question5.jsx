import React, { useState } from 'react'

// Sample data for cards
const cardsData = [
  { id: 1, title: 'Card 1', description: 'This is the description for Card 1.' },
  { id: 2, title: 'Card 2', description: 'This is the description for Card 2.' },
  { id: 3, title: 'Card 3', description: 'This is the description for Card 3.' },
  { id: 4, title: 'Card 4', description: 'This is the description for Card 4.' },
  { id: 5, title: 'Card 5', description: 'This is the description for Card 5.' },
  { id: 6, title: 'Card 6', description: 'This is the description for Card 6.' },
  { id: 7, title: 'Card 7', description: 'This is the description for Card 7.' },
  { id: 8, title: 'Card 8', description: 'This is the description for Card 8.' },
]

function CardList() {

    const [data, setData] = useState(cardsData.slice(0,4))
    

    function handleless(){
        let temp = cardsData.slice(0,4)
        setData(temp)
    }

    function handleMore() {
        setData(cardsData)
    }


  return (
    <div>
      <div>
        {data.map(card => (
          <div
            key={card.id}
            style={{
              backgroundColor: 'green',
              margin: '10px',
              padding: '10px',
              color: 'white',
              borderRadius: '10px',
            }}
          >
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-3 m-3">
        <button className='border p-3 bg-sky-300 border-black ' onClick={handleMore}>Show More</button>
        <button className='border p-3 bg-sky-300 border-black ' onClick={handleless}>Show Less</button>
      </div>
    </div>
  )
}

export default CardList
