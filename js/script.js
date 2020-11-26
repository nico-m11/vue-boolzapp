const app = new Vue ({
  el: '#root',
  data: {
    contacts:  [
      {
        nome: 'Genny Durante',
        avatar: 'img/avatar_4.jpg',
        lastSeen: 'Attivo oggi alle 15:00',
        message: [
          {
            textMessage:"Ciao Genny come stai?",
            date:'23/11/2020 23:00',
            type: 'sent'
          },
          {
            textMessage:"Ciao Nico sto una favola e tu?",
            date:"23/11/2020 23:05",
            type: 'recived'
          },
        ]
      },
      {
        nome: 'Mery Mallardo',
        avatar: 'img/avatar_io.jpg',
        lastSeen: 'Attivo oggi alle 18:00',
        message: [
          {
            textMessage: 'Hey non ti fai vedere più, che fine hai fatto?',
            date: '22/11/2020 15:00',
            type: 'sent'
          },
          {
            textMessage:'sono impegnata con il lavoro',
            date: '22/11/2020 15:15',
            type: 'recived'
          },
        ]
      },
      {
        nome: 'Silvio Pio Nuzzo',
        avatar: 'img/avatar_3.jpg',
        lastSeen: 'Attivo ieri alle 15:00',
        message: [
          {
            textMessage: 'Quando ci prendiamo un Drink',
            date: '18/11/2020 00:00',
            type: 'sent'
          },
          {
            textMessage:'anche adesso!',
            date: '18/11/2020 04:55',
            type: 'recived'
          },
        ]
      },
      {
        nome: 'Antonio Concilio',
        avatar: 'img/avatar_7.jpg',
        lastSeen: 'Attivo oggi alle 16:00',
        message: [
          {
            textMessage: "Quando posso portare l'auto a lavare?",
            date: '18/11/2020 12:00',
            type: 'sent'
          },
          {
            textMessage:'vieni domani che sono più libero',
            date: '18/11/2020 12:15',
            type: 'recived'
          },
        ]
      },
    ],
    activeContact: null,
    textInput: '',
    searchInput: '',
    filteredContact: [],
    currentContact: null,
},
  created: function () {
  this.activeContact = this.contacts[0];
  this.filteredContact = this.contacts;
},
  methods: {
    setActiveContact: function (contact) {
      this.activeContact = contact;
    },
    sent: function () {
      this.activeContact.message.push({
        textMessage: this.textInput,
        type: 'sent',
        date: '24/11/2020 15:00'
      })
      this.textInput= '';
      setTimeout(this.recived, 5000);
    },
    recived: function () {
      this.activeContact.message.push({
        textMessage: 'Perfetto',
        type: 'recived',
        date: '24/11/2020 15:05'
      })
    },
    searchName: function () {
         this.filteredContact = this.contacts.filter(
           (contact) => contact.nome.toLowerCase().includes(this.searchInput.toLowerCase())
        );
    },
  },
  //computed: {
  /*searchName: function () {
    if (this.searchInput.length > 0) {
      return this.contacts.filter((element) => {
        return element.nome.toLowerCase().includes(this.searchInput.toLowerCase());
      })
    } else {
      return this.contacts;
    }
  }*/
  //},
});
