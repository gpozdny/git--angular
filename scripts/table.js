MyApp.directive('factplan', function() { 
    return { 
      restrict: 'E', 
      scope: {gridItems:"="}, 
      templateUrl: 'table.html',
      link: function(scope, element, attrs)   {
        // scope.gridItems = [];
        scope.sumOfData = {
            plan: null,
            fact: null
          };
        
        scope.showEmpty = true;
        scope.hideElements = function(){
            
        }
        
        scope.sumDataByfield = function(fieldName) {

          scope.sumOfData[fieldName] = 0;
          for(var i = 0; i < scope.gridItems.length; i++){
            var item = scope.gridItems[i];
            scope.sumOfData[fieldName] += item[fieldName] || 0 ;
          }
          
        };
        
        scope.sumData = function(){
          
          scope.sumDataByfield('plan');
          scope.sumDataByfield('fact');
          
        }
      
        scope.addData = function() {
          
          var newItem = {
            name: null,
            plan: null,
            fact: null
          };
          
          scope.gridItems.push(newItem);
          
        };
        
        scope.removeData = function(index) {
          
          scope.gridItems.splice(index, 1)
          
          scope.sumData();
          
        };

    }
    };
});  