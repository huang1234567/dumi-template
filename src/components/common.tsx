import React, { useState, useEffect, useRef, FC,Fragment } from 'react';

export type BaseProps = {
    /** 样式设置 */
    style?: React.CSSProperties;
    /** 样式类名设置 */
    className?: string;
    children?: React.ReactNode;
};

/**
 * 复制文本
 *
 * @param {string} text
 * @param {HTMLElement} [{ target = document.body }={}]
 * @return {boolean}
 */
export function copyText(text: string, { target = document.body } = {}) {
  
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.setAttribute('value', text||'');
    input.select();
    if (document.execCommand('copy')) {
        document.execCommand('copy');
    }
    document.body.removeChild(input);
}
/**展示demo使用*/
export function DemoBlock(props:any){
    const { title = '',
    padding = '12px',
    background = '#fff',
    border,
    height,
    children,
    ...rest} = props;
    return ( 
        <Fragment>
            {title && <div className="demo-block_title">{title}</div>}
            <div
                className="main"
                style={{
                padding,
                background,
                border,
                height,
                }}
            >
                {children}
            </div>
        </Fragment>
       )
}


  