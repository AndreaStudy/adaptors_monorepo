import { CommonLayout } from '@repo/ui/components/ui/commomLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Create Mentoring Session`,
};

export default function page() {
  return (
    <CommonLayout className="p-6">
      <h1 className="font-bold text-3xl py-3">멘토링 일괄생성</h1>
    </CommonLayout>
  );
}
