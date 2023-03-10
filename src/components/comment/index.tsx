import React, { useEffect, useRef, useState } from 'react';
import { Card, Form, Input, Button, message, List, Avatar, Row, Col, Modal, Tooltip } from 'antd';
import { Comment } from '@ant-design/compatible';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BlogActions from '@/redux/actionCreator';
import {
  CloudUploadOutlined,
  CommentOutlined,
  DeleteOutlined,
  MessageOutlined,
} from '@ant-design/icons';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { withRouter } from 'react-router-dom';

const ArticleComment = (props: any) => {
  // 评论列表
  const [list, setList] = useState([]);
  // 回复的文本对象信息
  const [replyObj, setReplyObj] = useState({ _id: '', pid: '-1' });
  // 回复文本的placeholder
  const [replyPlaceholder, setReplyPlaceholder] = useState('');
  // 分页总数
  const [total, setTotal] = useState(0);
  // 当前第几页
  const [currentPage, setCurrentPage] = useState(1);
  // 每页显示条数
  const [pageSize, setPageSize] = useState(8);
  // 文章标题
  let articleTitle = props.title.join('');
  // 是留言还是回复（1是留言，2是回复）
  const [type, setType] = useState(1);
  // 回复框显示隐藏
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [replyForm] = Form.useForm();
  const replyArea = useRef(null);
  dayjs.extend(relativeTime);
  useEffect(() => {
    props.BlogActions.asyncArticleCommentsAction(currentPage, pageSize, articleTitle, 1).then(
      (res: any) => {
        // 获取评论数据
        let { data, totalCount, page, pageSize } = res.data;
        console.log('评论数据：', data);
        articleMessage(data);

        setTotal(totalCount);
        setCurrentPage(page);
        setPageSize(pageSize);
      }
    );
  }, [currentPage, pageSize, props.BlogActions, props.location.search]);
  const onFinish = (values: any) => {
    console.log('获取评论数据：', values);
  };
  const onFinishFailed = () => {};
  // 回复控件
  const replyMsg = (item: any) => {
    replyForm.resetFields();
    setReplyObj(item);
    // setReplyPlaceholder(`${userInfo.username}@${item.userId?.username} ${item?.content}`);
    if (replyArea) {
      setTimeout(() => {
        // @ts-ignore
        replyArea?.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
      }, 100);
    }
  };
  // 提交
  const onFinishReply = () => {
    setType(2);
    setIsModalVisible(true);
  };
  const cancelReply = () => {
    setReplyObj({ _id: '', pid: '-1' });
  };
  // 处理评论数据 层级始终为两层
  const articleMessage = (params: any) => {
    // 查询所有留言数据
    let message = params.filter((item: any) => item.pid === '-1');
    const pids = Array.isArray(message) ? message.map((i: any) => i._id).join('') : [];
    let resReply: any[] = [];
    // 查询出所有的回复内容
    resReply = params.filter((item: any) => item.pid === pids);
    // 遍历
    let newMessage = message.map((item: any) => {
      const children = resReply.filter((it: any) => it.pid === item._id);
      const tranformChildren = children.map((innerItem: any) => ({
        ...innerItem,
      }));
      return {
        ...item,
        children: tranformChildren,
      };
    });
    setList(newMessage);
  };
  return (
    <div className="w-800 mx-auto mt-20">
      <Card style={{ width: '100%', marginTop: '36px' }}>
        <div
          style={{
            textAlign: 'center',
            fontSize: '16px',
            fontWeight: 'bolder',
            marginBottom: '24px',
            position: 'relative',
          }}
        >
          评论
          <span
            style={{
              display: 'inline-block',
              fontSize: '12px',
              position: 'absolute',
              left: '50%',
              marginLeft: '36px',
            }}
          ></span>
        </div>
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
              { min: 6, message: '内容不能小于6个字符' },
            ]}
          >
            <Input.TextArea
              placeholder="请输入评论内容"
              autoSize={{
                minRows: 6,
                maxRows: 12,
              }}
              // showCount
              // maxLength={300}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              <CloudUploadOutlined />
              &nbsp;Submit
            </Button>
          </Form.Item>
        </Form>
        <Row style={{ marginTop: '36px' }}>
          <Col span={24}>
            <b style={{ marginBottom: '24px' }}>
              留言展示&nbsp;
              <CommentOutlined />
            </b>
            <List
              itemLayout="horizontal"
              // 分页
              dataSource={list}
              renderItem={(item: any, index: any) => (
                <List.Item actions={[]} key={index}>
                  <List.Item.Meta
                    avatar={
                      <Avatar style={{ backgroundColor: '#1890ff' }}>
                        {item.userId?.username?.slice(0, 1)?.toUpperCase()}
                      </Avatar>
                    }
                    title={<b>{item.nickName}</b>}
                    description={
                      <>
                        <span className="text-blue-300">{item.currentReplayContent}</span>
                        {/* 子留言 */}
                        <div
                          style={{
                            fontSize: '12px',
                            marginTop: '8px',
                            marginBottom: '16px',
                            alignItems: 'center',
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                          }}
                        >
                          <span>
                            用户&nbsp;{item.nickName}&nbsp;&nbsp;发表于&nbsp;
                            {dayjs(item.commentTime).format('YYYY-MM-DD HH:mm:ss')}
                          </span>
                          <span>
                            {/* {
                              <a
                                style={{ color: 'red', fontSize: '12px', marginRight: '12px' }}
                                onClick={() => removeMsg(item)}
                              >
                                <DeleteOutlined />
                                &nbsp; Delete
                              </a>
                            } */}
                            <a
                              style={{ fontSize: '12px', marginRight: '12px' }}
                              onClick={() => replyMsg(item)}
                            >
                              <MessageOutlined />
                              &nbsp; Reply
                            </a>
                          </span>
                        </div>
                        {/* 回复的内容 */}
                        {item.children && item.children.length ? (
                          <>
                            {item.children.map((innerItem: any, innerIndex: any) => (
                              <Comment
                                key={innerIndex}
                                author={<span>{innerItem.nickName}</span>}
                                avatar={
                                  <Avatar style={{ backgroundColor: '#1890ff' }}>
                                    {innerItem.userId?.username?.slice(0, 1)?.toUpperCase()}
                                  </Avatar>
                                }
                                content={<p>{innerItem.currentReplayContent}</p>}
                                datetime={
                                  <Tooltip
                                    title={dayjs(innerItem.createTime).format(
                                      'YYYY-MM-DD HH:mm:ss'
                                    )}
                                  >
                                    <span>{dayjs(innerItem.meta?.createAt).fromNow()}</span>
                                  </Tooltip>
                                }
                                actions={[
                                  <>
                                    {innerItem.canDel ? (
                                      <a
                                        style={{
                                          color: 'red',
                                          fontSize: '12px',
                                          marginRight: '12px',
                                        }}
                                        // onClick={() => removeMsg(innerItem)}
                                      >
                                        <DeleteOutlined />
                                        &nbsp; Delete
                                      </a>
                                    ) : null}
                                  </>,
                                  <a
                                    style={{ fontSize: '12px', marginRight: '12px' }}
                                    onClick={() => replyMsg(innerItem)}
                                  >
                                    <MessageOutlined />
                                    &nbsp; Reply
                                  </a>,
                                ]}
                              />
                            ))}
                          </>
                        ) : null}

                        {/* 回复的表单 */}
                        {replyObj._id === item._id || replyObj.pid === item._id ? (
                          <div style={{ marginTop: '12px' }} ref={replyArea}>
                            <Form
                              form={replyForm}
                              name="reply"
                              onFinish={onFinishReply}
                              onFinishFailed={onFinishFailed}
                            >
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
                                  { min: 6, message: '内容不能小于6个字符' },
                                ]}
                              >
                                <Input.TextArea
                                  placeholder="请输入评论内容"
                                  autoSize={{
                                    minRows: 6,
                                    maxRows: 12,
                                  }}
                                  // showCount
                                  // maxLength={300}
                                />
                              </Form.Item>
                              <Form.Item>
                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                  <Button
                                    style={{ marginRight: '12px' }}
                                    onClick={() => cancelReply()}
                                  >
                                    Dismiss
                                  </Button>
                                  <Button type="primary" htmlType="submit">
                                    <CloudUploadOutlined />
                                    &nbsp;Submit
                                  </Button>
                                </div>
                              </Form.Item>
                              <Form.Item></Form.Item>
                            </Form>
                          </div>
                        ) : null}
                      </>
                    }
                  />
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Card>
      <Modal
        title="验证"
        destroyOnClose={true}
        open={isModalVisible}
        footer={null}
        maskClosable={false}
        // onCancel={handleCancel}
      >
        {/* {isModalVisible ? <Captcha onSuccess={passCaptcha} /> : null} */}
      </Modal>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    BlogActions: bindActionCreators(BlogActions, dispatch),
  };
};
export default connect(null, mapDispatchToProps)(withRouter(ArticleComment));
