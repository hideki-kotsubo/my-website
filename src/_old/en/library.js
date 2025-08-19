


var domNav = function(){
    var DOM;

    var URLBASE = '/_old/en';
    var header_nav_options = [
        {   name: 'About me', url: URLBASE + '/about-me' }
        , {   name: 'Clients', url: URLBASE + '/clients' }
        , {   name: 'Projects', url: URLBASE + '/projects' }
        , {   name: 'Things I\'m good at', url: URLBASE + '/things-im-good-at' }
        , {   name: 'Skills & Tools', url: URLBASE + '/skills-and-tools' }
        , {   name: 'Services Offering', url: URLBASE + '/services-offering' }
        , {   name: 'Contact Me', url: URLBASE + '/contact-me' }  
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

    function ready(fn) {
        if (document.readyState !== 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    return {
        ready: ready
        , setup: setup
    }
};


export {
    domNav
}