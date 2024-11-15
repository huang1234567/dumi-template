import React, { Component } from 'react';
import { Button } from 'antd-mobile';
// import { Button, WhiteSpace, WingBlank } from 'antd-mobile';

class CusButton extends Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    let { ...other } = this.props;
    return <Button {...other}></Button>;
  }
}

export default CusButton;