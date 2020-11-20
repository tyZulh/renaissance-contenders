import { useContext, useEffect, useState } from 'react'
import Circle from './Circle'
import axios from 'axios'
import { IziContext } from '../../App'
import './ContendersCircles.css'

const ContendersCircles = (props) => {
    const [imageCircle, setImageCircle] = useState([])
    const chala = useContext(IziContext);
    const jpsr = chala[0]
    const theme = props.info.params.style

    const fetchData = async () => {
        const url = `http://3cbbd8157824.ngrok.io/${theme}/all`
        const request = await axios.get(url)

        const arr = [...request.data]
        const finalArr = arr.sort((a, b) => {
            return a.nb_vote - b.nb_vote
        }).reverse()
        setImageCircle(finalArr)
    }

    useEffect(() => {
        fetchData();      
    }, [theme])

    useEffect(()=> {
       fetchData()
    },[jpsr])





    return (
        <div className='contendersCirclesContainer'>
            {imageCircle
                .sort()
                .reverse()
                .map((image, i) => (
                    <Circle key={i} {...image} />
                ))}

        </div>
    )
}

export default ContendersCircles