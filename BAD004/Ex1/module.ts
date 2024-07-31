export interface User {
  username:string;
  password:string;
  level:string;
}

export interface Category {
  name:string;
}

export interface File {
  name:string;
  Content:string;
  is_file:boolean|number;
  category:string;
  owner:string;
}