import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';

function Parallaxie (props) {
    return(
        <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
            <Image src={props.src}/>
        </Parallax>
    );
}


const Image = styled.img`
    z-index: -1;
    max-width: 125%;
`

export default Parallaxie;