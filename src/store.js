
import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations:{

    salvarGenero(params){
        const url = 'https://delivery-60c58-default-rtdb.firebaseio.com/'

        console.log('oi')
        let data = {
            imagem: params.imagem,
            descricao: params.descricao
        }
        let fetchData = {
            method: 'POST',
            body:data,
            Headers: new Headers()
        }
        fetch(url, fetchData).then(()=>{
            console.log('foi')
        }).catch(()=>{
            console.log('Tu é um bosta')
        })
    }
}
})





