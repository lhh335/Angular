#Angularjs
2/7/2017 11:55:20 AM
 
##1.安装引用
在 http://www.bootcdn.cn/ 中搜索 `angular` 下载

    <script src="pathto/angular.js"></script>
##2.简单使用
    <!DOCTYPE html>
    <!-- 这里使用 ng-app 指令  -->
    <html  ng-app="reminder">
      <head>
    <meta charset="utf-8">
    <title></title>
    <script src="angualr.js" charset="utf-8"></script>
      </head>
      <!-- 这里使用 ng-controller -->
      <body ng-controller="mainControler">
    <!-- ng-model指令 会在作用域中的 $scope 上 放置一个 info 的属性  值为input的值 -->
    <input type="text" name="name" value="" ng-model="info">
    <!-- 双花括号中可以写 angular 表达式  下面写法为取出 $scope上的 info 属性的值-->
    <p></p>
      </body>
      <!-- controller的作用域范围在这里结束-->
    </html>
##3.以模块化的方式来开发自己的应用 和 依赖注入
    <!DOCTYPE html>
    <html  ng-app="reminder">
      <head>
    <meta charset="utf-8">
    <title></title>
    <script src="angular.js"></script>
    <script src="index.js"></script>
      </head>
      <body ng-controller="mainControler">
    <table>
      <thead>
      <th>
      <td>姓名</td>
      <td>学号</td>
      <td>性别</td>
      </th>
      </thead>
      <tbody>
      <!-- ng-repeat 指令能从作用的$scopes身上取到数据，帮我们完成渲染-->
      <!-- 他会在每次数据变动的时候帮我们重新渲染 -->
      <tr ng-repeat="v in students">
      <td> </td>
      <td> </td>
      <td> </td>
      </tr>
      <tr>
      <td ng-click="addStudent()">+</td>
      </tr>
      </tbody>
    </table>
      </body>
    </html>

> 

	  // 把我们的应用作用单独的一个模块 和系统中的其他模块解耦
      var reminder = angular.module('reminder',[]);
    
      // 在我们的模块上创建一个控制器  来控制本模块中某个局部的可见数据
      reminder.controller('mainControler',['$scope',function($scope){
    $socpe.students = [
      {id:1001,name:'A',sex:'nan'},
      {id:1002,name:'B',sex:'nv'},
      {id:1003,name:'C',sex:'nan'},
    ]
    $scope.addStudent = function(){
      this.stuents.push({id:Math.random(),name:'new man', sex:'nan'});
    }
      }]);
##4.常用的装饰型指令
装饰性指令用来在 view 和 controler 之间协调运作

[angularjs 概念介绍](http://docs.ngnice.com/api)

[angularjs API](http://docs.ngnice.com/api)

- ng-app
- ng-controller
- ng-repeat // track by $index 可以避免同id属性报错
- ng-model
- `ng-init:`
- `ng-class:`传入一个对象，若对象中的键值为真，则加入对应的键这个类，否则，去掉对应的键那个类
- ng-show
- ng-hide
- `ng-if`：如果其中的值为真，输出此条语句，反之，不输出此条语句
- ng-switch
- ng-[event]
- ng-href
- ng-src
##5.组件型指令
`组件型指令` 用来拆分复杂的html页面

实现`组件化开发` 和一定程度的 `复用`

login.html

    <div id="login">
      <div class="usernam"></div>
      <div class="password"></div>
      <button class="submit">Login</button>
    </div>

index.html

    <!DOCTYPE html>
    <html ng-app="reminder">
      <head>
    <meta charset="utf-8">
    <title></title>
    <script src="angular.js" charset="utf-8"></script>
    <script src="index.js" charset="utf-8"></script>
      </head>
      <body ng-controller = "mainControler">
    <login></login>
      </body>
    </html>
index.js

    var reminder = angular.module('reminder',[]);
    // 在整个模块的各个控制器作用域内  login指令都可用
    reminder.directive('login',[function(){
      // Runs during compile
      return {
    restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
    templateUrl: 'login.html',
    // name: '',
    // priority: 1,
    // terminal: true,
    // scope: {}, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    // template: '<h3>Hello Angular</h3>',
    // replace: true,
    // transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    // link: function($scope, iElm, iAttrs, controller) {
    // }
      };
    }]);
##6.在组件型指令中的link函数中使用jQuery或jqLite
一般推荐在自定义指令的link函数中使用jquery去操作dom元素.

在link函数中操作$scope身上的数据时一定要注意

调用`$scope.$apply()`方法让angular启动脏检查机制来自动刷新页面

调用`$scope.$apply()`方法让angular启动脏检查机制来自动刷新页面

调用`$scope.$apply()`方法让angular启动脏检查机制来自动刷新页面

另外操作文档或者使用定时函数时，需要注入 `$document`, `$timeout` 等服务

angular 内部提供 `angular.elements` 方法,类似于jQuery方法,得到jqLite对象

jqLite对象中的方法:

    [
     "ready()",
     "toString()",
     "eq()",
     "length()",
     "push()",
     "sort()",
     "splice()",
     "data()",
     "inheritedData()",
     "scope()",
     "isolateScope()",
     "controller()",
     "injector()",
     "removeAttr()",
     "hasClass()",
     "css()",
     "attr()",
     "prop()",
     "text()",
     "val()",
     "html()",
     "empty()",
     "removeData()",
     "bind()",
     "unbind()",
     "on()",
     "off()",
     "one()",
     "replaceWith()",
     "children()",
     "contents()",
     "append()",
     "prepend()",
     "wrap()",
     "remove()",
     "detach()",
     "after()",
     "addClass()",
     "removeClass()",
     "toggleClass()",
     "parent()",
     "next()",
     "find()",
     "clone()",
     "triggerHandler()"
    ]
如果项目中不使用jQuery插件，jqLite是很好的操作DOM，绑定事件的选择。

在普通的controller中 也可以这样使用：

	<button type="button" name="button" ng-click="submit($event)"></button>

> 

    $scope.toggletododetail = function($event){
      console.log($event);
      var el = angular.elements() // 得到一个JqLite对象
      console.dir(el);  //查看其中的方法，比jquery少很多
    }

如果想使用jquery,先引入jquery 后引入angular.js,jQuery 会自动覆盖jqLite,随后不用任何配置就可以在代码中使用 $.