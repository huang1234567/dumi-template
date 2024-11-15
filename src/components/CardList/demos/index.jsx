import React from 'react';
import { CardList,DemoBlock} from 'dumi-template';
import { Toast } from 'antd-mobile';

let listDatas={
  "one": {
    title: 'Title 1',
    key:'Title1',
    extra:{
      "other":{onClick:()=>Toast.show('点击了右侧区域')},
      "contont": [
        {text:'',thumb:'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',thumbStyle:{scale:"1.2"}},
        {text:'上传',onClick:()=>Toast.show('点击了上传')},
      ]
    },
    brief: [
      {labels:[{text:'金额：356'}]},//第一行
      {labels:[
        {text:'HK1241',style:{color:'red'}},
        {text:'张三',style:{color:'green'}},
      ]},
    ],//左content-可多行(string||React.ReactNode)
    thumb: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',//左边src
  },
  "two":{
    title: 'Title 2',
    key:'Title2',
    extra: {"contont":[{text:'Extra 2'}]},
    checkboxPos: 'left',
    brief: [
      {labels:[{text:'金额：100'}]},//第一行
      {labels:[
        {text:'申请说明'},
        {text:'李四'},
      ]},
    ],//左conten
  },
  "three":{
    title: 'Title 3',
    key:'Title3',
    extra: {"contont":[
      {
        text:'Extra 3',
        // thumb:'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
        // thumbStyle:{scale:"0.7"},
        thumb:<img src="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg" style={{scale:"0.7"}}></img>,
        style:{fontSize:"12px"}
      }
    ]},
    checkboxPos: 'right',
    // thumb: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',//左边src
    thumb:<img src="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"></img>,
  },
  "four":{
    title: 'Title 4',
    key:'Title4',
    brief:[{labels:[{text:'金额：10'}]},{labels:[{text:'有妖气'}]}]
  },
  "five":{
    // title: '',
    key:'Title5',
    checkboxPos: 'right',
    extra:{"contont":[{text:'全选',isCheckPos:true,style:{display:"flex",justifyContent:"space-around"}}]},
    // extra:{"contont":[{text:'Extra 4-1'},{text:'Extra 4-2'}]},
    brief:[
      {labels:[
        {text:'已选'},
        {text:'10'},
        {text:'条'},
      ],style:{marginTop:0}},
    ],
    onChange:(checked)=>{
      Toast.show('勾选切换了')
    }
  }
}
function cardListDemo() {
    return (
      <div>
        <DemoBlock title="左侧带图片-中间内容行-右侧图片按钮">
          <CardList listItem={listDatas["one"]} />
        </DemoBlock>
        <DemoBlock title={"左侧勾选框-中间内容行-右侧文本"}>
          <CardList listItem={listDatas["two"]} />
        </DemoBlock>
        <DemoBlock title={"左侧带图片-中间内容行-右侧勾选框"}>
          <CardList listItem={listDatas["three"]} />
        </DemoBlock>
        <DemoBlock title={"左内容行-右内容行"}>
          <CardList listItem={listDatas["four"]}/>
        </DemoBlock>
        <DemoBlock title={"全选"}>
          <CardList listItem={listDatas["five"]}  />
        </DemoBlock>
      </div>
    );
  }
  
  export default cardListDemo;