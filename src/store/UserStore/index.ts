import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    username: "",
    IsLogin: false,
  }),
  persist: {
    enabled: true, // 这个配置代表存储生效，而且是整个store都存储
  },
});
