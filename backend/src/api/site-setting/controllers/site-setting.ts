export default {
  async find(ctx) {
    const data = await strapi.documents('api::site-setting.site-setting').findFirst();
    return data;
  },
};
