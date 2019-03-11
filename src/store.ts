import Vue from 'vue';
import Vuex from 'vuex';
import Products from './data/Products.json';
import Sales from './data/Sales.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dashboardListDef: undefined,

    products: undefined,
    productsListDef: undefined,
    productExtBindings: undefined,

    sales: undefined,
    salesListDef: undefined,
    saleExtBindings: undefined
  },
  mutations: {
    dashboardListDef(state, dashboardListDef) { state.dashboardListDef = dashboardListDef; },

    products(state, products) { state.products = products; },
    productsListDef(state, productsListDef) { state.productsListDef = productsListDef; },
    productExtBindings(state, productExtBindings) { state.productExtBindings = productExtBindings; },

    sales(state, sales) { state.sales = sales; },
    salesListDef(state, salesListDef) { state.salesListDef = salesListDef; },
    saleExtBindings(state, saleExtBindings) { state.saleExtBindings = saleExtBindings; }
  },
  actions: {
    getDashboardListDef({ state, commit }) {
      if (!state.dashboardListDef) {
        // We just emulate a network call by wrapping a timeout in a promise
        return new Promise((resolve) => {
          setTimeout(() => {
            commit('dashboardListDef', []);
            resolve(state.dashboardListDef);
          }, 1000);
        });
      }
      return state.dashboardListDef;
    },
    getProducts({ state, commit }) {
      if (!state.products) {
        // We just emulate a network call by wrapping a timeout in a promise
        return new Promise((resolve) => {
          setTimeout(() => {
            commit('products', Products);
            resolve(state.products);
          }, 1000);
        });
      }
      return state.products;
    },
    getProductsListDef({ state, commit }) {
      if (!state.productsListDef) {
        // We just emulate a network call by wrapping a timeout in a promise
        return new Promise((resolve) => {
          setTimeout(() => {
            commit('productsListDef', []);
            resolve(state.productsListDef);
          }, 1000);
        });
      }
      return state.productsListDef;
    },
    getProductExtBindings({ state, commit }) {
      if (!state.productExtBindings) {
        // We just emulate a network call by wrapping a timeout in a promise
        return new Promise((resolve) => {
          setTimeout(() => {
            commit('productExtBindings', {});
            resolve(state.productExtBindings);
          }, 1000);
        });
      }
      return state.productExtBindings;
    },

    getSales({ state, commit }) {
      if (!state.sales) {
        // We just emulate a network call by wrapping a timeout in a promise
        return new Promise((resolve) => {
          setTimeout(() => {
            commit('sales', Sales);
            resolve(state.sales);
          }, 1000);
        });
      }
      return state.sales;
    },
    getSalesListDef({ state, commit }) {
      if (!state.salesListDef) {
        // We just emulate a network call by wrapping a timeout in a promise
        return new Promise((resolve) => {
          setTimeout(() => {
            commit('salesListDef', []);
            resolve(state.salesListDef);
          }, 1000);
        });
      }
      return state.salesListDef;
    },
    getSaleExtBindings({ state, commit }) {
      if (!state.saleExtBindings) {
        // We just emulate a network call by wrapping a timeout in a promise
        return new Promise((resolve) => {
          setTimeout(() => {
            commit('saleExtBindings', {});
            resolve(state.saleExtBindings);
          }, 1000);
        });
      }
      return state.saleExtBindings;
    }
  }
});
