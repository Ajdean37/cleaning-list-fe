import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './CleaningListsView.css';


let cleaningLists = [
  {
    id: 1,
    is_complete: false,
    day: {
      id: 1,
      name: "Monday",
    },
    room: {
      id: 1,
      name: "Bathroom",
      is_clean: false,
    },
  },
  {
    id: 2,
    is_complete: false,
    day: {
      id: 2,
      name: "Tuesday",
    },
    room: {
      id: 2,
      name: "Bedroom",
      is_clean: false,
    },
  }, 
  {
    id: 3,
    is_complete: false,
    day: {
      id: 3,
      name: "Wednesday",
    },
    room: {
      id: 3,
      name: "Kitchen",
      is_clean: false,
    },
  }, 
  {
    id: 4,
    is_complete: false,
    day: {
      id: 4,
      name: "Thursday",
    },
    room: {
      id: 4,
      name: "Living Room",
      is_clean: false,
    },
  },
  {
    id: 5,
    is_complete: false,
    day: {
      id: 5,
      name: "Friday",
    },
    room: {
      id: 5,
      name: "Dining Room",
      is_clean: false,
    },
  },
  {
    id: 6,
    is_complete: false,
    day: {
      id: 6,
      name: "Saturday",
    },
    room: {
      id: 6,
      name: "Yard",
      is_clean: false,
    },
  },
  {
    id: 7,
    is_complete: false,
    day: {
      id: 7,
      name: "Sunday",
    },
    room: {
      id: 7,
      name: "Deep Clean",
      is_clean: false,
    },
  },
]

const CleaningListsView = ({dispatch, dailyChoresLists}) => {
  useEffect(() => {
    let action = {type: 'GET_ALL_DAILY_CHORES_LISTS'};
    dispatch(action);
  }, []);

  return(
  <div className='cleaning-list-ct'>
    {
      cleaningLists.map( item => (
        <div className='cleaning-list-card' key={item.id}>
          <p className='title'>{item.day.name}</p>
          <p className='subtitle'>{item.room.name}</p>
          <Link to={`/cleaning-lists/${item.id}`}><div><button>View List</button></div></Link>
        </div>
      ))
    }
  </div>
  )
}

const mapStateToProps = ({ dailyChoresLists }) => ({ dailyChoresLists });

// export default CleaningListsView
export default connect(mapStateToProps)(CleaningListsView);