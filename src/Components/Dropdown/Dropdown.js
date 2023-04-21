import React, {useState, useRef, useEffect} from 'react'
import ChevronDown from "../../assets/Vector.png"
import ChevronUp from "../../assets/vector-haut.png"
import './Dropdown.css'

export default function Dropdown(props) {
    // const equipements = props.state
    // console.log(equipements)


    const [toggle, setToggle] = useState(false)
    const [heightEl, setHeightEl] = useState()
    const [stateImage, setStateImage] = useState(false)

    const toggleState = () => {
        setToggle(!toggle)
        setStateImage(!stateImage)
    }

    const refHeight = useRef()

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])


  return (
    <div className='dropdown'>
        <div onClick={toggleState} className="dropdown-visible">
            <h2>{props.title}</h2>
            <img src={stateImage ? ChevronUp : ChevronDown } alt="chevron down / up" />
        </div>
        <div ref={refHeight} className={toggle ? 'dropdown-toggle animated' : 'dropdown-toggle'} style={{height: toggle ? `${heightEl}` : '0px'}}>
            <p aria-hidden={toggle ? "true" : "false"}>{ props.state }</p>
        </div>
    </div>
  )
}
