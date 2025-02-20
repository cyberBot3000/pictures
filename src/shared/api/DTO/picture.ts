export interface PictureDTO {
  id: string;
  alt_description: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
}

export interface PaginationDTO {
  total: number;
  total_pages: number;
}
