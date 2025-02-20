import { PaginationDTO, PictureDTO } from '../api/DTO';
import { Pagination, Picture } from '../domain';

export const pictureDTOToPicture = (dto: PictureDTO): Picture => {
  return {
    id: dto.id,
    alt: dto.alt_description || '',
    urlMap: {
      full: dto.urls.regular || dto.urls.raw || '',
      small: dto.urls.small || dto.urls.raw || '',
      thumb: dto.urls.thumb,
    },
  };
};
export const paginationDTOToPagination = (dto: PaginationDTO): Pagination => {
  return {
    currPage: 1,
    total: dto.total,
    totalPages: dto.total_pages,
  };
};
