import React, {useState} from 'react';
import AboutMe from './AboutMe';
import Dropdown from './Dropdown';
import Search from './Search';
import Translate from '../Translate';
import Route from './Route';
import Header from './Header';
import Pics from './Pics';


const items =[
    {
        title: 'What is this site?',
        content: 'This site is a place for me to practice web development and for my kids to practice interacting with the computers and the internet. It uses uses React, Redux, JavaScript, external API calls, among other web technologies.'
    },
    {
        title: 'Who am I?',
        content: "I'm a person passionate about information technology who believes that understanding computers is essential for every responsible person. This will only become more important as computers gain in prevelance and power."
    },
    {
        title: 'What are some of your other interests and projects?',
        content: "1) Smart Giving is my final project from my Masters program at UC Berkeley,   ( https://github.com/sheffieldjordan/SmartGiving_web ) I still have some work to do on it before I deploy it here."
     }
];

const options = [
    {
        label:'The Color Red',
        value:'red'
    },
    {
        label:'The Color Green',
        value:'green'
    },
    {
        label:'The Color Blue',
        value:'blue'
    }
];


export default () => {
    const [selected, setSelected] = useState(options[0]);
    // const [showDropdown, setShowDropdown] = useState(true);

    return (
    <div>
        <Header />
        <Route path="/">
            <AboutMe items={ items } />
        </Route>

        <Route path="/list">
            <Search />
        </Route>

        <Route path="/dropdown">
            <Dropdown label="Select a Color" options={options} selected={selected} onSelectedChange={(setSelected)}></Dropdown>
        </Route>

        <Route path="/translate">
            <Translate label="Select a Language" options={options} selected={selected} onSelectedChange={(setSelected)}></Translate>
        </Route>

        <Route path="/pics">
            <Pics label="Select a Language" options={options} selected={selected} onSelectedChange={(setSelected)}></Pics>
        </Route>


    </div>
    )};