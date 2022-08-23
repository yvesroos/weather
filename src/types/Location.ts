export type SimpleLocationCoordinates = Pick<
  GeolocationCoordinates,
  'latitude' | 'longitude'
> & { error?: string };

export interface Coord {
  lat: string;
  lon: string;
}

export interface MapPoint {
  place_id: string;
  lat: string;
  lon: string;
  display_name: string;
  address: {
    town?: string;
    state?: string;
    city: string;
    country: string;
  };
}

export type PlacesApiResponse = MapPoint[];

export interface MapPointTransformed {
  value: {
    id: string;
    lat: string;
    lon: string;
  };
  label: string;
}

export type PlacesApiResponseTransformed = MapPointTransformed[];
