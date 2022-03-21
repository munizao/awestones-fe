import { useState, useEffect } from 'react';

const useRoomField = (room, field) => {
  const [field, setField] = useState();
  const roomState = room?.state;
  useEffect(() => {
    if (roomState) {

    }
  }, [roomState, field]);
  
  return value;
}

export default useRoomField;