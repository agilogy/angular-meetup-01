## Structuring big apps

### with AngularJS

[@_sgimeno](http://twitter.com/_sgimeno "Twitter @_sgimeno")

--

- 3D's

- Features


---


## Logical abstraction

--

Services / Factories / Providers

Controllers / Directives / Filters

HTML (partials)


--


Model Layer  


Note: 
scope = glue between the model 


Note:
"Angular makes no restrictions or requirements on the model"

--

- Directives

```
Directive atomic example

```
Directives are a way to teach HTML new tricks. During DOM compilation directives are matched against the HTML and executed. This allows directives to register behavior, or transform the DOM.

--

Model Layer

```
app.service('MyService', function ($http, $q, $angularCacheFactory) {
    var _dataCache = $angularCacheFactory('dataCache', { 
        maxAge: 3600000 // items expire after an hour
    });
    /**
     * @class MyService
     */
    return {
        manipulateData: function (input) {
            var output;
            // do something with the data
            return output;
        },
            
        getDataById: function (id) {
            var deferred = $q.defer();
            if (_dataCache.get(id)) {
                deferred.resolve(_dataCache.get(id));
            } else {
                // Get the data from the server and populate cache
            }
            return deferred.promise;
        }
    };
});
```

---

## Testing

- Unit testing
- E2E testing

Unit tests are great in helping you pinpoint problems, and E2E tests ensure that the whole app works as expected. Each controller, service, filter, and directive should have a set of unit tests. Each feature of your app should have an E2E test.

--

- Unit testing
```
describe( 'AppCtrl', function() {
  describe( 'isCurrentUrl', function() {
    var AppCtrl, $location, $scope;

    beforeEach( module( 'danchiano' ) );

    beforeEach( inject( function( $controller, _$location_, $rootScope ) {
      $location = _$location_;
      $scope = $rootScope.$new();
      AppCtrl = $controller( 'AppCtrl', { $location: $location, $scope: $scope });
    }));

    it( 'should pass a dummy test', inject( function() {
      expect( AppCtrl ).toBeTruthy();
    }));
  });
});
```

--

- E2E Testing

```
describe( 'danchiano', function() {
  var url = '/base/build/index.html';
  
  describe( 'smoke test', function() {

    it( 'initial state', function () {
      // Trigger state change: Load page
      browser().navigateTo(url);

      // Check rendered HTML: Top heading is correct, and ng-view content has correct heading
      expect(element('div#barra-top div.container-fluid a.brand', 'Top bar brand').text()).toContain("D'Anchiano");

      // Check URL partial: /home
      expect(browser().window().hash()).toEqual('/login');
    });

  });
});
```

--

### Caveats

 - Watch expressions
 Keep them short and idempotent

 - Filters
 They are executed at least 2 times per $digest cycle ModelLayer Parsing vs View Parsing
 
 - Lazy loading vs different Apps


---

#### Organization



- YEOMAN / Angular Seed Project / ngBoilerplate

Components
- test
- tpl
- css

--

- ngBoilerplate




---

### Resources

http://blog.manishchhabra.com/2013/09/angularjs-service-vs-factory-with-example/
[@PatrickHeneise GDG Talk](https://speakerdeck.com/patrickheneise/taking-the-leap-of-faith-into-angularjs)



