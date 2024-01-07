import { notFound } from 'next/navigation';
import React from 'react';
type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
  if (!id) notFound();
  const termToUse = decodeURI(id);
  return (
    <div>
      Welcome to the genre with {id} and name {genre}
    </div>
  );
}

export default GenrePage;
