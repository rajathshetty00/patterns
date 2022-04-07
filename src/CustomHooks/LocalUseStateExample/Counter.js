// use module pattern here

import {MyReact} from "./useStateLocal";


const Counter = () => {
    const [count, setCount] = MyReact.useState(0)
    return {
        click: () => setCount(count + 1),
        render: () => console.log('render:', { count })
      }
}

let App

App = MyReact.render(Counter)
App.click()
App = MyReact.render(Counter)
App.click()
App = MyReact.render(Counter)
App.click()
App = MyReact.render(Counter)
App.click()
App = MyReact.render(Counter)
App.click()
App = MyReact.render(Counter)




export default Counter