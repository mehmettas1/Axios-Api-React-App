import axios from "axios";
import { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial"
import TutorialList from "../components/TutorialList"






const Home = () => {
    const [tutorials, setTutorials] = useState()
    const url = 'https://cw-axios-example.herokuapp.com/api/tutorials';
    
    const getTutorails =async()=>{
        try {
            const {data} = await axios.get(url)
                setTutorials(data)
        } catch (error) {
            console.log(error);
        }
        
    }


    
    

useEffect(() => {
  getTutorails()
}, [])

const addTutorial =async(tutorial)=>{
   try {
    await axios.post(url,tutorial)
   } catch (error) {
    console.log(error);
   }
}

  return (
    <div>
   <AddTutorial addTutorial = {addTutorial}/>
   <TutorialList tutorials={tutorials}/>

    </div>
  )
}

export default Home