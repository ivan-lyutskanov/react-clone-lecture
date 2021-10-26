export const React = (() => {

    let hooks = [];
    let index = 0;

    function useState(initValue) {
        const state = hooks[index] || initValue; //if the state has been changed via setState [line 9] take the recent value else use the init. value.
        const _index = index // freeze index so when setState is called will have the right ref. (point back to index when useState was invoked) 
        const setState = newVal => hooks[_index] = newVal;
        index++ // when something new is added to the hooks array increment the index [see line 7]
        return [state, setState];
    }

    function useEffect(cb, depArr) {
        const oldDeps = hooks[index]; // In order to diff old dep. with new (depArr) - [see line 23]
        let hasChanged = true;
        // detect change
        if (oldDeps) {
            hasChanged = depArr.some((dep, i) => !Object.is(dep, oldDeps[i]))
        }
        if (hasChanged) cb();
        
        hooks[index] = depArr; // save dep. in hooks array in order to be able to get and diff them later [see line 15]
        index++; // when something new is added to the hooks array increment the index [see line 7]
    }

    function render(Component) {
        index = 0 // reset index on re-render (starting from the first hook) The lexical order of hooks declarations matter!
        const comp = Component();
        comp.render();
        return comp;
    }

    return {useState, useEffect, render}
})();