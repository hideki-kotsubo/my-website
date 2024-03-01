function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

var domModule = function(){
    var DOM;

    var loadClients = function(){
        var DOM_ul = document.createElement('ul');
        DOM.body.appendChild(DOM_ul);

        for (var loopFor=0; loopFor<DATA_CLIENTS.length; loopFor++){
            var item = DATA_CLIENTS[loopFor];
            var DOM_li = document.createElement('li');
            DOM_ul.appendChild(DOM_li);
            DOM_li.innerHTML = item.name;
            console.log('aaaaaaa')
        }
    }


    var setup = function(){
        DOM = {}
        DOM.body = document.querySelector('body');

        loadClients();
        console.log('aaaa')
    }

    return{
        setup: setup
    }
}();

ready(
    domModule.setup
);