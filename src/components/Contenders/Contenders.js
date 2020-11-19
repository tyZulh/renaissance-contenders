import ContendersCircles from './ContendersCircles';

import './Contenders.css';

const Contenders = ({name}) => {
    return (
        <div className='contenders__container'>
            <div className='contenders__container__title'>
                <hr className='contenders__hr__top'/>
                <h3 className='contenders__title'>Contenders</h3>
            </div>
            <ContendersCircles />
            <hr className='contenders__hr__bottom'/>
        </div>
    )
}

export default Contenders;
