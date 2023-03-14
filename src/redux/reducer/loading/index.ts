import { CHANGE_LOADING } from '@/redux/constants';
const userState = {
  isLoading: false,
};
export const LoadingReducer = (state = userState, action: any) => {
  switch (action.type) {
    case CHANGE_LOADING:
      return {
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};
