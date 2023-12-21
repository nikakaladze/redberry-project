export interface BlogModel {
  data: BlogData[];
}

export interface BlogData {
  id: number;
  title: string;
  description: string;
  image: string;
  publish_date: string;
  categories: BlogCategories[];
  author: string;
}

export interface BlogCategories {
  id: number;
  name: string;
  text_color: string;
  background_color: string;
}
