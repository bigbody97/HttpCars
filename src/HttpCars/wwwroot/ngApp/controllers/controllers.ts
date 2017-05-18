namespace HttpCars.Controllers {

    export class HomeController {
        public cars;

        constructor(private $http: ng.IHttpService) {
            this.$http.get(`/api/cars`).then((response) => {
                this.cars = response.data;
            });

        }
    }



    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
