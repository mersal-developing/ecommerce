import type { UrlObject } from 'url';
type Url = string | UrlObject;

export type NavItem = {
    name: string;
    link?: Url;
    icon: any;
    badge?: number;
    subItems?: NavItem[];
    hide?: boolean;

}