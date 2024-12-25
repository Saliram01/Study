import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../store/itemsSlice';
import { fetchStatusActions } from '../store/fetchStatusSlice';

function FetchItems() {
    const fetchStatus = useSelector(state => state.fetchStatus);
    const dispatch = useDispatch();

    useEffect(() => {
      if(fetchStatus.fetchDone) return;

      const controller = new AbortController();
      const signal = controller.signal;
      
      dispatch(fetchStatusActions.markFetchingStarted());
      fetch('http://localhost:5000/items', {signal})
      .then((res) => res.json())
      .then(({items}) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(actions.addInitialItems(items[0]));
      });

      return () => {
        controller.abort();
      }
    },[fetchStatus]);

  return <> </>
}

export default FetchItems