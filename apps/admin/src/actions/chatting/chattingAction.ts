'use server';

import { options } from '@repo/admin/app/api/auth/[...nextauth]/options';
import {
  chatMemberDataType,
  prevChatResType,
} from '@repo/admin/components/types/main/chatting/chattingTypes';
import { commonResType } from '@repo/admin/components/types/ResponseTypes';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const mentoringSessionUuid = 'ac419217-cb98-4334-8b78-8126aa0e57aa';

// 기존 채팅 데이터 불러오기
export async function getChattingData(page: number) {
  'use server';
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;
  try {
    const res = await fetch(
      `${process.env.CHATSERVICE_URL}/api/v1/chat/pagingSearch/${mentoringSessionUuid}?limit=20&pageNumber=${page}`,
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
    const result = (await res.json()) as commonResType<prevChatResType>;
    return result.result;
  } catch (error) {
    console.error('세션의 채팅 리스트 조회 실패 : ', error);
    return redirect('/error?message=Failed to fetch session chatting');
  }
}

// 채팅 보내기
export async function postChat({
  message,
  messageType,
  mediaUrl,
}: {
  message: string;
  messageType: 'TEXT' | 'MEDIA' | 'FILE' | 'NOTICE';
  mediaUrl?: string;
}) {
  'use server';
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;
  try {
    const payload = {
      mentoringSessionUuid: mentoringSessionUuid,
      message: message,
      messageType: messageType,
      mediaUrl: mediaUrl ? mediaUrl : '',
    };

    const res = await fetch(`${process.env.CHATSERVICE_URL}/api/v1/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'userUuid': userUuid,
      },
      body: JSON.stringify(payload),
    });
    return;
  } catch (error) {
    console.error('채팅 요청 조회 실패 : ', error);
    // 에러 message
    return {};
  }
}

// 채팅 보낸 상대의 프로필 이름 정보 가져오기
export async function getChatProfile({ userUuid }: { userUuid: string }) {
  'use server';
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  try {
    const res = await fetch(
      `${process.env.PROFILE_URL}/api/v1/memberInfo/profileImage`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
          'userUuid': userUuid,
        },
      }
    );
    const result = (await res.json()) as commonResType<chatMemberDataType>;
    return result.result;
  } catch (error) {
    console.error('채팅 상대 프로필 조회 실패 : ', error);
    return { nickName: '', profileImageUrl: '' };
  }
}

// 채팅방 입장 todo
export async function postEnterChat({
  nickname,
  // mentoringSessionUuid,
}: {
  nickname: string;
  // mentoringSessionUuid: string;
}) {
  'use server';
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;
  try {
    const res = await fetch(
      `${process.env.CHATSERVICE_URL}/api/v1/chat/join/${mentoringSessionUuid}?nickName=${nickname}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
          'userUuid': userUuid,
        },
      }
    );
    return;
  } catch (error) {
    console.error('채팅방 입장 실패 : ', error);
    return {};
  }
}

// 채팅방 퇴장
export async function postOutChat({
  nickname,
  // mentoringSessionUuid,
}: {
  nickname: string;
  // mentoringSessionUuid: string;
}) {
  'use server';
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;
  try {
    const res = await fetch(
      `${process.env.CHATSERVICE_URL}/api/v1/chat/leave/${mentoringSessionUuid}?nickName=${nickname}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
          'userUuid': userUuid,
        },
      }
    );
    return;
  } catch (error) {
    console.error('채팅방 퇴장장 실패 : ', error);
    return {};
  }
}
