import React from 'react';
import { Divider,DemoBlock} from 'dumi-template';

function cusButtonDemo() {
    return (
      <div>
        <DemoBlock title="默认">
          <Divider />
        </DemoBlock>
        <DemoBlock title="虚线">
          <Divider dashed={true}/>
        </DemoBlock>
        <DemoBlock title="带内容">
          <Divider>中间</Divider>
          <Divider contentPosition="left">左侧</Divider>
          <Divider contentPosition="right">右侧</Divider>
        </DemoBlock>
       
        <DemoBlock title="自定义颜色">
          <Divider color="red" />
        </DemoBlock>

        <DemoBlock  title="自定义样式">
          <Divider
            style={{
              color: '#1677ff',
              borderColor: '#1677ff',
              borderStyle: 'dashed',
            }}
          >
            自定义样式
          </Divider>
        </DemoBlock>
        <DemoBlock title="垂直分隔线">
          <Divider direction="vertical" />
        </DemoBlock>
        <DemoBlock title='竖向分割线'>
        {/* <> */}
          Text
          <Divider direction='vertical' />
          <a href='#'>Link</a>
          <Divider direction='vertical' />
          <a href='#'>Link</a>
        {/* </> */}
      </DemoBlock>
      </div>
    );
  }
  
  export default cusButtonDemo;