// data.js
var default_mind = {
    "meta": {
        "name": "CV_Interview_Array",
        "author": "admin",
        "version": "0.4"
    },
    "format": "node_array",
    "data": [
        /* 根节点 */
        { "id": "root", "isroot": true, "topic": "CV 面试大脑" },

        /* 一级分类 */
        { "id": "deep_learning", "parentid": "root", "topic": "深度学习基础", "direction": "right" },
        { "id": "obj_detection", "parentid": "root", "topic": "目标检测", "direction": "right" },
        { "id": "img_processing", "parentid": "root", "topic": "传统图像处理", "direction": "left" },

        /* 深度学习子项 */
        { "id": "n1", "parentid": "deep_learning", "topic": "Transformer", "data": { "note": "重点：Self-Attention 公式", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Transformer_full.png/300px-Transformer_full.png" } },
        { "id": "n2", "parentid": "deep_learning", "topic": "损失函数", "data": { "note": "Focal Loss 公式与应用" } },

        /* 目标检测子项 */
        { "id": "n3", "parentid": "obj_detection", "topic": "YOLO 系列", "data": { "note": "v5-v11 的演进细节" } },
        { "id": "n4", "parentid": "n3", "topic": "YOLO v8", "data": { "note": "Anchor-free 检测头" } }
    ]
};