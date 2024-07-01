const rawData = [
  {
    id: "4c08f8e2-d69a-4cfa-9245-b76bdf3588d1",
    question_text: "React JS is developed by?",
    options_type: "DEFAULT",
    options: [
      {
        id: "a8222953-e043-4873-abee-bc5dae13ee51",
        text: "Facebook",
        is_correct: true,
      },
      {
        id: "0d5470e9-915e-400f-b495-930291046216",
        text: "Twitter",
        is_correct: false,
      },
      {
        id: "e0a41ff1-20a7-4f01-b1da-9024a866ce58",
        text: "Microsoft",
        is_correct: false,
      },
      {
        id: "3883c078-d654-4873-ae61-538998324a3f",
        text: "Google",
        is_correct: false,
      },
    ],
  },
  {
    id: "4b38d184-6c53-4fa8-9176-4bba17f6a639",
    question_text:
      "Which of the following outputs can be achieved if the CSS property justify-content with value space-between is applied to the flexbox container with the flex-direction row?",
    options_type: "DEFAULT",
    options: [
      {
        id: "60f03171-c496-4917-aff9-d8ff72d8f0db",
        text: "flex start",
        is_correct: false,
      },
      {
        id: "ac160f7b-4ab3-41c7-ae53-b8e3c7bae941",
        text: "flex center",
        is_correct: false,
      },
      {
        id: "354c825a-3a02-401a-bcc0-3e649104fd1e",
        text: "space between",
        is_correct: true,
      },
      {
        id: "c52215cd-3cd3-4cae-b4c1-18182a4099b9",
        text: "flex end",
        is_correct: false,
      },
    ],
  },
  {
    id: "68c01ea3-0fb2-4c79-bffd-d3dd90ecbf2f",
    question_text:
      "Which of the following is used to initialize the state in React class component?",
    options_type: "SINGLE_SELECT",
    options: [
      {
        id: "784065c5-87be-4d2f-8218-ef974a6b6aba",
        text: "constructor",
        is_correct: "true",
      },
      {
        id: "c57e6bc3-0e10-4132-859b-77afdaa34ed2",
        text: "None of the given options",
        is_correct: "false",
      },
      {
        id: "26429cff-8de0-4810-8d86-510d5bd5f6cc",
        text: "componentDidMount",
        is_correct: "false",
      },
      {
        id: "f9f95dca-51b9-49f0-bf64-167262e23a35",
        text: "render",
        is_correct: "false",
      },
      {
        id: "133b37c2-a17c-48cf-918a-4225c6bd81ac",
        text: "componentWillUnmount",
        is_correct: "false",
      },
    ],
  },
  {
    id: "ed321e23-faa3-451f-a093-9ad826c2e186",
    question_text:
      "Keys help React to identify which items have changed, added, or been removed.",
    options_type: "DEFAULT",
    options: [
      {
        id: "6a978742-9401-47d4-9389-61acc7528d6f",
        text: "False",
        is_correct: "false",
      },
      {
        id: "347de4ec-03ed-4d03-8b63-0c9bd7efb0ef",
        text: "True",
        is_correct: "true",
      },
    ],
  },
  {
    id: "b563e313-05b8-4ba6-a69b-6614bd339f70",
    question_text: "Which of the following are valid about props?",
    options_type: "SINGLE_SELECT",
    options: [
      {
        id: "edb0a112-d101-412d-8e0e-a4efaf0bfe49",
        text: "Props are immutable",
        is_correct: "false",
      },
      {
        id: "cbf24c67-1a2a-4e8b-a3b5-6e9609c1c2cf",
        text: "Props make components reusable",
        is_correct: "false",
      },
      {
        id: "ba6c059e-4712-4a2f-8581-2c01d8c18b63",
        text: "Props are external",
        is_correct: "false",
      },
      {
        id: "66057f24-e3b6-42e8-bde4-5bdf2bd501e5",
        text: "Props are read-only",
        is_correct: "false",
      },
      {
        id: "9b67fa42-caa6-4554-b827-79633f1fbd03",
        text: "All of the above",
        is_correct: "true",
      },
    ],
  },
  {
    id: "f8f9ed4d-0161-4709-8639-e999321f1488",
    question_text:
      "Which of the following is a component life cycle phase in React JS?",
    options_type: "DEFAULT",
    options: [
      {
        id: "e6ddc0f2-d0fe-4c52-8ab5-a3882f6ccb90",
        text: "Mounting",
        is_correct: "false",
      },
      {
        id: "d3b765ac-e5e5-4b21-95a3-bc0e29043b97",
        text: "Updating",
        is_correct: "false",
      },
      {
        id: "14b262e6-e41e-4a37-8f36-7f40231f7941",
        text: "Unmounting",
        is_correct: "false",
      },
      {
        id: "5250cd59-a86b-4303-9c9f-5f5c27d71f13",
        text: "All of the above",
        is_correct: "true",
      },
    ],
  },
  {
    id: "f3b5738d-c73e-40b6-8512-af33e1a9cd4d",
    question_text: "Cookies are stored on the server",
    options_type: "DEFAULT",
    options: [
      {
        id: "efa99bed-dca1-4d86-a9b4-b7f9e513dc30",
        text: "False",
        is_correct: "true",
      },
      {
        id: "16ce1572-9af8-413b-a7a8-1daa16b637e4",
        text: "True",
        is_correct: "false",
      },
    ],
  },
  {
    id: "3c3cc60c-2d4c-4431-978a-fd2cea112f33",
    question_text:
      "Which of the following are the ways to style the React Component?",
    options_type: "SINGLE_SELECT",
    options: [
      {
        id: "274f9472-76a0-4801-844c-1b14fa4b3809",
        text: "CSS Stylesheet",
        is_correct: "false",
      },
      {
        id: "1cd7f117-075c-48e2-a292-acc34a480bcd",
        text: "Styled Components",
        is_correct: "false",
      },
      {
        id: "9159babc-efb3-4ebe-a475-83ba19f7d97c",
        text: "Inline Styling",
        is_correct: "false",
      },
      {
        id: "baded352-f916-4b7c-9630-2c9028bca56b",
        text: "CSS Modules",
        is_correct: "false",
      },
      {
        id: "24585089-83be-4a69-a0a8-e2bd79a04f67",
        text: "All of the above",
        is_correct: "true",
      },
    ],
  },
  {
    id: "02b2e3a5-c997-4fb4-a9b6-54d5636a7a59",
    question_text:
      "Which of the following outputs can be achieved if the CSS property border-style with value dashed is applied to an HTML container element?",
    options_type: "DEFAULT",
    options: [
      {
        id: "5cc0de08-325d-43d6-9654-e0fac9d155f6",
        text: "border solid",
        is_correct: "false",
      },
      {
        id: "85d1588c-d9c4-4440-a147-8edd11bc7fcd",
        text: "border dashed",
        is_correct: "true",
      },
      {
        id: "ee6303e4-53bc-4189-ad77-211448d94b06",
        text: "border none",
        is_correct: "false",
      },
      {
        id: "280bd552-e6cd-41a7-b3bc-71aa16c1354c",
        text: "border dotted",
        is_correct: "false",
      },
    ],
  },
  {
    id: "6eff9f7d-9d80-4e3d-9dbd-95d063554eba",
    question_text: "Which of the following are the CSS Flexbox properties?",
    options_type: "DEFAULT",
    options: [
      {
        id: "5337b15d-6a74-4b20-a5f8-e318bf2999b1",
        text: "margin",
        is_correct: "false",
      },
      {
        id: "2b48b0ae-6a9d-4575-92df-78d19ede2e8c",
        text: "align-items",
        is_correct: "true",
      },
      {
        id: "bda86250-1551-4ba5-a01c-10bae5659455",
        text: "height and width",
        is_correct: "false",
      },
      {
        id: "74498884-ad1f-4af9-a7d8-cb3dbd09cd8d",
        text: "padding",
        is_correct: "false",
      },
    ],
    total: 10,
  },
];

export default rawData;
