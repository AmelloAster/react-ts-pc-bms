export interface MenuConfig {
    title: string;
    path?: string;
    icon?: string;
    disabled?: boolean;
    key?: string;
    open?: boolean;
    selected?: boolean;
    children?: MenuConfig[];
}
