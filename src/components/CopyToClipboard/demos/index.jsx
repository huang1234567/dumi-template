import React from 'react';
import { CopyToClipboard,copyText } from 'dumi-template';
import { Button,Toast,WhiteSpace } from 'antd-mobile';

function CopyToClipboardDemo() {
    return (
      <div>
       <CopyToClipboard text="复制文本">
            <Button type="primary">复制文本</Button>
        </CopyToClipboard>
        <WhiteSpace size="sm" />
        <CopyToClipboard text="复制文本带回调" onCopy={() => Toast.show('复制文本成功！')}>
            <Button type="primary">复制文本带回调</Button>
        </CopyToClipboard>
        <WhiteSpace size="sm" />
        <Button type="primary" onClick={() => copyText('静态方法')}>
            静态方法
        </Button>
      </div>
    );
  }
  
  export default CopyToClipboardDemo;