import React, { Component } from 'react';
import { Layout } from 'antd';
import './style/index.less';
import SampleLayoutMenu from './menu/SampleLayoutMenu';
import SampleLayoutHeader from './header/SampleLayoutHeader';
import { Outlet } from 'react-router-dom';


const { Sider, Content } = Layout;

class SampleLayout extends Component {
	state = {
		collapsed: false,
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};

	render() {
		return (
			<Layout style={ { minHeight: '100vh' } }>
				<Sider trigger={ null } collapsible collapsed={ this.state.collapsed }>
					<div className="logo"/>
					<SampleLayoutMenu/>
				</Sider>
				<Layout>
					<SampleLayoutHeader collapsed={ this.state.collapsed }
										collapsedTrigger={ () => this.toggle }/>
					<Content
						className="site-layout-background"
						style={ {
							margin: '24px 16px',
							padding: 24,
							minHeight: 280,
						} }
					>
						<Outlet/>
					</Content>
				</Layout>
			</Layout>
		);
	}
}

export default SampleLayout;
