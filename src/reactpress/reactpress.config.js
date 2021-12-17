module.exports = {
  // used by ./services/wpapi to create api url
  blogAPI: "",
  couponAPI: "https://api.toocoolcats.com/api/v1",
  assetPrefix: "/",
  site: {
    name: "name",
    logo: "",
    favicon: "",
    featuredImage: "",
    couponPageTitle: "title",
    couponPageDescription: "desc",
  },
  mainMenus: [
    {
      title: "www.TooCoolCats.com",
      route: "https://toocoolcats.com/",
      image: process.env.SITE_LOGO,
      enable: true,
      isLogo: true
    }
  ]
}
