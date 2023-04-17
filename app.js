let vm = Vue.createApp({
  data() {
    return {
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      perspective: 100,
      check: true,
    };
  },
  methods: {
    rest() {
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
      this.perspective = 0;
    },
    async copy() {
      let text = `transform:${this.styleBox.transform};`;
      await navigator.clipboard.writeText(text);
      alert("copied!");
    },
  },
  computed: {
    styleBox() {
      return {
        transform: `
        perspective(${this.perspective}px)
        rotateX(${this.rotateX}deg)
        rotateY(${this.rotateY}deg)
        rotateZ(${this.rotateZ}deg)
        `,
      };
    },
  },
});
vm.mount("#app");
