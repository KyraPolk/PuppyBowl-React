import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const SinglePuppy = () => {
  const {id} = useParams()//{id} => deconstructed to give us the number value at id
  console.log(id)
  const [puppy, setPuppy] = UseState(null)

  useEffect(() => {
    async function fetchPuppy(){
      const response = await axios.get(`https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/players${id}`)
      const data = response.data.data.players
      console.log(data)
      

    }
    fetchPuppy()
  }, [])

  return(
    <div>
      <h1>SinglePuppy</h1>
    </div>
  )
}
export default SinglePuppy