import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "../style/Data.css"


const Data = () => {

    const [recording, setRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [recordedChunks, setRecordedChunks] = useState([]);
    const navigate = useNavigate() 
    const data = useSelector((store)=> store.authReducer.isAuth)
    const [log, setLog] = useState(data)

    
    
//start Recording----------------------------------------------------------
    const startRecording = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        const chunks = [];
  
        const mediaRecorder = new MediaRecorder(stream);
        setMediaRecorder(mediaRecorder);
  

        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            chunks.push(event.data);
          }
        };
  
        mediaRecorder.onstop = () => {
          const recordedBlob = new Blob(chunks, { type: 'video/webm' });
          setRecordedChunks([...recordedChunks, recordedBlob]);
        };
  
        mediaRecorder.start();
        setRecording(true);
      }
       catch (error) {
        console.error('Error starting recording:', error);
      }
    };
  

    //Stop Recording----------------------------------------------------------
    const stopRecording = () => {
      if (mediaRecorder) {
        mediaRecorder.stop();
        setRecording(false);
      }
    };
  
    const handleLogout = () =>{
        localStorage.clear();
            setLog(!log)
            navigate("/")

    }

    const d = JSON.parse(localStorage.getItem("user"))
  return (
    <div>
        <div className='hhh'>
            <div> <h2>User Name : {d.userName}</h2></div>
            <div><button onClick={handleLogout}  style={{
      backgroundColor: '#007FFF',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    }}>LogOut</button></div>
        </div>

      {recording ? (
        <button onClick={stopRecording}  style={{
          backgroundColor: '#F40009',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop:'50px'
        }}>Stop Recording</button>
      ) : (
        <button onClick={startRecording}  style={{
          backgroundColor: '#1F75FE',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop:'50px'
        }}>Start Recording</button>
      )}

      {recordedChunks.length > 0 && (
        <div>
          <h2>Recorded Videos:</h2>
         
          <ul>
            {recordedChunks.map((el, index) => (
              <li key={index}>
                <video controls src={URL.createObjectURL(el)} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

  )
}

export default Data