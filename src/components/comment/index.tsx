import React, { useEffect, useRef, useState } from 'react';
import { Card, Form, Input, Button, message, List, Avatar, Row, Col, Modal, Tooltip } from 'antd';
import { Comment } from '@ant-design/compatible';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BlogActions from '@/redux/actionCreator';
import MyPagination from '@/components/pagination';
import { CloudUploadOutlined, CommentOutlined, MessageOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { withRouter } from 'react-router-dom';

const ArticleComment = (props: any) => {
  // 评论列表数据
  const [commentList, setCommentList] = useState([]);
  // 处理后的分层评论列表
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
  // 是留言还是回复（1是留言，2是回复）
  const [type, setType] = useState(1);
  // 功能名称
  const [text, setText] = useState('cm');
  // 回复框显示隐藏
  // const [isModalVisible, setIsModalVisible] = useState(false);
  const [replyForm] = Form.useForm();
  const [form] = Form.useForm();
  // 页面效果
  const replyArea = useRef(null);
  dayjs.extend(relativeTime);
  // 获取文章标题
  let articleTitle = props.title.join('');
  // 获取文章ID
  let articleId = props.match.params.id;
  useEffect(() => {
    props.BlogActions.asyncArticleCommentsAction(currentPage, pageSize, articleTitle, 1).then(
      (res: any) => {
        // 获取评论数据
        let { data, totalCount, page, pageSize } = res.data;
        // 时间格式化
        data.map((item: any) => {
          item.commentTime = dayjs(item.commentTime * 1000).format('YYYY-MM-DD HH:mm:ss');
          item.children.map((it: any) => {
            it.commentTime = dayjs(it.commentTime * 1000).format('YYYY-MM-DD HH:mm:ss');
          });
        });
        setCommentList(data);
        setTotal(totalCount);
        setCurrentPage(page);
        setPageSize(pageSize);
      }
    );
  }, [currentPage, pageSize, props.BlogActions, props.title]);
  // 提交评论数据
  const onFinish = (values: any) => {
    props.BlogActions.asyncArticleCommentInsertAction({
      pid: replyObj.pid,
      targetReplayId: replyObj._id || '-1',
      targetReplayContent: '',
      currentReplayContent: values.content,
      auditTime: 0,
      auditStatus: '1',
      avatar: 'http://dummyimage.com/100x100',
      email: values.email,
      nickName: values.nickname,
      articleId: articleId,
      articleTitle: articleTitle,
    }).then((res: any) => {
      setTimeout(() => {
        message.success('评论成功!');
        if (type === 1) {
          form.resetFields();
        }
        if (type === 2) {
          setReplyObj({ _id: '', pid: '-1' });
          replyForm.resetFields();
        }
      }, 2000);
      // 重新调用查询接口
      props.BlogActions.asyncArticleCommentsAction(currentPage, pageSize, articleTitle, 1).then(
        (res: any) => {
          // 获取评论数据
          let { data, totalCount, page, pageSize } = res.data;
          setCommentList(data);
          setTotal(totalCount);
          setCurrentPage(page);
          setPageSize(pageSize);
        }
      );
    });
  };
  const onFinishFailed = () => {};
  // 回复控件
  const replyMsg = (item: any) => {
    setReplyObj(item);
    replyForm.resetFields();
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
  // 提交回复
  const onFinishReply = (values: any) => {
    setType(2);
    props.BlogActions.asyncArticleCommentInsertAction({
      pid: replyObj.pid === '-1' ? replyObj._id : replyObj.pid,
      targetReplayId: replyObj._id || '-1',
      //@ts-ignore
      targetReplayContent: `${values?.nickname}@${replyObj?.nickName} ${replyObj?.currentReplayContent}`,
      currentReplayContent: values.content,
      auditTime: 0,
      auditStatus: '1',
      avatar: 'http://dummyimage.com/100x100',
      email: values.email,
      nickName: values.nickname,
      articleId: articleId,
      articleTitle: articleTitle,
    }).then((res: any) => {
      setTimeout(() => {
        message.success('评论回复成功!');
        if (type === 1) {
          form.resetFields();
        }
        if (type === 2) {
          setReplyObj({ _id: '', pid: '-1' });
          replyForm.resetFields();
        }
      }, 1000);
      // 重新调用查询接口
      props.BlogActions.asyncArticleCommentsAction(currentPage, pageSize, articleTitle, 1).then(
        (res: any) => {
          // 获取评论数据
          let { data, totalCount, page, pageSize } = res.data;
          setCommentList(data);
          setReplyObj(data);
          setTotal(totalCount);
          setCurrentPage(page);
          setPageSize(pageSize);
        }
      );
    });
    // 关闭窗口
    cancelReply();
  };
  const cancelReply = () => {
    setReplyObj({ _id: '', pid: '-1' });
  };
  // 处理评论数据 层级始终为两层
  const articleMessage = (params: any) => {
    // 查询所有留言数据
    let message = params.filter((item: any) => item.pid === '-1');
    const pids = Array.isArray(message) ? message.map((i: any) => i._id) : [];
    let resReply: any[] = [];
    // 查询出所有的回复内容 数组对象过滤数组
    resReply = params.filter((item: any) => pids.indexOf(item.pid) > -1);

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
    // 时间格式化
    newMessage.map((item: any) => {
      item.commentTime = dayjs(item.commentTime * 1000).format('YYYY-MM-DD HH:mm:ss');
      item.children.map((it: any) => {
        it.commentTime = dayjs(it.commentTime * 1000).format('YYYY-MM-DD HH:mm:ss');
      });
    });
    setList(newMessage);
  };
  // 跳转页数
  const onChangePage = (page: any, pageSize: any) => {
    // 重新调用接口将参数传递过去
    props.BlogActions.asyncArticleCommentsAction(page, pageSize, articleTitle, 1).then(
      (res: any) => {
        // 获取评论数据
        let { data, totalCount, page, pageSize } = res.data;
        setCommentList(data);
        setTotal(totalCount);
        setCurrentPage(page);
        setPageSize(pageSize);
      }
    );
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
        <Form name="basic" form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
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
                  {
                    validator: (rule, value, cbfn) => {
                      const reg =
                        /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
                      if (!reg.test(value)) {
                        cbfn('请输入正确的邮箱');
                      }
                      cbfn();
                    },
                  },
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
              评论展示&nbsp;
              <CommentOutlined />
            </b>
            {commentList.length > 0 ? (
              <List
                itemLayout="horizontal"
                dataSource={commentList}
                renderItem={(item: any, index: any) => (
                  <List.Item actions={[]} key={index}>
                    <List.Item.Meta
                      avatar={
                        <Avatar style={{ backgroundColor: '#1890ff' }}>
                          {item.nickName?.slice(0, 1)?.toUpperCase()}
                        </Avatar>
                      }
                      title={<b>{item.nickName}</b>}
                      description={
                        <>
                          <span className=" text-black">{item.currentReplayContent}</span>
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
                              {item.commentTime}
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
                                  author={<span>{innerItem.targetReplayContent}</span>}
                                  avatar={
                                    // https://img.paulzzh.tech/touhou/random
                                    // https://source.unsplash.com/random
                                    // <Avatar src="https://img.paulzzh.tech/touhou/random"></Avatar>
                                    <Avatar style={{ backgroundColor: '#1890ff' }}>
                                      {innerItem.nickName?.slice(0, 1)?.toUpperCase()}
                                    </Avatar>
                                  }
                                  content={<p>{innerItem.currentReplayContent}</p>}
                                  datetime={
                                    <Tooltip title={item.commentTime}>
                                      <span>{dayjs(item.commentTime).fromNow()}</span>
                                    </Tooltip>
                                  }
                                  actions={[
                                    // <>
                                    //   {innerItem.canDel ? (
                                    //     <a
                                    //       style={{
                                    //         color: 'red',
                                    //         fontSize: '12px',
                                    //         marginRight: '12px',
                                    //       }}
                                    //       onClick={() => removeMsg(innerItem)}
                                    //     >
                                    //       <DeleteOutlined />
                                    //       &nbsp; Delete
                                    //     </a>
                                    //   ) : null}
                                    // </>,
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
                                        {
                                          validator: (rule, value, cbfn) => {
                                            const reg =
                                              /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
                                            if (!reg.test(value)) {
                                              cbfn('请输入正确的邮箱');
                                            }
                                            cbfn();
                                          },
                                        },
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
            ) : (
              <div className="flex justify-center">暂无评论~</div>
            )}
            <MyPagination
              text={text}
              pageSize={pageSize}
              currentPage={currentPage}
              total={total}
              onChange={onChangePage}
            ></MyPagination>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    BlogActions: bindActionCreators(BlogActions, dispatch),
  };
};
export default connect(null, mapDispatchToProps)(withRouter(ArticleComment));
