import CustomReviewerItem from '@repo/ui/components/ui/custom/CustomReviewerItem';
import CustomSessionInfoTags from '@repo/ui/components/ui/custom/CustomSessionInfoTags';
import { MentoringDataType } from '@repo/ui/types/CommonType.ts';
import { ReviewerProfileType } from '@repo/ui/types/ReviewType.ts';
import FitImage from '@repo/web/components/ui/image/fit-image';
import { BadgeDollarSign, Hash, MessageSquareCode } from 'lucide-react';

export default function MentoringOverview({
  MentoringInfoData,
  userData,
}: {
  MentoringInfoData: MentoringDataType;
  userData: ReviewerProfileType[];
}) {
  const SessionInfo = [
    {
      id: 1,
      infoName: 'Review',
      infoValue: MentoringInfoData.totalReviewCount,
      icon: <MessageSquareCode size={12} className="text-blue-500" />,
    },
    {
      id: 2,
      infoName: 'Students',
      infoValue: MentoringInfoData.totalSaleCount,
      icon: <BadgeDollarSign size={12} className="text-blue-500" />,
    },
  ];
  return (
    <div>
      <CustomSessionInfoTags SessionInfoProps={SessionInfo} />
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-5 pb-3 pt-5">
        <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold leading-tight">
          {MentoringInfoData?.name}
        </h2>
        <CustomReviewerItem
          initialUserData={userData}
          className="hidden lg:!flex"
          userCount={
            MentoringInfoData.totalReviewCount > 4
              ? MentoringInfoData.totalReviewCount - 4
              : null
          }
          reviewCount={MentoringInfoData.totalReviewCount}
        />
      </div>
      <div className="relative w-full h-[400px] mt-8 rounded-xl object-cover overflow-hidden bg-gray-200">
        {MentoringInfoData.categoryList && (
          <ul className="flex gap-3 absolute top-5 left-5">
            {MentoringInfoData.categoryList.map((item) => (
              <li
                key={item.id}
                className="bg-adaptorsYellow/70 py-1 px-3 rounded-2xl ring-2 ring-white"
              >
                {item.topCategoryName}
              </li>
            ))}
          </ul>
        )}
        <FitImage src={`${MentoringInfoData?.thumbnailUrl}`} alt="Profile" />
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <ul className="flex gap-1 py-1">
          {MentoringInfoData?.hashTagList?.map((item) => (
            <li
              key={item.hashtagId}
              className=" px-3 rounded-2xl text-adaptorsBlue text-md flex items-center"
            >
              <Hash size={16} />
              {item.hashtagName}
            </li>
          ))}
        </ul>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: MentoringInfoData.detail }}
        className="py-3"
      />
    </div>
  );
}
