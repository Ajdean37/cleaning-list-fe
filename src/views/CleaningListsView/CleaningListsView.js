import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './CleaningListsView.css';
import { useParams } from "react-router-dom";


const CleaningListsView = ({dispatch, dailyChoresLists, activeDailyChoreList}) => {
  const params = useParams();
  useEffect(() => {
    let action = {type: 'GET_ALL_DAILY_CHORES_LISTS', payload: {id: params.id}};
    dispatch(action);
  }, []);

  function handleToggleResetAll( e ) {
    let value = e.target.value === "true" ? true : false; 
    let action = {
      type: 'TOGGLE_RESET_ALL', payload: {is_complete: value, dailyChoreListId: params.id}
    };
    dispatch(action)
  }

  return(
  <div className='outer-ct'>
    <h1 className='cleaning-list-title'>Daily Cleaning List</h1>
    <div className='cleaning-list-ct'>
      {
        // cleaningLists.map( item => (
        dailyChoresLists.map( item => (
          <div className='cleaning-list-card' key={item.id}>
            <p className='title'>{item.day.name}</p>
            <p className='subtitle'>{item.room.name}</p>
            <Link to={`/cleaning-lists/${item.id}`}><div><button className='view-list'>View List</button></div></Link>
          </div>
        ))
      }
    </div>
    <div><button className='reset-list' onClick={handleToggleResetAll} value={activeDailyChoreList.is_complete}>Reset All Lists</button></div>
  </div>
  )
}

const mapStateToProps = ({ dailyChoresLists, activeDailyChoreList }) => ({ dailyChoresLists, activeDailyChoreList });

// export default CleaningListsView
export default connect(mapStateToProps)(CleaningListsView);