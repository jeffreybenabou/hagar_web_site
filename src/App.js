import React, {useState, useEffect, useRef} from 'react';
import "./App.css"
import Row from "./components/Row";
import logo from './res/images/logo.png'
import betterFlyLogo from './res/logo/betterFlyLogo.png'
import {FiX} from "react-icons/fi"
import {FaWhatsapp} from "react-icons/fa"
import {BiDotsHorizontalRounded} from "react-icons/bi";

import cosmetic from './res/logo/cosmetic.png'
import adamaLogo from './res/logo/adama_logo.png'
import "../src/test.css"
import running1 from './res/images/running.jpg'
import running2 from './res/images/runing/runing1.jpg'
import running3 from './res/images/runing/runing2.jpg'
import running4 from './res/images/runing/runing3.jpg'
import whatsApp from './res/icons/whatsapp.png';
import facebook from './res/icons/facebook.png';
import instagram from './res/icons/instagram.png';
import apps1 from './res/images/apps.jpg'
import better1 from './res/images/betterFly/better1.jpg'
import better2 from './res/images/betterFly/better2.jpg'
import better3 from './res/images/betterFly/better3.jpg'
import better4 from './res/images/betterFly/better4.jpg'
import {BsChevronRight, BsChevronLeft} from 'react-icons/bs';
import bibi1 from './res/images/bibi/bibi1.jpg'
import bibi2 from './res/images/bibi/bibi2.jpg'
import bibi3 from './res/images/bibi/bibi3.jpg'
import bibi4 from './res/images/bibi/bibi4.jpg'

import alian1 from './res/images/alian/alian1.png'
import alian2 from './res/images/alian/alian2.jpg'
import alian3 from './res/images/alian/alian3.jpg'
import alian4 from './res/images/alian/alian4.jpg'
import alian5 from './res/images/alian/alian5.jpg'

import cosmetic1 from './res/images/cosmetic/cosmetic1.jpg'
import cosmetic2 from './res/images/cosmetic/cosmetic2.jpg'
import cosmetic3 from './res/images/cosmetic/cosmetic3.jpg'
import cosmetic4 from './res/images/cosmetic/cosmetic4.jpg'

import pizza1 from './res/images/pizza/pizza1.png'
import pizza2 from './res/images/pizza/pizza2.jpg'
import pizza3 from './res/images/pizza/pizza2.jpg'


import lifeBoat from './res/logo/lifeBoat.png'
import lifeBoat1 from './res/images/lifeBoat/lifeBoat1.jpg'
import lifeBoat2 from './res/images/lifeBoat/lifeBoat2.jpg'
import lifeBoat3 from './res/images/lifeBoat/lifeBoat3.jpg'

import tour from './res/images/tour/tour.jpg'
import tour1 from './res/images/tour/tour1.jpg'
import tour2 from './res/images/tour/tour2.jpg'

import invatation_1 from './res/images/invatation/invatation_1.jpg'
import invatation_2 from './res/images/invatation/invatation_2.jpg'
import invatation_3 from './res/images/invatation/invatation_3.jpg'

import adama1 from './res/images/adama/adama1.jpg'
import adama2 from './res/images/adama/adama2.jpg'
import adama3 from './res/images/adama/adama3.jpg'

import face from './res/images/photoShop/face.jpg'
import banana from './res/images/photoShop/banana.jpg'
import iceCream from './res/images/photoShop/iceCream.jpg'
import waterMelon from './res/images/photoShop/waterMelon.jpg'
import {useMediaQuery} from "react-responsive";


