import { useEffect } from 'react';

const useRoomField = (room, fieldName) => {

  const roomState = room?.state;
  useEffect(() => {
  }, [JSON.stringify(roomState[fieldName])]);
  
  return roomState[fieldName];
}

export default useRoomField;