import { MESSAGE_LIST } from '@/redux/constants';
const userState = {
  messages: [],
};
export const MessageListReducer = (state = userState, action: any) => {
  switch (action.type) {
    case MESSAGE_LIST:
      return {
        messages: action.messages,
      };
    default:
      return state;
  }
};
