import Tilt from 'react-parallax-tilt'
import Img from '../assets/us.png'

export const CardTilt = () => { 
    return (
        <Tilt
            className=""
            tiltMaxAngleX={7}
            tiltMaxAngleY={7}
            perspective={840}
            transitionSpeed={2000}
        >
            <div className='w-full bg-thauane-red p-[0.9px] rounded-md '>
                <img src={Img.src} className='w-[250px] md:w-[250px] rounded-md ' alt="pic" />
            </div>
        </Tilt>
    )
}