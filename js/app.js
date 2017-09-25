var app = angular.module('myapp', []);

app.directive('atDir', function () {

    var res = {
        scope: {
            ngModel: '='
        },
        link: function (scope, elem, attrs, ctrls) {

            console.log(scope.ngModel);

        }
    };

    return res;

});

app.controller('mainCtrl', function ($scope) {

    var vm = this;

    vm.data = {
        name: 'Tester',
        id: 1
    };

    vm.users = [{
        firstname: 'Test1',
        lastname: 'User1'
    },
    {
        firstname: 'Test2',
        lastname: 'User2'
    },
    {
        firstname: 'Test3',
        lastname: 'User3'
    }];

    vm.itemClicked = function (user) {
        console.log(user);
    };

});