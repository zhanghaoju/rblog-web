import axios from 'axios';

const About = () => {
  axios('/iblog/article/list?page=1&&pageSize=10&&status=0&&publishStatus=0').then(res => {
    console.log(res);
  });

  return (
    <div>
      <p>关于</p>
      <p>关于</p>
      <p>关于</p>
      <p>关于</p>
      <p>关于</p>
      <p>关于</p>
      <p>关于</p>
      <p>关于</p>
      <p>关于</p>
      <p>关于</p>
      <p>关于</p>
      <p>关于</p>
      <p>关于</p>
      <p>关于</p>
      <p>关于</p>
      <p>关于</p>
      <p>关于</p>
      <p>关于</p>
      <p>关于</p>
      <p>关于</p>
    </div>
  );
};

export default About;
