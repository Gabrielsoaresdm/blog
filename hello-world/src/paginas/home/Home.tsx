import React from 'react';
import './Home.css';

let nome = 'Gabriel';

function Home(){
    return(
    <div>
    <h1>Esse é meu texto</h1>
    <h2>{nome}</h2>
    <p>Turma 2</p>
    </div>

    );
}

export default Home;