import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);

const state = {
    users: [
        {
         createdAt: "2021-06-29T21:17:17.114Z",
         name: "Miss Jack Hirthe",
         avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcxkFSFhrsN-TPi6p9fdCPuyt7S4zuGbsp19IkNua1_ELquObTDdFEEtBSqC-QwIIzAeQ&usqp=CAU",
         phoneNumber: "4862532 x55244",
         id: "0"
        },
        {
         createdA: "2021-06-29T21:05:43.724Z",
         name: "Ms. Wm Dickigg",
         avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfd2za9xnBbS69mrQEK2MuCimsBXPiF0go1NnlCRgAIkR64Z1cqnz3xZUKaEuvrbqfReY&usqp=CAU",
         phoneNumber: "320-627-0795 x1260",
         id: "1"
        },
        {
         createdAt: "2021-06-30T00:10:04.148Z",
         name: "Melanie Lehner MD",
         avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSszp_cdV49xjEOZ4mhRQFKC6FnulKZlH4bjQkr3GZ8QkdROFla7Ac5X57ewzm1nhU4k3s&usqp=CAU",
         phoneNumber: "(535) 754-0259 x4289",
         id: "2"
        },
        {
         createdAt: "2021-06-30T12:32:38.130Z",
         name: "Misty Torphy",
         avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNR4XTHUq_ATeAYBrEEpsY6SEr1Sj-eTN5o52pfWnK87SszN_SErpeS3jHqK-vWr8_LQ&usqp=CAU",
         phoneNumber: "845.839.2578",
         id: "3"
        },
        {
         createdAt: "2021-06-30T02:54:04.985Z",
         name: "Delia Spencer",
         avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfd2za9xnBbS69mrQEK2MuCimsBXPiF0go1NnlCRgAIkR64Z1cqnz3xZUKaEuvrbqfReY&usqp=CAU",
         phoneNumber: "699.839.1092 x66403",
         id: "4"
        },
        {
         createdAt: "2021-06-30T00:31:28.983Z",
         name: "Nathan Schmitt",
         avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHja_yTOUMnBh48ytQtU346DMVw24UCWAo_MsKVMHBtqMZmCElfkYJcV3cW2U5J-kX6U8&usqp=CAU",
         id: "5"
        },
        {
         createdAt: "2021-06-29T15:29:56.921Z",
         name: "Eloise Macejkovic ",
         avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZPOHJBPpByMDoR60d0DyZ6BEXGVEb52i3hpA5_evTPdZCwmK3EMuvNJufZ5Rf2UZXxQc&usqp=CAU",
         phoneNumber: "1-961-388-8888",
         id: "6"
        },
        {
         createdAt: "2021-06-29T20:30:51.627Z",
         name: "AnngHianh",
         avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSONSm6lC_n7hcOwYapY-_f-5p-7a1nqJ9UVkK8VI2PkewUqcsoPb8xJZrn0sxFqBWhH7Y&usqp=CAU",
         phoneNumber: "+0256-8195-566",
         id: "7"
        },
        {
         createdAt: "2021-07-01T09:36:51.643Z",
         name: "Acackaa",
         avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1oHpCXOaNotI58aQCL_vIsULHucrTgpn9bktdKrwoSs12Sc5qHo3zYx2hYgZwOhFbxGg&usqp=CAU",
         phoneNumber: "+0231-895-566",
         id: "8"
        },
        {
         createdAt: "2021-07-01T10:19:44.502Z",
         name: "Nichole Terry",
         avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyDRoBVKztdfsa6hgVolCjRTEf93a4VoTgGA&usqp=CAU",
         phoneNumber: "407-781-6525 x8533",
         id: "9"
        },
        {
         createdAt: "2021-07-01T08:40:13.786Z",
         name: "Virginia Kohler",
         avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv3TdxZfD-Co-YiKslkibrVlo6qMzUedYVvylMgT-RvoxteAEE2G8ufxf0uEIStKejYRA&usqp=CAU",
         phoneNumber: "548.663.9773 x4574",
         id:"10"
        },
        {
         createdAt: "2021-06-30T15:48:43.513Z",
         name: "Sara Mitchell",
         avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX7eZqWUj1wGyiTC4WXm2Yn7J1e7fvxZvazS0X8L19n7VnXaiWOqdiS7NCOJTMl8quV6M&usqp=CAU",
         phoneNumber: "(590) 937-5784 x440",
         id: "11"
        },
        {
         createdAt: "2021-07-01T07:59:46.941Z",
         name: "Rudolph O'Conner II",
         avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu1x2ATFM5_0v4VyHEvhXZO_36F1JCq1q8Jh4AsjB063D3R0LvMs15sP-bSVQCuVlHK3Q&usqp=CAU",
         phoneNumber: "1-659-265-6001",
         id: "12"
        },
        {
         createdAt: "2021-06-30T21:20:12.217Z",
         name: "Sylvester Dare",
         avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMQZssbcz69feuSvEBtXjaEk5Jrhk1V-h_Tjx341Co0OlyNFbNqVfTuNOeuufC41crrT4&usqp=CAU",
         phoneNumber: "(481) 473-1562",
         id: "13"
        },
        {
         createdAt: "2021-07-01T01:04:31.086Z",
         name: "William Quigley",
         avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_0XEsmwBjbOjMK0dUk0-3_p3SF4v6Ess1G-RC71gYIfqNaK_N7lfzfoKW0p05b9rMmc&usqp=CAU",
         phoneNumber: "(817) 477-7643 x3399",
         id: "14"
        },
        {
         createdAt: "2021-06-30T21:20:38.035Z",
         name: "Virginia Carter III",
         avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOiOLH_c_CHtS2B7qQUx7FxKcxxsKMBInKao38YANkj7TS-thyn6Xvqqkj75PCzrG80LI&usqp=CAU",
         phoneNumber: "(548) 431-5605 x15153",
         id: "15"
        },
        {
         createdAt: "2021-07-01T19:35:15.236Z",
         name: "Mandy Bauch",
         avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8OA_viB9Vw7MrNmt3TijGWe_qJQKc6oeapT5hLdhiIlXMxWjNz9jI3rDxZymCUWO49po&usqp=CAU",
         phoneNumber: "5673733",
         id:"16"
        }
       ]  
}
const getters = {
    nextID(state) {
        return Number(state.users.slice(-1)[0].id) + 1
      }
}
const actions = {
}
const mutations = {
    deleteUser:(state,user)=>{
        var index = state.users.findIndex(u => u.id == user.id)
        state.users.splice(index,1);
    },
    editUser(state, user) {
        state.users.forEach( arrayItem => {
          if (arrayItem.id == user.id)
            arrayItem = user
        })
      },
      addNewUser(state, newUser) {
        state.users.push(newUser)
      }
}
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})