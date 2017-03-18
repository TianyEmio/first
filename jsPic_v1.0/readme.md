图片库一
=====

 关于this
 ------ 
 函数的参数”this”表示<这个a节点> <br/>
 通常的函数调用，有另外一种形式
 func(p1, p2) 等价于
func.call(undefined, p1, p2)

obj.child.method(p1, p2) 等价于
obj.child.method.call(obj.child, p1, p2)
this就是func.call(context, p1, p2)中的context
 ------
 关于return false
 ------
 为某个事件添加了事件处理函数后，当事件发生，相应的JS代码执行。被调用的JS会返回一个值传给那个函数。此例中，返回false，onclick事件处理函数认为事件没有发生。
 
 
