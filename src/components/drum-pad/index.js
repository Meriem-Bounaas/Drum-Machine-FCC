import { useCallback, useEffect, useRef } from "react";

const DrumPad = ({id, text, audioId, src, setTextTrigger, actif, tabIndex }) => {
    
    const handleKeyPress = useCallback((e) => {
        
        if (e.key === audioId) {            
            playerRef.current.play() 
        }
      }, []);
      
    useEffect(() => {
        // attach the event listener
        document.addEventListener('keydown', handleKeyPress);
    
        // remove the event listener
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
        };
      }, [handleKeyPress]);
    
        
    const playerRef = useRef()
     

    return (
        <button className="drum-pad"  id={id}
                                onClick={()=>{  
                                        setTextTrigger(text)
                                        playerRef.current.play()
                                    }
                                }
                              
                            >
                                {audioId}  
                                <audio 
                                    className="clip"
                                    id={audioId}
                                    ref={playerRef}
                                    src={src}                            
                                />
        </button>
    );
}

export default DrumPad;