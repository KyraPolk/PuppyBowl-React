import { Link } from "react-router-dom"

const Nav = () => {
  return(
    <div>
      <Link to='/'>Home</Link>
      <Link to='/puppies'>Puppies</Link>
    </div>
  )
}

export default Nav