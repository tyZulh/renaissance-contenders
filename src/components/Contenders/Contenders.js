import ContendersCircles from './ContendersCircles';

import './Contenders.css';

const Contenders = (props) => {
    
    return (
        <div className='contenders__container'>
            <div className='contenders__container__title'>
                <hr className='contenders__hr__top'/>
                <h3 className='contenders__title'>{props.params.style}</h3>
            </div>
            <ContendersCircles info={props} />
            <hr className='contenders__hr__bottom'/>
        </div>
    )
}

export default Contenders;
