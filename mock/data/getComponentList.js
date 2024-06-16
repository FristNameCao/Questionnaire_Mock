/**
 * @description 组件列表
 * @author 曹志
 */
const Mock = require('mockjs')
const Random = Mock.Random

function getComponentList() {
    return [
        {
            // info
            fe_id: "c1", // 注意，由于统计页，左侧和中间需要数据完全一致，所以要写死fe_id，不能用Random.id()
            type: "questionInfo", // 组件类型，不能重复，前后端统一好
            title: "问卷信息",
            isHidden: false,
            isLocked: false,
            props: {
                title: "问卷标题",
                desc: "问卷描述"
            }
        },
        // Title
        {
            fe_id: "c2",
            type: "questionTitle",
            title: "标题",
            isHidden: false,
            isLocked: false,
            props: {
                text: "个人信息调研",
                level: 1,
                isCenter: false
            }
        },
        {
            // 输入框 Input
            fe_id: "c3",
            type: "questionInput",
            title: "输入框1",
            isHidden: false,
            isLocked: false,
            props: {
                title: "输入你的姓名",
                placeholder: "请输入...",
            }
        },
        {
            // 输入框
            fe_id: "c4",
            type: "questionInput",
            title: "输入框2",
            isHidden: false,
            isLocked: false,
            props: {
                title: "输入你的电话",
                placeholder: "请输入...",
            }
        },
        {
            // 段落
            fe_id: "c5",
            type: "questionParagraph",
            title: "段落",
            isHidden: false,
            isLocked: false,
            props: {
                text: "一行段落",
                isCenter: false
            }
        },
        {
            // Textarea
            fe_id: "c6",
            type: "questionTextarea",
            title: "多行输入",
            isHidden: false,
            isLocked: false,
            props: {
                title: "你的爱好",
                placeholder: "请输入...",
            }
        },
        {
            // Radio
            fe_id: "c7",
            type: "questionRadio",
            title: "单选",
            isHidden: false,
            isLocked: false,
            props: {
                title: "单选标题",
                isVertical: false,
                options: [
                    {
                        value: "item1",
                        text: "选项1"
                    },
                    {
                        value: "item2",
                        text: "选项2"
                    },
                    {
                        value: "item3",
                        text: "选项3"
                    },
                ],
                value: "",
                placeholder: "请输入...",
            }
        },
        {
            // Checkbox
            fe_id: "c8",
            type: "questionCheckbox",
            title: "多选",
            isHidden: false,
            isLocked: false,
            props: {
                title: "多选",
                isVertical: false,
                list: [
                    {
                        value: "item1",
                        text: "选项1"
                    },
                    {
                        value: "item2",
                        text: "选项2"
                    },
                    {
                        value: "item3",
                        text: "选项3"
                    },
                ],
            }
        }
    ]
}

module.exports = getComponentList