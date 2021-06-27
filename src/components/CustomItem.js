import React, {useState} from 'react';
import {useMediaQuery} from "react-responsive";


const CustomItem = (props) => {
    const [isHovering, setHovering] = useState(false);

    const [activeFilter, setActiveFilter] = useState(true);
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 800px)'})

    return (
        <button
            onClick={() => props.changeIndex(props.id, props.regularImage, props.text, props.images)}

            onMouseOver={() => {
                setHovering(true)
                setActiveFilter(false)
            }}
            onMouseLeave={() => {
                setHovering(false)
                setActiveFilter(true)
            }}
            style={{

                width:'14vw',
                backgroundColor: 'transparent',
                borderWidth: 0,
                paddingBottom: '10%',
                paddingLeft:'1.5%',
                paddingRight:'1.5%'
            }}>
            <img style={{
                width: '100%', filter: activeFilter ? 'grayscale(100%)' : undefined,
            }} src={props.regularImage}/>
        </button>
    );
};

export default CustomItem;
