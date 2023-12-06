// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
//
// function UsersComponent() {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//
//     useEffect(() => {
//         // Using Axios to fetch data
//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then(response => {
//                 setUsers(response.data);  // Axios packs the response in a 'data' property
//                 setLoading(false);
//             })
//             .catch(error => {
//                 setError(error.message);
//                 setLoading(false);
//             });
//     }, []);
//
//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;
//
//     return (
//         <div>
//             <h1>Users</h1>
//             <ul>
//                 {users.map(user => (
//                     <li>
//                         <b>Name: </b>{user.name}<br/>
//                         <b>Email: </b>{user.email}<br/>
//                         <b>City: </b>{user.address.city}<br/><br/>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
//
// export default UsersComponent;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
//
// function DogImageComponent() {
//     const [dogImage, setDogImage] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//
//     useEffect(() => {
//         // Fetching a random dog image from the Dog API
//         axios.get('https://dog.ceo/api/breeds/image/random')
//             .then(response => {
//                 setDogImage(response.data.message);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 setError(error.message);
//                 setLoading(false);
//             });
//     }, []);
//
//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;
//
//     return (
//         <div>
//             <h1>Random Dog Image</h1>
//             <img src={dogImage}/>
//         </div>
//     );
// }
//
// export default DogImageComponent;


import React, {useState, useEffect} from 'react';
import axios from 'axios';

function BooksComponent() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Using Axios to fetch data
        axios.get('https://springdatastoresample-398023.uw.r.appspot.com/findAllBooks')
            .then(response => {
                setBooks(response.data);  // Axios packs the response in a 'data' property
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Books</h1>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        {/*<b>Id: </b>{book.id}<br/>*/}
                        <b>Title: </b>{book.title}<br/>
                        <b>Author: </b>{book.author}<br/>
                        <b>Year: </b>{book.year}<br/><br/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BooksComponent;


// import logo from './logo.svg';
// import './App.css';
// import GameHeader from './test/GameHeader';
// import React, {useState} from 'react';

// function App() {
//
//     const [inputValue, setInputValue] = useState('');
//
//     function replacexy(s) {
//         let news = ""
//         for (let i = 0; i < s.length; i++) {
//             if (s[i] == 'x') {
//                 news = news + 'y';
//             } else {
//                 news = news + s[i]
//             }
//         }
//         return news;
//     }
//
//     function handleSubmit(event) {
//         event.preventDefault(); // Prevent default form submission behavior
//         setInputValue(replacexy(inputValue))
//     }
//
//     function handClick(){
//         alert(inputValue);
//     }
//
//     return (
//         <div>
//             <GameHeader/>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="textInput">Your Input:</label><br/>
//                 <input
//                     type="text"
//                     id="textInput"
//                     name="textInput"
//                     value={inputValue}
//                     onChange={(e) => setInputValue(e.target.value)}
//                     required
//                 /><br/><br/>
//                 <button type="submit">Submit</button>
//                 <button onClick={handClick}>click</button>
//             </form>
//         </div>
//     );
// }

// export default App;
