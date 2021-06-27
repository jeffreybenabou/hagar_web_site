

<Text
    text={"I study in Academic collage"}
    type={"TEXT"}/>
<Text text={"I go to my colage"} type={"NO_TEXT"}/>
<Text text={"collage"} type={"TEXT"}/>
const Text=(props)=>{
    const color=props.text.length>7?'green':'red'
    const textOnComponent=props.text.includes("collage")?"collage is included":'collage is not included';
    const textToReturn=props.type=="NO_TEXT"

    if(textToReturn){
        return <div/>
    }
    else {
        return <div style={{color: color}}>{
            textOnComponent
        }
        </div>
    }
}
