$( document ).ready(function() {


// есть массив с объектами - вывести меню
    var menuData = [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'About us',
            href: '/about'
        },
        {
            text: 'Portfolio',
            href: '#',
            items: [
                {
                    text: 'Websites',
                    href: '/portfolio/websites'
                },
                {
                    text: 'Design',
                    href: '/portfolio/design'
                },
                {
                    text: 'SEO',
                    href: '/portfolio/seo'
                }
            ]
        }
    ];
    
    var wrap = $('#jquery_menu');
    $(wrap).attr('id', 'navbarNavDropdown2');
    $(wrap).css('display', 'block');
    $(wrap).addClass('collapse');
    $(wrap).addClass('navbar-collapse');
    $(wrap).append("<nav></nav>");
    var navbar = $(wrap).find('nav');
    
    
    for (var i = 0; i < menuData.length; i++) {
//      $(navbar).append("<li></li>");
//      var elem = $(navbar).find("li");
        $(navbar).append('<li><a>' + menuData[i].text + '</a></li>');
        var subMenu = $(navbar).find("li");
        $(subMenu).append(menuData[i].items);
        var subMenuLink = $(subMenu).find("a");
        $(subMenuLink).attr('href', menuData[i].href);
        console.log();
    }

});