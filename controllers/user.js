// 
// 体验mysql包

// 1 加载mysql包
var mysql = require('mysql');
// 2 创建数据库连接
// 配置数据连接需要的各种信息
var connection = mysql.createConnection({
    host: 'localhost', // 主机
    user: 'root', // 数据库的用户名
    password: '123456', // 数据库密码
    database: 'ithubb' // 数据库的名字
});
// 3 开启连接
connection.connect();
// 4 SQL query(增删改查sql)

// 5 关闭掉

exports.showSignin = (req, res) => {
    res.render("signin.html")
}

exports.handleSignin = (req, res) => {
    res.render("signin.html")
}

exports.showSignup = (req, res) => {

    res.render("signup.html")

}

exports.handleSignup = (req, res) => {
    var body = req.body
    console.log(body);
    // sql有运算能力 把1+1的结果起个名字 叫solution
    // 并没有去查表
    // body name="asdsad" email="asdd" pickname="sdad"
    // 
    var sqlStr = 'INSERT INTO `users` SET ?'
    connection.query(sqlStr, body,
        function(error, results, fields) {
            if (error) throw error;
            // console.log('The solution is: ', results[0].solution);
            // [ RowDataPacket { solution: 2 } ]
            console.log(results); // []
        });
    //{ email: '333@163.com', nickname: '', password: '123456' }
    //     1.1 获取req.body中的表单数据
    //     1.2 验证
    //     格式等是否正确 
    //     数据库中是否有它 mysql
    // 1.3 mysql

    // 1.4 把首页返回到前端

    // res.send("signin")
    // res.send("handleSignup")
}

exports.handleSignout = (req, res) => {
    res.send("handleSignout")
}


// connection.end();



// ctrl + d
// ctrl + shift + ← →
// ctrl+alt + 上下