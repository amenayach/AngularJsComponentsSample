var app = angular.module('myapp');

app.component('nwListItem', {
    templateUrl: './js/item-list/item-list.tpl.html',
    bindings: {
        user: '=',
        onClick: '&'
    },
    controller: function() {
      this.itemClicked = function () {
        this.onClick({user: this.user});
      };
    }
});