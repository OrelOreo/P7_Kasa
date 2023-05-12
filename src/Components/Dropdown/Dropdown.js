import React, {useState, useRef, useEffect} from 'react'
import ChevronDown from "../../assets/Vector.png"
import ChevronUp from "../../assets/vector-haut.png"
import './Dropdown.css'

export default function Dropdown({ content, title }) {

    const isArray = Array.isArray(content)

    const [toggle, setToggle] = useState(false)
    const [heightEl, setHeightEl] = useState()
    const [stateImage, setStateImage] = useState(false)

    const toggleState = () => {
        setToggle(!toggle)
        setStateImage(!stateImage)
    }

    const refHeight = useRef()

    useEffect(() => {
        if (refHeight.current) {
            setHeightEl(`${refHeight.current.scrollHeight}px`)
        }
    }, [])

  return (
        <div className='dropdown'>
        <div onClick={toggleState} className="dropdown-visible">
            <h2>{ title }</h2>
            <img src={stateImage ? ChevronUp : ChevronDown } alt={stateImage ? "Chevron Up" : "Chevron Down"}/>
        </div>
        {
            isArray ? (
                <ul ref={refHeight} className={toggle ? 'dropdown-toggle animated' : 'dropdown-toggle'} style={{height: toggle ? `${heightEl}` : '0px'}}>
                    {content.map((equipement) => (
                        <li aria-hidden={toggle ? "true" : "false"} key={equipement}>{equipement}</li>
                    ))}
                </ul>
            ) : (
                <div className="container-text">
                    <p ref={refHeight} className={toggle ? 'dropdown-toggle animated' : 'dropdown-toggle'} style={{height: toggle ? `${heightEl}` : '0px'}} aria-hidden={toggle ? "true" : "false"}>{content}</p>
                </div>
            )
        }
        </div>
  )
}
