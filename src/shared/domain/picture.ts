export interface Pagination {
  currPage: number;
  totalPages: number;
  total: number;
}

export interface PictureUrlMap {
  full: string;
  small: string;
  thumb?: string;
}

export interface Picture {
  urlMap: PictureUrlMap;
  alt: string;
  id: string;
}

export interface PictureModal {
  isOpen: boolean;
  picture?: Picture;
}
