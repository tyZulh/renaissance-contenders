import './LeftCont.css'
import like from '../assets/like.png'
import commentlogo from '../assets/comment.png'
import { useEffect } from 'react'


function LeftCont(props) {

    useEffect(() => {
        console.log('propssssss', props)
    }, [])

    return (
        <div className="card-container">
            <div className="card-header">
                {props.theme.params.style === 'philosopher' ? <h1 className="card-title"> {props.name}</h1> : <h1 className="card-title"> {props.artist} </h1>}
                <img className="card-artist" alt="artist" src={props.url} />
            </div>
            <div className="card-work">
                {props.theme.params.style === 'philosopher' ? <p>{props.artist}</p> : <img className="card-player" alt="artist" src={props.url} />}
            </div>
            <div className="user-interaction">
                <img className="like logo" alt="like" src={like} />
                <img className="comment logo" alt="logo comment" src={commentlogo} />
                {props.theme.params.style === 'fashion' && <h4>{props.name}</h4>}
            </div>

        </div>
    )
}

export default LeftCont