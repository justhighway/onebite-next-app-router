const SearchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) => {
  const { q } = await searchParams;
  return <div>SearchPage 페이지: {q}</div>;
};
export default SearchPage;
