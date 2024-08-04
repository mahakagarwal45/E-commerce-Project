import React from 'react';

const Books = () => {
  const books = [
    { id: 1, name: 'The Comfort Book', description: 'Mental wellness book', imageUrl: 'thecomfortbook.jpeg' },
    { id: 2, name: 'Detox Your Thoughts', description: 'Mental wellness book', imageUrl: 'detoxyourthoughts.jpeg' },
    { id: 3, name: 'Mental Health and Wellbeing in the Workplace', description: 'Mental wellness book', imageUrl: 'mentalhealthandwellbeingintheworkplace.jpeg' },
    { id: 4, name: 'Mental Wellness Blueprint', description: 'Mental wellness book', imageUrl: 'mentalwellnessblueprint.jpeg' },
    { id: 5, name: 'The 7 Habits of Highly Effective People', description: 'Mental wellness book', imageUrl: 'the7habitsofhighlyeffectivepeople.webp' },
    { id: 6, name: 'The Highly Sensitive Person', description: 'Mental wellness book', imageUrl: 'thehighlysensitiveperson.webp' }
  ];

  const backgroundStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '20px'
  };

  return (
    <div className="books" style={backgroundStyle}>
      <h2>Mental Wellness Books</h2>
      <ul>
        {books.map(book => (
          <li key={book.id} className="book-item">
            <img src={process.env.PUBLIC_URL + '/' + book.imageUrl} alt={book.name} className="book-image" />
            <div className="book-info">
              <h3>{book.name}</h3>
              <p>{book.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
