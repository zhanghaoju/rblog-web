import Category from '@/components/sidemenu/Category';
import LastUpdate from '@/components/sidemenu/LastUpdate';
import Social from '@/components/sidemenu/Social';
import User from '@/components/sidemenu/User';
import BackToTop from '@/components/top';
import React from 'react';

const Home = () => {
  const handleTags = () => {
    console.log('点击标签');
  };
  const handleCategory = () => {
    console.log('点击分类');
  };
  const handleArticle = () => {
    console.log('点击文章');
  };
  return (
    <main className="flex justify-between w-1200 pt-16 mx-auto bg-indigo-400 change-color">
      <div className="w-1200">
        <div
          className="
          w-[calc(100%-35px)] h-60 mt-5 mx-auto bg-blue-300 rounded-xl shadow cursor-pointer
              transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105
              "
        >
          <div className="cursor-pointer" onClick={handleArticle}>
            <div className="flex items-center h-12 px-2 text-xl">
              react页面滚动时导航栏的显示与隐藏
            </div>
            <div className="flex items-center  h-36 px-2">
              <div className="flex items-center">
                <img
                  src="https://iblog-react.oss-cn-shanghai.aliyuncs.com/iblog-web/background.jpeg"
                  alt="文章图片"
                  className="w-48 h-32 rounded-xl"
                />
              </div>
              <div className="w-full h-28 pl-2 text-lg line-clamp-4 overflow-hidden">
                代码主要实现了导航栏跟随页面显示隐藏，页面向下滚动时导航栏消失,页面向页面向下滚动时导航栏消失,页面向页面向下滚动时导航栏消失,页面向下滚动时导航栏消失向上滚动导航栏显示，这个可以动态的去调整代码主要实现了导航栏跟随页面显示隐藏，页面向下滚动时导航栏消失，向上滚动导航栏显示，这个可以动态的去调整
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between h-12 px-2">
            <div>
              <span className="px-1 text-lg rounded-lg bg-slate-300 cursor-pointer">
                2023-02-16
              </span>
            </div>
            <div className="flex items-center h-10">
              <span className="text-lg">评论(10)</span>
              <span className="text-lg">点赞(20)</span>
              <span className="text-lg">
                分类:
                <span
                  className="mr-1 w-full px-1 text-lg  rounded-lg bg-slate-300 cursor-pointer"
                  onClick={handleCategory}
                >
                  react框架
                </span>
              </span>
              <span className="text-lg">
                标签:
                <span
                  className="mr-1 px-1  text-xl rounded-lg bg-slate-300 cursor-pointer"
                  onClick={handleTags}
                >
                  react
                </span>
                <span className="mr-1 px-1  text-xl rounded-lg bg-slate-300">js</span>
              </span>
            </div>
          </div>
        </div>
        <div
          className="
          w-[calc(100%-35px)] h-60 mt-5 mx-auto bg-blue-300 rounded-xl shadow cursor-pointer
              transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105
              "
        >
          <div className="cursor-pointer" onClick={handleArticle}>
            <div className="flex items-center h-12 px-2 text-xl">
              react页面滚动时导航栏的显示与隐藏
            </div>
            <div className="flex items-center  h-36 px-2">
              <div className="flex items-center">
                <img
                  src="https://iblog-react.oss-cn-shanghai.aliyuncs.com/iblog-web/background.jpeg"
                  alt="文章图片"
                  className="w-48 h-32 rounded-xl"
                />
              </div>
              <div className="w-full h-28 pl-2 text-lg line-clamp-4 overflow-hidden">
                代码主要实现了导航栏跟随页面显示隐藏，页面向下滚动时导航栏消失,页面向页面向下滚动时导航栏消失,页面向页面向下滚动时导航栏消失,页面向下滚动时导航栏消失向上滚动导航栏显示，这个可以动态的去调整代码主要实现了导航栏跟随页面显示隐藏，页面向下滚动时导航栏消失，向上滚动导航栏显示，这个可以动态的去调整
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between h-12 px-2">
            <div>
              <span className="px-1 text-lg rounded-lg bg-slate-300 cursor-pointer">
                2023-02-16
              </span>
            </div>
            <div className="flex items-center h-10">
              <span className="text-lg">评论(10)</span>
              <span className="text-lg">点赞(20)</span>
              <span className="text-lg">
                分类:
                <span
                  className="mr-1 w-full px-1 text-lg  rounded-lg bg-slate-300 cursor-pointer"
                  onClick={handleCategory}
                >
                  react框架
                </span>
              </span>
              <span className="text-lg">
                标签:
                <span
                  className="mr-1 px-1  text-xl rounded-lg bg-slate-300 cursor-pointer"
                  onClick={handleTags}
                >
                  react
                </span>
                <span className="mr-1 px-1  text-xl rounded-lg bg-slate-300">js</span>
              </span>
            </div>
          </div>
        </div>
        <div
          className="
          w-[calc(100%-35px)] h-60 mt-5 mx-auto bg-blue-300 rounded-xl shadow cursor-pointer
              transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105
              "
        >
          <div className="cursor-pointer" onClick={handleArticle}>
            <div className="flex items-center h-12 px-2 text-xl">
              react页面滚动时导航栏的显示与隐藏
            </div>
            <div className="flex items-center  h-36 px-2">
              <div className="flex items-center">
                <img
                  src="https://iblog-react.oss-cn-shanghai.aliyuncs.com/iblog-web/background.jpeg"
                  alt="文章图片"
                  className="w-48 h-32 rounded-xl"
                />
              </div>
              <div className="w-full h-28 pl-2 text-lg line-clamp-4 overflow-hidden">
                代码主要实现了导航栏跟随页面显示隐藏，页面向下滚动时导航栏消失,页面向页面向下滚动时导航栏消失,页面向页面向下滚动时导航栏消失,页面向下滚动时导航栏消失向上滚动导航栏显示，这个可以动态的去调整代码主要实现了导航栏跟随页面显示隐藏，页面向下滚动时导航栏消失，向上滚动导航栏显示，这个可以动态的去调整
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between h-12 px-2">
            <div>
              <span className="px-1 text-lg rounded-lg bg-slate-300 cursor-pointer">
                2023-02-16
              </span>
            </div>
            <div className="flex items-center h-10">
              <span className="text-lg">评论(10)</span>
              <span className="text-lg">点赞(20)</span>
              <span className="text-lg">
                分类:
                <span
                  className="mr-1 w-full px-1 text-lg  rounded-lg bg-slate-300 cursor-pointer"
                  onClick={handleCategory}
                >
                  react框架
                </span>
              </span>
              <span className="text-lg">
                标签:
                <span
                  className="mr-1 px-1  text-xl rounded-lg bg-slate-300 cursor-pointer"
                  onClick={handleTags}
                >
                  react
                </span>
                <span className="mr-1 px-1  text-xl rounded-lg bg-slate-300">js</span>
              </span>
            </div>
          </div>
        </div>
        <div
          className="
          w-[calc(100%-35px)] h-60 mt-5 mx-auto bg-blue-300 rounded-xl shadow cursor-pointer
              transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105
              "
        >
          <div className="cursor-pointer" onClick={handleArticle}>
            <div className="flex items-center h-12 px-2 text-xl">
              react页面滚动时导航栏的显示与隐藏
            </div>
            <div className="flex items-center  h-36 px-2">
              <div className="flex items-center">
                <img
                  src="https://iblog-react.oss-cn-shanghai.aliyuncs.com/iblog-web/background.jpeg"
                  alt="文章图片"
                  className="w-48 h-32 rounded-xl"
                />
              </div>
              <div className="w-full h-28 pl-2 text-lg line-clamp-4 overflow-hidden">
                代码主要实现了导航栏跟随页面显示隐藏，页面向下滚动时导航栏消失,页面向页面向下滚动时导航栏消失,页面向页面向下滚动时导航栏消失,页面向下滚动时导航栏消失向上滚动导航栏显示，这个可以动态的去调整代码主要实现了导航栏跟随页面显示隐藏，页面向下滚动时导航栏消失，向上滚动导航栏显示，这个可以动态的去调整
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between h-12 px-2">
            <div>
              <span className="px-1 text-lg rounded-lg bg-slate-300 cursor-pointer">
                2023-02-16
              </span>
            </div>
            <div className="flex items-center h-10">
              <span className="text-lg">评论(10)</span>
              <span className="text-lg">点赞(20)</span>
              <span className="text-lg">
                分类:
                <span
                  className="mr-1 w-full px-1 text-lg  rounded-lg bg-slate-300 cursor-pointer"
                  onClick={handleCategory}
                >
                  react框架
                </span>
              </span>
              <span className="text-lg">
                标签:
                <span
                  className="mr-1 px-1  text-xl rounded-lg bg-slate-300 cursor-pointer"
                  onClick={handleTags}
                >
                  react
                </span>
                <span className="mr-1 px-1  text-xl rounded-lg bg-slate-300">js</span>
              </span>
            </div>
          </div>
        </div>
        <div
          className="
          w-[calc(100%-35px)] h-60 mt-5 mx-auto bg-blue-300 rounded-xl shadow cursor-pointer
              transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105
              "
        >
          <div className="cursor-pointer" onClick={handleArticle}>
            <div className="flex items-center h-12 px-2 text-xl">
              react页面滚动时导航栏的显示与隐藏
            </div>
            <div className="flex items-center  h-36 px-2">
              <div className="flex items-center">
                <img
                  src="https://iblog-react.oss-cn-shanghai.aliyuncs.com/iblog-web/background.jpeg"
                  alt="文章图片"
                  className="w-48 h-32 rounded-xl"
                />
              </div>
              <div className="w-full h-28 pl-2 text-lg line-clamp-4 overflow-hidden">
                代码主要实现了导航栏跟随页面显示隐藏，页面向下滚动时导航栏消失,页面向页面向下滚动时导航栏消失,页面向页面向下滚动时导航栏消失,页面向下滚动时导航栏消失向上滚动导航栏显示，这个可以动态的去调整代码主要实现了导航栏跟随页面显示隐藏，页面向下滚动时导航栏消失，向上滚动导航栏显示，这个可以动态的去调整
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between h-12 px-2">
            <div>
              <span className="px-1 text-lg rounded-lg bg-slate-300 cursor-pointer">
                2023-02-16
              </span>
            </div>
            <div className="flex items-center h-10">
              <span className="text-lg">评论(10)</span>
              <span className="text-lg">点赞(20)</span>
              <span className="text-lg">
                分类:
                <span
                  className="mr-1 w-full px-1 text-lg  rounded-lg bg-slate-300 cursor-pointer"
                  onClick={handleCategory}
                >
                  react框架
                </span>
              </span>
              <span className="text-lg">
                标签:
                <span
                  className="mr-1 px-1  text-xl rounded-lg bg-slate-300 cursor-pointer"
                  onClick={handleTags}
                >
                  react
                </span>
                <span className="mr-1 px-1  text-xl rounded-lg bg-slate-300">js</span>
              </span>
            </div>
          </div>
        </div>
        <div
          className="
          w-[calc(100%-35px)] h-60 mt-5 mx-auto bg-blue-300 rounded-xl shadow cursor-pointer
              transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105
              "
        >
          <div className="cursor-pointer" onClick={handleArticle}>
            <div className="flex items-center h-12 px-2 text-xl">
              react页面滚动时导航栏的显示与隐藏
            </div>
            <div className="flex items-center  h-36 px-2">
              <div className="flex items-center">
                <img
                  src="https://iblog-react.oss-cn-shanghai.aliyuncs.com/iblog-web/background.jpeg"
                  alt="文章图片"
                  className="w-48 h-32 rounded-xl"
                />
              </div>
              <div className="w-full h-28 pl-2 text-lg line-clamp-4 overflow-hidden">
                代码主要实现了导航栏跟随页面显示隐藏，页面向下滚动时导航栏消失,页面向页面向下滚动时导航栏消失,页面向页面向下滚动时导航栏消失,页面向下滚动时导航栏消失向上滚动导航栏显示，这个可以动态的去调整代码主要实现了导航栏跟随页面显示隐藏，页面向下滚动时导航栏消失，向上滚动导航栏显示，这个可以动态的去调整
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between h-12 px-2">
            <div>
              <span className="px-1 text-lg rounded-lg bg-slate-300 cursor-pointer">
                2023-02-16
              </span>
            </div>
            <div className="flex items-center h-10">
              <span className="text-lg">评论(10)</span>
              <span className="text-lg">点赞(20)</span>
              <span className="text-lg">
                分类:
                <span
                  className="mr-1 w-full px-1 text-lg  rounded-lg bg-slate-300 cursor-pointer"
                  onClick={handleCategory}
                >
                  react框架
                </span>
              </span>
              <span className="text-lg">
                标签:
                <span
                  className="mr-1 px-1  text-xl rounded-lg bg-slate-300 cursor-pointer"
                  onClick={handleTags}
                >
                  react
                </span>
                <span className="mr-1 px-1  text-xl rounded-lg bg-slate-300">js</span>
              </span>
            </div>
          </div>
        </div>
        <div
          className="
          w-[calc(100%-35px)] h-60 mt-5 mx-auto bg-blue-300 rounded-xl shadow cursor-pointer
              transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105
              "
        >
          <div className="cursor-pointer" onClick={handleArticle}>
            <div className="flex items-center h-12 px-2 text-xl">
              react页面滚动时导航栏的显示与隐藏
            </div>
            <div className="flex items-center  h-36 px-2">
              <div className="flex items-center">
                <img
                  src="https://iblog-react.oss-cn-shanghai.aliyuncs.com/iblog-web/background.jpeg"
                  alt="文章图片"
                  className="w-48 h-32 rounded-xl"
                />
              </div>
              <div className="w-full h-28 pl-2 text-lg line-clamp-4 overflow-hidden">
                代码主要实现了导航栏跟随页面显示隐藏，页面向下滚动时导航栏消失,页面向页面向下滚动时导航栏消失,页面向页面向下滚动时导航栏消失,页面向下滚动时导航栏消失向上滚动导航栏显示，这个可以动态的去调整代码主要实现了导航栏跟随页面显示隐藏，页面向下滚动时导航栏消失，向上滚动导航栏显示，这个可以动态的去调整
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between h-12 px-2">
            <div>
              <span className="px-1 text-lg rounded-lg bg-slate-300 cursor-pointer">
                2023-02-16
              </span>
            </div>
            <div className="flex items-center h-10">
              <span className="text-lg">评论(10)</span>
              <span className="text-lg">点赞(20)</span>
              <span className="text-lg">
                分类:
                <span
                  className="mr-1 w-full px-1 text-lg  rounded-lg bg-slate-300 cursor-pointer"
                  onClick={handleCategory}
                >
                  react框架
                </span>
              </span>
              <span className="text-lg">
                标签:
                <span
                  className="mr-1 px-1  text-xl rounded-lg bg-slate-300 cursor-pointer"
                  onClick={handleTags}
                >
                  react
                </span>
                <span className="mr-1 px-1  text-xl rounded-lg bg-slate-300">js</span>
              </span>
            </div>
          </div>
        </div>
        <div
          className="
          w-[calc(100%-35px)] h-60 mt-5 mx-auto bg-blue-300 rounded-xl shadow cursor-pointer
              transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105
              "
        >
          <div className="cursor-pointer" onClick={handleArticle}>
            <div className="flex items-center h-12 px-2 text-xl">
              react页面滚动时导航栏的显示与隐藏
            </div>
            <div className="flex items-center  h-36 px-2">
              <div className="flex items-center">
                <img
                  src="https://iblog-react.oss-cn-shanghai.aliyuncs.com/iblog-web/background.jpeg"
                  alt="文章图片"
                  className="w-48 h-32 rounded-xl"
                />
              </div>
              <div className="w-full h-28 pl-2 text-lg line-clamp-4 overflow-hidden">
                代码主要实现了导航栏跟随页面显示隐藏，页面向下滚动时导航栏消失,页面向页面向下滚动时导航栏消失,页面向页面向下滚动时导航栏消失,页面向下滚动时导航栏消失向上滚动导航栏显示，这个可以动态的去调整代码主要实现了导航栏跟随页面显示隐藏，页面向下滚动时导航栏消失，向上滚动导航栏显示，这个可以动态的去调整
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between h-12 px-2">
            <div>
              <span className="px-1 text-lg rounded-lg bg-slate-300 cursor-pointer">
                2023-02-16
              </span>
            </div>
            <div className="flex items-center h-10">
              <span className="text-lg">评论(10)</span>
              <span className="text-lg">点赞(20)</span>
              <span className="text-lg">
                分类:
                <span
                  className="mr-1 w-full px-1 text-lg  rounded-lg bg-slate-300 cursor-pointer"
                  onClick={handleCategory}
                >
                  react框架
                </span>
              </span>
              <span className="text-lg">
                标签:
                <span
                  className="mr-1 px-1  text-xl rounded-lg bg-slate-300 cursor-pointer"
                  onClick={handleTags}
                >
                  react
                </span>
                <span className="mr-1 px-1  text-xl rounded-lg bg-slate-300">js</span>
              </span>
            </div>
          </div>
        </div>
        <div
          className="
          w-[calc(100%-35px)] h-60 mt-5 mx-auto bg-blue-300 rounded-xl shadow cursor-pointer
              transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105
              "
        >
          <div className="cursor-pointer" onClick={handleArticle}>
            <div className="flex items-center h-12 px-2 text-xl">
              react页面滚动时导航栏的显示与隐藏
            </div>
            <div className="flex items-center  h-36 px-2">
              <div className="flex items-center">
                <img
                  src="https://iblog-react.oss-cn-shanghai.aliyuncs.com/iblog-web/background.jpeg"
                  alt="文章图片"
                  className="w-48 h-32 rounded-xl"
                />
              </div>
              <div className="w-full h-28 pl-2 text-lg line-clamp-4 overflow-hidden">
                代码主要实现了导航栏跟随页面显示隐藏，页面向下滚动时导航栏消失,页面向页面向下滚动时导航栏消失,页面向页面向下滚动时导航栏消失,页面向下滚动时导航栏消失向上滚动导航栏显示，这个可以动态的去调整代码主要实现了导航栏跟随页面显示隐藏，页面向下滚动时导航栏消失，向上滚动导航栏显示，这个可以动态的去调整
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between h-12 px-2">
            <div>
              <span className="px-1 text-lg rounded-lg bg-slate-300 cursor-pointer">
                2023-02-16
              </span>
            </div>
            <div className="flex items-center h-10">
              <span className="text-lg">评论(10)</span>
              <span className="text-lg">点赞(20)</span>
              <span className="text-lg">
                分类:
                <span
                  className="mr-1 w-full px-1 text-lg  rounded-lg bg-slate-300 cursor-pointer"
                  onClick={handleCategory}
                >
                  react框架
                </span>
              </span>
              <span className="text-lg">
                标签:
                <span
                  className="mr-1 px-1  text-xl rounded-lg bg-slate-300 cursor-pointer"
                  onClick={handleTags}
                >
                  react
                </span>
                <span className="mr-1 px-1  text-xl rounded-lg bg-slate-300">js</span>
              </span>
            </div>
          </div>
        </div>
        <div
          className="
          w-[calc(100%-35px)] h-60 mt-5 mx-auto bg-blue-300 rounded-xl shadow cursor-pointer
              transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105
              "
        >
          <div className="cursor-pointer" onClick={handleArticle}>
            <div className="flex items-center h-12 px-2 text-xl">
              react页面滚动时导航栏的显示与隐藏
            </div>
            <div className="flex items-center  h-36 px-2">
              <div className="flex items-center">
                <img
                  src="https://iblog-react.oss-cn-shanghai.aliyuncs.com/iblog-web/background.jpeg"
                  alt="文章图片"
                  className="w-48 h-32 rounded-xl"
                />
              </div>
              <div className="w-full h-28 pl-2 text-lg line-clamp-4 overflow-hidden">
                代码主要实现了导航栏跟随页面显示隐藏，页面向下滚动时导航栏消失,页面向页面向下滚动时导航栏消失,页面向页面向下滚动时导航栏消失,页面向下滚动时导航栏消失向上滚动导航栏显示，这个可以动态的去调整代码主要实现了导航栏跟随页面显示隐藏，页面向下滚动时导航栏消失，向上滚动导航栏显示，这个可以动态的去调整
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between h-12 px-2">
            <div>
              <span className="px-1 text-lg rounded-lg bg-slate-300 cursor-pointer">
                2023-02-16
              </span>
            </div>
            <div className="flex items-center h-10">
              <span className="text-lg">评论(10)</span>
              <span className="text-lg">点赞(20)</span>
              <span className="text-lg">
                分类:
                <span
                  className="mr-1 w-full px-1 text-lg  rounded-lg bg-slate-300 cursor-pointer"
                  onClick={handleCategory}
                >
                  react框架
                </span>
              </span>
              <span className="text-lg">
                标签:
                <span
                  className="mr-1 px-1  text-xl rounded-lg bg-slate-300 cursor-pointer"
                  onClick={handleTags}
                >
                  react
                </span>
                <span className="mr-1 px-1  text-xl rounded-lg bg-slate-300">js</span>
              </span>
            </div>
          </div>
        </div>
        <div
          className="
          w-[calc(100%-35px)] h-60 mt-5 mx-auto bg-blue-300 rounded-xl shadow cursor-pointer
              transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105
              "
        >
          <div className="cursor-pointer" onClick={handleArticle}>
            <div className="flex items-center h-12 px-2 text-xl">
              react页面滚动时导航栏的显示与隐藏
            </div>
            <div className="flex items-center  h-36 px-2">
              <div className="flex items-center">
                <img
                  src="https://iblog-react.oss-cn-shanghai.aliyuncs.com/iblog-web/background.jpeg"
                  alt="文章图片"
                  className="w-48 h-32 rounded-xl"
                />
              </div>
              <div className="w-full h-28 pl-2 text-lg line-clamp-4 overflow-hidden">
                代码主要实现了导航栏跟随页面显示隐藏，页面向下滚动时导航栏消失,页面向页面向下滚动时导航栏消失,页面向页面向下滚动时导航栏消失,页面向下滚动时导航栏消失向上滚动导航栏显示，这个可以动态的去调整代码主要实现了导航栏跟随页面显示隐藏，页面向下滚动时导航栏消失，向上滚动导航栏显示，这个可以动态的去调整
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between h-12 px-2">
            <div>
              <span className="px-1 text-lg rounded-lg bg-slate-300 cursor-pointer">
                2023-02-16
              </span>
            </div>
            <div className="flex items-center h-10">
              <span className="text-lg">评论(10)</span>
              <span className="text-lg">点赞(20)</span>
              <span className="text-lg">
                分类:
                <span
                  className="mr-1 w-full px-1 text-lg  rounded-lg bg-slate-300 cursor-pointer"
                  onClick={handleCategory}
                >
                  react框架
                </span>
              </span>
              <span className="text-lg">
                标签:
                <span
                  className="mr-1 px-1  text-xl rounded-lg bg-slate-300 cursor-pointer"
                  onClick={handleTags}
                >
                  react
                </span>
                <span className="mr-1 px-1  text-xl rounded-lg bg-slate-300">js</span>
              </span>
            </div>
          </div>
        </div>
        <div
          className="
          w-[calc(100%-35px)] h-60 mt-5 mx-auto bg-blue-300 rounded-xl shadow cursor-pointer
              transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105
              "
        >
          <div className="cursor-pointer" onClick={handleArticle}>
            <div className="flex items-center h-12 px-2 text-xl">
              react页面滚动时导航栏的显示与隐藏
            </div>
            <div className="flex items-center  h-36 px-2">
              <div className="flex items-center">
                <img
                  src="https://iblog-react.oss-cn-shanghai.aliyuncs.com/iblog-web/background.jpeg"
                  alt="文章图片"
                  className="w-48 h-32 rounded-xl"
                />
              </div>
              <div className="w-full h-28 pl-2 text-lg line-clamp-4 overflow-hidden">
                代码主要实现了导航栏跟随页面显示隐藏，页面向下滚动时导航栏消失,页面向页面向下滚动时导航栏消失,页面向页面向下滚动时导航栏消失,页面向下滚动时导航栏消失向上滚动导航栏显示，这个可以动态的去调整代码主要实现了导航栏跟随页面显示隐藏，页面向下滚动时导航栏消失，向上滚动导航栏显示，这个可以动态的去调整
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between h-12 px-2">
            <div>
              <span className="px-1 text-lg rounded-lg bg-slate-300 cursor-pointer">
                2023-02-16
              </span>
            </div>
            <div className="flex items-center h-10">
              <span className="text-lg">评论(10)</span>
              <span className="text-lg">点赞(20)</span>
              <span className="text-lg">
                分类:
                <span
                  className="mr-1 w-full px-1 text-lg  rounded-lg bg-slate-300 cursor-pointer"
                  onClick={handleCategory}
                >
                  react框架
                </span>
              </span>
              <span className="text-lg">
                标签:
                <span
                  className="mr-1 px-1  text-xl rounded-lg bg-slate-300 cursor-pointer"
                  onClick={handleTags}
                >
                  react
                </span>
                <span className="mr-1 px-1  text-xl rounded-lg bg-slate-300">js</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[calc(100%-850px)]">
        <User />
        <Social />
        <Category />
        <LastUpdate />
        <BackToTop/>
      </div>
    </main>
  );
};

export default Home;
