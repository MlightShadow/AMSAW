export default {
    state: {
        fbxtp: [],
        fbxtpslt: [],
    },
    getters: {
        stringFbxtp(state) {
            let newMsg = "";
            state.fbxtp.forEach(item => {
                newMsg += item + ",";
            });
            return newMsg.substr(0, newMsg.length - 1);
        },
        stringFbxtpslt(state) {
            let newMsg = "";
            state.fbxtpslt.forEach(item => {
                newMsg += item + ",";
            });
            return newMsg.substr(0, newMsg.length - 1);
        }
    },
    mutations: {
        changeImg(state, { fbxtp, fbxtpslt }) {
            state.fbxtp.push(fbxtp)
            state.fbxtpslt.push(fbxtpslt)
        },
        deleteImg(state, { index }) {
            state.fbxtp.splice(index, 1);
            state.fbxtpslt.splice(index, 1);
        },
        clearImgArr(state) {
            state.fbxtp = []
            state.fbxtpslt = []
        }
    },
    actions: {

    }
}