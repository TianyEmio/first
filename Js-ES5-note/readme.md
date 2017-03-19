 JS是弱类型语言，但不代表简单可靠，由此开始简易的JS踩坑指南
 ------
 一、数据类型排雷
 -----
 1.数据类型原始类型：原始类型：number ,string ,boolean ,null .undefined ,对象类型：object（对象：函数，数组，日期，XXX....）<br/>
 2.当字符串与num用+连接，理解为字符串的拼接 ，但是当字符串（如“1”）与数字用-连接，又会理解为数字减法 <br/>
   可以利用这一点来做一些隐式转换，如把字符串string-0，变成数字。把数字num+''（空字符串），变成字符串。<br/>
 3.关于比较：<br/>
   严格等于：a===b ：类型不同，返回false / 类型相同：null===null ，undefined===undefined /但是 NaN（not a number）≠NaN （实际上NaN和什么都不相等）。<br/>
            new Object ≠ new Object （用引用去比较，而不是值） 比如新建对象X，然后X===X是成立的。但是新建数组[1,2]，[1,2]，也是不等的，虽然值和顺序都相同，但他们不是完全相同的对象。同理，同样两个空对象，也不能完全相等<br/>
   等于：a==b ：类型相同时，和严格等于相同 / 类型不同：null==undefined / number==string ：转number 如1=='1.0' true / boolean==? ：转number true-1 false-0 / object == number|string 转对象为基本类型 new String ('hi')=='hi' ture <br/>
   
