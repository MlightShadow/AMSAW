import API from './../../lib/API'

const state = {
    dict: JSON.parse(sessionStorage.getItem("dictstore")) || {}
};
const mutations = {
    updateDict(state, newdict) {
        sessionStorage.setItem('dictstore', JSON.stringify(newdict))
        state.dict = newdict
    }
};

const getters = {
    searchDict: (state) => (param) => {
        return state.dict[param.type][param.code].name
    },
    searchDictArr:(state) => (param) => {
        return state.dict[param.type]
    }

};
const actions = {
    requstDict(context) {
        API.get_dic_listAll().then(res => {
            if (res.code === 0) {
                let newdict = {}
                for (let item of res.data) {
                    if (newdict[item.typeId] === undefined) {
                        newdict[item.typeId] = {}
                    }
                    newdict[item.typeId][item.code] = item
                }
                context.commit('updateDict', newdict)
            }
        });
    }
};

export default {
    state,
    mutations,
    getters,
    actions
}