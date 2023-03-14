import axios from 'axios';

const About = () => {
  axios('/iblog/article/list?page=1&&pageSize=10&&status=0&&publishStatus=0').then(res => {
    console.log(res);
  });

  return (
    <div>
      <p>关于本站</p>
      <p>关于我</p>
    </div>
  );
};

export default About;
