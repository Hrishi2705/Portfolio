export type Product = {
  repolink: string | undefined;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  href: string | null;
  slug?: string;
  stack?: string[];
  content?: React.ReactNode | string;
};
