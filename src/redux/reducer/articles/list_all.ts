import { ARTICLE_ALL_LIST } from '@/redux/constants';
const userState = {
  articles: [],
};
export const ArticleAllListReducer = (state = userState, action: any) => {
  switch (action.type) {
    case ARTICLE_ALL_LIST:
      return {
        articles: action.articles,
      };
    default:
      return state;
  }
};
