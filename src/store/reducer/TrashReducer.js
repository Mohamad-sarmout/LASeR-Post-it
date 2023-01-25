import { DELETE_POST } from "../action/TrashAction";
import { RESTORE_POST } from "../action/TrashAction";

const initstate = [
    {
      id:2, name:"Hamza"
    },
  ];
const trashreducer = (state = initstate, action) => {
    switch (action.type) {
     
        case RESTORE_POST:
            return state;
        case DELETE_POST: 
        return state;
     default :
     return state;
    }

}
export default trashreducer;