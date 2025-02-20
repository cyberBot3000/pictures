import { PaginationDTO, PictureDTO } from '../DTO';

export interface FetchPictureParams {
  query: string;
  page: string;
  client_id: string;
}

export interface FetchPictureResponse extends PaginationDTO {
  results: PictureDTO[];
}

export type FetchPictureArgs = {
  page: number;
  query: string;
};

export const fetchPictures = async (args: FetchPictureArgs): Promise<FetchPictureResponse> => {
  try {
    const url = new URL('/search/photos', 'https://api.unsplash.com');
    const params: FetchPictureParams = {
      ...args,
      page: args.page.toString(),
      client_id: 'lAlMMchfiQeNee_YVuoO__RNI-Dmvmzm8g4z4jew3OU',
    };
    url.search = new URLSearchParams({ ...params }).toString();
    const resp = await fetch(url);
    const data: FetchPictureResponse = await resp.json();
    return data;
  } catch (e) {
    console.error('fetch pictures error: ');
    console.error(e);
    throw e;
  }
};
