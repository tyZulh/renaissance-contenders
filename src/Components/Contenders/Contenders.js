import ContendersCircles from './ContendersCircles';

import './Contenders.css';

const Contenders = ({name}) => {
    return (
        <div className='contenders__container'>
            <div className='contenders__container__title'>
                <h3 className='contenders__title'>Contenders</h3>
                <hr className='contenders__hr'/>
            </div>
            <ContendersCircles />
        </div>
    )
}

export default Contenders;
