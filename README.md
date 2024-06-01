# Documentation 

## Classes

<dl>
<dt><a href="#Node">Node</a></dt>
<dd><p>Node class for LinkedList</p>
</dd>
<dt><a href="#LinkedList">LinkedList</a></dt>
<dd><p>LinkedList class</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Node">Node</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="Node"></a>

## Node
Node class for LinkedList

**Kind**: global class  
<a name="new_Node_new"></a>

### new Node()
LinkedList constructor

<a name="LinkedList"></a>

## LinkedList
LinkedList class

**Kind**: global class

* [LinkedList](#LinkedList)
    * [new LinkedList()](#new_LinkedList_new)
    * [.checkIfNew(newNode)](#LinkedList+checkIfNew)
    * [.addFirst(num)](#LinkedList+addFirst)
    * [.addLast(num)](#LinkedList+addLast)
    * [.printList()](#LinkedList+printList)
    * [.getLength()](#LinkedList+getLength) Ôçĺ <code>number</code>
    * [.add(index, num)](#LinkedList+add)

<a name="new_LinkedList_new"></a>

### new LinkedList()
LinkedList constructor

<a name="LinkedList+checkIfNew"></a>

### linkedList.checkIfNew(newNode)
Checks if the new node can be the head of the list

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)

| Param | Type | Description |
| --- | --- | --- |
| newNode | [<code>Node</code>](#Node) | The new node to be checked |

<a name="LinkedList+addFirst"></a>

### linkedList.addFirst(num)
Adds a new node at the beginning of the list

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)

| Param | Type | Description |
| --- | --- | --- |
| num | <code>any</code> | The data to be stored in the new node |

**Example**
```js
let list = new LinkedList();
list.addFirst(1); // Adds 1 to the beginning of the list
```
<a name="LinkedList+addLast"></a>

### linkedList.addLast(num)
Adds a new node at the end of the list

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)

| Param | Type | Description |
| --- | --- | --- |
| num | <code>any</code> | The data to be stored in the new node |

**Example**
```js
let list = new LinkedList();
list.addLast(2); // Adds 2 to the end of the list
```
<a name="LinkedList+printList"></a>

### linkedList.printList()
Prints the data of all nodes in the list

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
<a name="LinkedList+getLength"></a>

### linkedList.getLength() Ôçĺ <code>number</code>
Returns the length of the list

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: <code>number</code> - The length of the list  
<a name="LinkedList+add"></a>

### linkedList.add(index, num)
Adds a new node at a specific index in the list

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | The index at which the new node should be added |
| num | <code>any</code> | The data to be stored in the new node |

<a name="Node"></a>

## Node : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | <code>any</code> | The data stored in the node |
| next | [<code>Node</code>](#Node) | The next node in the list |

<a name="new_Node_new"></a>

### new Node()
LinkedList constructor


## JSDoc
jsdoc LinkedList.js -t .\node_modules\docdash\

jsdoc -c .\jsdoc.json

```sh
jsdoc -c .\jsdoc.json .\LinkedList.js
```

```sh
npx jsdoc2md ./LinkedList.js > ./docs/LinkedList.md
```
