namespace HttpCars.Services {

    export class MovieService {
        private MovieResource;

        public listMovies() {
            return this.MovieResource.query();
        }

        constructor($resource: ng.resource.IResourceService) {
            this.MovieResource = $resource('/api/movies');
        }
    }
    angular.module('HttpCars').service('movieService', MovieService);
    export class MyService {

    }
    angular.module('HttpCars').service('myService', MyService);
    }
