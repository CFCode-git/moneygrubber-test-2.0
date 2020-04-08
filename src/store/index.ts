import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import {defaultExpenseTags} from '@/defaultTags';
import createId from '@/lib/createId';

Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    recordList: [],
    tagList: [],
  } as RootState,
  mutations: {
    fetchTagList(state) {
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '0') || defaultExpenseTags;
      // console.log(state.tagList);
    },
    addTag(state, payload: { name: string; value: string }) {
      const {name, value} = payload;
      const nameList = state.tagList.map(item => item.name);
      if (nameList.indexOf(name) >= 0) {
        window.alert('不能添加相同标签');
      } else {
        state.tagList.push(payload);
        store.commit('saveTag');
      }
    },
    saveTag(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
    fetchRecordList(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord(state, record) {
      const record2: RecordItem = clone(record);
      record2.createdAt = new Date().toISOString();
      record2.id = createId();
      state.recordList.push(record2);
      store.commit('saveRecord');
    },
    saveRecord(state) {
      window.localStorage.setItem('recordList',
        JSON.stringify(state.recordList));
    },
    updateRecord(state, payload: { id: number; record: RecordItem }) {
      const {id, record} = payload;
      for(let i=0; i<state.recordList.length; i++) {
        if(state.recordList[i].id === id){
          state.recordList[i] = record;
        }
      }
      store.commit('saveRecord')
    },
    removeRecord(state,id: number){
      for(let i=0; i<state.recordList.length; i++){
        if(state.recordList[i].id === id){
          state.recordList.splice(i,1);
          store.commit('saveRecord')
        }
      }
    }
  }
});

export default store;