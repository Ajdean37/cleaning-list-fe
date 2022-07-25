import { useEffect } from 'react';
import { connect } from 'react-redux';
import './CleaningListItemView.css'


const CleaningListItemView = ({dispatch}) => {
  useEffect(() => {
    let action = {type: 'GET_ALL_CHORES_LISTS_ITEMS'};
    dispatch(action);
  }, []);

  return(
    <div className='outer-ct'>
      <div className='list-item-ct'>
        {
          // cleaningLists.map( item => (
          listItems.map( item => (
            <div className='list-item-card' key={item.id}>
              <p className='title'>{item.day.name}</p>
              <p className='subtitle'>{item.room_id.name}</p>
              <p className='list-item'>{item.detail}</p>
              <p className='person'>{item.person_id.name}</p>

            </div>
          ))
        }
      </div>
    </div>
    )
  }
  
  const mapStateToProps = ({ listItems }) => ({ listItems });



  // export default CleaningListsView
  export default connect(mapStateToProps) (CleaningListItemView);

  