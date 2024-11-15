import React, {FC } from 'react';
import classNames from 'classnames'
import './index.less';
export type DividerProps={
   /**
   * 分割线水平还是垂直
   * @default horizontal
   *  */
   direction?: 'horizontal' | 'vertical';
   /**
    * 分割线标题的位置
    * @default center
    *  */
   contentPosition?: 'left' | 'right' | 'center';
   /** 是否虚线 */
   dashed?: boolean;
   /**
    * 分割线颜色
    * @default #d9d9d9
    *  */
   color?: string;
   /** 包裹的元素 */
  children?: React.ReactNode;
   /** 可传递样式 */
  style?: React.CSSProperties;
  /** 容器 className */
  className?: string;
}
const classPrefix = `dfyh-divider`
const Divider: FC<DividerProps> = props => {
  let {
    direction = 'horizontal',
    contentPosition = 'center',
    className,
    dashed,
    color,
    children,
    style={},
    ...rest
  } = props;
  if(color){
    style["color"]=color;
    style["borderColor"]=color;
  }
  if(dashed){
    style["borderStyle"]='dashed';
  }
  return (
    <div
      className={classNames(
        classPrefix,
        `${classPrefix}-${direction}`,
        `${classPrefix}-${contentPosition}`
        , className
      )}
      {...rest}
      style={style}
    >
      {children && (
        <div className={`${classPrefix}-content`}>{children}</div>
      )}
    </div>
  );
};
export default Divider;
