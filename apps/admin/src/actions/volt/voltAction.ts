'use server';

import {
  mentorVoltListDataType,
  settleListDataType,
} from '@repo/admin/components/types/main/mypage/myPageTypes';
import { commonResType } from '@repo/admin/components/types/ResponseTypes';
import { redirect } from 'next/navigation';
import { getChatProfile } from '../chatting/chattingAction';
import { getServerSession } from 'next-auth';
import { options } from '@repo/admin/app/api/auth/[...nextauth]/options';

// 기간 별 정산 내역 API
export async function GetSettleList(startDate: string, endDate: string) {
  'use server';
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;
  try {
    const res = await fetch(
      `${process.env.PAYMENT_URL}/api/v1/payment/settle/points?startDate=${startDate}&endDate=${endDate}&mentorUuid=${userUuid}`,
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
    const result = (await res.json()) as commonResType<settleListDataType>;
    return result.result;
  } catch (error) {
    console.error('기간 별 정산 내역 조회 실패 : ', error);
    return redirect('/error?message=Failed to fetch settle list');
  }
}

// 받은 볼트 API
export async function GetMentorVolts() {
  'use server';
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;
  try {
    const res = await fetch(
      `${process.env.PAYMENT_URL}/api/v1/payment/settle/mentorUuid=${userUuid}/points`,
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

    const result = (await res.json()) as commonResType<mentorVoltListDataType>;

    const voltListWithNickNames = await Promise.all(
      result.result.voltList.map(async (volt) => {
        const member = await getChatProfile({ userUuid: volt.sender });
        return { ...volt, sender: member.nickName };
      })
    );

    return {
      totalVolt: result.result.totalVolt,
      voltList: voltListWithNickNames,
    };
  } catch (error) {
    console.error('멘토가 받은 볼트 조회 실패 : ', error);
    return redirect('/error?message=Failed to fetch mentor volts');
  }
}
