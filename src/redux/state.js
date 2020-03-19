let state = {
  dialogsPage: {
    dialogs: [
      { name: "Yaroslav", id: "1" },
      { name: "Misha", id: "2" },
      { name: "Roman", id: "3" },
      { name: "Lera", id: "4" },
      { name: "Anastasia", id: "5" }
    ],
    messages: [
      { id: "1", message: "Hi.How are you?" },
      { id: "2", message: "I am fine.Thank you!" },
      { id: "3", message: "I like React" }
    ]
  },

  posts: [
    { id: "1", message: "Hi.Who are you?", likesCount: "13" },
    { id: "2", message: "It is my first post", likesCount: "15" },
    { id: "3", message: "I like it-kamasutra!!", likesCount: "16" },
    { id: "4", message: "Yo. Yo!!!!", likesCount: "11" }
  ]
};

export default state;
