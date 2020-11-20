import './RightCont.css'
import like from '../assets/like.png'
import commentlogo from '../assets/comment.png'


function LeftCont({ name, url, artist, nbrVote, style, nationality, comment }) {
   
    return (
        <div className="card-container">
            <div className="right-card-header">
                <img className="card-artist" alt="artist" src={url} />
                <h4 className="card-title"> {name} </h4>
            </div>
            <div className="card-work">
                <img className='mini-img-right' alt="card player" src={url} />
            </div>
            <div className="right-user-interaction">
                <img className="like" alt="like" src="https://i.postimg.cc/X7fKrbqt/Ei-heart.png"/>
                <img className="comment" alt="comment" src={commentlogo} />
            </div>

        </div>
    )
}

export default LeftCont