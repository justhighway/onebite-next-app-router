const BookDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return <div>BookDetailPage {id}</div>;
};
export default BookDetailPage;
