import { combineReducers } from 'redux';
import { ArticleListReducer } from '@/redux/reducer/articles/list';
import { ArticleAllListReducer } from '@/redux/reducer/articles/list_all';
import { ArticleViewsActionReducer } from '@/redux/reducer/articles/views';
import { ArticleCommentsReducer } from '@/redux/reducer/articles/comment/list';
const RootReducer = combineReducers({
  ArticleListReducer,
  ArticleAllListReducer,
  ArticleViewsActionReducer,
  ArticleCommentsReducer,
});
export default RootReducer;
