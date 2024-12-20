import {
  getFeedbackElements,
  getFeedbackGraph,
  getFeedbackScore,
} from '@repo/web/actions/mypage/feedback';
import AdaptorsComment from '@repo/web/components/pages/feedback/AdaptorsComment';
import FeedbackHistory from '@repo/web/components/pages/feedback/FeedbackHistory';
import FeedbackNavbar from '@repo/web/components/pages/feedback/FeedbackNav';
import ScoreComparisonGraph from '@repo/web/components/pages/feedback/ScoreComparisonGraph';

import { getServerSession } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import volpang from '../../../../components/assets/images/volpang.png';
import { options } from '../../../api/auth/[...nextauth]/options';

const categoryMapping: Record<string, string> = {
  'TC-CD7877C0': 'RESUME',
  'TC-8C93C5F5': 'COVER_LETTER',
  'TC-0489394A': 'INTERVIEW',
  'TC-8E506504': 'PORTFOLIO',
};
function getCategoryName(categoryCode: string): string {
  return categoryMapping[categoryCode] || '알 수 없는 카테고리';
}

async function fetchMentoringData({ categoryCode }: { categoryCode: string }) {
  const categoryName = getCategoryName(categoryCode); // 매핑된 카테고리 이름
  const element = await getFeedbackElements(categoryCode);

  const feedbackData = await getFeedbackScore(categoryName); // 멘토의 피드백
  const graphData = await getFeedbackGraph(categoryName); // 볼팡이 + 그래프
  return {
    element,
    feedbackData,
    graphData,
  };
}

export default async function Page({
  searchParams,
}: {
  searchParams: { category: string };
}) {
  const session = await getServerSession(options);
  const user = session?.user.nickName;
  const categoryCode = searchParams.category;

  const { feedbackData, graphData, element } = await fetchMentoringData({
    categoryCode,
  });
  //
  return (
    <main className="flex flex-col h-screen md:mt-[1rem] lg:max-w-[64rem] mx-auto md:max-w-[40rem] sm:max-w-[400px] max-[300px]">
      <FeedbackNavbar />
      {Array.isArray(feedbackData) && feedbackData.length > 0 ? (
        <>
          <FeedbackHistory feedbackData={feedbackData} element={element} />
          <div className="md:flex">
            <ScoreComparisonGraph
              graphData={graphData?.feedbackFirstLastScoreDto ?? null}
              elements={element}
            />
            <AdaptorsComment
              feedbackContent={graphData?.feedbackContent ?? ''}
              nickname={user}
              profileImageUrl={session?.user.profileImageUrl}
            />
          </div>
        </>
      ) : (
        <section className=" items-center p-8">
          <div className="w-[50%] mx-auto mb-6">
            <Image
              src={volpang.src}
              alt="볼팡이 - adaptors의 마스코트"
              width={500}
              height={500}
              priority
              className="w-64 md:w-[50%] lg:w-[20%] transform scale-x-[-1]"
            />
          </div>
          <div className="">
            <p className="text-2xl font-bold">
              멘토링 진행내역이 없습니다.
              <br /> 멘토링을 진행하고 리포트를 확인하세요!
            </p>
            <Link href="/mentoring" className="text-adaptorsYellow underline">
              <span className="underline-none">🔗</span> 멘토링 신청하러 가기
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}
