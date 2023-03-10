import { ARTICLE_VIEWS } from '@/redux/constants';
const userState = {
  views: '',
};
export const ArticleViewsActionReducer = (state = userState, action: any) => {
  switch (action.type) {
    case ARTICLE_VIEWS:
      return {
        views: action.views,
      };
    default:
      return state;
  }
};
