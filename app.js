var myApp = angular.module('myApp',['ngRoute']);


    myApp.config(function($routeProvider){
        $routeProvider.when('/',{
            templateUrl:'main.html',
            controller:'controller1'
        })
        .when('/portfolio',{
            templateUrl:'portfolio.html',
            controller:'controller2'
        })
        .when('/contact',{
            templateUrl:'contact.html',
            controller:'controllerContato'
        });

    });

    myApp.controller('controller1',['$scope',function($scope){

        
        $scope.person = {
            name:'Carlos Antunes',
            age:26,
            study:[
                {time:'2009-2014',im:'images/inatel.png', des:'Computer Engineering degree'},
                {time:'2012-2013',im:'images/jade.jpg', des:'Academic exchange in engineering (Wilhelmshaven - Germany)'},
                {time:'2015-2016',im:'images/fiap.jpg',des:'MBA in Project Management with PMI Practices'},
                {time:'2016-2018(...)',im:'images/inatel.png',des:'Specialization in Mobile Development and Cloud Computing'}
            ],
            skills:[{im:'images/html.png',des:'Hypertext Markup Language (HTML) is the standard markup language for creating web pages'},
            {im:'images/css.svg',des:'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language.'},
            {im:'images/js.png',des:'JavaScript, often abbreviated as JS, is a high-level, dynamic, weakly typed, object-based, multi-paradigm, and interpreted programming language.'},
            {im:'images/ang.svg',des:'AngularJS is a JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications.'},
            {im:'images/lua.png',des:'Lua is a lightweight, multi-paradigm programming language designed primarily for embedded systems and clients.'},
            {im:'images/corona_logo.png',des:'Corona SDK allows software programmers to build mobile applications for iOS, Android, and Kindle, desktop applications for Windows and OS X, and connected TV applications for Apple TV and Android TV.'}],
            
        }
    }]);

    myApp.controller('controller2',['$scope',function($scope){

        $scope.portfolio=[
            {
            nome:'Salve o Mundo',
            desc:'Salve o Mundo busca ensinar aos seus jogadores conceitos importantes sobre desenvolvimento sustentável, meio ambiente e tecnologias limpas.',
            img:'images/salveomundo.jpg',
            link:'https://play.google.com/store/apps/details?id=br.inatel.gec.rafael.carlos.Teste_Imagem',
            tec:'Lua, corona SDK, composer framework'
            },{
            nome:'Billy The Dog',
            desc:'Billy the Dog é um aplicativo educacional que visa aproximar a família através da tecnologia, educação e diversão.',
            img:'images/billy.png',
            link:'https://play.google.com/store/apps/details?id=br.inatel.gec.rafael.carlos.Composer___framework_livro',
            tec:'Lua, corona SDK, composer framework'
            },{
            nome:'Don\'t Grab the Sandwhich',
            desc:'An interesting game where you have to grab as many sandwiches as you can without letting Big Bob see you! Available for android devices.',
            img:'images/dontgrabthesandwich.png',
            link:'https://play.google.com/store/apps/details?id=br.inatel.gec.rafael.carlos.teste_composer_aprendendo___Copia',
            tec:'Lua, corona SDK, composer framework'
            },{
            nome:'Hit the Crazy Square',
            desc:'Improve your reflexes playing the addictive game Hit the Crazy square. That\'s right. You have 10 seconds to accumulate the largest number of points.',
            img:'images/hitthecrazysquare.png',
            link:'https://play.google.com/store/apps/details?id=br.inatel.gec.rafael.carlos.Hit_the_crazy_square',                
            tec:'Lua, corona SDK, composer framework'
            },{
            nome:'Recicla Mundo',
            desc:'Recicla Mundo é um jogo produzido em 50 horas que visa ensinar às pessoas a separarem seus lixos nas lixeiras corretas, através da coleta seletiva.',
            img:'images/reciclamundo.png',
            link:'https://play.google.com/store/apps/details?id=br.inatel.gec.rafael.carlos.teste_composer_aprendendo',   
            tec:'Lua, corona SDK, composer framework'
            },{
            nome:'Take the Stars',
            desc:'Your job is to help Hero to take all the stars on the sky. But watch out, you can\'t go through any cloud. Available for android devices.',
            img:'images/takethestars.png',
            link:'https://play.google.com/store/apps/details?id=br.inatel.gec.rafael.carlos.Take_the_stars',
            tec:'Lua, corona SDK, composer framework'
            },{
            nome:'O Casamento do Ano',
            desc:'Website and custom mobile games for bride and groom',
            img:'images/casamento.png',
            link:'https://motimprimavera.000webhostapp.com/',
            tec:'Lua, corona SDK, composer framework, bootstrap, html5, javascript'
            }, {
            nome:'Angular Weather App',
            desc:'Angular project which returns info from Weather Api',
            img:'images/max-temp.png',
            link:'https://github.com/carlos-rafael/AngularWeatherApp.git',
            tec:'html5, css, javascript, angularjs'
            }
        ];

    }]);

    myApp.controller('controllerContato', ['$scope',function($scope){
        $scope.contact = {
            email:'carlos.rafael@gec.inatel.br',
            tel:'(35988162038)',
            linkedin:'https://www.linkedin.com/in/carlos-rafael-antunes-de-azevedo-mba-psm-i-capm-04162bbb/',
            git:'https://github.com/carlos-rafael'
        };
    }]);