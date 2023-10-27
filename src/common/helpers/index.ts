import { format, parseISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

interface ParsedUrlProps {
  parentSlug: string;
  contentSlug: string;
}

export const formatBlogSlug = (slug: string) => slug?.slice(0, -5);

export const formatDate = (date: string, type = 'MMMM dd, yyyy') => {
  const formattedDate = format(
    utcToZonedTime(parseISO(date), 'Asia/Jakarta'),
    type
  );
  return formattedDate;
};

export const parseUrl = (url: string): ParsedUrlProps => {
  const parts = url.split('/');
  return {
    parentSlug: parts[2],
    contentSlug: parts[3],
  };
};
