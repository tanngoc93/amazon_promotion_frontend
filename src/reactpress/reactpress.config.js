module.exports = {
  // used by ./services/wpapi to create api url
  assetPrefix: process.env.PREFIX,
  couponAPI: process.env.COUPON_API,
  blogAPI: process.env.BLOG_API,
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
      title: "TIPS & CARE",
      route: "/category/tips-and-care/",
      enable: true,
      isLogo: false
    },
    {
      title: "NUTRITION",
      route: "/category/nutrition/",
      enable: true,
      isLogo: false
    },
    {
      title: "www.TheDogPaws.com",
      route: "/",
      image: process.env.SITE_LOGO,
      enable: true,
      isLogo: true
    },
    {
      title: "DOG SUPPLIES",
      route: "/category/dog-supplies/",
      enable: true,
      isLogo: false
    },
    {
      title: "DOG COUPONS",
      route: "/coupons",
      enable: true,
      isLogo: false
    }
  ]
}
