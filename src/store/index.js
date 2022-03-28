import { createStore } from 'vuex';

export default createStore({
  state: {
    data: {
      name: null,
      phone: null,
      email: null,
      description: null,

      seletedCake: null,
      seletedGarnish: null,

      newRequest: {
        name: '',
        phone: '',
        email: '',
        description: '',
      },

      cakes: [
        {
          id: 1,
          name: 'Ferrero Rocher Cake',
          price: 150,
          total: 10,
        },
        {
          id: 2,
          name: 'Kitkat Cake',
          price: 200,
          total: 30,
        },
        {
          id: 3,
          name: 'Mango Cake',
          price: 400,
          total: 20,
        },
        {
          id: 4,
          name: 'Chocolate Cake',
          price: 380,
          total: 3,
        },
        {
          id: 5,
          name: 'Rainbow Cake',
          price: 500,
          total: 50,
        },
      ],
      garnishes: [
        {
          id: 1,
          name: 'Bubble wrap chocolate',
          price: 200,
          total: 5,
        },
        {
          id: 2,
          name: 'Peanut Butter Mousse',
          price: 400,
          total: 9,
        },
        {
          id: 3,
          name: 'Chocolate Pines Cones',
          price: 100,
          total: 10,
        },
        {
          id: 4,
          name: 'Caramel tuile',
          price: 100,
          total: 20,
        },
        {
          id: 5,
          name: 'Carousel',
          price: 700,
          total: 5,
        },
      ],
    },
  },
  getters: {},
  mutations: {
    send(state) {
      state.data.newRequest.name = state.data.name;
      state.data.newRequest.phone = state.data.phone;
      state.data.newRequest.email = state.data.email;
      state.data.newRequest.description = state.data.description;
    },
  },
  actions: {},
  modules: {},
});
