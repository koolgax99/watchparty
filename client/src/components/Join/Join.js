import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [URL, setURL] = useState('');
    return (
        <div>
            
    <div className = "joinOuterContainer">
        <div className = "joinInnerContainer">
        <h1 className = "heading" > Join </h1>
        <div><input placeholder = 'Name' className = 'JoinInput' type="text" onChange={(event) => setName(event.target.value)}/></div>
        <div><input placeholder = 'Room' className = 'JoinInput mt-20' type="text" onChange={(event) => setRoom(event.target.value)}/></div>
        <div><input placeholder = 'URL' className = 'JoinInput mt-20' type="text" onChange={(event) => setURL(event.target.value)}/></div>

        <Link onClick= {event => (!name || !room ) ? event.preventDefault():null}  to={`/chat?name=${name}&room=${room}`} >   
        <button className='button mt-20' type = "submit" > Enter </button>
        </Link>
        {/* <button onClick={()=> console.log(URL)}></button> */}
        </div>
    </div>
    </div>
        )
}

export default Join;