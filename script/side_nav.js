  side_nav = function(){
  //遍历h1 h2重设id
  let idList = 1;
//   $('.main h1').each(function () {
//       $(this).attr('id', idList);
//       idList++;
//   });
  $('.main h2').each(function () {
      $(this).attr('id', idList);
      idList++;
  });
  
  let a = $('.main').html().match(/<h2.*?<\/h2>/g);
  
  for (let i = 0; i < a.length; i++) {
      a[i] = a[i].replace(/id="/g, 'href="#')
      if (a[i].indexOf('h2') != -1) {
      // z = document.createElement('p');
      a[i] = '<li class="pl">' + a[i].replace(/h2/g, 'a') + '</li>'
          // a[i] = z
      } else {
      // z = document.createElement('p');
        //   a[i] = '<li>' + a[i].replace(/h1/g, 'a') + '</li>'
      // a[i] = z
      }
  }
  
  for (let i = a.length - 1; i >= 0; i--){
    $('.sidenav').prepend(a[i]);
  }
  
  // 获取id数组
  for (let i = 0; i < a.length; i++) {
      a[i] = `${a[i]}`.replace(/.*?#(.*)".*/g, '$1')
  }
  
  //页面滚动为导航添加样式
  $(window).scroll(function () {
      for (let i = 0; i < a.length; i++) {
          if ($(window).scrollTop() > $('#' + a[i]).offset().top - 10 || $(this).scrollTop() + $(this).height() == $(document).height()) {
              $('.sidenav').find('li').eq(i).addClass('active').siblings('li').removeClass('active');
              $('.j-bj').css('top', i * 44)
          }
      }
  });
  
  let $root = $('html, body');
  $('.sidenav li a').on("click", function () {
      $root.animate({
          scrollTop: $($.attr(this, 'href')).offset().top - 8
      }, 500);
      return false
  });
}