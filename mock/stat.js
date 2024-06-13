
const { url } = require('koa-router')
const getStatList = require('./data/getStatList')

module.exports = [
    {
        // 答卷列表
        url: '/api/stat/:questionId',
        method: 'get',
        response(ctx) {
            const query = ctx.query
            const pageSize = parseInt(query.pageSize || 10)
            return {
                errno: 0,
                data: {
                    total: 100, // 分页
                    list: getStatList(pageSize)
                }
            }
        }
    },
    // 获取单个组件的统计数据汇总
    {
        url: '/api/stat/:questionId/:componentId',
        method: 'get',
        response() {
            return {
                errno: 0,
                data: {
                    stat: [
                        { name: '选项一', count: 20 },
                        { name: '选项二', count: 10 },
                        { name: '选项三', count: 25 }
                    ]
                }
            }
        }
    }
]