import './WeatherPerHours.scss'
import halfSun from '../../Assets/halfSun.png'

function WeatherPerHours( {hour} ) {
    return (
        <div className="WeatherPerHours">
            <div className='item'>
                <p>{hour}</p>
                <img src={halfSun} alt="" />
                {/* <p>{temp}</p> */}
            </div>
            <div className='item'>
                <p>{hour}</p>
                <img src={halfSun} alt="" />
                {/* <p>{temp}</p> */}
            </div>
            <div className='item'>
                <p>{hour}</p>
                <img src={halfSun} alt="" />
                {/* <p>{temp}</p> */}
            </div>
            <div className='item'>
                <p>{hour}</p>
                <img src={halfSun} alt="" />
                {/* <p>{temp}</p> */}
            </div>
            <div className='item'>
                <p>{hour}</p>
                <img src={halfSun} alt="" />
                {/* <p>{temp}</p> */}
            </div>
            <div className='item'>
                <p>{hour}</p>
                <img src={halfSun} alt="" />
                {/* <p>{temp}</p> */}
            </div>
        </div>
    )
}

export default WeatherPerHours
