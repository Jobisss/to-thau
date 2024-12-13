import Tilt from 'react-parallax-tilt'
import Img from '../assets/us.png'

export const CardTilt = () => { 
    return (
        <Tilt
            className="h-[45vh]"
            tiltMaxAngleX={7}
            tiltMaxAngleY={7}
            perspective={840}
            transitionSpeed={2000}
        >
            <div className='w-full h-full bg-thauane-red p-[0.9px] rounded-md '>
                <img src={Img.src} className='w-full md:w-[250px] bg-cover  rounded-md h-full' alt="pic" />
            </div>
        </Tilt>
    )
}