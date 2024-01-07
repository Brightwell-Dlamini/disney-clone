import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
  params: {
    term: string;
  };
};
function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();
  const termToUse = decodeURI(term);
  //   API CALL TO GET THE SEARCHED MOVIES
  //   API CALL TO GET THE POPULAR
  return <div>Welcome to the Search Page</div>;
}

export default SearchPage;
