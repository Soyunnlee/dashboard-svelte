//#region Import
import {
	ComputerDesktop,
	CursorArrowRays,
	Cube,
	PencilSquare,
	QueueList,
	CloudArrowDown,
	Identification
} from 'svelte-hero-icons';
//#endregion

//#region Constant
const menu = [
	{
		title: 'DashBord',
		icon: ComputerDesktop,
		link: '/dashboard',
		isdepthMenu: false
	},
	{
		title: 'Button',
		icon: Cube,
		link: '/button',
		isdepthMenu: true,
		depthMenu: [
			{ title: 'Buttons', link: '/button/buttons' },
			{ title: 'designbtn', link: '/button/designbtn' },
			{ title: 'alarmbtn', link: '/button/alarmbtn' }
		]
	},
	{
		title: 'Card',
		icon: Identification,
		link: '/card',
		isdepthMenu: true,
		isdepthMenuOpen: false,
		depthMenu: [{ title: 'chart1', link: '/admin/chart/chart1' }]
	},
	{
		title: 'Form',
		icon: QueueList,
		link: '/form',
		isdepthMenu: false
	},
	{
		title: 'Event',
		icon: ComputerDesktop,
		link: '/event',
		isdepthMenu: true,
		isdepthMenuOpen: false,
		depthMenu: [
			{ title: 'Slidemenu', link: '/event/slidemenu' },
			{ title: 'Modal', link: '/event/modal' }
		]
	},
	{
		title: 'Effect',
		icon: CursorArrowRays,
		link: '/effect',
		isdepthMenu: false
	}
];

export default menu;
//#endregion
