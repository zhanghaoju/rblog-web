import { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Switcher from '../theme/Switcher';
const NavBar = (props: any) => {
  const items = [
    {
      path: '/rblog/home',
      title: '首页',
    },
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
    {
      path: '/rblog/message',
      title: '留言',
    },
    {
      path: '/rblog/about',
      title: '关于',
    },
  ];
  // 移动端侧边栏显示
  const [navbar, setNavbar] = useState(false);
  // 路由选中
  const [selectKeys, setSelectKeys] = useState();
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
  // 切换路由
  const handleRouter = (e: any) => {
    props.history.push(e);
  };
  // 阻止冒泡
  const handleCancel = () => {
    setNavbar(!navbar);
    document.removeEventListener('click', handleCancel, true);
  };

  return (
    <nav className="shadow  md:bg-white fixed w-full h-16 change-color z-20 md:static">
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
          <div className="flex items-center ">
            <span className="text-xl ml-2 md:text-base md:ml-2">夜雨炊烟</span>
          </div>
        </div>
        <div
          className={`md:absolute md:z-10 md:bg-gray-600 md:w-full md:h-full md:opacity-20 md:transition-all ${
            navbar ? 'md:block' : 'md:hidden'
          }`}
        ></div>

        {/* 颜色主题 */}
        <div className="flex md:flex">
          {/* 导航栏 */}
          <div onClick={handleCancel}>
            <ul
              className={`change-color flex items-center  font-medium text-xl list-none h-16
                md:absolute md:left-0 md:h-full md:flex md:flex-col md:items-center
                md:w-25  md:-translate-x-full md:z-20
                 ${
                   navbar
                     ? 'md:translate-x-0 md:transform md:delay-200 md:duration-200 md:ease-in'
                     : 'md:-translate-x-full'
                 }
                `}
            >
              {items.map((it, i) => (
                <li
                  className={`px-5 cursor-pointer md:cursor-auto md:flex md:justify-center md:items-center  md:hover:text-white md:w-20 md:h-8 md:mt-12 md:text-base ${
                    selectKeys === it.path
                      ? 'flex justify-center items-center w-15 h-8 rounded-xl bg-orange-400  md:rounded-xl md:h-8 md:px-1 md:bg-orange-400'
                      : 'text-gray-600'
                  }`}
                  key={i}
                  onClick={() => handleRouter(it.path)}
                >
                  {it.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center mr-5 ml-2 md:flex md:items-center md:mr-2">
            <Switcher />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default withRouter(NavBar);
