var default_mind = {
    "meta": {
        "name": "CV_Interview_Array",
        "author": "admin",
        "version": "0.4"
    },
    "format": "node_array",
    "data": [
        {
            "id": "root",
            "topic": "计算机视觉",
            "expanded": true,
            "isroot": true,
            "background-image": ""
        },
        {
            "id": "b8d722401674f4c2",
            "topic": "核心任务",
            "expanded": true,
            "parentid": "root",
            "direction": "right",
            "note": ""
        },
        {
            "id": "b8d87cc054d921b2",
            "topic": "图像分类",
            "expanded": true,
            "parentid": "b8d722401674f4c2",
            "note": ""
        },
        {
            "id": "b8d892f2a642b62a",
            "topic": "常用网络模型",
            "expanded": true,
            "parentid": "b8d87cc054d921b2",
            "note": ""
        },
        {
            "id": "b9cc8946d16e5307",
            "topic": "LeNet-5(1998)",
            "expanded": true,
            "parentid": "b8d892f2a642b62a",
            "note": "第一个产生实际商业价值（支票识别）的卷积网络。https://github.com/Pinery-lee/dl-interview-map/blob/main/src/Lenet_5_1998.ipynb"
        },
        {
            "id": "b9cee1ca42f28472",
            "topic": "结构",
            "expanded": true,
            "parentid": "b9cc8946d16e5307",
            "note": ""
        },
        {
            "id": "b9cf305c0e44ecbe",
            "topic": "&nbsp;",
            "expanded": true,
            "parentid": "b9cee1ca42f28472",
            "note": "https://github.com/Pinery-lee/dl-interview-map/blob/main/src/Lenet_5_1998.ipynb",
            "background-image": "imgs/LeNet-5结构.png",
            "width": 168,
            "height": 170
        },
        {
            "id": "b9cee1e043d98cb7",
            "topic": "张量形状变化",
            "expanded": true,
            "parentid": "b9cc8946d16e5307",
            "note": "[B, 1, 32, 32]→[B, 6, 28, 28]→[B, 6, 14, 14]→[B, 16, 10, 10]→[B, 16, 5, 5]→[B, 120]→[B, 84]→[B, 10]"
        },
        {
            "id": "ba17727286937201",
            "topic": "意义",
            "expanded": true,
            "parentid": "b9cc8946d16e5307",
            "note": ""
        },
        {
            "id": "ba1774e17a978605",
            "topic": "深度学习火种，定义了 CNN 的“标准范式”",
            "expanded": true,
            "parentid": "ba17727286937201",
            "note": "卷积 -> 非线性激活 -> 池化"
        },
        {
            "id": "b9cc89616200dd03",
            "topic": "AlexNet(2012)",
            "expanded": true,
            "parentid": "b8d892f2a642b62a",
            "note": "https://github.com/Pinery-lee/dl-interview-map/blob/main/src/AlexNet_2012.ipynb"
        },
        {
            "id": "ba179e0096567514",
            "topic": "结构",
            "expanded": true,
            "parentid": "b9cc89616200dd03",
            "note": ""
        },
        {
            "id": "ba17a42910814edd",
            "topic": "&nbsp;",
            "expanded": true,
            "parentid": "ba179e0096567514",
            "note": "原始版本 第一层卷积的96个卷积核被放在了两个GPU上。pytorch实现版本中，将第一层的卷积核数量从 96 减少到了 64。这不仅是因为 64 是 2 的幂（对 GPU 计算更友好），也是为了在保持准确率的同时减少参数量。PyTorch 版通常配合 padding=2 使用，这使得 224×224 的图像经过计算后，尺寸变化更加规整。",
            "background-image": "imgs/AlexNet结构.png",
            "width": 124,
            "height": 170
        },
        {
            "id": "ba179e151e386525",
            "topic": "张量形状变化",
            "expanded": true,
            "parentid": "b9cc89616200dd03",
            "note": "原图[B, 3, 224, 224]→卷积[B, 64, 55, 55]→最大池化[B, 64, 27, 27]→卷积[B, 192, 27, 27]→最大池化[B, 192, 13, 13]→卷积[B, 384, 13, 13]→卷积[B, 256, 13, 13]→卷积[B, 256, 13, 13]→平均池化[B, 256, 6, 6]→Dropout[B, 256*6*6]→全连接层[B, 4096]→全连接层[B, 4096]→全连接层[B, 1000]"
        },
        {
            "id": "ba179e2210552290",
            "topic": "意义",
            "expanded": true,
            "parentid": "b9cc89616200dd03",
            "note": ""
        },
        {
            "id": "ba1d7b901b3b2a9e",
            "topic": "深度学习的开端",
            "expanded": true,
            "parentid": "ba179e2210552290",
            "note": ""
        },
        {
            "id": "ba1d85838847b2ad",
            "topic": "验证了“深度”是提升性能的关键",
            "expanded": true,
            "parentid": "ba1d7b901b3b2a9e",
            "note": "创新点：\nReLU 激活函数： 取代了传统的 Sigmoid，解决了梯度消失问题，大幅提升训练速度。\nDropout： 引入随机失活机制，有效缓解了深层网络的过拟合问题。\nGPU 加速： 首次使用两块 GTX 580 显卡并行训练。"
        },
        {
            "id": "b9cc897151247004",
            "topic": "VGGNet(2014)",
            "expanded": true,
            "parentid": "b8d892f2a642b62a",
            "note": ""
        },
        {
            "id": "b9cc89826abaa013",
            "topic": "新知识点",
            "expanded": true,
            "parentid": "b8d892f2a642b62a",
            "note": ""
        },
        {
            "id": "b8d892dca5dbd8e9",
            "topic": "常用数据集",
            "expanded": true,
            "parentid": "b8d87cc054d921b2",
            "note": ""
        },
        {
            "id": "b8d8954428c9a33c",
            "topic": "ImageNet",
            "expanded": true,
            "parentid": "b8d892dca5dbd8e9",
            "note": ""
        },
        {
            "id": "b8d87ccbd6032e0f",
            "topic": "目标检测",
            "expanded": true,
            "parentid": "b8d722401674f4c2",
            "note": ""
        },
        {
            "id": "b8d885a94b349e13",
            "topic": "回归框预测",
            "expanded": true,
            "parentid": "b8d87ccbd6032e0f",
            "note": ""
        },
        {
            "id": "b8d885bcb1438138",
            "topic": "实例分割",
            "expanded": true,
            "parentid": "b8d87ccbd6032e0f",
            "note": ""
        },
        {
            "id": "b8d8a64572a184ae",
            "topic": "一阶段",
            "expanded": true,
            "parentid": "b8d885bcb1438138",
            "note": ""
        },
        {
            "id": "b8d8ac04ef27c313",
            "topic": "yolo系列",
            "expanded": true,
            "parentid": "b8d8a64572a184ae",
            "note": ""
        },
        {
            "id": "b8d8ad346740f05f",
            "topic": "SSD",
            "expanded": true,
            "parentid": "b8d8a64572a184ae",
            "note": ""
        },
        {
            "id": "b8d8a653012a32c6",
            "topic": "二阶段",
            "expanded": true,
            "parentid": "b8d885bcb1438138",
            "note": ""
        },
        {
            "id": "b8d8b0796fe4fb4f",
            "topic": "Faster R-CNN",
            "expanded": true,
            "parentid": "b8d8a653012a32c6",
            "note": ""
        },
        {
            "id": "b8d8b082589a5740",
            "topic": "新知识点",
            "expanded": true,
            "parentid": "b8d8a653012a32c6",
            "note": ""
        },
        {
            "id": "b8d8a65e87a49808",
            "topic": "Transformer-based",
            "expanded": true,
            "parentid": "b8d885bcb1438138",
            "note": ""
        },
        {
            "id": "b8d8b742437d7de8",
            "topic": "DETR",
            "expanded": true,
            "parentid": "b8d8a65e87a49808",
            "note": ""
        },
        {
            "id": "b8d8b74ac305f871",
            "topic": "Mask2former",
            "expanded": true,
            "parentid": "b8d8a65e87a49808",
            "note": ""
        },
        {
            "id": "b8d88816c78a8042",
            "topic": "语义分割",
            "expanded": true,
            "parentid": "b8d722401674f4c2",
            "note": ""
        },
        {
            "id": "b8d8bbe9358d028b",
            "topic": "小模型",
            "expanded": true,
            "parentid": "b8d88816c78a8042",
            "note": ""
        },
        {
            "id": "b8d8c5403c51ec66",
            "topic": "Unet",
            "expanded": true,
            "parentid": "b8d8bbe9358d028b",
            "note": ""
        },
        {
            "id": "b8d8c5522a117679",
            "topic": "Deeplab",
            "expanded": true,
            "parentid": "b8d8bbe9358d028b",
            "note": ""
        },
        {
            "id": "b8d8c5a1a96cb43e",
            "topic": "Mask R-CNN",
            "expanded": true,
            "parentid": "b8d8bbe9358d028b",
            "note": ""
        },
        {
            "id": "b8d8c5aca04d6de6",
            "topic": "新知识点",
            "expanded": true,
            "parentid": "b8d8bbe9358d028b",
            "note": ""
        },
        {
            "id": "b8d8bbf575a74226",
            "topic": "大模型",
            "expanded": true,
            "parentid": "b8d88816c78a8042",
            "note": ""
        },
        {
            "id": "b8d8cb6c94a801db",
            "topic": "SAM系列",
            "expanded": true,
            "parentid": "b8d8bbf575a74226",
            "note": ""
        },
        {
            "id": "b8d8cb7694dcbb40",
            "topic": "DINO系列",
            "expanded": true,
            "parentid": "b8d8bbf575a74226",
            "note": ""
        },
        {
            "id": "b8d8cb8c1b9e9c57",
            "topic": "新知识点",
            "expanded": true,
            "parentid": "b8d8bbf575a74226",
            "note": ""
        },
        {
            "id": "b8d8bc00baed9e35",
            "topic": "新知识点",
            "expanded": true,
            "parentid": "b8d88816c78a8042",
            "note": ""
        },
        {
            "id": "b8d88d7f36f847e6",
            "topic": "生成式任务",
            "expanded": true,
            "parentid": "b8d722401674f4c2",
            "note": ""
        },
        {
            "id": "img_processing",
            "topic": "基础理论",
            "expanded": true,
            "parentid": "root",
            "direction": "left"
        },
        {
            "id": "b8d75f2881a7b07f",
            "topic": "特征建模",
            "expanded": true,
            "parentid": "img_processing",
            "note": ""
        },
        {
            "id": "b8d7e0c0d759ed55",
            "topic": "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;卷积",
            "expanded": true,
            "parentid": "b8d75f2881a7b07f",
            "note": "",
            "background-image": "imgs/卷积.png",
            "width": 200,
            "height": 135
        },
        {
            "id": "b977abc373ef9fc9",
            "topic": "定义与本质",
            "expanded": true,
            "parentid": "b8d7e0c0d759ed55",
            "note": ""
        },
        {
            "id": "b977ce723bcccd72",
            "topic": "数学上：局部窗口的加权求和运算",
            "expanded": true,
            "parentid": "b977abc373ef9fc9",
            "note": ""
        },
        {
            "id": "b977ced0a477deb7",
            "topic": "物理上：滑动的特征提取器",
            "expanded": true,
            "parentid": "b977abc373ef9fc9",
            "note": ""
        },
        {
            "id": "b977abe176938ad6",
            "topic": "两大核心特性",
            "expanded": true,
            "parentid": "b8d7e0c0d759ed55",
            "note": ""
        },
        {
            "id": "b977df2f952bbf55",
            "topic": "局部连接",
            "expanded": true,
            "parentid": "b977abe176938ad6",
            "note": "卷积核每次只覆盖输入图像的一个局部区域（如 3 x3），而不是像全连接层那样一次性连接整张图。"
        },
        {
            "id": "b977dfb480d26803",
            "topic": "权重共享",
            "expanded": true,
            "parentid": "b977abe176938ad6",
            "note": "当卷积核在图像上滑动时，无论滑动到哪个位置，卷积核内部的权重（参数）是固定不变的。即这一次卷积计算中，一张图就一个共用的滑动卷积核。"
        },
        {
            "id": "b977abf2d45baa82",
            "topic": "六大可控参数",
            "expanded": true,
            "parentid": "b8d7e0c0d759ed55",
            "note": ""
        },
        {
            "id": "b9781e49fda4c010",
            "topic": "卷积核大小(Kernel Size)",
            "expanded": true,
            "parentid": "b977abf2d45baa82",
            "note": "直接决定这个“局部”是多大"
        },
        {
            "id": "b97a623377cb7388",
            "topic": "1x1卷积",
            "expanded": true,
            "parentid": "b9781e49fda4c010",
            "note": "卷积核大小为1。也称为逐点卷积 (Pointwise Convolution)。只改变通道数不改变特征图尺寸。往往用于通道的信息交互、融合、压缩等。"
        },
        {
            "id": "b97aa1e16719f803",
            "topic": "升降维",
            "expanded": true,
            "parentid": "b97a623377cb7388",
            "note": ""
        },
        {
            "id": "b97aa205e30df321",
            "topic": "跨通道信息交互",
            "expanded": true,
            "parentid": "b97a623377cb7388",
            "note": ""
        },
        {
            "id": "b97aa21f7979d81a",
            "topic": "增强非线性表达能力",
            "expanded": true,
            "parentid": "b97a623377cb7388",
            "note": ""
        },
        {
            "id": "b97aa232ef96d24b",
            "topic": "代替全连接层实现全卷积网络FCN",
            "expanded": true,
            "parentid": "b97a623377cb7388",
            "note": ""
        },
        {
            "id": "b97a7879527224cc",
            "topic": "非对称卷积",
            "expanded": true,
            "parentid": "b9781e49fda4c010",
            "note": ""
        },
        {
            "id": "b97bb462e2569b49",
            "topic": "轻量化模型",
            "expanded": true,
            "parentid": "b97a7879527224cc",
            "note": ""
        },
        {
            "id": "b97bb47d5ae67e2e",
            "topic": "细长目标提取",
            "expanded": true,
            "parentid": "b97a7879527224cc",
            "note": ""
        },
        {
            "id": "b97bb48f5a459a25",
            "topic": "大核分解",
            "expanded": true,
            "parentid": "b97a7879527224cc",
            "note": ""
        },
        {
            "id": "b97a803fb49b8478",
            "topic": "其他特殊形状卷积",
            "expanded": true,
            "parentid": "b9781e49fda4c010",
            "note": "例如十字形状得卷积"
        },
        {
            "id": "b9781e5af0d50cbb",
            "topic": "步长(Stride)",
            "expanded": true,
            "parentid": "b977abf2d45baa82",
            "note": "卷积核每一步滑动的距离"
        },
        {
            "id": "b9c47dd81c0e63f9",
            "topic": "步进卷积",
            "expanded": true,
            "parentid": "b9781e5af0d50cbb",
            "note": "步进卷积 (Strided Convolution) —— 用于下采样\n当 Stride > 1（通常为 2）时，卷积核滑动的间距大于 1 个像素。\n特点：输出特征图的尺寸会显著减小（通常减半）。\n特殊身份：它是池化层（Pooling Layer）的替代者。\n应用场景：\nResNet/EfficientNet：现代网络倾向于抛弃传统的 Max Pooling，改用 Stride=2 的卷积来进行特征压缩。\n为什么用它（面试高频问点）：\n可学习性：池化是固定的（取最大值或平均），而步进卷积的参数是学出来的。网络可以自己学习在下采样时应该保留哪些信息，哪些应该丢弃。\n信息无损：相比于直接丢弃像素的池化，带步长的卷积能更好地保留空间结构信息。"
        },
        {
            "id": "b9c47df3a1db60af",
            "topic": "转置卷积(Transposed Convolution)",
            "expanded": true,
            "parentid": "b9781e5af0d50cbb",
            "note": ""
        },
        {
            "id": "b9781e68ffb48ce5",
            "topic": "填充(Padding)",
            "expanded": true,
            "parentid": "b977abf2d45baa82",
            "note": "在原输入张量边缘填充的宽度和方式"
        },
        {
            "id": "b9c4ad1a22dfc77e",
            "topic": "零填充",
            "expanded": true,
            "parentid": "b9781e68ffb48ce5",
            "note": ""
        },
        {
            "id": "b9c4ad38bcfa22df",
            "topic": "常数填充",
            "expanded": true,
            "parentid": "b9781e68ffb48ce5",
            "note": ""
        },
        {
            "id": "b9c4ad45287974ac",
            "topic": "镜像/反射填充",
            "expanded": true,
            "parentid": "b9781e68ffb48ce5",
            "note": "在对边缘质量要求极高的生成类任务中，我们会采用 Reflection Padding 来替代 Zero Padding，以获得更自然的过渡。"
        },
        {
            "id": "b9c4b6d180657009",
            "topic": "边界复制填充",
            "expanded": true,
            "parentid": "b9781e68ffb48ce5",
            "note": ""
        },
        {
            "id": "b9781e78e89779ef",
            "topic": "输出通道数(Channels)",
            "expanded": true,
            "parentid": "b977abf2d45baa82",
            "note": "卷积核数量"
        },
        {
            "id": "b9c501c9f26a6254",
            "topic": "深度卷积(Depthwise Convolution)",
            "expanded": true,
            "parentid": "b9781e78e89779ef",
            "note": ""
        },
        {
            "id": "b9c501e4ef71435a",
            "topic": "分组卷积(Group Convolution)",
            "expanded": true,
            "parentid": "b9781e78e89779ef",
            "note": "输入通道被分成若干组，每组通道只与自己对应的卷积核进行卷积。相比于深度卷积的输入通道和卷积核一对一，分组卷积是一组输入通道对应一组卷积核(可能只有一个，可能有多个)。所以输入和输出通道都要能被组数整除。"
        },
        {
            "id": "b9c501f0dcc26d03",
            "topic": "深度可分离卷积(Depthwise separable convolution)",
            "expanded": true,
            "parentid": "b9781e78e89779ef",
            "note": "深度卷积接一个1×1卷积"
        },
        {
            "id": "b9781e8d6869173e",
            "topic": "扩张率(Dilation Rate)",
            "expanded": true,
            "parentid": "b977abf2d45baa82",
            "note": "不增加参数、不降低分辨率的情况下，指数级增大感受野"
        },
        {
            "id": "b9c611fe5ec0785a",
            "topic": "空洞卷积(Dilated Convolution)",
            "expanded": true,
            "parentid": "b9781e8d6869173e",
            "note": "通过在卷积核中插入空洞（间隔）来扩大感受野，而不需要增加额外的计算量或参数。扩张率就是卷积核的采样跨度。d=1：标准卷积。d=2：核元素之间跳过 1 个像素。以此类推。在传统的 CNN 中，为了扩大感受野，通常使用 池化层（Pooling） 或 步长卷积（Strided Conv）。会带来分辨率下降和上采样困难两个问题。空洞卷积则是在不进行下采样（保持特征图尺寸）且不增加参数量的前提下，指数级增大感受野。"
        },
        {
            "id": "b9c6fc8daaeb00f1",
            "topic": "等效卷积核 K1= K + (K-1)× (d-1) = d×(K-1)+1",
            "expanded": true,
            "parentid": "b9c611fe5ec0785a",
            "note": " 一个 3×3 的核 (K=3)，当 d=2 时，K1 = 3 + 2×1 = 5。"
        },
        {
            "id": "b9781ea06d0950fb",
            "topic": "滑动方向/维数(Dimensions)",
            "expanded": true,
            "parentid": "b977abf2d45baa82",
            "note": "在几个方向上滑动卷积核"
        },
        {
            "id": "b9c72d5daad53edd",
            "topic": "2D卷积",
            "expanded": true,
            "parentid": "b9781ea06d0950fb",
            "note": "最常用。宽高两个方向滑动。"
        },
        {
            "id": "b9c72d71a0448940",
            "topic": "1D 卷积",
            "expanded": true,
            "parentid": "b9781ea06d0950fb",
            "note": "通常在序列方向如时间方向滑动。"
        },
        {
            "id": "b9c72d81a414e59d",
            "topic": "3D 卷积",
            "expanded": true,
            "parentid": "b9781ea06d0950fb",
            "note": "在 x, y, z（或 t）三个轴向上滑动的卷积。由于 3D 卷积计算太慢，工业界常使用 (2+1)D 卷积。原理：将一个  3D 卷积分解为一个 1 × 3 × 3 的空间卷积（处理图像）和一个 3 × 1 × 1 的时间卷积（处理时序）。优点：参数更少，更容易训练，且效果往往更好。"
        },
        {
            "id": "b979af5ebaf2a91f",
            "topic": "特征尺寸计算公式",
            "expanded": true,
            "parentid": "b8d7e0c0d759ed55",
            "note": "import torch\nimport torch.nn as nn\n\ndef test_conv_shape(I, K, P, S):\n    # 1. 构造输入数据: (Batch_size, Channels, Height, Width)\n    # 我们设 Batch=1, Channel=1, 宽高均为 I\n    input_data = torch.randn(1, 3, I, I)\n    \n    # 2. 定义卷积层\n    # in_channels=1, out_channels=1 (不影响尺寸)\n    conv_layer = nn.Conv2d(in_channels=3, out_channels=1, \n                           kernel_size=K, padding=P, stride=S, dilation=2)\n    \n    # 3. 进行前向计算\n    output_data = conv_layer(input_data)\n    \n    # 4. 获取输出尺寸\n    actual_O = output_data.shape[2]\n    \n    # 5. 使用我们的理论公式计算\n    theory_O = ((I - (K+(K-1)) + 2 * P) // S) + 1\n    \n    print(f\"输入尺寸 I = {I}\")\n    print(f\"卷积核 K = {K}, 填充 P = {P}, 步长 S = {S}\")\n    print(f\"---\")\n    print(f\"理论公式计算结果 O = {theory_O}\")\n    print(f\"代码实际运行结果 O = {actual_O}\")\n    print(f\"验证是否一致: {'✅ 成功' if theory_O == actual_O else '❌ 失败'}\")\n\n# --- 实验区 ---\n# 场景 1: 标准卷积 (Valid)\ntest_conv_shape(I=32, K=3, P=0, S=1)\n\nprint(\"\\n\" + \"=\"*30 + \"\\n\")\n\n# 场景 2: 下采样卷积 (Strided)\ntest_conv_shape(I=32, K=5, P=2, S=2)\n\nprint(\"\\n\" + \"=\"*30 + \"\\n\")\n\n# 场景 3: 无法整除的情况 (观察向下取整)\ntest_conv_shape(I=10, K=3, P=0, S=2)"
        },
        {
            "id": "b97a5f9106028b12",
            "topic": "&nbsp;",
            "expanded": true,
            "parentid": "b979af5ebaf2a91f",
            "note": "I和O分别是输入和输出的宽或高。首先计算真加上填充后的总宽度：I+2P。再计算有效的滑动空间：I+2P-K。在个有效滑动空间中每次滑动S，可以滑动：(I+2P-K)/S。不足一个步长的边缘像素会被舍弃：向下取整。最后加 1：加上最开始被减掉的第一个卷积核位置。",
            "background-image": "imgs/卷积尺寸计算.png",
            "width": 200,
            "height": 78
        },
        {
            "id": "b8d7ea0fc217dca3",
            "topic": "感受野(Receptive Field)",
            "expanded": true,
            "parentid": "b8d75f2881a7b07f",
            "note": ""
        },
        {
            "id": "ba1e1e6b8e4285da",
            "topic": "定义",
            "expanded": true,
            "parentid": "b8d7ea0fc217dca3",
            "note": ""
        },
        {
            "id": "ba1e360fd2071228",
            "topic": "某层单个神经元对应输入图像上的区域大小",
            "expanded": true,
            "parentid": "ba1e1e6b8e4285da",
            "note": "直观理解：第一层卷积的神经元只能看到 3 × 3 的局部像素；随着层数加深，高层神经元通过组合底层的信号，能够“看到”原图中更大范围的物体（如整只猫或整辆车）。"
        },
        {
            "id": "b8d7f0f7a88ff039",
            "topic": "理论感受野计算公式",
            "expanded": true,
            "parentid": "b8d7ea0fc217dca3",
            "note": ""
        },
        {
            "id": "ba207a17f0fe0c5e",
            "topic": "&nbsp;",
            "expanded": true,
            "parentid": "b8d7f0f7a88ff039",
            "note": "初始层（输入层）感受野为1，RF0=1。总感受野是，上一层感受野加上这一层的卷积核大小减1 * 之前所有层的步长累乘。这一层的步长影响的是下一层的感受野。Padding 不影响感受野大小（它只影响特征图边缘的完整性）。Stride（步长）会成倍增加后续层的感受野增量。",
            "background-image": "imgs/感受野计算公式.png",
            "width": 220,
            "height": 80
        },
        {
            "id": "b8d7f10222f2a190",
            "topic": "实际感受野",
            "expanded": true,
            "parentid": "b8d7ea0fc217dca3",
            "note": ""
        },
        {
            "id": "ba20f045e2d1210d",
            "topic": "比理论感受野小很多",
            "expanded": true,
            "parentid": "b8d7f10222f2a190",
            "note": "区域中心像素的影响力远大于边缘像素（服从高斯分布）。这意味着实际起作用的视野往往比理论计算的要小。"
        },
        {
            "id": "b8d7e0d95f836c26",
            "topic": "注意力",
            "expanded": true,
            "parentid": "b8d75f2881a7b07f",
            "note": ""
        },
        {
            "id": "b8d7f784207fea54",
            "topic": "注意力类别",
            "expanded": true,
            "parentid": "b8d7e0d95f836c26",
            "note": ""
        },
        {
            "id": "b8d806e6f6809a5d",
            "topic": "自注意力",
            "expanded": true,
            "parentid": "b8d7f784207fea54",
            "note": ""
        },
        {
            "id": "b8d806f6fe6ff781",
            "topic": "多头注意力",
            "expanded": true,
            "parentid": "b8d7f784207fea54",
            "note": ""
        },
        {
            "id": "b8d8070111d13ff2",
            "topic": "跨通道注意力",
            "expanded": true,
            "parentid": "b8d7f784207fea54",
            "note": ""
        },
        {
            "id": "b8d8070b09ae2a6c",
            "topic": "新知识点",
            "expanded": true,
            "parentid": "b8d7f784207fea54",
            "note": ""
        },
        {
            "id": "b8d7f7a42827bdd5",
            "topic": "注意力的意义",
            "expanded": true,
            "parentid": "b8d7e0d95f836c26",
            "note": ""
        },
        {
            "id": "ba1b7cb1dc75c8d9",
            "topic": "下采样",
            "expanded": true,
            "parentid": "img_processing",
            "note": ""
        },
        {
            "id": "ba1b80acd74918b7",
            "topic": "静态下采样",
            "expanded": true,
            "parentid": "ba1b7cb1dc75c8d9",
            "note": ""
        },
        {
            "id": "ba1b96e623a74320",
            "topic": "池化",
            "expanded": true,
            "parentid": "ba1b80acd74918b7",
            "note": ""
        },
        {
            "id": "ba1c1b15d2c70a3c",
            "topic": "定义",
            "expanded": true,
            "parentid": "ba1b96e623a74320",
            "note": ""
        },
        {
            "id": "ba1c1d990692e2e0",
            "topic": "具有固定算子（Max/Avg）且通道独立的“硬编码”卷积",
            "expanded": true,
            "parentid": "ba1c1b15d2c70a3c",
            "note": ""
        },
        {
            "id": "ba1c2249c52b0e42",
            "topic": "类别",
            "expanded": true,
            "parentid": "ba1b96e623a74320",
            "note": ""
        },
        {
            "id": "ba1bb4046edabd00",
            "topic": "最大池化",
            "expanded": true,
            "parentid": "ba1c2249c52b0e42",
            "note": ""
        },
        {
            "id": "ba1c30ab26cd4b00",
            "topic": "池化核范围的像素保留最大值",
            "expanded": true,
            "parentid": "ba1bb4046edabd00",
            "note": ""
        },
        {
            "id": "ba1bb423d8b626f6",
            "topic": "平均池化",
            "expanded": true,
            "parentid": "ba1c2249c52b0e42",
            "note": ""
        },
        {
            "id": "ba1c313ca01e0da4",
            "topic": "池化核范围的像素取平均",
            "expanded": true,
            "parentid": "ba1bb423d8b626f6",
            "note": ""
        },
        {
            "id": "ba1bb437d40c6be4",
            "topic": "其他池化",
            "expanded": true,
            "parentid": "ba1c2249c52b0e42",
            "note": ""
        },
        {
            "id": "ba1c2520420f67a3",
            "topic": "尺寸计算公式",
            "expanded": true,
            "parentid": "ba1b96e623a74320",
            "note": ""
        },
        {
            "id": "ba1c2d2fb4fb2427",
            "topic": "跟卷积一模一样",
            "expanded": true,
            "parentid": "ba1c2520420f67a3",
            "note": ""
        },
        {
            "id": "ba1c3f2289f0ab7e",
            "topic": "v.s. 卷积",
            "expanded": true,
            "parentid": "ba1b96e623a74320",
            "note": ""
        },
        {
            "id": "ba1c4428fbbf19a4",
            "topic": "固定规则（无参数，不可学习）",
            "expanded": true,
            "parentid": "ba1c3f2289f0ab7e",
            "note": ""
        },
        {
            "id": "ba1c4441f1922e07",
            "topic": "通道独立（各通道独立运算，互不干扰）",
            "expanded": true,
            "parentid": "ba1c3f2289f0ab7e",
            "note": ""
        },
        {
            "id": "ba1b96f51d57d2bf",
            "topic": "Patch Merging",
            "expanded": true,
            "parentid": "ba1b80acd74918b7",
            "note": ""
        },
        {
            "id": "ba1b80c7d2b0feb3",
            "topic": "可学习下采样",
            "expanded": true,
            "parentid": "ba1b7cb1dc75c8d9",
            "note": ""
        },
        {
            "id": "bafe8aace349ff5b",
            "topic": "激活函数",
            "expanded": true,
            "parentid": "img_processing",
            "note": ""
        },
        {
            "id": "bafe9088d651cf8a",
            "topic": "定义",
            "expanded": true,
            "parentid": "bafe8aace349ff5b",
            "note": ""
        },
        {
            "id": "baff8cb3fc913854",
            "topic": "跟在神经元后面提供非线性的函数",
            "expanded": true,
            "parentid": "bafe9088d651cf8a",
            "note": ""
        },
        {
            "id": "bafe90adc0fcea8b",
            "topic": "常见类型",
            "expanded": true,
            "parentid": "bafe8aace349ff5b",
            "note": ""
        },
        {
            "id": "baffbcbc098087ab",
            "topic": "&nbsp;",
            "expanded": true,
            "parentid": "bafe90adc0fcea8b",
            "note": "",
            "background-image": "imgs/sigmoid.png",
            "width": 220,
            "height": 150
        },
        {
            "id": "bb02aa45839b0b36",
            "topic": "公式",
            "expanded": true,
            "parentid": "baffbcbc098087ab",
            "note": ""
        },
        {
            "id": "bb02b598e38a5319",
            "topic": "&nbsp;",
            "expanded": true,
            "parentid": "bb02aa45839b0b36",
            "note": "",
            "background-image": "imgs/sigmoid公式.png",
            "width": 220,
            "height": 93
        },
        {
            "id": "bb02aa6d803dcb51",
            "topic": "导数公式",
            "expanded": true,
            "parentid": "baffbcbc098087ab",
            "note": ""
        },
        {
            "id": "bb02c0694d368cac",
            "topic": "&nbsp;",
            "expanded": true,
            "parentid": "bb02aa6d803dcb51",
            "note": "",
            "background-image": "imgs/sigmoid导数公式.png",
            "width": 220,
            "height": 77
        },
        {
            "id": "bb02aa8007b42388",
            "topic": " 优点",
            "expanded": true,
            "parentid": "baffbcbc098087ab",
            "note": ""
        },
        {
            "id": "bb02c4dec80af24d",
            "topic": "输出范围有限（0 到 1）",
            "expanded": true,
            "parentid": "bb02aa8007b42388",
            "note": ""
        },
        {
            "id": "bb031fb06f99ad35",
            "topic": "数学平滑且连续可导",
            "expanded": true,
            "parentid": "bb02aa8007b42388",
            "note": ""
        },
        {
            "id": "bb02aadd08a18cde",
            "topic": "缺点",
            "expanded": true,
            "parentid": "baffbcbc098087ab",
            "note": ""
        },
        {
            "id": "bb0326005fc1ef0d",
            "topic": "梯度消失 (Vanishing Gradient)",
            "expanded": true,
            "parentid": "bb02aadd08a18cde",
            "note": ""
        },
        {
            "id": "bb0326105d77e288",
            "topic": "输出非零中心化 (Not Zero-Centered)",
            "expanded": true,
            "parentid": "bb02aadd08a18cde",
            "note": ""
        },
        {
            "id": "bb03297f5d85307e",
            "topic": "计算开销较大",
            "expanded": true,
            "parentid": "bb02aadd08a18cde",
            "note": ""
        },
        {
            "id": "baffbccc07a3ed85",
            "topic": "&nbsp;",
            "expanded": true,
            "parentid": "bafe90adc0fcea8b",
            "note": "",
            "background-image": "imgs/tanh.png",
            "width": 220,
            "height": 147
        },
        {
            "id": "bb033370b2d6dc64",
            "topic": "公式",
            "expanded": true,
            "parentid": "baffbccc07a3ed85",
            "note": ""
        },
        {
            "id": "bb033662b9e232bc",
            "topic": "&nbsp;",
            "expanded": true,
            "parentid": "bb033370b2d6dc64",
            "note": "",
            "background-image": "imgs/tanh公式.png",
            "width": 220,
            "height": 89
        },
        {
            "id": "bb03337e38889eaf",
            "topic": "导数公式",
            "expanded": true,
            "parentid": "baffbccc07a3ed85",
            "note": ""
        },
        {
            "id": "bb033f542aa99725",
            "topic": "&nbsp;",
            "expanded": true,
            "parentid": "bb03337e38889eaf",
            "note": "",
            "background-image": "imgs/tanh导数公式.png",
            "width": 220,
            "height": 83
        },
        {
            "id": "bb03338a464ba278",
            "topic": "优点(v.s. sigmoid)",
            "expanded": true,
            "parentid": "baffbccc07a3ed85",
            "note": ""
        },
        {
            "id": "bb0357e3ec342bfe",
            "topic": "零中心化",
            "expanded": true,
            "parentid": "bb03338a464ba278",
            "note": ""
        },
        {
            "id": "bb0357f1ff4dcbb3",
            "topic": "平滑连续可导",
            "expanded": true,
            "parentid": "bb03338a464ba278",
            "note": ""
        },
        {
            "id": "bb0358106c122bfe",
            "topic": "梯度比sigmoid大",
            "expanded": true,
            "parentid": "bb03338a464ba278",
            "note": ""
        },
        {
            "id": "bb03339ac1ccc29e",
            "topic": "缺点",
            "expanded": true,
            "parentid": "baffbccc07a3ed85",
            "note": ""
        },
        {
            "id": "bb037cb31887dad7",
            "topic": "梯度消失 (Vanishing Gradient)",
            "expanded": true,
            "parentid": "bb03339ac1ccc29e",
            "note": ""
        },
        {
            "id": "bb037cc4a389e96e",
            "topic": "计算开销较大",
            "expanded": true,
            "parentid": "bb03339ac1ccc29e",
            "note": ""
        },
        {
            "id": "baffbcd88de7a087",
            "topic": "&nbsp;",
            "expanded": true,
            "parentid": "bafe90adc0fcea8b",
            "note": "",
            "background-image": "imgs/relu.png",
            "width": 220,
            "height": 152
        },
        {
            "id": "bb038749f02bb5b6",
            "topic": "公式",
            "expanded": true,
            "parentid": "baffbcd88de7a087",
            "note": ""
        },
        {
            "id": "bb039025e0593550",
            "topic": "&nbsp;",
            "expanded": true,
            "parentid": "bb038749f02bb5b6",
            "note": "",
            "background-image": "imgs/relu公式.png",
            "width": 220,
            "height": 74
        },
        {
            "id": "bb0387557558c06d",
            "topic": "导数公式",
            "expanded": true,
            "parentid": "baffbcd88de7a087",
            "note": ""
        },
        {
            "id": "bb0396746ed1e511",
            "topic": "&nbsp;",
            "expanded": true,
            "parentid": "bb0387557558c06d",
            "note": "",
            "background-image": "imgs/relu导数公式.png",
            "width": 220,
            "height": 98
        },
        {
            "id": "bb0387617e3e5556",
            "topic": "优点",
            "expanded": true,
            "parentid": "baffbcd88de7a087",
            "note": ""
        },
        {
            "id": "bb03d83246276151",
            "topic": "彻底解决正半轴梯度消失",
            "expanded": true,
            "parentid": "bb0387617e3e5556",
            "note": ""
        },
        {
            "id": "bb03d84130217011",
            "topic": "计算速度极快",
            "expanded": true,
            "parentid": "bb0387617e3e5556",
            "note": ""
        },
        {
            "id": "bb03dafa369ad6c1",
            "topic": "稀疏激活",
            "expanded": true,
            "parentid": "bb0387617e3e5556",
            "note": ""
        },
        {
            "id": "bb038772f67b6b9a",
            "topic": "缺点",
            "expanded": true,
            "parentid": "baffbcd88de7a087",
            "note": ""
        },
        {
            "id": "baffbcf001747196",
            "topic": "新知识点",
            "expanded": true,
            "parentid": "bafe90adc0fcea8b",
            "note": ""
        },
        {
            "id": "baffc025f46dd371",
            "topic": "作用",
            "expanded": true,
            "parentid": "bafe8aace349ff5b",
            "note": ""
        },
        {
            "id": "baffd8cb43f3550d",
            "topic": "非线性建模",
            "expanded": true,
            "parentid": "baffc025f46dd371",
            "note": "将输入的线性组合转化为非线性输出，使神经网络能够拟合任意复杂的函数（万能近似定理）。"
        },
        {
            "id": "baffd8dacb652eb9",
            "topic": "控制信号强度",
            "expanded": true,
            "parentid": "baffc025f46dd371",
            "note": "控制信号强度：将输入信号压缩到一个特定的范围（如 0 到 1），防止数值爆炸。"
        },
        {
            "id": "b8d75f8e11aa6b4e",
            "topic": "归一化与正则化",
            "expanded": true,
            "parentid": "img_processing",
            "note": ""
        },
        {
            "id": "b8d8214a4c66dded",
            "topic": "Normalization",
            "expanded": true,
            "parentid": "b8d75f8e11aa6b4e",
            "note": ""
        },
        {
            "id": "b8d91bf6f92b3c37",
            "topic": "基础",
            "expanded": true,
            "parentid": "b8d8214a4c66dded",
            "note": ""
        },
        {
            "id": "b8d92a91c8da8ccc",
            "topic": "标准化",
            "expanded": true,
            "parentid": "b8d91bf6f92b3c37",
            "note": ""
        },
        {
            "id": "b8d949dce3b61863",
            "topic": "新知识点",
            "expanded": true,
            "parentid": "b8d92a91c8da8ccc",
            "note": "",
            "background-image": "imgs/标准化.png",
            "width": 200,
            "height": 110
        },
        {
            "id": "b8d92aa03af1d436",
            "topic": "仿射变换",
            "expanded": true,
            "parentid": "b8d91bf6f92b3c37",
            "note": "",
            "background-image": "imgs/仿射变换.png",
            "width": 200,
            "height": 82
        },
        {
            "id": "b8d828c72e6cd975",
            "topic": "BN (Batch Norm)",
            "expanded": true,
            "parentid": "b8d8214a4c66dded",
            "note": ""
        },
        {
            "id": "b8d828dc22fb8432",
            "topic": "LN (Layer Norm)",
            "expanded": true,
            "parentid": "b8d8214a4c66dded",
            "note": ""
        },
        {
            "id": "b8d828e7288b5588",
            "topic": "GN (Group Norm)",
            "expanded": true,
            "parentid": "b8d8214a4c66dded",
            "note": ""
        },
        {
            "id": "b8d824cfc10fc2bd",
            "topic": "初始化策略",
            "expanded": true,
            "parentid": "b8d75f8e11aa6b4e",
            "note": ""
        },
        {
            "id": "b8d82d882a9d7b21",
            "topic": "Xavier",
            "expanded": true,
            "parentid": "b8d824cfc10fc2bd",
            "note": ""
        },
        {
            "id": "b8d82e7518bd5df5",
            "topic": "He",
            "expanded": true,
            "parentid": "b8d824cfc10fc2bd",
            "note": ""
        },
        {
            "id": "b8d82670a5c5fb31",
            "topic": "正则化",
            "expanded": true,
            "parentid": "b8d75f8e11aa6b4e",
            "note": ""
        },
        {
            "id": "b8d832e10209e820",
            "topic": "Dropout",
            "expanded": true,
            "parentid": "b8d82670a5c5fb31",
            "note": ""
        },
        {
            "id": "b8d832f68d4527cf",
            "topic": "L1正则",
            "expanded": true,
            "parentid": "b8d82670a5c5fb31",
            "note": ""
        },
        {
            "id": "b8d833000524d6b4",
            "topic": "L2正则",
            "expanded": true,
            "parentid": "b8d82670a5c5fb31",
            "note": ""
        },
        {
            "id": "b8d76005f126f982",
            "topic": "损失函数",
            "expanded": true,
            "parentid": "img_processing",
            "note": ""
        },
        {
            "id": "b8d83ff7e9480082",
            "topic": "分类（离散）",
            "expanded": true,
            "parentid": "b8d76005f126f982",
            "note": ""
        },
        {
            "id": "b8d846165fa85f3f",
            "topic": "交叉熵",
            "expanded": true,
            "parentid": "b8d83ff7e9480082",
            "note": ""
        },
        {
            "id": "b8d846e5d913fabf",
            "topic": "dice_loss",
            "expanded": true,
            "parentid": "b8d83ff7e9480082",
            "note": ""
        },
        {
            "id": "b8d846f0d0ec5f0c",
            "topic": "focal_loss",
            "expanded": true,
            "parentid": "b8d83ff7e9480082",
            "note": ""
        },
        {
            "id": "b8d846fbde5fdd2f",
            "topic": "iou_loss",
            "expanded": true,
            "parentid": "b8d83ff7e9480082",
            "note": ""
        },
        {
            "id": "b8d84001e96ca38a",
            "topic": "回归/定位（连续）",
            "expanded": true,
            "parentid": "b8d76005f126f982",
            "note": ""
        },
        {
            "id": "b8d85139cfc02502",
            "topic": "mse",
            "expanded": true,
            "parentid": "b8d84001e96ca38a",
            "note": ""
        },
        {
            "id": "b8d8528e38678033",
            "topic": "新知识点",
            "expanded": true,
            "parentid": "b8d84001e96ca38a",
            "note": ""
        },
        {
            "id": "b8d871520269592e",
            "topic": "优化器",
            "expanded": true,
            "parentid": "img_processing",
            "note": ""
        },
        {
            "id": "b8d87427684e5e31",
            "topic": "优化器的意义",
            "expanded": true,
            "parentid": "b8d871520269592e",
            "note": ""
        },
        {
            "id": "b8d874488c27490c",
            "topic": "常用优化器",
            "expanded": true,
            "parentid": "b8d871520269592e",
            "note": ""
        },
        {
            "id": "b8d8775464a5cbc1",
            "topic": "SGD",
            "expanded": true,
            "parentid": "b8d874488c27490c",
            "note": ""
        },
        {
            "id": "b8d8776c78c6fd40",
            "topic": "Adam",
            "expanded": true,
            "parentid": "b8d874488c27490c",
            "note": ""
        },
        {
            "id": "b8d87777e5410ab2",
            "topic": "AdamW",
            "expanded": true,
            "parentid": "b8d874488c27490c",
            "note": ""
        },
        {
            "id": "b8d760e387988bae",
            "topic": "评价指标",
            "expanded": true,
            "parentid": "img_processing",
            "note": ""
        },
        {
            "id": "b8d858b42bd10678",
            "topic": "分类指标",
            "expanded": true,
            "parentid": "b8d760e387988bae",
            "note": ""
        },
        {
            "id": "b8d859292d1fefbd",
            "topic": "检测指标",
            "expanded": true,
            "parentid": "b8d760e387988bae",
            "note": ""
        },
        {
            "id": "b8d7616e098aeb3e",
            "topic": "计算效能",
            "expanded": true,
            "parentid": "b8d760e387988bae",
            "note": ""
        },
        {
            "id": "b8d85fa6a79e5782",
            "topic": "FLOPs",
            "expanded": true,
            "parentid": "b8d7616e098aeb3e",
            "note": ""
        },
        {
            "id": "b8d860ed12f4ad30",
            "topic": "模型参数",
            "expanded": true,
            "parentid": "b8d7616e098aeb3e",
            "note": ""
        },
        {
            "id": "b8d7286d89724934",
            "topic": "研发管线",
            "expanded": true,
            "parentid": "root",
            "direction": "right",
            "note": ""
        },
        {
            "id": "b8d8d5b9b6b515d3",
            "topic": "数据准备",
            "expanded": true,
            "parentid": "b8d7286d89724934",
            "note": ""
        },
        {
            "id": "b8d8d5c48a107a2e",
            "topic": "模型训练",
            "expanded": true,
            "parentid": "b8d7286d89724934",
            "note": ""
        },
        {
            "id": "b8d8d5d1017315db",
            "topic": "模型评估",
            "expanded": true,
            "parentid": "b8d7286d89724934",
            "note": ""
        },
        {
            "id": "b8d8d671068f38bb",
            "topic": "部署优化",
            "expanded": true,
            "parentid": "b8d7286d89724934",
            "note": ""
        }
    ]
};