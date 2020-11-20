import './LeftCont.css'
import commentlogo from '../assets/comment.png'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { IziContext } from '../../App'



function LeftCont(props) {
    const [count, setCount] = useState(parseInt(props.nb_vote))
    const conto = useContext(IziContext)

    useEffect(() => {
        setCount(parseInt(props.nb_vote))
    }, [props.nb_vote])

    const changeCount = (e) => {
        setCount(count + 1)
        conto[1](!conto[0])
        const theme = props.theme.params.style
        const id = e.target.id
        axios.post(`http://3cbbd8157824.ngrok.io/${theme}/edit/${id}`).then((res) => setCount(res.data))
    }



    return (
        <div className="card-container">
            <div className="card-header-left">
                {props.theme.params.style === 'philosopher' ? <h4 className="card-title"> {props.name}</h4> : <h1 className="card-title"> {props.artist} </h1>}
                <img className="card-artist" alt="artist" src={props.url} />
            </div>

            {props.theme.params.style === 'fashion' && <h4 >By {props.name}</h4>}


            <div className="card-work">
                {props.theme.params.style === 'philosopher' ? <h3 className="text-quote"> <img className="quote" src="https://i.postimg.cc/yxkQqYHD/left-quote.png" /> {props.artist}</h3> : <img className="card-player" alt="artist" src={props.url} />}
            </div>


            <div className="user-interaction-left">
                <img className="comment logo" alt="comment" src={commentlogo} />
                    <img onClick={changeCount}
                        className="like logo"
                        alt="like"
                        src="https://i.postimg.cc/X7fKrbqt/Ei-heart.png"
                        id={props.id}
                    />

                        {count}
                

            </div>

        </div>
    )
}

export default LeftCont