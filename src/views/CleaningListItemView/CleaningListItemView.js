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

  console.log(activeDailyChoreList.list_items);

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

  return(
    <div className={`outer-ct-${activeDailyChoreList.id} outer-ct`}>
      <p className='title'>{activeDailyChoreList.room.name}</p>
      <div className='list-item-ct'>
        {
          // cleaningLists.map( item => (
          activeDailyChoreList.list_items.map( item => (
          <div className='list-item-card' key={item.id}>
            <span><input checked={item.is_complete} data-id={item.id} type='checkbox' onClick={handleIsComplete}></input></span>
            <p className='list-item'>{item.detail}</p>
            <p className='person'>{item.person.name}</p>
            <p className='star-value'>{item.star_value.name}</p>
          </div>
        ))
      }
    </div>
  </div>
  )
}
  
  const mapStateToProps = ({ activeDailyChoreList }) => ({ activeDailyChoreList }); 

  // export default CleaningListsView
  export default connect(mapStateToProps) (CleaningListItemView);

  