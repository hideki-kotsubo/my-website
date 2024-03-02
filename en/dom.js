

function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

var myDom = function(){
    var DOM;

    var URLBASE = '/en';
    var header_nav_options = [
        {   name: 'About me', url: URLBASE + '/about-me/' }
        , {   name: 'Clients', url: URLBASE + '/clients/' }
        , {   name: 'Projects', url: URLBASE + '/projects/' }
        , {   name: 'Things I\'m good at', url: URLBASE + '/things-im-good-at/' }
        , {   name: 'Skills & Tools', url: URLBASE + '/skills-and-tools/' }
        , {   name: 'Services Offering', url: URLBASE + '/services-offering/' }
        , {   name: 'Contact Me', url: URLBASE + '/contact-me/' }
    ]


    var footer_nav_options = [
        {   name: 'About me', url: URLBASE + '/about-me/' }
        , {   name: 'Clients', url: URLBASE + '/clients/' }
        , {   name: 'Projects', url: URLBASE + '/projects' }
        , {   name: 'Things I\'m good at', url: URLBASE + '/things-im-good-at/' }
        , {   name: 'Skills & Tools', url: URLBASE + '/skills-and-tools/' }
        , {   name: 'Services Offering', url: URLBASE + '/services-offering/' }
        , {   name: 'Contact Me', url: URLBASE + '/contact-me/' }
    ]
        
    var setup = function(){
        DOM = {}
        DOM.body = document.querySelector('body');

        //DOM.main = document.querySelector('body header nav');
        //DOM.footer = document.querySelector('body header nav');

        header_nav_load();
        footer_load();
    }


    var header_nav_load = function(){

        DOM.header = document.createElement('header');
        DOM.body.prepend(DOM.header);
        
        DOM.header_nav = document.createElement('nav');
        DOM.header_nav.classList.add('topMenu')
        DOM.header.prepend(DOM.header_nav);

        DOM.header_nav_ul = document.createElement('ul');
        DOM.header_nav.appendChild( DOM.header_nav_ul );

        for (var loopFor=0; loopFor<header_nav_options.length; loopFor++){
            var item = header_nav_options[loopFor]
            let DOM_li = document.createElement('li');
            let DOM_a = document.createElement('a');
            DOM_a.innerHTML = item.name;
            DOM_li.appendChild( DOM_a );
            DOM_a.setAttribute('href', item.url);
            
            DOM.header_nav_ul.appendChild( DOM_li );
        }



        DOM.header_sideNavHamburger = document.createElement('div');
        DOM.header_sideNavHamburger.classList.add('sidenavHamburguer');
        DOM.header.append(DOM.header_sideNavHamburger);
        DOM.header_sideNavHamburger.innerHTML = '<input type="checkbox" /><span></span><span></span><span></span>'

        DOM.sideNavLeft = document.createElement('nav');
        DOM.sideNavLeft.classList.add('sideNavLeft');
        DOM.body.append(DOM.sideNavLeft);

        DOM.sideNavLeft_ul = document.createElement('ul');
        DOM.sideNavLeft_ul.classList.add('navMenuLeft');
        DOM.sideNavLeft.append(DOM.sideNavLeft_ul);

        for (var loopFor=0; loopFor<header_nav_options.length; loopFor++){
            var item = header_nav_options[loopFor]
            let DOM_li = document.createElement('li');
            let DOM_a = document.createElement('a');
            DOM_a.innerHTML = item.name;
            DOM_li.appendChild( DOM_a );
            DOM_a.setAttribute('href', item.url);
            
            DOM.sideNavLeft_ul.appendChild( DOM_li );
        }
        

        DOM.header_sideNavHamburger.addEventListener('click',function(event){
            if (DOM.sideNavLeft.classList.contains('show')){
                DOM.sideNavLeft.classList.remove('show')
            } else {
                DOM.sideNavLeft.classList.add('show')
            }
        });
        
        

        var DOM_H1_list = DOM.body.querySelectorAll('h1');
        if (DOM_H1_list.length>0){
            var DOM_PAGE_H1 = DOM_H1_list[0];
            var DOM_PAGE_TITLE = DOM_PAGE_H1.cloneNode(true);
            DOM.header.prepend(DOM_PAGE_TITLE);
        }


    }

    var footer_load = function(){

        DOM.footer = document.createElement('footer');
        DOM.body.append(DOM.footer);
        
        DOM.footer_nav = document.createElement('nav');
        DOM.footer.append(DOM.footer_nav);

        DOM.footer_nav_ul = document.createElement('ul');
        DOM.footer_nav.appendChild( DOM.footer_nav_ul );

        for (var loopFor=0; loopFor<footer_nav_options.length; loopFor++){
            var item = footer_nav_options[loopFor]
            let DOM_li = document.createElement('li');
            let DOM_a = document.createElement('a');
            DOM_a.innerHTML = item.name;
            DOM_li.appendChild( DOM_a );
            DOM_a.setAttribute('href', item.url);
            
            DOM.footer_nav_ul.appendChild( DOM_li );
        }
    }


    return {
        ready: ready
        , setup: setup
    }
}();




ready( myDom.setup );