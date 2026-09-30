// Award and publication type definitions

export interface AwardItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  conference: string;
  date: string;
  award?: string;
}
