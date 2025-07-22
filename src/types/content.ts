export interface ContentMeta {
  title: string;
  topic?: string;
  image?: string;
  summary?: string;
  virtue?: string;
  audioUrl?: string;
  author?: string;
  date?: string;
  tags?: string[];
  [key: string]: unknown; // Allow custom metadata
}

export interface ContentItem {
  fileName: string;
  content: string;
  meta: ContentMeta;
}

export interface DirectoryConfig {
  name: string;
  description: string;
  itemsPerPage?: number;
  features: {
    audio?: boolean;
    images?: boolean;
    tags?: boolean;
    search?: boolean;
    pagination?: boolean;
  };
  theme: {
    fontHeading: string;
    fontBody: string;
  };
}