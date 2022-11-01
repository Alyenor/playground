import React from 'react';
import {Image} from "antd";

type IconContainerProps = {
  source: any,
  className?: string,
  width?: number,
  height?: number
}

export default function IconContainer(props: IconContainerProps) {
  const {source, className = '', width = 40, height = 40} = props
  return <div className={className}>
    <Image preview={false}
           width={width} height={height}
           src={source} {...props} />
  </div>

}
