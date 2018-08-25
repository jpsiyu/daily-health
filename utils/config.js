const projects = {
    'body': [
        { name: '眼睛运动', desc: '眼睛远眺，转动', time: 120 },
        { name: '脖子运动', desc: '脖子做圆周运动', time: 120 },
        { name: '站立行走', desc: '站立与行走，流动血液', time: 180 },
    ],
    'mental': [
        { name: '冥想', desc: '闭目养神，齐聚丹田，深呼吸', time: 180 },
        { name: '瑜伽', desc: '做瑜伽，舒展身体', time: 180 },
    ],
    'env': [
        { name: '听音乐', desc: '舒缓的音乐让人心情愉快', time: 180 },
        { name: '聊天', desc: '交流是人类深层的需求', time: 180 },
        { name: '吃东西', desc: '健康的食品，补充大脑和身体的能量', time: 180 },
    ],
    'other': [
        { name: '阅读', desc: '好的书籍是灵魂的伴侣', time: 180 },
        { name: '运动', desc: '做喜爱的运动，游泳，打网球，生活不止一个味道', time: 180 },
        { name: '趣味', desc: '做一些你认为有趣的事', time: 180 },
    ]
}

const getConfig = (key) => {
    return projects[key]
}

module.exports = { getConfig }