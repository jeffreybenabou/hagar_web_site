import React, {useState} from 'react';
import {TYPE_OF_COMPONENT} from "../Utils";

const CustomBlurItem = (props) => {
    const [showEffect, setShowEffect] = useState(false);
    return (
        <div
            onClick={()=>{
                if(props.type==TYPE_OF_COMPONENT.LIST){
                    props.showFullScreen(0)
                }
            }}
            onMouseLeave={() => {
                setShowEffect(false)
            }}
            onMouseOver={() => {
                setShowEffect(true)
            }}
            style={{
                width: '25vh',
                height: '25vh',
                backgroundColor: showEffect ? '#E9A8A9' : 'black',
                marginRight: '0.5%',
                marginLeft: '0.5%',
                bottom: '45%',
                position: 'relative'
            }}>


            {
                !showEffect &&
                <img style={{height: '100%', width: '100%'}} src={props.imageSrc}/>
            }

            {
                showEffect &&
                <div style={{
                    fontFamily: 'OpenSansHebrewCondensedRegular',
                    color: 'white',
                    fontSize: '3vh',
                    width: '100%',
                    textAlign: 'center',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    {
                        props.text
                    }
                </div>
            }

        </div>
    );
}

export default CustomBlurItem;
