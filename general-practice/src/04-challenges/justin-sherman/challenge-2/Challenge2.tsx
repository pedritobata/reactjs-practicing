import './Challenge2.css';
import { useState } from 'react';

const baseUrl = 'https://robohash.org';

export default function Challenge2() {
    const [list, setList] = useState<string[]>([]);
    const [robotUrlInput, setRobotUrlInout] = useState('');

    const onChangeRobotInout = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setRobotUrlInout(ev.target.value);
    }

    const onAddRobot = (ev: React.MouseEvent) => {
        ev.preventDefault();
        if(!robotUrlInput) {
            alert('You must enter a robot name');
            return;
        }
        const robotUrl = `${baseUrl}/${robotUrlInput}`;

        const newList = list.slice();
        newList.push(robotUrl);
        setList(newList);
    }

    const onDeleteRobot = (robot: string) => {
        setList(list.filter(rob => robot !== rob));
    }

    return <>
        <h1 className="title">Challenge 2 - Robots List</h1>
        <form className="search__form">
            <input className="search__input" type="text" value={robotUrlInput} onChange={onChangeRobotInout}/>
            <button className="search__button" type="submit" onClick={onAddRobot}>Find robot!</button>
        </form>
        <RobotList robots={list} onDelete={onDeleteRobot}/>
    </>
}

type Props = {
    robots: string[];  
    onDelete: (robot: string) => void;
}

function RobotList({robots, onDelete}: Props) {


    return (
    <>
    <h2 className="list__title">Robot list</h2>
    <div className='list__container'>
        {
            !robots?.length ? <p>No robots to show</p> : 
                    robots.map(robot => (
                        <div className="robot__container" key={robot} onClick={() => onDelete(robot)}>
                            <img className="robot__image" src={robot} alt={robot} />
                        </div>
                    ))
            
        }
    </div>
    </>
    )
}