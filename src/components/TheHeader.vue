<script>
// imports
import { useAuthUserStore } from "@/stores/AuthUserStore";
import { mapState, mapActions } from "pinia";
import CartWidget from "./CartWidget.vue";
import { toRefs, useStorage } from "@vueuse/core";
import { computed, reactive } from "@vue/reactivity";
export default {
  components: { CartWidget },
  setup() {
    const authstore = useAuthUserStore();
    const state = reactive({
      username: computed(() => authstore?.username),
      nickname: computed(() => authstore.nickname),
    });
    const toTwitter = () => {
      authstore.updateData();
    };

    return {
      ...toRefs(state),
      toTwitter,
    };
  },
};
</script>

<template>
  <header
    class="flex items-center justify-between p-6 mb-10"
    style="background-image: url('/images/double-bubble-outline.png')"
  >
    <h1 class="text-4xl font-bold text-gray-700">The Pineapple Stand</h1>
    <div>
      <span class="mr-5" @click="toTwitter"
        >{{ username }}( {{ nickname }} )</span
      >
      <CartWidget class="inline-block" />
    </div>
  </header>
</template>
