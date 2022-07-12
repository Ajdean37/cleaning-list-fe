import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './CleaningListsView.css';



const CleaningListsView = ({dispatch, dailyChoresLists}) => {
  useEffect(() => {
    let action = {type: 'GET_ALL_DAILY_CHORES_LISTS'};
    dispatch(action);
  }, []);

  return(
  <div className='outer-ct'>
    <div className='cleaning-list-ct'>
      {
        // cleaningLists.map( item => (
        dailyChoresLists.map( item => (
          <div className='cleaning-list-card' key={item.id}>
            <p className='title'>{item.day.name}</p>
            <p className='subtitle'>{item.room.name}</p>
            <Link to={`/cleaning-lists/${item.id}`}><div><button>View List</button></div></Link>
          </div>
        ))
      }
    </div>
  </div>
  )
}

const mapStateToProps = ({ dailyChoresLists }) => ({ dailyChoresLists });

// export default CleaningListsView
export default connect(mapStateToProps)(CleaningListsView);