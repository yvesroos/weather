export interface SearchItem {
  label: string;
  value: unknown;
}

export interface SearchProps {
  onSearch: (value: string) => void;
  onSelectItem: (item: SearchItem) => void;
  items?: SearchItem[];
  maxResults?: number;
  isLoading?: boolean;
  placeholder?: string;
}
