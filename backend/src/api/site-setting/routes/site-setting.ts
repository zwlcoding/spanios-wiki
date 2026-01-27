export default {
  routes: [
    {
      method: 'GET',
      path: '/site-setting',
      handler: 'site-setting.find',
      config: {
        auth: false,
      },
    },
  ],
};
