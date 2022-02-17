

/*
1. 第一个接口会返回一个 taskId
2. 通过这个 taskId 可以去另一个接口查询任务结果

- 需求
  - 执行一个异步任务
  - 通过 taskId 每秒去获取结果，成功或者失败都需要执行 UI 的更新，待定的情况就继续轮询
  - 如果超过 30 秒没有得到结果，就按照失败处理
*/

function executeAsyncTask () : Promise< { taskId : string } > {
    return Promise . resolve ( { taskId : " 1 " } );
}

type taskState = " success " | " error " | " pending " ;

function queryTaskResult (taskId : string ) : Promise< { state : taskState } > {
    return Promise . resolve ( { state : " error " } );
}

function updateUI (state : " success " | " error " ) {
// 实现省略
}

function doSomething () {
// TODO: 请编写这个函数的代码
}

// 手写Promise.all