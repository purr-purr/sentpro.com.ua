export interface IMessageData {
	[key: string]: string;
}

export interface INavigationList {
	title: string;
	path: string;
	isActive: boolean;
}

export interface IDocumentsListProps {
	title: string;
	link: string;
}
