import { useEffect } from 'react';
import { connect } from 'react-redux';
import './CleaningListItemView.css';
import { useParams } from "react-router-dom";

const CleaningListItemView = ({dispatch, activeDailyChoreList}) => {
  const params = useParams();
  useEffect(() => {
    let action = {type: 'GET_ACTIVE_DAILY_CHORE_LIST', payload: {id: params.id}};
    dispatch(action);
  }, []);

  function handleIsComplete( e ) {
    let payload = {
      is_complete: e.target.checked,
      id: e.target.dataset.id
    };
    let action = {
      type: 'UPDATE_LIST_ITEM_IS_COMPLETE', payload: payload
    };
    dispatch(action);    
  }

  function handleToggleAll( e ) {
    let value = e.target.value === "false" ? false : true; 
    let action = {
      type: 'TOGGLE_ALL_IS_COMPLETE', payload: {is_complete: !value, dailyChoreListId: params.id}
    };
    dispatch(action)
  }

  return(
    <div className='outer-list-ct'>
      <h1 className='list-title'>{activeDailyChoreList.room.name}</h1>
      <div className='list-item-ct'>
        <div><table className='table'>
          {
            // cleaningLists.map( item => (
            activeDailyChoreList.list_items.map( item => (
            <tbody className='list-item-card' key={item.id}>
              <span><input className='checkbox' checked={item.is_complete} data-id={item.id} type='checkbox' onClick={handleIsComplete}></input></span>
              <td className='person'>{item.person.name}</td>
              <td className='list-item'>{item.detail}</td>
              <td className='star-value'>{item.star_value.name} </td>
            </tbody>
            ))
          }
        </table></div>
      <div><button className='list-complete' onClick={handleToggleAll} value={activeDailyChoreList.is_complete}>List Complete</button></div>
    </div>
  </div>
  )
}
  
  const mapStateToProps = ({ activeDailyChoreList }) => ({ activeDailyChoreList }); 

  // export default CleaningListsView
  export default connect(mapStateToProps) (CleaningListItemView);

  