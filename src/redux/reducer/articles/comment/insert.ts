import { ARTICLE_COMMENT_INSERT } from '@/redux/constants';
const userState = {
  comments: [],
};
export const ArticleCommentInsertReducer = (state = userState, action: any) => {
  switch (action.type) {
    case ARTICLE_COMMENT_INSERT:
      return {
        comments: action.comments,
      };
    default:
      return state;
  }
};
