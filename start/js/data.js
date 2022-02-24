const qnaList = [
  {
    q: '1. When I am tired, I will choose...?  ',
    a: [
      { answer: 'a. sleep.', type: [0, 1, 2, 3, 4, 5, 6, 7] },
      { answer: 'b. hang out with people', type: [0, 1, 2, 3, 4, 5, 6, 7] },
      { answer: 'c. eating.', type: [0, 1, 2, 3, 4, 5, 6, 7] },
    ]
  },
  {
    q: '2. I wish to gain ___ experience from Inspire 2022?',
    a: [
      { answer: 'a. Technical/industry insight', type: [1, 2, 4] },
      { answer: 'b. Softskills/people-skills', type: [0, 3, 6, 5] },
      { answer: 'c. Problem solving/success stories', type: [7] },
    ]
  },
  {
    q: '3. Do you believe that investing in space projects is necessary for humanity?',
    a: [
      { answer: 'a. No, we need focus on people on earth.', type: [0, 1, 5] },
      { answer: 'b. Absolutely, we should support space projects for future generation.', type: [3, 6, 5, 7] },
      { answer: 'c. I am not sure, maybe?', type: [2, 4] },
    ]
  },
  {
    q: '4. 호감가는 고백 멘트를 고른다면?',
    a: [
      { answer: 'a. 박력 그 자체, "야 나랑 사귀자" ', type: [1, 2, 4] },
      { answer: 'b. 섬세한 "나 너 많이 좋아해, 나랑 사귈래?" ', type: [7] },
      { answer: 'c. 센스있는 "우리 내일은 연인으로 만날까요" ', type: [0, 3, 6, 5] },
    ]
  },
  {
    q: '5. 오늘 연인과 첫 데이트 하는 날이다. 첫 날 허용할 수 있는 스킨십의 범위는?',
    a: [
      { answer: 'a. 쑥스러워.. 손 잡기 정도??', type: [1, 7, 4] },
      { answer: 'b. 요즘 시대가 어느 때인데, 가벼운 뽀뽀까지 가능이야', type: [0, 3, 6]},
      { answer: 'c. 어차피 내 연인인데 왜?? 모든 스킨십 다 돼!', type: [2, 5] },
    ]
  },

  {
    q: '6. 기념일이 다가온다. 당신은 어떻게 할 것인가? (ex - 0, 200일)',
    a: [
      { answer: 'a. 무슨 기념일이야, 그냥 평소처럼 해', type: [4] },
      { answer: 'b. 맛있는 밥이나 사줄까? 아니면 꽃이라도?', type: [0, 3, 6] },
      { answer: 'c. 이미 깜짝 이벤트 다 준비해놨어', type: [1, 7, 2, 5] },
    ]
  },
  {
    q: '7. 연인이 오늘 머리를 바꾸고 옷도 새로 샀다',
    a: [
      { answer: 'a. 눈치 못 채고 그냥 있는다', type: [1, 7] },
      { answer: 'b. 눈치는 채나 말은 꺼내지 않는다', type: [2, 4] },
      { answer: 'c. "오 대박 오늘 머리도 바꾸고 옷도 새로 샀네?"라고 하며 단번에 눈치챈다', type: [0, 3, 6, 5] },
    ]
  },
  {
    q: '8. 연인이 데이트가 끝난 후, 집에 데려다 달라고 한다',
    a: [
      { answer: 'a. 각자 만났던 장소에서 헤어진다.', type: [0, 4] },
      { answer: 'b. 연인이 살고 있는 집의 역이나 정류장까지 데려다준다.', type: [3, 2, 6, 5] },
      { answer: 'c. 집 앞까지 데려다준다.', type: [1, 7] },
    ]
  },
  {
    q: '9. 연인이 데이트가 끝난 후, 집에 데려다 달라고 한다',
    a: [
      { answer: 'a. 각자 만났던 장소에서 헤어진다.', type: [0, 4] },
      { answer: 'b. 연인이 살고 있는 집의 역이나 정류장까지 데려다준다.', type: [3, 2, 6, 5] },
      { answer: 'c. 집 앞까지 데려다준다.', type: [1, 7] },
    ]
  },
]

const infoList = [
  {
    name: 'Your result is Innovation.',
    desc: ''
  },
  {
    name: 'Your result is Emerging Technology.',
    desc: ' '
  },
  {
    name: 'Your result is Information Security.',
    desc: ''
  },
  {
    name: 'Your result is Service Management.',
    desc: ''
  },
  {
    name: 'Your result is Information Technology Operation.',
    desc: ''
  },
  {
    name: 'Your result is Artificial Intelligence.',
    desc: ''
  },
  {
    name: 'Your result is Soft Skill Development.',
    desc: ''
  },
  {
    name: 'Your result is Business Skill Development.',
    desc: ''
  },
  {
    name: 'Your result is Business Networking.',
    desc: ''
  },
]
