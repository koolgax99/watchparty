import React, {useState , useEffect , useRef } from 'react'; 

import ReactPlayer from 'react-player';


const Video = ( { URL }) => {
    const time = useRef(null);
     useEffect(()=>{
        //  time.current = time.getCurrentTime();
        // console.log(time.current.getCurrentTime());

    },[]);
    const getTime = () => {
        console.log(time.current.getCurrentTime());
    }

    
    return(
    
    <div className = "VideoContainer">
        {/* {console.log(URL)}; */}
        <ReactPlayer url={ URL } playing={true} ref = {time} height="100vh" width="80vw"/>
        {/* <button onClick= {getTime}>Click  </button> */}
        {/* <button onClick= {()=> console.log(URL)}>Click Video.js </button>  */}
        
    </div>

    );
} 

export default Video ;