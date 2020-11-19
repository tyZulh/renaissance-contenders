import { useState, useEffect } from 'react'
import axios from 'axios'
import './LeftCont.css'
import like from '../assets/like.png'
import commentlogo from '../assets/comment.png'


function LeftCont(props) {


    const [vote, setVote] = useState(props.nbr_vote)
    const theme = props.params.info.style

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.post(`http://localhost:8000/${theme}/edit/nb_vote`, vote)
            setVote(request.data)
    }}, [vote])




    


    return (
        <div className="card-container">
            <div className="card-header">
                <h1 className="card-title"> {props.name} </h1>
                <img className="card-artist" alt="artist" src={props.url} />
            </div>
            <div className="card-work">
                <img alt="card player" src={props.url} />
            </div>
            <div className="user-interaction">
                <img className="comment logo" alt="logo comment" src={commentlogo} />
                <img className="like logo" alt="like" src={like}
                    onClick={event => {
                        setVote(vote + 1)
                    }}
                />
                <div className="logo vote">{vote} people like that !</div>
            </div>

        </div>
    )
}

export default LeftCont