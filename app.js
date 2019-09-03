const media = [
    {
      title: 'Hop on Pop',
      description: "A delightful children's book.",
      type: 'book',
      contributor: 'Dr. Suess',
      showDetail: false,
    },
    {
      title: 'The Joy of Painting',
      description: "Create a world of happy little trees!",
      type: 'DVD',
      contributor: 'Bob Ross',
      showDetail: false
    },
    {
      title: 'Supernatural: The Complete 12th Season',
      description: "A (literally) neverending roadtrip.",
      type: 'DVD',
      contributor: "",
      showDetail: false
    },
    {
      title: 'Planet Earth II',
      description: "Hours of beautiful but heart attack-inducing nature footage",
      type: 'streaming video',
      contributor: 'David Attenborough',
      showDetail: false,
    },
    {
      title: 'Titanic',
      description: "The boat sinks.",
      type: 'DVD',
      contributor: 'James Cameron',
      showDetail: false,
    },
    {
      title: 'The Sirens of Titan',
      description: "Mankind flung its advance agents ever outward, ever outward... it flung them like stones.",
      type: 'book',
      contributor: 'Kurt Vonnegut',
      showDetail: false,
    },
    {
      title: 'Better Call Saul',
      description: "A slow-burning Breaking Bad prequel.",
      type: 'streaming video',
      contributor: '',
      showDetail: false,
    }
  ];

const app = new Vue({
    el: '#media-list',
    data: {
      title: 'Treehouse Public Library',
      mediaList: media,
      type: ''
    },
    methods: {
      toggleDetails: function(index) {
        this.mediaList[index].showDetail = !this.mediaList[index].showDetail;
      },
      filterType: function() {
        this.type = event.target.value;
      }
    },
    computed: {
      uniqueItemsList: function() {
        const newList = [];
        for (let i = 0; i< this.mediaList.length; i++){
          if(newList.indexOf(this.mediaList[i].type) === -1){
            newList.push(this.mediaList[i].type);
          }
        }
        return newList;
      }
    }
  });