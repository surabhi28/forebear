var myApp = angular.module('webApp', ['ui.router']);

myApp.config(function($stateProvider) {
  var mainState = {
    name: 'main',
    url: '/main',
    templateUrl: 'views/main.html'
  }

  var iosState = {
    name: 'ios',
    url: '/ios',
    templateUrl: 'views/ios.html'
  }

  var androidState = {
    name: 'android',
    url: '/android',
    templateUrl:'views/android.html'
  }

  var webdesignState = {
    name: 'webdesign',
    url: '/webdesign',
    templateUrl: 'views/webdesign.html'
  }

  var sitemapState={
    name:'sitemap',
    url:'/sitemap',
    templateUrl:'views/sitemap.html'
  }

  var webdevelopmentState = {
    name: 'webdevelopment',
    url: '/webdevelopment',
    templateUrl:'views/webdevelopment.html'
  }

  //  var flexsliderState = {
  //   name: 'flexslider',
  //   url: '/flexslider',
  //   templateUrl: 'views/flexslider.html'
  // }

   var aboutState = {
    name: 'about',
    url: '/about',
    templateUrl: 'views/about.html'
  }

  var testimonial1State={
    name:'testimonial1',
    url:'/testimonial1',
    templateUrl :'views/testimonial1.html'
  }
   var testimonial2State={
    name:'testimonial2',
    url:'/testimonial2',
    templateUrl :'views/testimonial2.html'
  }

   var testimonial3State={
    name:'testimonial3',
    url:'/testimonial3',
    templateUrl :'views/testimonial3.html'
  }

  var seoState={
    name:'seo',
    url:'/seo',
    templateUrl :'views/seo.html'
  }

  var privacyPolicyState={
    name:'privacy-policy',
    url:'/privacy-policy',
    templateUrl :'views/privacy-policy.html'
  }

  // var blogOneColState={
  //   name:'blog-one-col',
  //   url:'/blog-one-col',
  //   templateUrl:'views/blog-one-col.html'
  // }


  // var blogTwoColState={
  //   name:'blog-two-col',
  //   url:'/blog-two-col',
  //   templateUrl:'views/blog-two-col.html'
  // }

  var portfolio3State={
    name:'portfolio3',
    url:'portfolio3',
    templateUrl :'views/portfolio3.html'
  }

  var portfolio2State={
    name:'portfolio2',
    url:'portfolio2',
    templateUrl :'views/portfolio2.html'
  }

  var portfolio1State={
    name:'portfolio1',
    url:'portfolio1',
    templateUrl :'views/portfolio1.html'
  }
  
  // var shopState={
  //   name:'shop',
  //   url:'/shop',
  //   templateUrl:'views/shop.html'
  // }

  // var singlePostState={
  //   name :'single-post',
  //   url:'/single-post',
  //   templateUrl:'views/single-post.html'
  // }

  // var singleProjectState={
  //   name:'single-project',
  //   url:'/single-project',
  //   templateUrl:'views/single-project.html'
  // }

  var contactState={
    name:'contact',
    url:'/contact',
    templateUrl:'views/contact.html'
  }



  $stateProvider.state(mainState);
  $stateProvider.state(sitemapState);
  $stateProvider.state(iosState);
  $stateProvider.state(androidState);
  $stateProvider.state(webdesignState);
  $stateProvider.state(webdevelopmentState);
  // $stateProvider.state(flexsliderState);
  $stateProvider.state(aboutState);
  $stateProvider.state(testimonial3State);
  $stateProvider.state(testimonial2State);
  $stateProvider.state(testimonial1State);
  //$stateProvider.state(blogRightSidebarState);
  $stateProvider.state(seoState);
  $stateProvider.state(privacyPolicyState);
  // $stateProvider.state(blogOneColState);
  // $stateProvider.state(blogTwoColState);
  $stateProvider.state(portfolio3State);
  $stateProvider.state(portfolio2State);
  $stateProvider.state(portfolio1State);
  // $stateProvider.state(shopState);
  // $stateProvider.state(singlePostState);
  // $stateProvider.state(singleProjectState);
  $stateProvider.state(contactState);



});