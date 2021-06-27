import React, {useEffect, useState} from 'react';
import CustomItem from "./CustomItem";
import {useMediaQuery} from "react-responsive";
import '../res/fonts/OpenSansHebrewCondensed-Bold.ttf';
import Item from "./Item";

const Row = (props) => {
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 800px)'})


    const style = isTabletOrMobile ? {

    } : {

    }
    return (
        <div style={style}>

            <div style={{
                flexDirection: isTabletOrMobile?'column':'row',
                display: 'flex',
                flex:1,
                alignItems: 'center',
                justifyContent: 'center',

                backgroundColor: props.showBackground ? '#E9A8A950' : undefined,


            }}>

                    {
                        props.rows.map((item) => {
                            return <div key={item.key} style={{marginLeft:'1%',marginRight:'1%'}}>
                                <Item
                                    onClick={item.onClick}
                                    placeholder={item.placeholder}
                                    type={props.type}
                                    image={item.image}
                                    top={props.showBackground?'-10vh':0}
                                />

                            </div>
                        })
                    }



            </div>

        </div>
    );
};

export default Row;
