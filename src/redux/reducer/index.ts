import { combineReducers } from 'redux';
import { ArticleListReducer } from '@/redux/reducer/articles/list';
import { ArticleAllListReducer } from '@/redux/reducer/articles/list_all';
import { ArticleSearchListReducer } from '@/redux/reducer/articles/search';
import { ArticleViewsActionReducer } from '@/redux/reducer/articles/views';
import { ArticleCommentsReducer } from '@/redux/reducer/articles/comment/list';
import { ArticleCommentInsertReducer } from '@/redux/reducer/articles/comment/insert';
import { MessageListReducer } from '@/redux/reducer/messages/list';
import { MessageInsertReducer } from '@/redux/reducer/messages/insert';
import { LoadingReducer } from './loading';
const RootReducer = combineReducers({
  ArticleListReducer,
  ArticleAllListReducer,
  ArticleSearchListReducer,
  ArticleViewsActionReducer,
  ArticleCommentsReducer,
  ArticleCommentInsertReducer,
  MessageListReducer,
  MessageInsertReducer,
  LoadingReducer,
});
export default RootReducer;
