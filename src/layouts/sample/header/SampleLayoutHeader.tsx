import React, { Component } from 'react';
import { Layout } from 'antd';



const { Header } = Layout;

interface Props {
	collapsed: boolean;
	collapsedTrigger: () => void
}

class SampleLayoutHeader extends Component<Props> {
	render() {
		return (
			<Header className="site-layout-background" style={ { padding: 0 } }>
				{ React.createElement(this.props.collapsed ? 'div' : 'div', {
					className: 'trigger',
					onClick: this.props.collapsedTrigger,
				}) }
			</Header>
		);
	}
}

export default SampleLayoutHeader;
