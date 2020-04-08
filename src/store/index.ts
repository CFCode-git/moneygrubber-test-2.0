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
      record2.id = createId().toString();
      state.recordList.push(record2);
      store.commit('saveRecord');
    },
    saveRecord(state) {
      window.localStorage.setItem('recordList',
        JSON.stringify(state.recordList));
    },
    updateRecord(state, payload: { id: string; tag: { name: string; value: string }; notes: string; type: string; amount: number; createdAt: string }) {
      const {id, amount, notes, createdAt} = payload;
      const idList = state.recordList.map(item => item.id);
      if (idList.indexOf(id) >= 0) {
        const record = state.recordList.filter(item => item.id === id)[0];
        console.log(createdAt);
        console.log(amount);
        console.log(notes);
        // record.notes = notes;
        // record.amount = amount;
        // record.createdAt = createdAt;
        store.commit('saveRecord');
      }
    }
  }
});

export default store;