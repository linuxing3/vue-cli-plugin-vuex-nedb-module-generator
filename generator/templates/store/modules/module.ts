import { make } from "vuex-pathify";
import Base from "@/store/modules/Base";

import { defaultActivity } from "@/store/Model/BaseModel";

const state: any = {
  name: "activity",
  items: [],
  currentItem: defaultActivity,
  filter: {
    search: "",
    sort: "",
  },
};

const mutations: any = {
  ...make.mutations(state),
  ...Base.mutations,
};

const actions: any = { ...make.actions(state), ...Base.actions };

const getters: any = { ...make.getters(state), ...Base.getters };

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};