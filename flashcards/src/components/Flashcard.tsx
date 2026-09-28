import '../Flashcard.css';

function Flashcard({ question, answer, isFlipped, onFlip }) {
    return (
        <div  className="flashcardcon" onClick={onFlip} >
            <p>{isFlipped ? answer : question}</p>
        </div>

    );

}

export default Flashcard;