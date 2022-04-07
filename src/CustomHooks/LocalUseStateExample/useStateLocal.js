

export const MyReact = (function() {

    let state //a variable which has lexical scoping with all returning functions 
    return {
        render(Component) {
            const Comp = Component()
            Comp.render()
            return Comp
          },

        useState: function(initialiser){
            state = state || initialiser
            function setState(newValue){
                state = newValue
            }    
            return [state, setState]
        }
    
    }
})()