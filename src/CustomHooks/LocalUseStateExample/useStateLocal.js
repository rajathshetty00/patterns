

export const MyReact = (function() {

    let state //a variable
    return {
        render(Component) {
            const Comp = Component()
            Comp.render()
            return Comp
          },

        useState: function(initialiser){
            //this function forms closure with state variable
            state = state || initialiser
            function setState(newValue){
                state = newValue
            }    
            return [state, setState]
        }
    
    }
})()