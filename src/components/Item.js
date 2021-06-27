import React from 'react';
import {useState} from 'react';
import {useMediaQuery} from "react-responsive";

const Item = (props) => {
    const [hovering, setHovering] = useState(false)
    const [showBackground, setShowBackground] = useState(false);
    const [firstPress,setFirstPress]=useState(true);
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 800px)'})
    return (
        <div

            onMouseOver={() => {
                setShowBackground(props.type == 1)
                setHovering(true)

            }}
            onClick={!isTabletOrMobile||props.type != 1?props.onClick:()=>{
                if(firstPress){
                    setHovering(true)
                    setFirstPress(false)
                }else{
                    props.onClick()
                }

            }}
            onMouseLeave={() => {
                setShowBackground(false)
                setHovering(false)
                setFirstPress(true)
            }}
            style={{
                cursor: 'pointer',
                marginBottom:isTabletOrMobile?'5%':0,
                position: 'relative',
                top: props.top,
                height: isTabletOrMobile?'80vmin':'30vmin',
                width: isTabletOrMobile?'80vmin':'30vmin'
            }}>
            {
                showBackground &&
                <div style={{
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                    width: '100%',
                    flex: 1,
                    backgroundColor: '#E9A8A9',
                    position: 'absolute'
                }}>

                    <div style={{
                        color:'white',
                        fontFamily: 'OpenSansHebrewCondensedRegular',
                        fontSize:'2em',
                    }}>
                        {
                            props.placeholder
                        }
                    </div>

                </div>
            }
            {
                !showBackground &&
                <img style={{
                    filter: props.type == undefined &&!isTabletOrMobile&& !hovering ? 'grayscale(100%)' : undefined,
                    height: isTabletOrMobile?'80vmin':'30vmin',

                    width:  isTabletOrMobile?'80vmin':'30vmin'
                }} src={props.image}/>
            }

        </div>
    )
}
export default Item;
