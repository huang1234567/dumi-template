import React, { useState, useEffect, useRef, FC } from 'react';

export type CopyToClipboardProps={
  /** 要复制的文本 */
  text: string;
  /** 复制成功的回调 */
  onCopy?: () => void;
  /** 包裹的元素 */
  children?: React.ReactNode;
}
const CopyToClipboard: FC<CopyToClipboardProps> = props => {
  const { text, onCopy, children } = props;
  const [isCopied, setIsCopied] = useState(false);
  // const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // const handleCopy = () => {
  //   if (textAreaRef.current) {
  //     textAreaRef.current.value = text;
  //     textAreaRef.current.select();
  //     document.execCommand('copy');
  //     setIsCopied(true);
  //     if (onCopy) {
  //       onCopy();
  //     }
  //   }
  // };
  useEffect(() => {
    if (isCopied) {
      setTimeout(() => setIsCopied(false), 2000);
    }
  }, [isCopied]);
  const handleCopy=() => {
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.setAttribute('value', text);
    input.select();
    if (document.execCommand('copy')) {
        document.execCommand('copy');
    }
    setIsCopied(true);
    onCopy&&onCopy();
    document.body.removeChild(input);
  };
  return (
    <div onClick={handleCopy}>
      {/* <textarea ref={textAreaRef} style={{ position: 'absolute', left: '-9999px' }} onClick={handleCopy}/> */}
      {children}
    </div>
  );
};
export default CopyToClipboard;
