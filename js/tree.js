
function generateSeed() {		
  seed = newSeed()
  console.log(seed)
  $("#seed").show()
  document.getElementById("seed").innerHTML = seed
}

var newSeed = function(){
      var b = []
      for (var i = 0; i < 100; i++){
        b.push(Math.floor(Math.random()*100))
      }
      return b
	}

function Leaf(val, addr, prev=null) {
  this.value = val;
  this.left = null;
  this.right = null;
  this.addr = addr;
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


BinarySearchTree.prototype.add = function(val) {
  var root = this.root;
  var runner = root;
  if (!root) {
    this.root = new Leaf(val);
    return;
  }

  var y = 1

  while (runner) {

    if (val < runner.value) {
      if (!runner.left) {
        runner.left = new Leaf(val, runner);
        break;
      } 
      else {
        runner = runner.left;
      }
    } 

    else if (val > runner.value ) {
      if (!runner.right) {
        runner.right = new Leaf(val, runner);
        break;
      } 
      else {
        runner = runner.right;
      }
	}

	else {
		console.log('value already in tree');
    	return;
	}
  }
}
