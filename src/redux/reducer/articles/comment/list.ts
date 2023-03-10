import { ARTICLE_COMMENT_LIST } from '@/redux/constants';
const userState = {
  comments: [],
};
export const ArticleCommentsReducer = (state = userState, action: any) => {
  switch (action.type) {
    case ARTICLE_COMMENT_LIST:
      return {
        comments: action.comments,
      };
    default:
      return state;
  }
};
