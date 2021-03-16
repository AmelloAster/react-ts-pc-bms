import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { MenuConfig } from './interfaces/menu.interface';
import { MenuConfigGroup } from './data/menu.config';

const { SubMenu } = Menu;


class SampleLayoutMenu extends Component {
	getRenderMenuTree = (data: MenuConfig[]) => {
		return data.map((menu, i) => {
			if ( menu.children && menu.children.length ) {
				return <SubMenu key={ menu.key } title={
					<span>
						<span>{ menu.title }</span>
					</span>
				}>
					{ this.getRenderMenuTree(menu.children) }
				</SubMenu>
			}
			return <Menu.Item key={ menu.path || i }>
				{
					menu.path ? <Link to={ menu.path }>
							<span>{ menu.title }</span>
						</Link> :
						<span>{ menu.title }</span>
				}
			</Menu.Item>
		})
	}

	render() {
		return (
			<Menu theme="dark" mode={ 'inline' } defaultOpenKeys={ [ 'todo' ] }>
				{ this.getRenderMenuTree(MenuConfigGroup) }
			</Menu>
		);
	}
}

export default SampleLayoutMenu;
