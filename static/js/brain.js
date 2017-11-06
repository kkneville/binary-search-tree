
// var babble = require('babble');
// var newtree = babble.babbler('newtree')
// var fs = require('fs');
var tree


function generateSeed() {		
  seed = newSeed()
  // console.log(seed)
  $("#seed").show()
  document.getElementById("seed").innerHTML = seed
  tree = grow(seed)
  // console.log(tree)
  // console.log(csvAddresses)
  $.post({ 
      url: "http://localhost:8000/csv/brain", 
      data: { "addresses": csvAddresses}, 
      success: function(data){ 
        console.log("success")
      }, 
      dataType: "json"
  });
}

var newSeed = function(){
      var b = []
      for (var i = 0; i < 10; i++){
        b.push(Math.floor(Math.random()*100))
      }
      return b
}

function Leaf(val, prev=null) {
  this.value = val;
  this.left = null;
  this.right = null;
  this.addr = "root";
  this.prev = prev;
}

function BinarySearchTree() {
  this.root = null;
}


var grow = function(list){
  var bst = new BinarySearchTree();
  for (var i = 0; i < list.length; i++) {
    bst.add(list[i]);
  }
  return bst;
}

var csvAddresses = ""

BinarySearchTree.prototype.add = function(val) {
  
  var root = this.root;
  
  var runner = root;
  if (!root) {
    this.root = new Leaf(val);
    csvAddresses += "id,value, /n root, "
    return;
  }

  var y = 1

  var addr = ""

  while (runner) {

    if (val < runner.value) {
      if (!runner.left) {
        addr += ".left"
        runner.left = new Leaf(val, runner);
        runner.left.addr += addr + ", "
        csvAddresses += runner.left.addr
        // console.log("Testing adding: ", runner.left.addr)
        addr = ""
        break;
      } 
      else {
        runner = runner.left;
        addr += ".left";
        // console.log(addr)
      }
    } 

    else if (val > runner.value ) {
      if (!runner.right) {
        addr += ".right"
        runner.right = new Leaf(val, runner);
        runner.right.addr += addr + ", "
        csvAddresses += runner.right.addr
        addr = ""
        break;
      } 
      else {
        runner = runner.right;
        addr += ".right";
      }
	}

	else {
		console.log('value already in tree');
    	return;
	}
  }
}






// var addresses = []

// var csvAddresses = function(tree){
//   runner = tree.root
//   addresses.push(runner.addr)
//   while (runner){
//     if (runner.right){
//       runner = runner.right;
//       addresses.push(runner.addr);
//     }
//     if (runner.left){
//       runner = runner.left;
//       addresses.push(runner.addr);
//     }
//   }
//   console.log(addresses)
//   return   
// }



// function treeToArray(leaf, runner=leaf){
//   if (leaf) {
//       if(runner.left) {
//         fs.write("/csv/brain.csv", runner.left.addr, "a" )
//         leaf = runner.left
//         var left = treeToArray(leaf, runner.left)        
//       }
//       if (runner.right) {
//         fs.write("/csv/brain.csv", runner.right.addr, "a" )
//         leaf = runner.right
//         csvAddresses += ", " + runner.right.addr
//         var right = treeToArray(leaf, runner.right)
//       }
//       var arr = [left, runner.value, right]
//       console.log(csvAddresses)
//       return csvAddresses
//   }
//   return "empty"
// }  
  

        

// newtree.listen(/self/)
// .tell (function() {
//   return tree
// })



