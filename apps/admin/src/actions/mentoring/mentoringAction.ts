'use server';

import { options } from '@repo/admin/app/api/auth/[...nextauth]/options';
import type {
  HashtagDataType,
  MentoringAddFormType,
  MiddleCategoryDataType,
  SessionTimeDataType,
  SessionTimeValidationType,
  TopCategoryDataType,
} from '@repo/admin/components/types/main/mentor/mentoringTypes';
import { commonResType } from '@repo/admin/components/types/ResponseTypes';
import {
  MentoringDataType,
  MentoringResult,
  SearchMentoringListType,
} from '@repo/ui/types/CommonType.ts';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const userUuid = 'eb5465c9-432f-49ee-b4d4-236b0d9ecdcb';

// 멘토링 대 카테고리 리스트 조회
export async function GetTopCategoryList() {
  'use server';
  try {
    const res = await fetch(
      `${process.env.CATEGORY_URL}/api/v1/category/top-categories`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const result = (await res.json()) as commonResType<TopCategoryDataType[]>;
    return result.result;
  } catch (error) {
    console.error('대 카테고리 리스트 조회 : ', error);
    return [];
  }
}

// 멘토링 중 카테고리 리스트 조회
export async function GetMiddleCategoryList({
  topCategoryCode,
}: {
  topCategoryCode: string;
}) {
  'use server';
  try {
    const res = await fetch(
      `${process.env.CATEGORY_URL}/api/v1/category/middle-categories${topCategoryCode}`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const result = (await res.json()) as commonResType<
      MiddleCategoryDataType[]
    >;
    return result.result;
  } catch (error) {
    console.error('중 카테고리 리스트 조회 : ', error);
    return [];
  }
}

// 멘토링 해시태그 리스트 출력
export async function GetHashTagsList() {
  'use server';
  try {
    const res = await fetch(
      `${process.env.BACKEND_URL}/hashtag-service/api/v1/admin/hashtag`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const result = (await res.json()) as commonResType<HashtagDataType[]>;
    return result.result;
  } catch (error) {
    console.error('해시태그 에러 ', error);
    return [];
  }
}

// 멘토의 멘토링 생성
export async function PostMentoring(payload: MentoringAddFormType) {
  'use server';
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;
  try {
    const res = await fetch(
      `${process.env.MENTORING_URL}/api/v1/mentoring-service`,
      {
        cache: 'no-cache',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
          'userUuid': userUuid,
        },
        body: JSON.stringify(payload),
      }
    );
    const result = (await res.json()) as commonResType<null>;
    console.log('멘토링 생성 성공', result);
    return result;
  } catch (error) {
    console.error('멘토링 생성 실패 : ', error);
    return [];
  }
}

// 멘토의 멘토링 리스트 조회
export async function GetMentoringList(): Promise<MentoringDataType[]> {
  'use server';
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;
  try {
    const res = await fetch(
      `${process.env.MENTORING_QUERY_URL}/api/v1/mentoring-query-service/mentoring-list?isMentor=true`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
          'userUuid': userUuid,
        },
      }
    );
    const result = (await res.json()) as commonResType<MentoringDataType[]>;
    return result.result;
  } catch (error) {
    console.error('멘토링리스트 정보 조회 : ', error);
    return [];
  }
}

export async function GetMentoringListByMentor(
  mentorUuid: string
): Promise<SearchMentoringListType[]> {
  'use server';
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  try {
    const res = await fetch(
      `${process.env.MENTORING_QUERY_URL}/api/v1/mentoring-query-service/mentoring-list?isMentor=true`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
          'userUuid': mentorUuid,
        },
      }
    );
    const result = (await res.json()) as commonResType<
      SearchMentoringListType[]
    >;
    console.log('mentorlistbymentor', result);
    return result.result;
  } catch (error) {
    console.error('멘토링리스트 정보 조회 : ', error);
    return [];
  }
}

// 멘토링 1개에 대한 정보 조회
export async function GetMentoringInfo(mentoringUuid: string) {
  'use server';
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;
  try {
    const res = await fetch(
      `${process.env.MENTORING_QUERY_URL}/api/v1/mentoring-query-service/mentoring/${mentoringUuid}`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
          'userUuid': userUuid,
        },
      }
    );
    const result = (await res.json()) as commonResType<MentoringDataType>;
    return result.result;
  } catch (error) {
    console.error('멘토링 세션 리스트 정보 조회 : ', error);
    return redirect('/error?message=Failed to fetch session list');
  }
}

// 멘토링의 세션리스트 조희
export async function GetMentoringSessionList(
  mentoringUuid: string
): Promise<MentoringResult[]> {
  'use server';
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;
  try {
    const res = await fetch(
      `${process.env.MENTORING_QUERY_URL}/api/v1/mentoring-query-service/session-list?mentoringUuid=${mentoringUuid}`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
          'userUuid': userUuid,
        },
      }
    );
    const result = (await res.json()) as commonResType<MentoringResult[]>;
    return result.result;
  } catch (error) {
    console.error('멘토링 세션 리스트 정보 조회 : ', error);
    return redirect('/error?message=Failed to fetch session list');
  }
}

// 멘토링 세션 추가 시 시간이 스케쥴과 겹치는지 확인하는 API
export async function PostSessionTimeValidation({
  time,
}: {
  time: SessionTimeDataType;
}) {
  'use server';
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;
  try {
    const res = await fetch(
      `${process.env.MENTORING_URL}/api/v1/mentoring-service/validate-session-time?startDate=${time.startDate}&endDate=${time.endDate}&startTime=${time.startTime}&endTime=${time.endTime}&mentorUuid=${userUuid}`,
      {
        cache: 'no-cache',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
          'userUuid': userUuid,
        },
      }
    );
    const result =
      (await res.json()) as commonResType<SessionTimeValidationType>;
    return result.result;
  } catch (error) {
    console.error('세션 시간 검증 : ', error);
    return null;
  }
}
