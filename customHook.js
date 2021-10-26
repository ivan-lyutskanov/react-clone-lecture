import fetch from 'node-fetch';
import {React} from './ReactClone.js';
import { Component } from './index.js';

// Custom hook
export function useDefinition(word) {
    const [definiton, setDefinition] = React.useState();

    React.useEffect(()=> {
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word).then(r => r.json()).then(r => {
            // console.log(r)
            setDefinition(r)
            console.log('definiton was changed');
            //!React has a work loop and re-render if needed automatically (here we need to do it manually)
            React.render(Component);
        });
    },[word]);
    return definiton
}