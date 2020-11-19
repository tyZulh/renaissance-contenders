import './Card.css'
import like from '../assets/like.png'
import commentlogo from '../assets/comment.png'


function Card({name, url, artist, nbrVote, style, nationality, comment}) {
    console.log(name)
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-header">
                    <h1 className="card-title"> {name} </h1>
                    <img className="card-artist" alt="artist" src={url} />
                </div>
                <img className="card-work" alt="card player" src={url} />
                <div className="user-interaction">
                    <img className="like logo" alt="like" src={like} />
                    <img className="comment logo" alt="logo comment" src={commentlogo} />
                </div>

            </div>
        </div>
    )
}

export default Card