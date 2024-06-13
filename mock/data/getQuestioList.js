/**
 * @description 生成问卷列表
 * @author 曹志
 */

const Mock = require('mockjs')
const Random = Mock.Random



function getQuestionList(len = 10, opt = {}) {
    const list = []
    // const arr = new Array(len).fill('')

    Array.from({ length: len }).forEach(() => {
        list.push({
            _id: Random.id(),
            title: Random.ctitle(5, 10),
            isPublished: Random.boolean(),
            answerCount: Random.integer(50, 100),
            createAt: Random.date('yyyy-MM-dd'),
            updateTime: Random.date('yyyy-MM-dd'),
            ...opt
        });
    });
    

    // arr.map(() => list.push({
    //     _id: Random.id(),
    //     title: Random.ctitle(5, 10),
    //     isPublished: Random.boolean(),
    //     answerCount: Random.integer(50, 100),
    //     createAt: Random.date('yyyy-MM-dd'),
    //     updateTime: Random.date('yyyy-MM-dd'),
    //     ...opt
    // }))

    // for (let i = 0; i < len; i++) {
    //     list.push({
    //         _id: Random.id(),
    //         title: Random.ctitle(5, 10),
    //         isPublished: Random.boolean(),
    //         answerCount: Random.integer(50, 100),
    //         createAt: Random.date('yyyy-MM-dd'),
    //         updateTime: Random.date('yyyy-MM-dd'),
    //         ...opt
    //     })
    // }
    return list
}

module.exports = getQuestionList