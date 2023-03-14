import { Input, InputRef, List, Modal, Spin } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Switcher from '../theme/Switcher';
import { SearchOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BlogActions from '@/redux/actionCreator';
const NavBar = (props: any) => {
  const items = [
    {
      path: '/rblog/home',
      title: '首页',
    },
    {
      path: '/rblog/rindex',
      title: '索引',
      children: [
        {
          path: '/rblog/category',
          title: '分类',
        },
        {
          path: '/rblog/tags',
          title: '标签',
        },
        {
          path: '/rblog/timeline',
          title: '时间线',
        },
      ],
    },
    {
      path: '/rblog/essay',
      title: '随笔',
    },
    {
      path: '/rblog/message',
      title: '留言',
    },
    {
      path: '/rblog/friendly',
      title: '友链',
    },
    {
      path: '/rblog/about',
      title: '关于',
    },
  ];
  // 移动端侧边栏显示
  const [navbar, setNavbar] = useState(false);
  // 下拉框显示
  const [show, setShow] = useState(false);
  // 路由选中
  const [selectKeys, setSelectKeys] = useState();
  // 搜索时，模态框的显示隐藏
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 搜索输入的文本信息
  const [searchVal, setSearchVal] = useState<any>('');
  // 符合条件的数据
  const [list, setList] = useState([]);
  const inputRef = useRef<InputRef>(null);
  useEffect(() => {
    // 获取动态路由信息
    setSelectKeys(props.location.pathname);
  }, [props.location]);
  useEffect(() => {
    if (navbar) {
      document.addEventListener('click', handleCancel, true);
    } else {
      document.removeEventListener('click', handleCancel, true);
    }
  }, [navbar]);
  useEffect(() => {
    if (show) {
      document.addEventListener('click', handleDropdown, true);
    } else {
      document.removeEventListener('click', handleDropdown, true);
    }
  }, [show]);
  // 切换路由
  const handleRouter = (e: any) => {
    props.history.push(e);
  };
  // 阻止冒泡
  const handleCancel = () => {
    setNavbar(!navbar);
    document.removeEventListener('click', handleCancel, true);
  };
  const handleDropdown = () => {
    setShow(!show);
    document.removeEventListener('click', handleDropdown, true);
  };
  // 遍历路由
  const renderMenu = (menuList: any) => {
    return menuList.map((item: any) => {
      // 如果有子数组就渲染下拉菜单下的列表数据
      if (item.children?.length > 0) {
        return (
          <div onClick={handleCancel} key={item.path} className="relative">
            <ul
              className="flex items-center justify-center font-medium text-xl w-24 h-16 cursor-pointer list-none text-gray-600"
              onClick={handleDropdown}
            >
              <span>{item.title}</span>
              <li>
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 -2 22 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </li>
            </ul>
            {/* 下拉显示 */}
            <ul
              className={`flex flex-col justify-center items-center absolute top-15 left-0 w-28 rounded-2xl list-none bg-blue-400 ${
                show ? 'block' : 'hidden'
              }`}
            >
              <li
                key={item.children.path}
                className="flex flex-col items-center cursor-pointer rounded-xl text-xl font-medium"
              >
                {renderMenu(item.children)}
              </li>
            </ul>
          </div>
        );
      }
      // 如果没有 正常渲染列表 添加点击事件进行路由跳转
      return (
        <div onClick={handleCancel} key={item.path}>
          <ul
            className={`flex items-center font-medium text-xl list-none h-16
                md:absolute md:left-0 md:h-full md:flex md:flex-col md:items-center
                md:w-25  md:-translate-x-full md:z-20
                 ${
                   navbar
                     ? 'md:translate-x-0 md:transform md:delay-200 md:duration-200 md:ease-in'
                     : 'md:-translate-x-full'
                 }
                `}
          >
            <li
              className={`px-5 cursor-pointer md:cursor-auto md:flex md:justify-center md:items-center  md:hover:text-white md:w-20 md:h-8 md:mt-12 md:text-base ${
                selectKeys === item.path
                  ? 'flex justify-center items-center w-15 h-8 ml-2 rounded-xl  bg-orange-400  md:rounded-xl md:h-8 md:px-1 md:bg-orange-400'
                  : 'flex justify-center items-center w-15 h-8 ml-2 rounded-xl text-gray-600 hover:bg-orange-400'
              }`}
              onClick={() => handleRouter(item.path)}
            >
              {item.title}
            </li>
          </ul>
        </div>
      );
    });
  };
  const handleModalCancel = () => {
    setIsModalOpen(!isModalOpen);
  };
  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const onChangeSearch = () => {
    // 获取输入框中值
    let searchVals = inputRef.current?.input?.value;
    setSearchVal(searchVals);
    // 获取文章列表数据
    setTimeout(() => {
      props.BlogActions.asyncArticleSearchListAction(1, 1, searchVals).then((res: any) => {
        // 获取文章
        let { data } = res.data;
        setList(data);
      });
    }, 100);
  };
  // 点击文章名称跳转到详情页面
  const handleSearchData = (id: any) => {
    props.history.push(`/rblog/article/detail/${id}`);
    // 模态框一刹那
    setIsModalOpen(!isModalOpen);
    // 搜索框置为空
    setSearchVal('');
  };
  return (
    <nav className="shadow md:bg-white fixed w-full h-16 change-color z-20 md:static">
      <div className="flex justify-between h-16">
        <div className="flex">
          <div className="hidden md:block">
            <div
              className="flex items-center h-16 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-xl ml-2 md:text-base md:ml-2">夜雨炊烟</span>
          </div>
          {/* navbar显示隐藏 */}
          <div
            className={`md:absolute md:z-10 md:bg-gray-600 md:w-full md:h-full md:opacity-20 md:transition-all ${
              navbar ? 'md:block' : 'md:hidden'
            }`}
          ></div>
        </div>
        {/* 颜色主题 */}
        <div className="flex items-center">
          {/* 搜索框 */}
          <div
            className="flex items-center w-52 h-9 rounded-3xl border-2 border-solid border-indigo-500  cursor-pointer"
            onClick={showModal}
          >
            <span className="text-gray-500 text-sm px-3">请输入需要搜索的内容</span>
          </div>
          {/* 导航栏 */}
          {renderMenu(items)}
        </div>
        <div className="flex items-center mr-5 ml-2 md:flex md:items-center md:mr-2">
          <Switcher />
        </div>
      </div>
      {/* 模态框展示 */}
      <div>
        <Modal title="搜索文章" footer={[]} open={isModalOpen} onCancel={handleModalCancel}>
          <Input
            ref={inputRef}
            prefix={
              <SearchOutlined className="border border-solid border-b-0 border-t-0 border-l-0 border-gray-500 w-7 h-4 text-2xl mr-1 text-gray-500" />
            }
            placeholder="请输入需要搜索的文章"
            className="h-9 mt-3"
            onChange={() => onChangeSearch()}
          />
          <List
            className={`${searchVal !== '' ? 'block' : 'hidden'} mt-2`}
            size="small"
            bordered
            locale={{ emptyText: '暂无符合条件的数据' }}
            pagination={false}
            rowKey={(item: any) => {
              return item._id;
            }}
            loading={props.isLoading}
            dataSource={list}
            renderItem={item => (
              <List.Item className="cursor-pointer" onClick={() => handleSearchData(item._id)}>
                {item.title}
              </List.Item>
            )}
          />

          <div className={`hidden ${list.length === 0 ? 'block' : 'hidden'}`}>
            暂无符合条件的数据
          </div>
        </Modal>
      </div>
    </nav>
  );
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    BlogActions: bindActionCreators(BlogActions, dispatch),
  };
};
// 将状态映射为属性
const mapStateToProps = (state: any) => {
  return {
    isLoading: state.LoadingReducer.isLoading,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));
