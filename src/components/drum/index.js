import { useState } from "react"
import { data } from "../../data"
import DrumPad from "../drum-pad"

const Drum = () =>{
    const [textTrigger, setTextTrigger]=useState("")
    const [actif,setActif]=useState(false)
  
    
    const drumPadList=data.map((e, indx)=>{
        return (
            <DrumPad key={e.id} 
                    id={e.id}
                    text={e.text} 
                    audioId={e.audioId}
                    src={e.src} 
                    setTextTrigger={setTextTrigger}
                    actif={actif}
                    tabIndex = {indx}
            />
        )
    })

    return(
        <>           
            <div id="drum-machine">
                <div className="box-pad">
                    {drumPadList}
                </div>
                <div className='display-box'>
                    <div className='power-box'>
                        <span>Power</span>
                        <label className="switch" >
                            <input type="checkbox" onChange={(event)=>{
                                setActif(event.target.checked)
                                setTextTrigger("")

                            }}/>
                            <span className="slider"></span>
                        </label>
                    </div>
                    <div id="display">
                        <span>{textTrigger}</span>   
                    </div>
                    <input type="range" id="volume" name="volume"
                           min="0" max="100"
                    />
                    
                </div>

            </div>
        </>

    )
}

export default Drum