import { Link } from 'react-router-dom'
import './HomeView.css'


const HomeView = () => {
  return (
    <div>

      <div>
        <Link to='/configs'><button>Configs</button></Link>
      </div>

      <div>
        <Link to='/cleaning-lists'><button>See Cleaning Lists</button></Link> 
      </div>
     
    </div>
  )
}

export default HomeView