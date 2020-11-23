const contacts = [
  {
    nome: 'Genny',
    avatar: 'img/avatar_4.jpg',
    message: [
      {
        textMessage:"Ue Fratm tutt appost?",
        date:'23/11/2020 23:00',
        recived:0
      },
      {
        textMessage:"Bro, tutt appost, semp e solit cos",
        date:"23/11/2020 23:05",
        recived:1
      },
    ]
  },
  {
    nome: 'Mery',
    avatar: 'img/avatar_io.jpg',
    message: [
      {
        textMessage: 'Biò dove stai?',
        date: '22/11/2020 15:00',
        recived: 0
      },
      {
        textMessage:'sto sul corso di Secondigliano tu?',
        date: '22/11/2020 15:15',
        recived: 1
      },
    ]
  },
  {
    nome: 'Silvio Pio',
    avatar: 'img/avatar_3.jpg',
    message: [
      {
        textMessage: 'Ue Fratm o Casertà',
        date: '18/11/2020 00:00',
        recived: 0
      },
      {
        textMessage:'Ue Fratm o Napulign',
        date: '18/11/2020 04:55',
        recived:1
      },
    ]
  },
]

const app = new Vue ({
  el: '#root',
  data: {
    activeContact: 0,
},
});
