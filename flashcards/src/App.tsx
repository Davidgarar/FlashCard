import { useState } from "react";
import Flashcard from "./components/Flashcard";
import './App.css';

function App(){
    //datos que se van a mostrar en las tarjetas, son las preguntas y respuestas
    const flashcardata = [
        {id: 1, question: "what is Javascript?", answer: "Javascript is a programming language that allows you to implement complex features on web pages."},
        {id: 2, question: "what is for loop?", answer: "A for loop is a control flow statement that allows code to be executed repeatedly based on a given boolean condition."},
        {id: 3, question: "what is a function?", answer: "A function is a block of code that performs a specific task and can be called multiple times throughout a program."},
        {id: 4, question: "what is a variable?", answer: "A variable is a named storage location in a program that holds a value which can be changed during program execution."},
        {id: 5, question: "what is an array?", answer: "An array is a data structure that can hold multiple values at once, and each value can be accessed using an index."},
        {id: 6, question: "what is an object?", answer: "An object is a collection of key-value pairs that can hold multiple values and functions, and can be used to represent real-world entities."},
        {id: 7, question: "what is a class?", answer: "A class is a blueprint for creating objects in object-oriented programming, defining properties and methods that the objects will have."},
        {id: 8, question: "what is inheritance?", answer: "Inheritance is a mechanism in object-oriented programming that allows a class to inherit properties and methods from another class."},
        {id: 9, question: "What is the difference between var, let, and const?", answer: "var is function-scoped and can be redeclared and updated, let is block-scoped and can be updated but not redeclared, and const is block-scoped and cannot be updated or redeclared."},
        {id: 10, question: "What is the difference between == and === in JavaScript?", answer: "== is a loose equality operator that performs type coercion, while === is a strict equality operator that checks for both value and type equality."}
        
    ];

    //estado para saber que carta se esta mostrando, se inicializa en 0 para mostrar la primera carta
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    //estado para saber si la carta esta volteada o no, se inicializa en false para que la carta no este volteada y mostrando la respuesta al inicio
    const [isflipped, setIsFlipped] = useState(false);

    //funcion logica para cambiar de carta
    const handleflip = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcardata.length);
        setIsFlipped(false);
    }

    //obtenemos la carta actual a mostrar
    const currentCard = flashcardata[currentCardIndex];

    //funcion para manejar la logica de voltear la carta, si esta volteada se voltea a mostrar la pregunta y si no esta volteada se voltea a mostrar la respuesta
    const onFlip = () => {
        setIsFlipped(!isflipped);
    }

    return(
        <div className="App">
            <Flashcard
                question={currentCard.question}
                answer={currentCard.answer}
                isFlipped={isflipped}
                onFlip={onFlip}
            />
            <button onClick={handleflip}>Next Card</button>

        </div>
    );
}

export default App;