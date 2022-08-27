import { React } from './ReactClone.js';
import {useDefinition} from './customHook.js';

export const Component = () => {

    const [count, setCount] = React.useState(1);

    const [text, setText] = React.useState('Hello');

    // Custom hook
    const definiton = useDefinition(text);

    React.useEffect(()=> {
        console.log('this effect will be triggered once on first render');
    },[])

    React.useEffect(()=> {
        console.log('this effect will be triggered on every change');
    })

    React.useEffect(()=> {
        console.log('text was changed to:' , text);
    },[text])

    React.useEffect(()=> {
        console.log('count was changed to:', count);
    },[count])

    return {
        render: () => console.log({count, text, definiton}),
        click: () => setCount(count + 1),
        type: newText => setText(newText)
    }
}

let App = React.render(Component);

//DEMO

//Simulate user interaction
App.click();

//Re-render (What React work loop does automatically)
App = React.render(Component);

//Simulate user interaction
App.type('Hey');

//Re-render
App = React.render(Component);

//Simulate user interaction
App.click();

//Re-render
App = React.render(Component);
