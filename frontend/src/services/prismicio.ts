import axios from 'axios';

export interface PrismicResponse {
  results: any[];
}

export function fetchDataPrismic(
  endpoint: string,
  callback: (error: Error | null, data: PrismicResponse | null) => void
): void {
  axios.get<PrismicResponse>(endpoint)
    .then(response => {
      callback(null, response.data);
    })
    .catch(error => {
      callback(error, null);
    });
}