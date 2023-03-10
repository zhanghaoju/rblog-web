import { ARTICLE_LIST } from '@/redux/constants';
const userState = {
  articles: [],
};
export const ArticleListReducer = (state = userState, action: any) => {
  switch (action.type) {
    case ARTICLE_LIST:
      return {
        articles: action.articles,
      };
    default:
      return state;
  }
};
