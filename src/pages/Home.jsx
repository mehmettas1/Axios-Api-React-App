import axios from "axios";
import { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial"
import TutorialList from "../components/TutorialList"






const Home = () => {
    const [tutorials, setTutorials] = useState()
    const url = 'https://cw-axios-example.herokuapp.com/api/tutorials';

    const getTutorails =async()=>{
        const {data} = await axios.get(url)
        setTutorials(data)
    }

useEffect(() => {
  getTutorails()
}, [])


  return (
    <div>
   <AddTutorial/>
   <TutorialList tutorials={tutorials}/>

    </div>
  )
}

export default Home