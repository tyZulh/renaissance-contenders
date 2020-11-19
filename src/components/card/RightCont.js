import {useState} from 'react'
import './RightCont.css'
import like from '../assets/like.png'
import commentlogo from '../assets/comment.png'

function LeftCont(props) {

    const [vote, setVote] = useState([i].nbr_vote)

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const request = await axios.get(`http://localhost:8000/${theme}/edit/nb_vote`)
    //         setVote(request.data)
    // }}, [vote])
        
    return (
        <div className="card-container">
            <div className="right-card-header">
                <img className="card-artist" alt="artist" src={props.url} />
                <h1 className="card-title"> {props.name} </h1>
            </div>
            <div className="card-work">
                <img alt="card player" src={props.url} />
            </div>
            <div className="right-user-interaction">
                <div className="logo">{props.nbr_vote} people like that !</div>
                <img className="like logo" alt="like" src={like} 
                    onClick={event => {
                    setVote(vote + 1)
                    }}
                        />
                <img className="comment logo" alt="logo comment" src={commentlogo} />
            </div>

        </div>
    )
}

export default LeftCont