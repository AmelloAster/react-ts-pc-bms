import { MenuConfig } from '../interfaces/menu.interface';

export const MenuConfigGroup: MenuConfig[] = [
	{
		title: 'test'
	},
	{
		title: '待办清单',
		key: 'todo',
		children: [
			{
				title: '管理',
				key: 'todo-manage',
			},
			{
				title: '创建',
				key: 'todo-created',
			}
		]
	}
];
