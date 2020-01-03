import React, {useState, useRef, useEffect} from 'react';
import 'styles/App.css';

function App() {

  const [fileName, setFileName] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  const inputElement = useRef(null);

  const song = useRef(new Audio());
  
  useEffect(()=>{
    if(fileName){
      if(isPlaying){
        song.current.play();
      }else{
        song.current.pause();
      }
    }else{
      console.log("there's no file")
    }
  }, [isPlaying])

  function handleAudio(URLOb){
    song.current.src = URLOb;
    
    setIsPlaying(true);
  }

  function handleFile(){
    let file = inputElement.current.files[0];

    if(file.name.indexOf(".mp3") === file.name.length - 4){
      setFileName(file.name);
      handleAudio(URL.createObjectURL(file))
    }
  }

  return (
    <div className="App">
      {(fileName ? <>{fileName}</> : <>UwU</> )}
      <br/>
      <input type="file"name ="file" id="real-input" ref={inputElement} onChange={handleFile}/>
      <br/>
      <button onClick={() => {setIsPlaying(!isPlaying)}} type="button">{(isPlaying) ? <>||</> : <>></>}</button>
    </div>
  );

}

export default App;
