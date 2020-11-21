import './RightCont.css'
import like from '../assets/like.png'
import commentlogo from '../assets/comment.png'
import { useEffect, useState } from 'react'
import qs from 'qs'
import axios from 'axios'


function RightCont(props) {
    const [count, setCount] = useState(parseInt(props.nb_vote))


    useEffect(() => {
        setCount(parseInt(props.nb_vote))
    }, [props.nb_vote])

    const changeCount = (e) => {
        setCount(count + 1)
        const theme = props.theme
        const id = e.target.id

        axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            url: `http://localhost:8000/${theme}/edit/${id}`,
            data: qs.stringify({
                nb_vote: count
            })
        })
    }
    // axios.post(`http://1f5403262dc5.ngrok.io/${theme}/edit/${id}`, qs.stringify({
    //     nb_vote: count
    // }) )
    //     .then(res => console.log('dzfksfjkshdlfjkzhdfjlkdf', res ))
    // }


    return (
        <div className="card-container">
            <div className="card-header-right">
                {props.theme.params.style === 'philosopher' ? <h4 className="card-title-right"> {props.name}</h4> : <h1 className="card-title"> {props.artist} </h1>}
                <img className="card-artist" alt="artist" src={props.url} />
            </div>

            {props.theme.params.style === 'fashion' && <h4 >By {props.name}</h4>}


            <div className="card-work">
                {props.theme.params.style === 'philosopher' ? <h3 className="text-quote"> <img className="quote" src="https://i.postimg.cc/yxkQqYHD/left-quote.png" /> {props.artist}</h3> : <img className="card-player" alt="artist" src={props.url} />}
            </div>


            <div className="user-interaction-right">
                {count}
    
                    <img onClick={changeCount}
                        className="like logo"
                        alt="like"
                        src="https://i.postimg.cc/X7fKrbqt/Ei-heart.png"
                        id={props.id}
                    />


                <img className="comment logo" alt="comment" src={commentlogo} />
            </div>

        </div>
    )
}

export default RightCont