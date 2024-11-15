import React from 'react';
import { CusButton } from 'dumi-template';
import { Button,Toast } from 'antd-mobile';

function cusButtonDemo() {
    return (
      <div>
        <CusButton
          type="primary"
          style={{ margin: '10px' }}
          onClick={() => Toast.info('触发了按钮1点击事件')}
        >
          按钮1
        </CusButton>
        <CusButton shape="circle" icon="search" style={{ margin: '5px' }} />
        <CusButton type="warning" style={{ margin: '10px' }}>
          按钮3
        </CusButton>
        <Button
          type="primary"
          onClick={() => Toast.info('触发了antd按钮点击事件')}
        >
          antd按钮
        </Button>
      </div>
    );
  }
  
  export default cusButtonDemo;