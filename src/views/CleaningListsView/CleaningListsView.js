import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './CleaningListsView.css';
import { useParams } from "react-router-dom";


const CleaningListsView = ({dispatch, dailyChoresLists}) => {
  const params = useParams();
  useEffect(() => {
    let action = {type: 'GET_ALL_DAILY_CHORES_LISTS', payload: {id: params.id}};
    dispatch(action);
  }, []);

  function handleToggleResetAll( e ) {
    let action = {
      type: 'TOGGLE_RESET_ALL'
    };
    console.log(action);
    dispatch(action)
  }
console.log(dailyChoresLists);
  return(
  <div className='outer-ct' >
    <h1 className='cleaning-list-title'>Daily Cleaning List</h1>
    <div className='cleaning-list-ct'>
      {
        // cleaningLists.map( item => (
        dailyChoresLists.map( item => (
          <div className='cleaning-list-card' key={item.id} style={{backgroundColor: item.is_complete ? 'green' : 'red'}}>
            <p className='title'>{item.day.name}</p>
            <p className='subtitle'>{item.room.name}</p>
            <Link to={`/cleaning-lists/${item.id}`}><div><button className='view-list'>View List</button></div></Link>
          </div>
        ))
      }
    </div>
    <div><button className='reset-list' onClick={handleToggleResetAll}>Reset All Lists</button></div>
  </div>
  )
}

const mapStateToProps = ({ dailyChoresLists }) => ({ dailyChoresLists });

// export default CleaningListsView
export default connect(mapStateToProps)(CleaningListsView);