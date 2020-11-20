import { useEffect, useState } from 'react'
import Circle from './Circle'
import axios from 'axios'

import './ContendersCircles.css'

const ContendersCircles = (props) => {
    const [imageCircle, setImageCircle] = useState([])
    const [votes, setVotes] = useState()
    

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

   
    return (
        <div className='contendersCirclesContainer'>
            {imageCircle.map((image, i) => (
                <Circle key={i} {... image} />
            ))}
            
        </div>
    )
}

export default ContendersCircles