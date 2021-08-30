module.exports = {
  // used by ./services/wpapi to create api url
  blogAPI: process.env.BLOG_API,
  couponAPI: process.env.COUPON_API,
  assetPrefix: process.env.PREFIX,
  site: {
    name: process.env.SITE_NAME,
    logo: process.env.SITE_LOGO,
    favicon: process.env.SITE_FAVICON,
    featuredImage: process.env.SITE_FEATURE_IMAGE,
    couponPageTitle: process.env.COUPON_PAGE_TITLE,
    couponPageDescription: process.env.COUPON_PAGE_DESCRIPTION,
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
