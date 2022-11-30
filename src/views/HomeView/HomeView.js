import { Link } from 'react-router-dom'
import './HomeView.css'


const HomeView = () => {
  return (
    <div className='homeview-ct'>

      <div>
        <Link to='https://inspiring-dieffenbachia-119d26.netlify.app/'><button>See a construction website I've been working on</button></Link>
      </div>

      <div>
        <Link to='/cleaning-lists'><button>See Cleaning Lists</button></Link> 
      </div>
     
    </div>
  )
}

export default HomeView