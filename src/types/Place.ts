export interface PlaceApiResponse {
  hints: Array<{
    country: string;
    is_city: boolean;
    locale_names: string[];
    _geoloc: {
      lat: number;
      lng: number;
    };
    name: string;
    id: number;
    timezone: number;
  }>;
}
