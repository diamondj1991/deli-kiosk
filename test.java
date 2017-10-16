EFG

/*
- every leaf to be on the same deapth
- every non-leaf to have the same number of children
*/
public class Node{
    public ArrayList<Node> children;
	Node left;
	Node right;
}


public boolean isBalanced(Node n){
 
    Node top = n;
	Node ref = n;
	
	
    if (n.left.next !=  null && n.right.next != null) {
        return true;
        //traverse back up tree and check right side
    } else
        return false;
}