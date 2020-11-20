import { useState } from 'react'
import './Circle.css'

const Circle = (props) => {

    const [hover, setHover] = useState(false)
    
    const handleMouseOver = () => {
        setHover(!hover)
    }

    const handleMouseOut = () => {
        setHover(false)
    }

    return (
        <div className='sansNom'>
            
                        <img
                            className='contenders__circle'
                    
                            src={props.url}
                            alt={props.name}
        
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                        />
                        {hover && <p className='score_onHover'>{props.nb_vote}</p>} 
    
        </div>
    )
}

export default Circle