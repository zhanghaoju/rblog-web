import React from 'react';
import { Button, Col, Form, Input, Row } from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';
const Comment = (props: any) => {
  console.log('获取文章标题：', props.title);
  const onFinish = (values: any) => {
    console.log('获取评论数据：', values);
  };
  const onFinishFailed = () => {};
  return (
    <div className="w-800 mx-auto mt-20">
      <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Row>
          <Col span={12}>
            <Form.Item
              label="昵称"
              name="nickname"
              rules={[
                { required: true, message: '请输入你的昵称' },
                { whitespace: true, message: '输入不能为空' },
                { min: 2, message: '昵称不能小于2个字符' },
                { max: 30, message: '主题不能大于30个字符' },
              ]}
            >
              <Input maxLength={30} placeholder="请输入你的昵称" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="邮箱"
              name="email"
              rules={[
                { required: true, message: '请输入你的邮箱' },
                { whitespace: true, message: '邮箱不能为空' },
              ]}
            >
              <Input maxLength={30} placeholder="请输入你的邮箱" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          label="内容"
          name="content"
          rules={[
            { required: true, message: '请输入你的内容' },
            { whitespace: true, message: '输入不能为空' },
            { min: 2, message: '内容不能小于2个字符' },
          ]}
        >
          <Input.TextArea
            placeholder="请输入你的内容"
            autoSize={{
              minRows: 6,
              maxRows: 12,
            }}
          />
        </Form.Item>
        <Form.Item>
          {/* <div className="float-left absolute bottom-5 left-20 bg-blue-300">表情</div> */}
          <Button
            type="primary"
            htmlType="submit"
            style={{ float: 'right', position: 'absolute', bottom: '0', right: '0' }}
          >
            <CloudUploadOutlined />
            &nbsp;发布评论
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Comment;
