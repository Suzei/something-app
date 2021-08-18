const vm = new Vue ({
  el: "#app",
  data: {
    atividades: {},
    clicado: false,
    showThis: true,
  },

  methods: {
    pegarAtt() {
      const url = "http://www.boredapi.com/api/activity/"
      
      fetch(url)
      .then(r => r.json())
      .then(r => {
        this.atividades = r
        this.clicado = true
        this.showThis = false
      })
    },
  }
})