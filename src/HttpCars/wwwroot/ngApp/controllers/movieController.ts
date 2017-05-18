namespace HttpCars.Controllers {

    export class MovieController {
        public movies;

        constructor(private $http: ng.IHttpService) {
            this.$http.get(`/api/movies`).then((response) => {
                this.movies = response.data;
            })

        }
    }

}
