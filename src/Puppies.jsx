import axios from "axios"
import { useState, useEffect} from 'react'


const Puppies = () => {
  const [puppies, setPuppies] = useState([])

  useEffect(() => {
    async function fetchPuppies() {
      const response = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/players')
      //console.log(response.data.data.players)//finally gets an array
      const data = response.data.data.players
      console.log(data)
      setPuppies(data)//setting it to the array of puppies
    }
    fetchPuppies()
  }, [])

return(
  <div>
    <h1>Puppies</h1>
    {
      puppies.map((puppy) => {
        return(
          <div key= {puppy.id}>
            {puppy.name}
          </div>
        )
      })

    }
  </div>
)
}
export default Puppies