import { useEffect, useState } from 'react'
import axios from 'axios'

import './ContendersCircles.css'

const ContendersCircles = (props) => {
    const [imageCircle, setImageCircle] = useState([])
    const [votes, setVotes] = useState()
    const [hover, setHover] = useState(false)

    const theme = props.info.params.style


    useEffect(() => {
        const fetchData = async () => {
            const url = `http://1f5403262dc5.ngrok.io/${theme}/all`
            const request = await axios.get(url)


            setVotes(request.data.nb_vote)
            setImageCircle(request.data)

        }
        fetchData()
    }, [theme])

    const handleMouseEnter = () => {
        setHover(!hover)
    }

    const handleMouseOut = () => {
        setHover(!hover)
    }

    return (
        <div className='contenders__wrapper'>
            {
                imageCircle
                    .map((image, i) => (
                        <div key={i}>

                            <img
                                className='contenders__circle'
                                key={i}
                                src={image.url}
                                alt={image.name}
                                onMouseEnter={handleMouseEnter}
                                onMouseOut={handleMouseOut}
                            />

                        </div>
                    ))
            }
        </div>
    )
}

export default ContendersCircles