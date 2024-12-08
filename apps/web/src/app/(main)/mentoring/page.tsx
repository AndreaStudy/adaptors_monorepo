import CategoryAside from '@repo/web/components/pages/main/mentoring/category/CategoryAside';
import ListSection from '@repo/web/components/pages/main/mentoring/ListSection';
import { redirect } from 'next/navigation';
import { getTopCategoryList } from 'src/actions/category/getCategory';

export default async function page({
  searchParams,
}: {
  searchParams: { category: string };
}) {
  const categorise = await getTopCategoryList();
  if (!searchParams.category) {
    redirect(`/mentoring?category=${categorise[0].topCategoryCode}`);
  }
  return (
    <main className="mt-[7rem]">
      {/* <PaperStock /> */}
      <CategoryAside categoryParam={searchParams.category} />
      {searchParams.category && (
        <ListSection category={searchParams.category} />
      )}
    </main>
  );
}
