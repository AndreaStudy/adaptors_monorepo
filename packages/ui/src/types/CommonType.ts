export interface SessionTime {
  hour: number;
  minute: number;
  second: number;
  nano: number;
}

export interface MentoringResponse {
  result: MentoringResult[];
}

export interface MentoringResult {
  totalCount: number;
  startDate: string;
  mentoringSessionResponseDtoList: MentoringSession[];
}

export interface MentoringSession {
  sessionUuid: string;
  mentoringUuid: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  deadlineDate: string;
  minHeadCount: number;
  maxHeadCount: number;
  nowHeadCount: number;
  isParticipating: boolean;
  price: number;
  isClosed: boolean;
  sessionUserList: SessionUser[];
}

export interface SessionUser {
  nickName: string;
  userImageUrl?: string;
  menteeImageUrl: string;
}

export interface MentoringDataType {
  mentoringUuid: string; // 멘토링의 고유 식별자
  name: string; // 멘토링 이름
  description: string;
  totalReviewCount: number; // 총 리뷰 개수
  reviewStarAvg: number; // 리뷰 별점 평균
  totalSaleCount: number; // 총 판매 횟수
  detail: string; // HTML 형식의 상세 정보
  mentorUuid: string; // 멘토의 고유 식별자
  thumbnailUrl: string; // 썸네일 이미지 URL
  isReusable: boolean; // 재사용 가능한지 여부
  isDeleted: boolean; // 삭제 여부
  createdAt: string; // 생성 날짜
  updatedAt: string; // 수정 날짜
  categoryList: Category[] | null; // 카테고리 리스트 (null일 수 있음)
  hashTagList: HashtagDataType[] | null; // 해시태그 리스트 (null일 수 있음)
}

export interface Category {
  topCategoryCode: string;
  middleCategoryCode: string;
  bottomCategoryCode: string | null;
  topCategoryName: string;
  middleCategoryName: string;
  bottomCategoryName: string | null;
  id: number;
}
export interface TopCategoryType {
  id: number;
  topCategoryCode: string;
  topCategoryName: string;
  categoryType: string;
  imageUrl?: string;
}

export interface SessionRequestType {
  sessionUuid: string;
  mentoringName: string;
}

export interface SessionCancelType {
  sessionUuid: string;
  deadlineDate: string;
}

export interface SearchMentoringListType {
  mentoringUuid: string;
  reviewCount: number | null;
  averageStar: number | null;
  totalSaleCount: number | null;
  name: string;
  description: string;
  thumbnailUrl: string;
  isAvailable: boolean;
  nowSessionCount: number | null;
}

export interface pageableType {
  pageNumber: number;
  pageSize: number;
  sort?: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  offset?: number;
  paged?: boolean;
  unpaged?: boolean;
}

// API 전체 응답 타입 정의
export interface ApiResponse {
  totalPages: number;
  content: SearchMentoringListType[];
  pageable: pageableType;
}

export interface TableHeaderPropsType {
  id: number;
  name: string;
  icon?: JSX.Element;
  onClick?: () => void;
}

export interface HashtagDataType {
  hashtagName: string;
  hashtagId: number;
}
