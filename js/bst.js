


$(document).ready(function(){
	$(".leaf").hide();
});



function generateSeed() {
  $(".leaf").empty()
  $(".stats").empty()		
  seed = newSeed()
  console.log(seed)
  document.getElementById("seed").innerHTML = seed
  grow(seed)
}

var newSeed = function(){
      var b = []
      for (var i = 0; i < 20; i++){
        b.push(Math.floor(Math.random()*100))
      }
      return b
	}

var grow = function(list){
  var bst = new BinarySearchTree();
  for (var i = 0; i < list.length; i++) {
    bst.add(list[i]);
  }
  return bst;
}

function Leaf(val, prev=null, x=1, y=1) {
  this.value = val;
  this.left = null;
  this.right = null;
  this.prev = prev;
  this.x = x;
  this.y = y;
}

function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.add = function(val) {
  var root = this.root;
  var runner = root;
  if (!root) {
    this.root = new Leaf(val);
   	$("#firstrow").show();
	$("#firstrow").text(val);
    return;
  }

  var y = 1

  while (runner) {

    if (val < runner.value) {
      if (!runner.left) {
        runner.left = new Leaf(val, runner, (runner.x*2)-1, runner.y+1 );
        if (runner.left.y > 7) {
        	return;
        }
        var x = runner.left.x
        var y = runner.left.y
        row = rowClasses(y-1)
		$(`#tree :nth-child(${y}) ${row}`).show()
		$(`#tree :nth-child(${y}) :nth-child(${x})`).text(val)
        break;
      } 
      else {
        runner = runner.left;
      }
    } 

    else if (val > runner.value ) {
      if (!runner.right) {
        runner.right = new Leaf(val, runner, runner.x*2, runner.y+1);
        if (runner.right.y > 7) {
        	return;
        }
        var x = runner.right.x
        var y = runner.right.y
        row = rowClasses(y-1)
        $(`#tree :nth-child(${y}) ${row}`).show()
		$(`#tree :nth-child(${y}) :nth-child(${x})`).text(val)
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


function rowClasses(val) {
	var classes = [".firstrow", ".secondrow", ".thirdrow", ".fourthrow", ".fifthrow", ".sixthrow", ".seventhrow"]
	return classes[val].replace(/^"(.+(?="$))"$/, '$1');
}


function toArray(){
	console.log(treeToArray(grow(seed).root))
	document.getElementById("toArray").innerHTML = treeToArray(grow(seed).root)
}


function treeToArray(leaf, runner=leaf){
  if (leaf){
    if(runner.left){
      var left = treeToArray(leaf, runner.left)
    }
    if (runner.right){
      var right = treeToArray(leaf, runner.right)
    }
    var arr = [left, runner.value, right]
    return flatten(arr)
  }
  return "empty"
}  
  
 

// flatten function, for getting rid of those pesky array brackets

function flatten(arr, flat=[]) {
  if (arr < 1) {
    return "too short"
  }
  for (var i = 0; i < arr.length; i++){
    if (arr[i] === undefined || typeof arr[i] === "string"){
      continue;
    }
    if (Array.isArray(arr[i])){
      flatten(arr[i], flat)
    }
    else {
      flat.push(arr[i])
    }
  }
  return flat
}









