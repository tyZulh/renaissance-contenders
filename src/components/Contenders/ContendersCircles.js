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
            const url = `http://3cbbd8157824.ngrok.io//${theme}/all`
            const request = await axios.get(url)

            const arr = [...request.data]
            const finalArr= arr.sort((a, b) => {
                return a.nb_vote - b.nb_vote
                

            }).reverse()

    
            console.log('AAAAAAAA4', finalArr)
            setVotes(request.data.nb_vote)
            setImageCircle(finalArr)

        }
        fetchData()
    }, [theme])

   
    return (
        <div className='contendersCirclesContainer'>
            {imageCircle
            .sort()
            .reverse()
            .map((image, i) => (
                <Circle key={i} {... image} />
            ))}
            
        </div>
    )
}

export default ContendersCircles