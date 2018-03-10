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
        var elem = $(navbar).append("<li></li>");
        var menuText = $('<a></a>').html(menuData[i].text); 
        $(elem).append(menuText);
    }

});