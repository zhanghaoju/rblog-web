import { combineReducers } from 'redux';
import { ArticleListReducer } from '@/redux/reducer/articles/list';
import { ArticleAllListReducer } from '@/redux/reducer/articles/list_all';
import { ArticleViewsActionReducer } from '@/redux/reducer/articles/views';
import { ArticleCommentsReducer } from '@/redux/reducer/articles/comment/list';
import { ArticleCommentInsertReducer } from '@/redux/reducer/articles/comment/insert';
import { MessageListReducer } from '@/redux/reducer/messages/list';
import { MessageInsertReducer } from '@/redux/reducer/messages/insert';
const RootReducer = combineReducers({
  ArticleListReducer,
  ArticleAllListReducer,
  ArticleViewsActionReducer,
  ArticleCommentsReducer,
  ArticleCommentInsertReducer,
  MessageListReducer,
  MessageInsertReducer,
});
export default RootReducer;
