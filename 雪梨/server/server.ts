import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());

class Course{
    constructor(public id: number,public courseName:string,
                public images:string,
                public task:number,
                public person:number
            ){}
}
const courses = [
    new Course(0,'2016级混合应用开发',
    'http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130',
    2,90),
    new Course(1,'2016级HTML5',
    'http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130',
    2,100),
    new Course(2,'2016级数据结构',
    'http://usercontent.edu2act.cn/media/team/18-09-06/bE6jL98kCfWg3Hij6gyokN.jpg?imageView2/1/w/230/h/130',
    2,95),
    new Course(3,'2016级信息素养实践',
    'http://usercontent.edu2act.cn/media/team/18-09-06/UTjLGPA9oHaKeHMLi9Ko4c.jpg?imageView2/1/w/230/h/130',
    2,108) 
]

class Lcourse{
    constructor(public id:number,
        public img:string,
        public name:string,
        public content:string,
        public courselen:string,
        public people:number
    ){}
}
const lcourses = [
    new Lcourse(0,
        'http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190',
        'Github 开源之旅视频课程第一季：启程','      完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ',
        '课时  14',3735),
    new Lcourse(1,
        'http://usercontent.edu2act.cn/media/cs/15-10-26/JtXNabL6Wt64FGiRBWvE2U.jpg?imageView2/1/w/320/h/190',
        '构建交互丰富的web应用：Javascript','Javascript 是世界上最流行的编程语言。应用Javascript可以构建交互效果丰富的Web应用。Javascript成为了每一个开发人员都知道的语言。',
        '课时  34',21112)
]


class Shequ{
    constructor(
        public id:number,
        public img:string,
        public coursename:string,
        public content:string,
        public name:string,
        public date:string,
        public reader:number,
        public pinglun:number
    ){}
}

const shequ = [
    new Shequ(0,'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg',
     'WEB开发（二）—— 函数','（一）函数三要素函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用函数定义的关键字为function，不能省略，也不要能简写。定义函数有3种形式，相应的调用形式有2种。1．函数声明形式 注： 不需要在函数声明的后面添加一',
    '刘秀梅','2018-10-11 15:10',1200,4),
    new Shequ(1,'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg',
    ' 类定义关键字详解','JAVA类与对象（三）----类定义关键字详解 static 表示静态，它可以修饰属性，方法和代码块。1.static修饰属性（类变量），那么这个属性就可以用类名.属性名来访问，也就是使这个属性成为本类的类变量，为本类对象所共有。这个属性就',
    '3-张馨元 ·','2018-10-09 19:21',34,2),
    new Shequ(2,'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/edrLxidT6BMiGxXjRq39iJ.jpg',
    ' 一个java文件中可包含多个main方法','一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方法，不同类中都可以包含main方法。但是当JVM进行编译时，只',
    '3-张馨元 ·','2018-10-09 19:17',34,2),
    new Shequ(3,'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg',
    ' 数据结构——线性表的经典应用','1. 一元多项式的表示和相加        在数学上，一个一元多项式\(P_{n}(x)\)可升序写成：\(P_{n}(x) = p_{0}+p_{1}x^1+p_{2}x^2+...++p_{n}x^n\)它由n+1个系数唯一确定。因此，',
    '杨伟彬 ·','2018-10-08 14:28',48,0)
];




app.get('/',(req,res)=>{
    res.json(courses);
});
app.get('/api/course',(req,res)=>{
    // res.end(JSON.stringify(courses));
    res.json(courses);
});
app.get('/api/course/:id',(req,res)=>{
    res.json(courses.find((ele)=>ele.id == req.params.id));
});

app.post('/api/course',(req,res)=>{
    console.log(req.body);
    res.json(courses);
});

app.get('/api/ltb',(req,res)=>{
    res.json(courses);
});

app.get('/api/lcourse',(req,res)=>{
    res.json(lcourses);
});

app.get('/api/lcourse/:id',(req,res)=>{
    res.json(lcourses.find((ele)=>ele.id == req.params.id));
});

app.get('/api/shequ',(req,res)=>{
    res.json(shequ);
})




app.listen(8000);