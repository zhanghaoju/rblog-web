import { MESSAGE_LIST } from '@/redux/constants';
const userState = {
  message: {},
};
export const MessageInsertReducer = (state = userState, action: any) => {
  switch (action.type) {
    case MESSAGE_LIST:
      return {
        message: action.message,
      };
    default:
      return state;
  }
};
