'use client';
import React from 'react';
import { CommonLayout } from '@components/common/commomLayout';
import { MentorMentoringListDataType } from '@components/types/mentor/mentorType';
import CurrentMentoring from './current/CurrentMentoring';
import MentorIntro from './MentorIntro';
import PopularMentoring from './Popular/PopularMentoring';
function MentorDetail({
  mentorlistItem,
}: {
  mentorlistItem: MentorMentoringListDataType[];
}) {
  return (
    <div className="container mx-auto md:max-w-[40rem] lg:max-w-[50rem]">
      <div className="h-auto mt-2 flex-fol mx-auto lg:max-w-[50rem] sm:max-w-[24rem] md:max-w-[40rem]">
        {/* 진행중인 멘토링 섹션 */}
        <CurrentMentoring item={mentorlistItem} />

        {/* 인기있는 멘토링 */}
        {/* <PopularMentoring /> */}
      </div>
    </div>
  );
}

export default MentorDetail;
