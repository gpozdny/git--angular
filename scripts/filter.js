MyApp.filter('emptyFilter', function(){
    return function(gridItems, showEmpty) {
      var filtered = [];
  
      if(showEmpty){
        return gridItems;
      }
      for (var i = 0; i < gridItems.length; i++) {
        var item = gridItems[i];
        if(item.name != null || item.plan != null || item.fact != null){
          filtered.push(item);
        }
      }
      return filtered;
    }
  });
  