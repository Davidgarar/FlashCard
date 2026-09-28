import '../Flashcard.css';

interface FlashcardProps {
  question: string;
  answer: string;
  isFlipped: boolean;
  onFlip: () => void;
}

function Flashcard({ question, answer, isFlipped, onFlip }: FlashcardProps) {
    return (
        <div  className="flashcardcon" onClick={onFlip} >
            <p>{isFlipped ? answer : question}</p>
        </div>

    );

}

export default Flashcard;