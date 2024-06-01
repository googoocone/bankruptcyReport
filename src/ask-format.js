export const ASK_FORMAT = [
  {
    type: "sub",
    textType: "text",
    title: "이름을 입력해 주세요.",
    choiceOption: [],
    description: "ex) 홍길동, 임꺽정",
  },
  {
    type: "sub",
    textType: "text",
    title: "현재 거주하고 계신 곳은 어딘가요?",
    choiceOption: [],
    description: "ex) 서울 수원 부산",
  },
  {
    type: "sub",
    textType: "number",
    title: "현재 보유하고 있는 재산",
    choiceOption: [],
    description:
      "부동산, 자동차(중고가격), 보유하고 있는 주식, 전/월세 보증금, 상가 보증금, 예금, 적금, 보험해약환급금, 땅, 건물, 상가 등의 대략적인 금액을 적어주세요.",
  },
  {
    type: "sub",
    textType: "number",
    title: "갚아야할 채무",
    choiceOption: [],
    description:
      "은행 대출, 사채, 개인으로부터 빌린 돈, 카드론, 카드 대출, 물품 대금, 외상 값 등의 대략적인 금액을 적어주세요",
  },
  {
    type: "mul",
    textType: "text",
    title: "현재 소득활동",
    choiceOption: [{ 1: "네" }, { 2: "아니오" }],
    description:
      "현재 소득활동을 하고 계신가요? 아르바이트, 일용직, 보험설계사 등 수입이 발생하면 모두 소득활동을 하고 있다고 볼 수 있습니다.",
  },
  {
    type: "sub",
    textType: "text",
    title: "현재 거주하고 계신 곳은 어딘가요?",
    choiceOption: [],
    description: "ex) 서울 수원 부산",
  },
];
