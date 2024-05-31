export const ASK_FORMAT = [
  {
    type: "sub",
    textType : "text",
    title: "성함이 어떻게 되시나요?",
    askNum: 0,
    placehold: "ex) 홍길동, 임꺽정",
  },
  {
    type: "sub",
    textType : "text",
    title: "현재 거주하고 계신 곳은 어딘가요?",
    askNum: 0,
    placehold: "ex) 서울 수원 부산",
  },
  {
    type: "sub",
    textType : "number",
    title: "현재 갚아야할 채무는 얼마인가요?",
    askNum: 0,
    placehold: "ex) 500만원",
  },
  {
    type: "mul",
    textType : "none",
    title: "현재 소득활동을 하고 계신가요?",
    askNum: 2,
    placehold: "ex) 500만원",
  },

];
