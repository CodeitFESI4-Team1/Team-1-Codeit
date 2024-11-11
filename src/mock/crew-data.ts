interface CrewMember {
  id: number;
  nickname: string;
  profileImageUrl: string;
}

interface CrewDataItem {
  id: number;
  mainCategory: string;
  subCategory: string;
  title: string;
  location: string;
  subLocation: string;
  participantCount: number;
  totalCount: number;
  imageUrl: string;
  isConfirmed: boolean;
  totalGatheringCount: number;
  crewMember: CrewMember[];
}

interface CrewData {
  data: CrewDataItem[];
}

export const crewData: CrewData = {
  data: [
    {
      id: 1,
      mainCategory: '유산소',
      subCategory: '수영',
      title: '엄청긴크루이름엄청긴크루이름엄청긴크루이름엄청긴크루이름',
      location: '경기도',
      subLocation: '어디구 어디로',
      participantCount: 5,
      totalCount: 24,
      imageUrl: 'https://i.pinimg.com/564x/f8/8d/c5/f88dc5b857caf6c303ae5ef9dd12e7fb.jpg',
      isConfirmed: true,
      totalGatheringCount: 3,
      crewMember: [
        {
          id: 1,
          nickname: 'User1',
          profileImageUrl:
            'https://i.pinimg.com/564x/e2/25/bb/e225bb492dc7a20a549f3c0abec28eb8.jpg',
        },
        {
          id: 2,
          nickname: 'User2',
          profileImageUrl:
            'https://i.pinimg.com/564x/9d/b8/86/9db886bb5475cc35a7f450831f4125bc.jpg',
        },
        {
          id: 3,
          nickname: 'User3',
          profileImageUrl:
            'https://i.pinimg.com/564x/41/56/d8/4156d8253b6d76e5455d28b44bd1a1e0.jpg',
        },
        {
          id: 4,
          nickname: 'User4',
          profileImageUrl:
            'https://i.pinimg.com/564x/e2/e6/47/e2e64732424094c4e9e2643aaaf4389e.jpg',
        },
        {
          id: 5,
          nickname: 'User5',
          profileImageUrl:
            'https://i.pinimg.com/564x/17/06/45/170645a5f7b8a76f04c15b226b22cf90.jpg',
        },
      ],
    },
    {
      id: 2,
      mainCategory: '유산소',
      subCategory: '달리기',
      title: '같이 달릴사람 구함',
      location: '광주',
      subLocation: '어디구 어디로',
      participantCount: 10,
      totalCount: 20,
      imageUrl: 'https://i.pinimg.com/564x/f8/8d/c5/f88dc5b857caf6c303ae5ef9dd12e7fb.jpg',
      isConfirmed: true,
      totalGatheringCount: 3,
      crewMember: [
        {
          id: 1,
          nickname: 'User1',
          profileImageUrl:
            'https://i.pinimg.com/564x/e2/25/bb/e225bb492dc7a20a549f3c0abec28eb8.jpg',
        },
        {
          id: 2,
          nickname: 'User2',
          profileImageUrl:
            'https://i.pinimg.com/564x/9d/b8/86/9db886bb5475cc35a7f450831f4125bc.jpg',
        },
        {
          id: 3,
          nickname: 'User3',
          profileImageUrl:
            'https://i.pinimg.com/564x/41/56/d8/4156d8253b6d76e5455d28b44bd1a1e0.jpg',
        },
        {
          id: 4,
          nickname: 'User3',
          profileImageUrl:
            'https://i.pinimg.com/564x/41/56/d8/4156d8253b6d76e5455d28b44bd1a1e0.jpg',
        },
        {
          id: 5,
          nickname: 'User1',
          profileImageUrl:
            'https://i.pinimg.com/564x/e2/25/bb/e225bb492dc7a20a549f3c0abec28eb8.jpg',
        },
        {
          id: 6,
          nickname: 'User3',
          profileImageUrl:
            'https://i.pinimg.com/564x/41/56/d8/4156d8253b6d76e5455d28b44bd1a1e0.jpg',
        },
        {
          id: 7,
          nickname: 'User1',
          profileImageUrl:
            'https://i.pinimg.com/564x/e2/25/bb/e225bb492dc7a20a549f3c0abec28eb8.jpg',
        },
        {
          id: 8,
          nickname: 'User2',
          profileImageUrl:
            'https://i.pinimg.com/564x/9d/b8/86/9db886bb5475cc35a7f450831f4125bc.jpg',
        },
        {
          id: 9,
          nickname: 'User3',
          profileImageUrl:
            'https://i.pinimg.com/564x/41/56/d8/4156d8253b6d76e5455d28b44bd1a1e0.jpg',
        },
        {
          id: 10,
          nickname: 'User3',
          profileImageUrl:
            'https://i.pinimg.com/564x/41/56/d8/4156d8253b6d76e5455d28b44bd1a1e0.jpg',
        },
      ],
    },
    {
      id: 3,
      mainCategory: '유산소',
      subCategory: '달리기',
      title: '같이 달릴사람 구함',
      location: '부산',
      subLocation: '어디구 어디로',
      participantCount: 1,
      totalCount: 5,
      imageUrl: 'https://i.pinimg.com/564x/f8/8d/c5/f88dc5b857caf6c303ae5ef9dd12e7fb.jpg',
      isConfirmed: false,
      totalGatheringCount: 3,
      crewMember: [
        {
          id: 1,
          nickname: 'User1',
          profileImageUrl:
            'https://i.pinimg.com/564x/e2/25/bb/e225bb492dc7a20a549f3c0abec28eb8.jpg',
        },
      ],
    },
    {
      id: 4,
      mainCategory: '유산소',
      subCategory: '달리기',
      title: '같이 달릴사람 구함',
      location: '부산',
      subLocation: '어디구 어디로',
      participantCount: 1,
      totalCount: 20,
      imageUrl: 'https://i.pinimg.com/564x/f8/8d/c5/f88dc5b857caf6c303ae5ef9dd12e7fb.jpg',
      isConfirmed: false,
      totalGatheringCount: 3,
      crewMember: [
        {
          id: 1,
          nickname: 'User1',
          profileImageUrl:
            'https://i.pinimg.com/564x/e2/25/bb/e225bb492dc7a20a549f3c0abec28eb8.jpg',
        },
      ],
    },
    {
      id: 5,
      mainCategory: '유산소',
      subCategory: '달리기',
      title: '같이 달릴사람 구함',
      location: '부산',
      subLocation: '어디구 어디로',
      participantCount: 1,
      totalCount: 20,
      imageUrl: 'https://i.pinimg.com/564x/f8/8d/c5/f88dc5b857caf6c303ae5ef9dd12e7fb.jpg',
      isConfirmed: false,
      totalGatheringCount: 5,
      crewMember: [
        {
          id: 1,
          nickname: 'User1',
          profileImageUrl:
            'https://i.pinimg.com/564x/e2/25/bb/e225bb492dc7a20a549f3c0abec28eb8.jpg',
        },
      ],
    },
    {
      id: 6,
      mainCategory: '유산소',
      subCategory: '달리기',
      title: '같이 달릴사람 구함',
      location: '광주',
      subLocation: '어디구 어디로',
      participantCount: 10,
      totalCount: 20,
      imageUrl: 'https://i.pinimg.com/564x/f8/8d/c5/f88dc5b857caf6c303ae5ef9dd12e7fb.jpg',
      isConfirmed: true,
      totalGatheringCount: 5,
      crewMember: [
        {
          id: 1,
          nickname: 'User1',
          profileImageUrl:
            'https://i.pinimg.com/564x/e2/25/bb/e225bb492dc7a20a549f3c0abec28eb8.jpg',
        },
        {
          id: 2,
          nickname: 'User2',
          profileImageUrl:
            'https://i.pinimg.com/564x/9d/b8/86/9db886bb5475cc35a7f450831f4125bc.jpg',
        },
        {
          id: 3,
          nickname: 'User3',
          profileImageUrl:
            'https://i.pinimg.com/564x/41/56/d8/4156d8253b6d76e5455d28b44bd1a1e0.jpg',
        },
        {
          id: 4,
          nickname: 'User3',
          profileImageUrl:
            'https://i.pinimg.com/564x/41/56/d8/4156d8253b6d76e5455d28b44bd1a1e0.jpg',
        },
        {
          id: 5,
          nickname: 'User1',
          profileImageUrl:
            'https://i.pinimg.com/564x/e2/25/bb/e225bb492dc7a20a549f3c0abec28eb8.jpg',
        },
        {
          id: 6,
          nickname: 'User3',
          profileImageUrl:
            'https://i.pinimg.com/564x/41/56/d8/4156d8253b6d76e5455d28b44bd1a1e0.jpg',
        },
        {
          id: 7,
          nickname: 'User1',
          profileImageUrl:
            'https://i.pinimg.com/564x/e2/25/bb/e225bb492dc7a20a549f3c0abec28eb8.jpg',
        },
        {
          id: 8,
          nickname: 'User2',
          profileImageUrl:
            'https://i.pinimg.com/564x/9d/b8/86/9db886bb5475cc35a7f450831f4125bc.jpg',
        },
        {
          id: 9,
          nickname: 'User3',
          profileImageUrl:
            'https://i.pinimg.com/564x/41/56/d8/4156d8253b6d76e5455d28b44bd1a1e0.jpg',
        },
        {
          id: 10,
          nickname: 'User3',
          profileImageUrl:
            'https://i.pinimg.com/564x/41/56/d8/4156d8253b6d76e5455d28b44bd1a1e0.jpg',
        },
      ],
    },
    {
      id: 7,
      mainCategory: '유산소',
      subCategory: '수영',
      title: '엄청긴크루이름엄청긴크루이름엄청긴크루이름엄청긴크루이름',
      location: '경기도',
      subLocation: '어디구 어디로',
      participantCount: 5,
      totalCount: 24,
      imageUrl: 'https://i.pinimg.com/564x/f8/8d/c5/f88dc5b857caf6c303ae5ef9dd12e7fb.jpg',
      isConfirmed: true,
      totalGatheringCount: 5,
      crewMember: [
        {
          id: 1,
          nickname: 'User1',
          profileImageUrl:
            'https://i.pinimg.com/564x/e2/25/bb/e225bb492dc7a20a549f3c0abec28eb8.jpg',
        },
        {
          id: 2,
          nickname: 'User2',
          profileImageUrl:
            'https://i.pinimg.com/564x/9d/b8/86/9db886bb5475cc35a7f450831f4125bc.jpg',
        },
        {
          id: 3,
          nickname: 'User3',
          profileImageUrl:
            'https://i.pinimg.com/564x/41/56/d8/4156d8253b6d76e5455d28b44bd1a1e0.jpg',
        },
        {
          id: 4,
          nickname: 'User3',
          profileImageUrl:
            'https://i.pinimg.com/564x/41/56/d8/4156d8253b6d76e5455d28b44bd1a1e0.jpg',
        },
        {
          id: 5,
          nickname: 'User1',
          profileImageUrl:
            'https://i.pinimg.com/564x/e2/25/bb/e225bb492dc7a20a549f3c0abec28eb8.jpg',
        },
      ],
    },
    {
      id: 8,
      mainCategory: '유산소',
      subCategory: '달리기',
      title: '같이 달릴사람 구함',
      location: '광주',
      subLocation: '어디구 어디로',
      participantCount: 10,
      totalCount: 20,
      imageUrl: 'https://i.pinimg.com/564x/f8/8d/c5/f88dc5b857caf6c303ae5ef9dd12e7fb.jpg',
      isConfirmed: true,
      totalGatheringCount: 5,
      crewMember: [
        {
          id: 1,
          nickname: 'User1',
          profileImageUrl:
            'https://i.pinimg.com/564x/e2/25/bb/e225bb492dc7a20a549f3c0abec28eb8.jpg',
        },
        {
          id: 2,
          nickname: 'User2',
          profileImageUrl:
            'https://i.pinimg.com/564x/9d/b8/86/9db886bb5475cc35a7f450831f4125bc.jpg',
        },
        {
          id: 3,
          nickname: 'User3',
          profileImageUrl:
            'https://i.pinimg.com/564x/41/56/d8/4156d8253b6d76e5455d28b44bd1a1e0.jpg',
        },
        {
          id: 4,
          nickname: 'User3',
          profileImageUrl:
            'https://i.pinimg.com/564x/41/56/d8/4156d8253b6d76e5455d28b44bd1a1e0.jpg',
        },
        {
          id: 5,
          nickname: 'User1',
          profileImageUrl:
            'https://i.pinimg.com/564x/e2/25/bb/e225bb492dc7a20a549f3c0abec28eb8.jpg',
        },
        {
          id: 6,
          nickname: 'User3',
          profileImageUrl:
            'https://i.pinimg.com/564x/41/56/d8/4156d8253b6d76e5455d28b44bd1a1e0.jpg',
        },
        {
          id: 7,
          nickname: 'User1',
          profileImageUrl:
            'https://i.pinimg.com/564x/e2/25/bb/e225bb492dc7a20a549f3c0abec28eb8.jpg',
        },
        {
          id: 8,
          nickname: 'User2',
          profileImageUrl:
            'https://i.pinimg.com/564x/9d/b8/86/9db886bb5475cc35a7f450831f4125bc.jpg',
        },
        {
          id: 9,
          nickname: 'User3',
          profileImageUrl:
            'https://i.pinimg.com/564x/41/56/d8/4156d8253b6d76e5455d28b44bd1a1e0.jpg',
        },
        {
          id: 10,
          nickname: 'User3',
          profileImageUrl:
            'https://i.pinimg.com/564x/41/56/d8/4156d8253b6d76e5455d28b44bd1a1e0.jpg',
        },
      ],
    },
    {
      id: 9,
      mainCategory: '유산소',
      subCategory: '달리기',
      title: '같이 달릴사람 구함',
      location: '부산',
      subLocation: '어디구 어디로',
      participantCount: 3,
      totalCount: 5,
      imageUrl: 'https://i.pinimg.com/564x/f8/8d/c5/f88dc5b857caf6c303ae5ef9dd12e7fb.jpg',
      isConfirmed: false,
      totalGatheringCount: 5,
      crewMember: [
        {
          id: 1,
          nickname: 'User1',
          profileImageUrl:
            'https://i.pinimg.com/564x/e2/25/bb/e225bb492dc7a20a549f3c0abec28eb8.jpg',
        },
        {
          id: 2,
          nickname: 'User2',
          profileImageUrl:
            'https://i.pinimg.com/564x/9d/b8/86/9db886bb5475cc35a7f450831f4125bc.jpg',
        },
        {
          id: 3,
          nickname: 'User2',
          profileImageUrl:
            'https://i.pinimg.com/564x/9d/b8/86/9db886bb5475cc35a7f450831f4125bc.jpg',
        },
      ],
    },
    {
      id: 10,
      mainCategory: '유산소',
      subCategory: '달리기',
      title: '같이 달릴사람 구함',
      location: '부산',
      subLocation: '어디구 어디로',
      participantCount: 1,
      totalCount: 20,
      imageUrl: 'https://i.pinimg.com/564x/f8/8d/c5/f88dc5b857caf6c303ae5ef9dd12e7fb.jpg',
      isConfirmed: false,
      totalGatheringCount: 5,
      crewMember: [
        {
          id: 1,
          nickname: 'User1',
          profileImageUrl:
            'https://i.pinimg.com/564x/e2/25/bb/e225bb492dc7a20a549f3c0abec28eb8.jpg',
        },
      ],
    },
    {
      id: 11,
      mainCategory: '유산소',
      subCategory: '달리기',
      title: '같이 달릴사람 구함',
      location: '부산',
      subLocation: '어디구 어디로',
      participantCount: 1,
      totalCount: 20,
      imageUrl: 'https://i.pinimg.com/564x/f8/8d/c5/f88dc5b857caf6c303ae5ef9dd12e7fb.jpg',
      isConfirmed: false,
      totalGatheringCount: 5,
      crewMember: [
        {
          id: 1,
          nickname: 'User1',
          profileImageUrl:
            'https://i.pinimg.com/564x/e2/25/bb/e225bb492dc7a20a549f3c0abec28eb8.jpg',
        },
      ],
    },
  ],
};
