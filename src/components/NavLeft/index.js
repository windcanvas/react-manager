import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import MenuConfig from './../../config/menuConfig';
import './index.less';
const SubMenu = Menu.SubMenu;

class NavLeft extends Component {
    componentWillMount() {
       const menuTreeNode = this.renderMenu(MenuConfig);
       this.setState({
           menuTreeNode
       })
    }

    // 菜单渲染
    renderMenu = (data) => {
       return data.map((item) => {
           if(item.children) {
               return (
                   <SubMenu title={item.title} key={item.key}>
                       {this.renderMenu(item.children)}
                   </SubMenu>
               )
           }
           return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
       })
    }

    render() {
        return (
            <div className="logo">
                {/*<img src="../../resource/assets/logo-ant.svg" alt=""/>*/}
                <h1>Imooc Ms</h1>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}

export default NavLeft;