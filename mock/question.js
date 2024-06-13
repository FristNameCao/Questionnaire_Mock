const Mock = require('mockjs')
const getQuestionList = require('./data/getQuestioList')
const getComponentList = require('./data/getComponentList')
const { url } = require('koa-router')

const Random = Mock.Random

module.exports = [
    {
        // 获取单个问卷信息
        url: '/api/question/:id',
        method: 'get',
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id(),
                    title: Random.ctitle(),
                    desc: "问卷描述",
                    js: "",
                    css: "",
                    isPublished: true,
                    compontList: getComponentList()
                }
            }
        }
    },
    {
        // 创建问卷
        url: '/api/question',
        method: 'post',
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id(),
                }
            }
        }
    },
    {
        // 获取问卷列表
        url: '/api/question',
        method: 'get',
        response(ctx) {
            console.log(ctx.url)
            const { url = '', query = {} } = ctx
            const isDeleted = url.indexOf('isDeleted=true') >= 0
            const isStar = url.indexOf('isStar=true') >= 0
            const pageSize = parseInt(query.pageSize || 10)
            return {
                errno: 0,
                data: {
                    list: getQuestionList(pageSize, { isDeleted, isStar }),
                    total: 100
                }
            }
        }
    },
    {
        // 问卷更新
        url: '/api/question/:id',
        method: 'patch',
        response() {
            return {
                errno: 0,
                // data: {
                //     id: Random.id(),
                // }
            }
        }
    },
    {
        //复制问卷
        url: '/api/question/duplicata/:id',
        method: 'post',
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id(),
                }
            }
        }
    },
    {
        // 彻底批量删除问卷
        url: '/api/question/:id',
        method: 'delete',
        response() {
            return {
                errno: 0,
            }
        }
    }
]