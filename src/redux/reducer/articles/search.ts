import { ARTICLE_SEARCH_LIST } from '@/redux/constants';
const userState = {
  articles: [],
};
export const ArticleSearchListReducer = (state = userState, action: any) => {
  switch (action.type) {
    case ARTICLE_SEARCH_LIST:
      return {
        articles: action.articles,
      };
    default:
      return state;
  }
};
