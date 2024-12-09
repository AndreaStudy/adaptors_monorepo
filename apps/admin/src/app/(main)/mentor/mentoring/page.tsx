import { GetMentoringListByMentor } from '@repo/admin/actions/mentoring/mentoringAction';
import MentoringByMentor from '@repo/admin/components/pages/main/home/MentoringByMentor';

async function page() {
  const mentoringListData = await GetMentoringListByMentor(
    'eb5465c9-432f-49ee-b4d4-236b0d9ecdcb'
  );
  // console.log('=========================', mentoringListData);
  return (
    <>
      {mentoringListData && (
        <MentoringByMentor mentoringListData={mentoringListData} />
      )}
    </>
  );
}

export default page;
