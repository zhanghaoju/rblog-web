import React from 'react';

const Footer = () => {
  return (
    <div className="flex justify-center items-center flex-col relative top-10 h-20 w-full  bg-sky-300">
      <p>@夜雨炊烟 2023</p>
      <p>
        <a href="https://beian.miit.gov.cn/#/Integrated/index" target={'_blank'}>
          豫ICP备2022022169号-1
        </a>
      </p>
    </div>
  );
};

export default Footer;
