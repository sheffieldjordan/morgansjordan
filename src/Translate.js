import React, {useState} from "react";
import Dropdown from "./components/Dropdown";
import Convert from "./components/Convert";



const options = [
    {
        label: 'French',
        value: 'fr'
    },
    {
        label: 'German',
        value: 'de'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Russian',
        value: 'ru'
    }

]

const Translate = () => {
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState('')
    return (
        <div className="ui container">
            <div className="ui form">
                <div className="field">
                    <p>Use the Google Translate API to help navigate your multilingual life.</p>
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => {setText(e.target.value)}}/>
                </div>
            </div>
            <Dropdown 
            label="Select a Language"
            selected={language} 
            onSelectedChange={setLanguage} 
            options={options}
            />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert language={language} text={text} />
        </div>
    )
}

export default Translate