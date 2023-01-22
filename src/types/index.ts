import { string } from "yup";

export interface ISubLink{
    label:string;
    sublink:string;
    dev?:string;

};

export interface ILink {
    label:string;
    link:string;
    sublinks?:ISubLink[];
};

export interface IMinProject{
    
}

export interface INavLink{
    label: string
    link: string
    img_src?:string
}