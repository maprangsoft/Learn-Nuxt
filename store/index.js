//ชุดข้อมูล
export const state = () => ({
  counter: 500,
  certificates: [],
});

//เมื่อต้องการเปลี่ยนแปลงข้อมูล
export const mutations = {
  INCREMENT(state) {
    state.counter++;
  },

  //******* ส่วนการเพิ่มข้อมูล ********/
  SET_CERTIFICATE(state, payload) {
    state.certificates = payload;
    // console.log("SET_CERTIFICATE :>> ", state.certificates);
  },

  ADD_CERTIFICATE(state, payload) {
    state.certificates.unshift(payload); //push เพิ่มเข้าไปใน array แรก
  },

  //******* ส่วนการอัพเดทข้อมูล ********/
  UPDATE_CERTIFICATE(state, payload) {
    const item = state.certificates.find(
      (certificate) => certificate.id === payload.id
    ); //ถ้า id ที่ส่งมาตรงกับ id ใน state
    Object.assign(item, payload);
  },

  //******* ส่วนการลบข้อมูล ********/
  DELETE_CERTIFICATE(state, payload) {
    let index = state.certificates.findIndex(
      (certificate) => certificate.id === payload
    );
    state.certificates.splice(index, 1);
  },
};

// เมื่อดึงค่าจาก api
export const actions = {
  //******เมื่อระบบทำงานให้ดึงข้อมูลทันที ********
  async nuxtServerInit({ state, commit }) {
    try {

      const certificates = await this.$axios.$get(
        "https://puanchang-api.puncorp.com/api/certificates"
      );

      if(state.certificates.length === 0){
        commit("SET_CERTIFICATE", certificates.data);
      }

    } catch (error) {
      console.log("error form nuxtServerInit :>> ", error);
    }
  },
};

//เมื่อต้องการ custom ข้อมูล
// export const getters = {
// //
// };
