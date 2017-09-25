var app = angular.module('myapp');

app.component('nwList', {
    templateUrl: './js/list/list.tpl.html',
    bindings: {
        users: '<',
        onItemClick: '&'
    },
    controller: function() {
        this.itemClicked = function (user) {
            this.onItemClick({user: user});
        };
    }
});