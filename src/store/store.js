import { createStore } from "vuex";

const store=createStore({
    state: {
        name:'prakash',
        EmpId:786
    },
    getters: {
        getName(state) {
            return state.name;
        },
        getId(state) {
            return state.EmpId;
        },
    },
    mutations: {
        setName(state,newName) {
            state.name=newName;
        },
        setId(state,newEmpId) {
            state.EmpId=newEmpId;
        },
    },
    actions: {
        actCode() {
            return new Promise((resolve,reject)=>{
                fetch('https://api.postalpincode.in/pincode/110').then((res)=>{
                    return res.json();
                }).then((result)=>{
                    resolve(result);
                }).catch((error)=>{
                    reject(error);
                })
            })
        }
            
        
    }
})

export default store