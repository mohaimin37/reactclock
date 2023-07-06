import { useState } from "react";

const App = () =>{
    const time = new Date().toLocaleTimeString();
    const [times,raju ] = useState(time)

    const anas = () =>{
        raju (times+1)



    };
    setInterval(anas,1000)




    return (<>
        <h1> {time} </h1>
    </>)
}
export default App;