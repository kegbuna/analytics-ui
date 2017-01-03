declare module 'models' {
  export interface IUserModel {
    userKey: number;
    adminKey: number;
    accountKey: number;
    userRoleKey: number;
    roleKey?: any;
    email: string;
    firstName: string;
    lastName: string;
    adminName?: any;
    adminEmail?: any;
    intelligenceUserTypeKey: number;
    enterpriseLoginId: string;
    accountHasEnterpriseDataService: boolean;
    accountIdentityServiceKey?: any;
    features: Array<string>;
    isUserAdministrator: boolean;
    isRoleAdministrator: boolean;
    implementationType: number;
    accountType: number;
    fullName: string;
  }

  export interface ITokenModel {
    token: string;
  }

  export interface IFolderItemModel {
    description: string;
    edit_url: string;
    export_url: string;
    last_modified: Date;
    object_id: string;
    object_name: string;
    object_type: string;
    object_type_key: string;
    owner: string;
    pdf_url: string;
    send_now_url: string;
    shortcut_id: string;
    sub_url: string;
    url: string;
    items?: Array<IFolderItemModel>;
    is_shortcut: boolean;
    is_collaborated: boolean;
  }

  export interface IFolderModel {
    title: string;
    object_id: string;
    items: Array<IFolderItemModel>;
  }

  export interface IPartnerModel {
    name: string;
    accountKey: number;
    tradingPartnerKey: number;
    vendorCode?: any;
    type: string;
    defaultDashboardURL?: any;
    logoUrl: string;
  }

  export interface IPartnerMap {
    [accountKey: string]: IPartnerModel;
  }

  export interface IApplicationStringCollection {
    APP_NAME: string;
    APP_DEFAULT_TITLE: string;
  }

  export interface IApplicationSettings {
    APP_ICON_SVG: string;
    BI_WEBSERVER: string;

  }

  export interface IAppEventCollection {
    TOGGLE_SIDE_MENU: string;
    PARTNER_SELECTED: string;
  }

  export interface IMstrObject {
    description: string;
    object_name: string;
    object_type: string;
    object_id: string;
    url: string;
  }

  export interface IMstrFolder {
    mstrObjects: IMstrObject[];
    title: string;
  }

  export interface IMstrObjectTypeIconMap {
    Report: string;
    Dashboard: string;
    Folder: string;
    Filter: string;
  }
}