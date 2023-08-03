import './Challenge20.css';
import { useState, useEffect, useMemo} from 'react';

export default function Challenge20() {
    const [input, setInput] = useState('');
    const [isTextValid, setIsTextValid] = useState(false);

    const inputHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setInput(ev.target.value);
        setIsTextValid(false);
    }

    const submitHandler = (ev: React.FormEvent) => {
        ev.preventDefault();
        if(input.trim().split(' ').length === 1) return alert('Please enter more than one word');

        setIsTextValid(true);
    }

    return (
        <>
            <h1 className="title">Challenge 20</h1>
            <form className="form__container" onSubmit={submitHandler}>
                <input className="form__input" type="text" placeholder="Enter sentence" value={input} onChange={inputHandler}/>
            </form>
            <hr />
            {isTextValid && <WordByWord  text={input}/>}
        </>
    )
}

type Props = {
    text: string;
}

function WordByWord({ text }: Props) {
    const [word, setWord] = useState(0);
    const textArray = useMemo(() => text.split(' '), [text]) ;

    useEffect(() => {
        const timer = setTimeout(() => {
            if(textArray.length - 1 > word) setWord(word => ++word);
        }, 1000);

        return () => clearInterval(timer);
    }, [textArray, word]);

    return (
        <p className="wbw__text">
            {text.length > 0 && textArray.slice(0, word + 1).join(' ')}
        </p>
    )
}