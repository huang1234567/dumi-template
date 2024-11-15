import React, {FC,Fragment } from 'react';
import classNames from 'classnames'
import { List,Checkbox,Button } from 'antd-mobile';
import './index.less';

const Item = List.Item;
const Brief = Item.Brief;
const CheckboxItem = Checkbox.CheckboxItem;

// listItem 的结构
interface ListItem {
  checkbox?: boolean;
  extra?: {
    contont?: any[];
    other?: any;
  };
  brief?: {
    labels?: Array<{ text: string; style?: React.CSSProperties }>;
  };
  key?: string | number;
  title?: string;
  thumb?: string | React.ReactNode;
  thumbStyle?: React.CSSProperties;
  checkboxPos?: 'left' | 'right';
}
export type CardListProps={
  /** 卡片渲染数据 */
  listItem:ListItem
}
const classPrefix = `dfyh-cardlist`;
const CardList: FC<CardListProps> = props => {
  let {listItem} = props;
  let {checkboxPos}=listItem;
  const renderListItem=(item:any)=>{
    let {checkbox,extra={},checkboxPos,brief,key,title,...rest}=item||{};
    let {contont=[],other}=extra||{};
    return (
      <Item key={key} extra={contont?<div {...other}>{contont.map((e:any,i:number)=>renderExtra(item,e,i))}</div>:null} {...rest}>
        {title}
        {
          // brief?brief.map((b:any)=><Brief>{b.labels.map((l:any)=><span style={l.style}>{l.text}</span>)}</Brief>):null
          brief?brief.map((b:any,i:number)=>renderBrief(b,i)):null
        }
      </Item>
    )
  }
  const renderExtra=(item:any,e:any,i:number)=>{
    let {text,isCheckPos,thumb,thumbStyle,...other} = e||{};
    return (
        <div {...other} className={classPrefix+'-extra'} key={i+'extr'}>
          {thumb?(typeof thumb==='string'?<img src={thumb} style={thumbStyle}></img>:thumb):null}
          <span>{text}</span>
          {
            item.checkboxPos=='right'?(isCheckPos?<input type='checkbox' />:<div><input type='checkbox' /></div>):null
          }
        </div>
    )
  }
  const renderBrief=(item:any,i:number)=>{
    let {labels,...other}=item||{};
    return (<Brief {...other} key={i}>{labels.map((l:any,ind:number)=><span style={l.style} key={i+ind+'brief'}>{l.text}</span>)}</Brief>)
  }
  const renderCheckItem = (item:any)=>{
    let {checkboxPos,extra={},key,thumb,brief,title,...rest}=item||{};
    let {contont=[]}=extra||{};
    return (
      // <Item extra={item.extra}>
        <CheckboxItem key={key} extra={contont?contont.map((e:any,i:number)=>renderExtra(item,e,i)):null}>
          {item.title}
          {
          // brief?brief.map((b:any)=><Brief>{b.labels.map((l:any)=><span style={l.style}>{l.text}</span>)}</Brief>):null
          brief?brief.map((b:any,i:number)=>renderBrief(b,i)):null
        }
        </CheckboxItem>
      // </Item>
    )
  }
  return (
    <div className={classPrefix}>
      <List>
        {
          checkboxPos&&checkboxPos==='left'?(renderCheckItem(listItem)): renderListItem(listItem)
        }
      </List>
    </div>
  );
};
export default CardList;
