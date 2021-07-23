# Angular-reminder
#### 1.Starting a project: 
###### *ng new [app name]*
#### 2.Creating new component: 
###### Enter specific folder in console -> ng generate component [name] (ng g c [name])
#### 3.Routing - can be created during project inicialization.
###### There will be const named routes. It is and array of paths like: [{path:'', component: (...) }]
###### To create nested route, a route object must have *children* property, which is another path type object. Remember that the component which do nesting must have its own  *router-outlet*
### 4.Angular state management - *[BASICS](https://coursetro.com/posts/code/151/Angular-Ngrx-Store-Tutorial---Learn-Angular-State-Management)*
### 5.Angular pipes:
###### Pipes are to transform some data by adding *data.prop | pipeName*. (How to write it? Google by yourself)
### 6.Data from API:
###### The best way is to create service responsible for handling data from database using angular http. Then inject it into the component in which we want to use the service.
###### When it comes to displaying async data we can directly display async data using *async* pipe or subscribe to a request and assign data to normal variable.

