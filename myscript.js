angular.module('myapp', [])
    .controller('MainController', ['$scope', function($scope) {
        $scope.users = [
            {"name":"taguchi", "score":52.22},
            {"name":"tanaka", "score":38.22},
            {"name":"sakai", "score":52.22},
            {"name":"akasi", "score":38.22},
            {"name":"takeuchi", "score":52.22},
            {"name":"takeda", "score":38.22},
            {"name":"nakayama", "score":52.22},
            {"name":"takeda", "score":38.22},
            {"name":"yamadani", "score":11.11}
        ];
        $scope.addUser = function() {
        };
    }])
    .controller('UserItemController', ['$scope', function($scope) {
        $scope.increment = function() {
            $scope.user.score++;
        };
    }]);