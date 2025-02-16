export interface StoryProps {
  id: number;
  user: string;
  imageUrl: string;
}

export interface PostProps {
  id?: number;
  title?: string;
  body?: string;
  views?: number;
  reactions?: {
    likes: number;
  };
  imgUrl?: string;
}
