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

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://citizen-court-api.captain.citizen-court.tech/${theme}/all`
            const request = await axios.get(url)
    
            const arr = [...request.data]
            const finalArr = arr.sort((a, b) => {
                return a.nb_vote - b.nb_vote
            }).reverse()
            setImageCircle(finalArr)
        }

        fetchData();      
    }, [theme, jpsr])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const url = `https://citizen-court-api.captain.citizen-court.tech/${theme}/all`
    //         const request = await axios.get(url)
    
    //         const arr = [...request.data]
    //         const finalArr = arr.sort((a, b) => {
    //             return a.nb_vote - b.nb_vote
    //         }).reverse()
    //         setImageCircle(finalArr)
    //     }

    //     fetchData();      
    // }, [jpsr])

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