const App = () => {
    const [showRestOfWorks, setShowRestOfWorks] = useState(false)
    const [clickAble, setClickAble] = useState(false);
    const row1 = [{
        title: 'קוסמטיקה קוסמטיקה קוסמטיקה קוסמטיקה קוסמטיקה קוסמטיקה קוסמטיקה קוסמטיקה קוסמטיקה ',
        images: [cosmetic2, cosmetic1, cosmetic4, cosmetic3],
        onClick: () => onClick(1, 1),
        image: cosmetic,
        key: 1,
        type: 1,
        row: 1,
        index: 0
    }, {
        title: 'אדמה אדמה אדמה אדמה אדמה אדמה אדמה אדמה אדמה אדמה אדמה אדמה אדמה אדמה אדמה אדמה ',
        images: [adama2, adama3, adama1],
        onClick: () => onClick(2, 1),
        image: adamaLogo,
        key: 2,
        type: 1,
        row: 1,
        index: 1
    }, {
        title: 'סירות הצלה סירות הצלה סירות הצלה סירות הצלה סירות הצלה סירות הצלה סירות הצלה סירות הצלה ',
        images: [lifeBoat2, lifeBoat3, lifeBoat1,],
        onClick: () => onClick(3, 1),
        image: lifeBoat,
        key: 3,
        type: 1,
        row: 1,
        index: 2
    }, {
        title: 'תעופה תעופה תעופה תעופה תעופה תעופה תעופה תעופה תעופה תעופה תעופה תעופה תעופה תעופה תעופה ',
        images: [better1, better2, better3, better4],
        onClick: () => onClick(4, 1),
        image: betterFlyLogo,
        key: 4,
        type: 1,
        row: 1,
        index: 3
    }]
    const row2 = [{
        title: 'הזמנות הזמנות הזמנות הזמנות הזמנות הזמנות הזמנות הזמנות הזמנות הזמנות הזמנות הזמנות הזמנות ',
        onClick: () => {

            onClick(5, 2)
        },
        placeholder: 'מיתוג לאירועים',
        image: invatation_2,
        images: [invatation_2, invatation_1, invatation_3],

        key: 5,
        type: 2,
        row: 2,
        index: 0
    }, {
        onClick: () => onClick(6, 2),
        title: 'ביבי ביבי ביבי ביבי ביבי ביבי ביבי ביבי ביבי ביבי ביבי ביבי ביבי ביבי ביבי ביבי ביבי ביבי ',
        placeholder: 'עיצוב חוברות',
        image: bibi1,
        images: [bibi1, bibi2, bibi3, bibi4],
        type: 1,
        key: 6,
        row: 2,
        index: 1
    }, {
        onClick: () => {
            setClickAble(true)
            onClick(7, 2)
        },
        title: 'אפליקציה אפליקציה אפליקציה אפליקציה אפליקציה אפליקציה אפליקציה אפליקציה אפליקציה אפליקציה ',
        placeholder: 'UI/UX',
        image: tour,
        images: [apps1, running1,],
        objectsOnImages: [{
            title: 'Tour TourTourTourTourTourTourTourTourTourTourTourTour',
            placeholder: 'עיצוב חוברות',
            image: tour,
            images: [tour1, tour2],
            type: 1,
            key: 6,
            row: 2,
            index: 1
        }, {
            title: 'Runing',
            placeholder: 'עיצוב חוברות',
            image: running1,
            images: [running2, running3, running4],
            type: 1,
            key: 6,
            row: 2,
            index: 1
        }],
        key: 7,
        type: 2,
        row: 2,
        index: 2
    }, {
        onClick: () => onClick(8, 2),
        placeholder: 'מודלים בתלת מימד',
        image: lifeBoat,
        key: 8,
        type: 1,
        row: 2,
        index: 3
    }]
    const row3 = [{
        onClick: () => onClick(9, 3),
        image: waterMelon,
        key: 9,
        images: [],
        type: 3,
        row: 3,
        index: 0
    }, {
        onClick: () => onClick(10, 3),
        image: banana,
        key: 10,
        images: [],
        type: 3,
        row: 3,
        index: 1
    }, {
        onClick: () => onClick(11, 3),
        image: iceCream,
        key: 11,
        images: [],
        type: 3,
        row: 3,
        index: 2
    }, {
        onClick: () => onClick(12, 3),
        image: face,
        key: 12,
        type: 3,
        images: [],
        row: 3,
        index: 3
    }]
    const row4 = [{
        title: 'חייזרים',
        images: [alian5, alian3, alian4, alian2],
        onClick: () => onClick(13, 4),
        image: alian1,
        key: 13,
        type: 1,
        row: 4,
        index: 0
    }, {
        title: 'פיצה פיצה פיצה פיצה',
        images: [pizza3, pizza2],
        onClick: () => onClick(14, 4),
        image: pizza1,
        key: 14,
        type: 1,
        row: 4,
        index: 1
    }]

    const [YPosition, setYPosition] = useState(0);
    const [showFullScreen, setShowFullScreen] = useState(false);
    const [objectOnFullScreen, setObjectOnFullScreen] = useState(undefined);
    const onClick = (index, row) => {
        let objectOnFullScreen = {};
        switch (row) {

            case 1:
                objectOnFullScreen = row1.find((item) => {
                    return item.key === index
                })
                break;
            case 2:
                objectOnFullScreen = row2.find((item) => {
                    return item.key === index
                })
                break;

            case 3:
                objectOnFullScreen = row3.find((item) => {
                    return item.key === index
                })
                break;
            case 4:
                objectOnFullScreen = row4.find((item) => {
                    return item.key === index
                })
                console.log("objectOnFullScreen", objectOnFullScreen)
                break;
            default:
                objectOnFullScreen = undefined
        }
        setObjectOnFullScreen(objectOnFullScreen)

    }
    useEffect(() => {
        if (objectOnFullScreen !== undefined) {
            setShowFullScreen(true)
            setYPosition(window.pageYOffset == 0 ? YPosition : window.pageYOffset);

        }


    }, [objectOnFullScreen])
    useEffect(() => {
        if (!showFullScreen) {
            window.scrollTo(0, YPosition);
        }

    }, [showFullScreen])


    const Button = (props) => {
        return <button onClick={props.onClick} style={{
            height: '5vh',
            width: '5vh',
            cursor: 'pointer',
            borderWidth: 0,
            backgroundColor: 'transparent',
            fontSize: '2.5rem',
            color: '#E9A8A9'
        }}>
            {
                props.icon
            }
        </button>
    }

    const objectToReturnOnNextOrPrevNav = (counter, row) => {
        const nextItem = row.find((item, index) => {
            return index == objectOnFullScreen.index + counter
        })
        if (nextItem === undefined) {
            if (counter < 0) {
                const nextItem = row.find((item, index) => {
                    return index == row.length - 1
                })
                setObjectOnFullScreen(nextItem)
            } else {
                const nextItem = row.find((item, index) => {
                    return index == 0
                })
                setObjectOnFullScreen(nextItem)
            }
        } else {

            setObjectOnFullScreen(nextItem)
        }
    }
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 800px)'})
    const ShowFullScreen = () => {

        const onClick = (index) => {
            if (clickAble) {

                objectOnFullScreen.objectsOnImages.map((item, index2) => {
                    if (index2 == index) {
                        setObjectOnFullScreen(item)
                    }
                })
                console.log(objectOnFullScreen)

            }
        }
        return <div
            style={{
                height: '100vh',
                width: '100vw',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 100,
            }}>

            <button
                onClick={() => {
                    setShowFullScreen(false)
                }}
                style={{
                    cursor: 'pointer',
                    zIndex: 200,
                    backgroundColor: 'transparent',
                    borderWidth: 0,
                    color: '#E9A8A9',
                    left: isTabletOrMobile ? 0 : '9.4%',
                    top: isTabletOrMobile ? 0 : '5vh',
                    position: 'fixed'
                }}>
                <FiX size={'3.5vh'}/>
            </button>


            <div
                style={{

                    flex: 1,
                    height: '100%',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                {
                    !isTabletOrMobile &&
                    <div
                        style={{


                            position: 'fixed',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '80%',
                            height: '100%'
                        }}>
                        <Button
                            onClick={() => {
                                let nextItem = undefined;
                                switch (objectOnFullScreen.row) {
                                    case 1:
                                        objectToReturnOnNextOrPrevNav(-1, row1)

                                        break;
                                    case 2:
                                        objectToReturnOnNextOrPrevNav(-1, row2)
                                        break;
                                    case 3:
                                        objectToReturnOnNextOrPrevNav(-1, row3)
                                        break;
                                }
                            }}
                            icon={<BsChevronRight/>}/>

                        <Button
                            onClick={() => {
                                let nextItem = undefined;
                                switch (objectOnFullScreen.row) {
                                    case 1:
                                        objectToReturnOnNextOrPrevNav(1, row1)
                                        break;
                                    case 2:
                                        objectToReturnOnNextOrPrevNav(1, row2)
                                        break;
                                    case 3:
                                        objectToReturnOnNextOrPrevNav(1, row3)
                                        break;
                                }
                            }}
                            icon={<BsChevronLeft/>}/>
                    </div>
                }

                {
                    objectOnFullScreen.type == 1 ?
                        <div style={{marginTop: '15%'}}/>
                        /*<img alt={''}
                             style={{width: '25%', marginTop: '5%', marginBottom: '5%'}}
                             src={objectOnFullScreen.image}/>*/ :
                        objectOnFullScreen.type == 2 ?
                            <div style={{marginBottom: '5%'}}/> :
                            <img alt={''}
                                 style={{height: '85vh', marginTop: '8%'}}
                                 src={objectOnFullScreen.image}/>
                }

                {
                    objectOnFullScreen.type !== 3 &&
                    <div
                        style={{backgroundColor: '#B3B3B3', width: isTabletOrMobile ? '85vw' : '35vw', height: '2px'}}/>
                }


                <div
                    style={{
                        wordWrap:'break-word',
                        color: '#575756',
                        fontSize: '5vw',
                        fontFamily: 'Assistant',
                        width: isTabletOrMobile ? '85vw' : '70%',
                        marginTop: '2.5%',
                        textAlign: 'center',
                        marginBottom: '2.5%',
                        alignItems: 'center',
                        justifyContent: 'center'

                    }}>

                    {
                        objectOnFullScreen.title
                    }


                </div>
                {
                    objectOnFullScreen.type !== 3 &&
                    <div
                        style={{backgroundColor: '#B3B3B3', width: isTabletOrMobile ? '85vw' : '35vw', height: '2px'}}/>
                }


            </div>
            <div style={{
                marginTop: '3%',
                marginBottom: '4%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                {
                    objectOnFullScreen.type === 1 ?
                        objectOnFullScreen.images.map((item, index) => {
                            return <img
                                alt=""
                                src={item}
                                style={{zIndex: 1, width: isTabletOrMobile ? "85%" : '50%', height: '100%'}}/>
                        }) : objectOnFullScreen.type === 2 ?
                        <div
                            style={{
                                zIndex: 1,
                                flex: 1,
                                display: 'flex',
                                flexDirection: isTabletOrMobile ? 'column' : 'row'
                            }}>
                            <div
                                style={{
                                    flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center'
                                }}>

                                {
                                    objectOnFullScreen.images.map((item, index) => {
                                        return index % 2 === 0 &&
                                            <img
                                                onClick={() => {
                                                    onClick(index)
                                                }}
                                                alt={""}
                                                src={item}
                                                style={{
                                                    cursor: clickAble ? 'pointer' : undefined,
                                                    marginLeft: isTabletOrMobile ? 0 : '2.5%',
                                                    marginBottom: '2%',
                                                    height: isTabletOrMobile ? '80vw' : '28vw',
                                                    width: isTabletOrMobile ? '80vw' : '28vw'
                                                }}/>
                                    })
                                }
                            </div>
                            <div style={{
                                flex: 1,
                                zIndex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                {
                                    objectOnFullScreen.images.map((item, index) => {
                                        return index % 2 === 1 &&
                                            <img
                                                onClick={() => {
                                                    onClick(index)
                                                }}
                                                alt={""}
                                                src={item}
                                                style={{
                                                    marginRight: isTabletOrMobile ? 0 : '2.5%',
                                                    cursor: clickAble ? 'pointer' : undefined,
                                                    marginBottom: '4rem',
                                                    height: isTabletOrMobile ? '80vw' : '28vw',
                                                    width: isTabletOrMobile ? '80vw' : '28vw',
                                                }}/>
                                    })
                                }
                            </div>
                        </div> : <div/>
                }

            </div>
            <div style={{
                backgroundColor: '#E9A8A950',
                height: '25vh',
                width: '100vw',
                position: 'fixed',
                zIndex: 0,
                bottom: '10vh',

            }}/>

        </div>
    }
    const Header = () => {


        return <div style={{flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

            <div style={{
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flex: 1,
                height: '10vh',
                width: '10vw',
                margin: '4rem'
            }}>
                <img alt={""} style={{height: isTabletOrMobile ? '50vmin' : '15vmin'}} src={logo}/>

            </div>

            <div style={{
                width: '45%',
                alignSelf: 'center',
                textAlign: 'center',
                display: 'flex',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
                <div style={{backgroundColor: '#B3B3B3', width: isTabletOrMobile ? '85vw' : '100%', height: '2px'}}/>

                <div style={{
                    color: '#575756',
                    fontSize: '1.15rem',
                    fontFamily: 'Assistant',
                    width: isTabletOrMobile ? '85vw' : '70%',
                    marginTop: '2.5%',
                    marginBottom: '5%'
                }}>
                    היי שמי הגר ואני מעצבת גרפית.<br/>
                    אז קצת עלי, אני פרפקציוניסטית, תחרותית ותמיד שואפת ללמוד דברים חדשים.

                    אני מאוד אוהבת את העיצוב המנימליסטי והנקי ושמה דגש גם על הפרטים הקטנים ביותר.
                    <br/>
                    <br/>
                    תוכלו להציץ בתיק העבודות שלי ואם אהבתם והתחברתם צרו איתי קשר ואשמח לקדם את העסק שלכם ע"י מיתוג
                    ייחודי ועכשווי שיבדיל אתכם מהמתחרים.

                </div>
                {/*<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img alt={""} style={{height:isTabletOrMobile?'25vw': '12vmin'}} src={quality}/>
                    <img alt={""} style={{height:isTabletOrMobile?'25vw': '12vmin'}} src={prices}/>
                    <img alt={""} style={{height:isTabletOrMobile?'25vw': '12vmin'}} src={personal}/>

                </div>*/}
                <div style={{
                    marginTop: '2.5%',
                    backgroundColor: '#b3b3b3',
                    width: isTabletOrMobile ? '85vw' : '100%',
                    height: '2px',
                    marginBottom: '7%'
                }}/>

            </div>
        </div>
    }
    const ShowMainScreen = () => {

        return <div style={{overflowX: 'hidden', overflowY: 'hidden'}}>
            <Header/>
            <div style={{

                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                marginBottom: '5%'

            }}>
                <div style={{
                    color: '#E9A8A9',
                    fontFamily: 'OpenSansHebrewCondensedRegular',
                    textAlign: 'center',
                    fontSize: '2.5rem',
                    marginTop: isTabletOrMobile ? '10%' : '2.5%',
                    marginBottom: '1%',
                }}>
                    מיתוג
                </div>
                <Row

                    rows={row1}/>
                {
                    showRestOfWorks &&
                    <>
                        <Row

                            rows={row4}/>

                    </>
                }
                <button
                    onClick={() => {
                        setShowRestOfWorks(!showRestOfWorks)
                    }}
                    style={{
                        marginTop: isTabletOrMobile ? '2%' : '5%',
                        marginBottom: isTabletOrMobile ? '15%' : 0,
                        cursor: 'pointer',
                        borderWidth: 0,
                        backgroundColor: 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <BiDotsHorizontalRounded color={"#E9A8A9"} size={'3.5vh'}/>
                </button>

                <div style={{
                    color: '#E9A8A9',
                    fontFamily: 'OpenSansHebrewCondensedRegular',
                    textAlign: 'center',
                    fontSize: '2.5rem',

                    marginTop: '4%',
                    marginBottom: isTabletOrMobile ? '15%' : '7.5%',
                }}>
                    עיצובים נוספים
                </div>
                <Row
                    showBackground={!isTabletOrMobile}
                    type={1}
                    rows={row2}/>

                <div style={{
                    color: '#E9A8A9',
                    fontFamily: 'OpenSansHebrewCondensedRegular',
                    textAlign: 'center',
                    fontSize: '2.5rem',
                    marginTop: '2.5%',
                    marginBottom: '2.5%',
                }}>
                    עיצובים בפוטושופ
                </div>
                <Row
                    rows={row3}/>
            </div>
            <div style={{
                color: '#E9A8A9',
                fontFamily: 'OpenSansHebrewCondensedRegular',
                textAlign: 'center',
                fontSize: '2.5rem',
                marginTop: '1%',
                marginBottom: '1%',
            }}>
                צור קשר
            </div>
            <ContactForm/>

        </div>
    }

    /*const ClientsComments = () => {
        return <div style={{

            alignItems: 'center',

            flexDirection: 'column',
            display: 'flex',


        }}>
            <img alt={""} style={{width: '12%'}} src={comments}/>
            <div style={{
                marginTop: '5%',
                marginBottom: '5%',
                backgroundColor: '#b3b3b3',
                width: '45%',
                height: '2px',

            }}/>
            <div style={{
                color: '#575756',

                textAlign: 'center',
                fontSize: '1.15rem',
                fontFamily: 'Assistant',
                width: '40%',

            }}>
                היי שמי הגר ואני מעצבת גרפית.<br/>
                אז קצת עלי, אני פרפקציוניסטית, תחרותית ותמיד שואפת ללמוד דברים חדשים.

                אני מאוד אוהבת את העיצוב המנימליסטי והנקי ושמה דגש גם על הפרטים הקטנים ביותר.


            </div>
            <div style={{
                marginTop: '5%',
                backgroundColor: '#b3b3b3',
                width: '45%',
                height: '2px',
                marginBottom: '7%'
            }}/>
        </div>
    }*/
    const ContactForm = () => {
        const [hover, setHover] = useState(false);
        const [subject, setSubject] = useState("");
        const [phone, setPhone] = useState("");
        const [body, setBody] = useState("");
        const [fullName, setFullName] = useState("");
        return <div style={{
            paddingTop: '1%',
            flexDirection: 'column',
            display: 'flex'
        }}>

            <div style={{
                backgroundColor: '#E9A8A950',
                display: 'flex',
                flex: 1,
                paddingTop: '1%',
                paddingBottom: '1%',


                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',

            }}>
                <div style={{

                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '25.10vw',
                    height: '10rem',
                    marginLeft: '0.15%',
                }}>
                    <input
                        onChange={(event) => {
                            setFullName(event.target.value)
                        }}
                        style={{
                            boxSizing: 'border-box',
                            paddingRight: '2%',
                            margin: '1.5%',
                            fontFamily: 'Assistant',
                            fontSize: '1em',
                            color: '#575756',
                            borderRadius: '0.5vw',
                            outlineWidth: 0,
                            width: '100%',
                            borderColor: 'transparent',
                            height: '100%',
                        }}
                        placeholder={"שם מלא"}/>

                    <input
                        onChange={(event) => {
                            setPhone(event.target.value)
                        }}
                        style={{
                            boxSizing: 'border-box',
                            paddingRight: '2%',
                            margin: '1.5%',
                            fontFamily: 'Assistant',
                            borderRadius: '0.5vw',
                            outlineWidth: 0,
                            fontSize: '1em',
                            color: '#575756',
                            width: '100%',
                            borderColor: 'transparent',
                            height: '100%',
                        }}
                        placeholder={"טלפון"}/>

                    <input
                        onChange={(event) => {
                            setSubject(event.target.value)
                        }}
                        style={{
                            boxSizing: 'border-box',
                            paddingRight: '2%',
                            margin: '1.5%',
                            fontFamily: 'Assistant',
                            borderRadius: '0.5vw',
                            fontSize: '1em',
                            color: '#575756',
                            outlineWidth: 0,
                            width: '100%',
                            borderColor: 'transparent',
                            height: '100%',
                        }}
                        placeholder={"נושא"}/>
                </div>
                <textarea
                    onChange={(event) => {
                        setBody(event.target.value)
                    }}
                    style={{
                        boxSizing: 'border-box',
                        paddingTop: '0.4%',
                        paddingRight: '0.6%',
                        fontFamily: 'Assistant',
                        outlineWidth: 0,
                        fontSize: '1em',
                        color: '#575756',
                        '-webkit-input-placeholder': { /* Chrome, Firefox, Opera, Safari 10.1+ */
                            color: 'red',
                        },
                        resize: 'none',
                        borderColor: 'transparent',
                        marginRight: '0.52%',
                        width: '25.10vw',
                        borderRadius: '0.5vw',
                        height: '9rem'
                    }} placeholder={"תוכן הודעה"}/>

                <a
                    target="_blank"
                    href={"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=hagar.ifrah94@gmail.com&su=" + subject + "&body=" + body + '%0d%0a' + "מספר טלפון: " + phone + '%0d%0a' + "שם מלא: " + fullName}
                    onMouseOver={() => {
                        setHover(true)
                    }
                    }
                    onMouseLeave={() => {
                        setHover(false);
                    }
                    }
                    style={{
                        color: 'transparent',
                        borderRadius: '0.5vw',
                        width: '2.5rem',
                        borderColor: 'transparent',
                        marginRight: '0.7%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        height: '9rem',
                        backgroundColor: hover ? '#E9A8A9' : '#a5a5a5',
                    }}>
                    <div style={{
                        fontFamily: 'Assistant',
                        color: 'white',
                        borderColor: 'transparent',
                        fontWeight: 'bold',

                        transform: 'rotate(90deg)',
                    }}>
                        שלח
                    </div>
                </a>


            </div>
            <div style={{
                marginTop: '2%',
                marginBottom: '2%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
            }}>

                <a
                    target="_blank"
                    style={{
                        marginLeft: '2%', height: '4vh'
                    }}
                    href={"https://www.instagram.com/hagarifrah/"}>
                    <img
                        style={{height: '70%'}}
                        src={instagram}/>
                </a>
                <a
                    target="_blank"
                    style={{
                        marginLeft: '2%', height: '4vh'
                    }}
                    href={"https://www.facebook.com/hagar.ifrah"}>
                    <img
                        style={{height: '70%'}}
                        src={facebook}/>
                </a>


                <a
                    target="_blank"
                    style={{
                        marginLeft: '2%', height: '4vh'
                    }}
                    href={"https://wa.me/0523080322?text=היי הגר"}>
                    <img
                        style={{height: '70%'}}
                        src={whatsApp}/>
                </a>

            </div>
        </div>
    }

    return (
        <div
            style={{
                overflowY: showFullScreen ? 'hidden' : 'scroll',
                overflowX: 'hidden',
                display: 'flex',
                flex: 1,
                flexDirection: 'column'
            }}>

            {
                showFullScreen ? <ShowFullScreen/>
                    :
                    <ShowMainScreen/>
            }


        </div>
    );
};
export default App;
