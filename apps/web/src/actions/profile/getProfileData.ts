'use server';
import { userProfileType } from '@repo/web/components/types/profile/RequestType';
import { commonResType } from '@repo/web/components/types/ResponseTypes';
import { getServerSession } from 'next-auth';
import { options } from 'src/app/api/auth/[...nextauth]/options';
export const getProfileImage = async (
  uuid: string
): Promise<userProfileType> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_PROFILE_URL}/api/v1/memberInfo/profileImage`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'userUuid': uuid,
      },
      next: { tags: ['profileUpdate'] },
      cache: 'force-cache',
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to post profile image');
  }

  const data = (await response.json()) as commonResType<userProfileType>;
  return data.result;
};

export const getMyProfileIamge = async (): Promise<userProfileType> => {
  const session = await getServerSession(options);
  const menteeUuid = session?.user.uuid;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_PROFILE_URL}/api/v1/memberInfo/profileImage`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'userUuid': menteeUuid,
      },
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to post profile image');
  }

  const data = (await response.json()) as commonResType<userProfileType>;
  return data.result;
};
