/**
 * @description 生成统计列表
 * @author 曹志
 */
const Mock = require('mockjs')
const Random = Mock.Random
const getComponentList = require('./getComponentList')

function getStatList(len = 10) {
    const componentList = getComponentList()
    const statList = []

    for (let i = 0; i < len; i++) {

        const stat = {
            _id: Random.id(),
        }
        // 增加各个组件的 id value
        componentList.forEach((c) => {
            const { fe_id, type, props } = c

            switch (type) {
                case 'questionInput':
                    stat[fe_id] = Random.ctitle()
                    break
                case 'questionTextarea':
                    stat[fe_id] = Random.ctitle()
                    break
                case 'questionRadio':
                    stat[fe_id] = Random.ctitle()
                    break
                case 'questionCheckbox':
                    stat[fe_id] = `${props.list[0].text},${props.list[1].text}`
                    break
            }
        })

        statList.push(stat)
    }

    return statList
}

module.exports = getStatList
