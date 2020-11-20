import './LeftCont.css'
import like from '../assets/like.png'
import commentlogo from '../assets/comment.png'
import { useEffect, useState } from 'react'
import qs from 'qs'
import axios from 'axios'


function LeftCont(props) {
    const [count, setCount] = useState(parseInt(props.nb_vote))


    useEffect(() => {
        setCount(parseInt(props.nb_vote))
    }, [props.nb_vote])

    const changeCount = (e) => {
        setCount(count + 50) 
        const theme = props.theme
        const id = e.target.id

        // axios({
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, 
        //             url: `http://1f5403262dc5.ngrok.io/${theme}/edit/${id}`,
        //             data: qs.stringify({
        //                     nb_vote: count
        //             })
        // })
    }
        // axios.post(`http://1f5403262dc5.ngrok.io/${theme}/edit/${id}`, qs.stringify({
        //     nb_vote: count
        // }) )
    //     .then(res => console.log('dzfksfjkshdlfjkzhdfjlkdf', res ))
    // }


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
                <form>
                    {}
                    <img onClick={changeCount}
                    className="like logo"
                    alt="like" 
                    src={like}
                    id={props.id}
                     />
                </form>


                <img className="comment logo" alt="logo comment" src={commentlogo} />
                {props.theme.params.style === 'fashion' && <h4>{props.name}</h4>}
                {count}
            </div>

        </div>
    )
}

export default LeftCont