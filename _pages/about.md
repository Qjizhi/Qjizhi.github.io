---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
  - /cv.html
---

I'm a CS PhD student at [WashU](https://washu.edu/) in the [Multimodal Vision Research Laboratory (MVRL)](https://mvrl.cse.wustl.edu/), advised by [Prof. Nathan Jacobs](https://jacobsn.github.io/). I have over five years of industry experience focusing on perception algorithms for autonomous driving and robotics. My research interests include computer vision, deep learning, and robotics. My current research is focusing on Content Generation and 3DV.

<style>
    .toggle-container {
        cursor: pointer;
        display: flex;
        align-items: center;
        font-size: 22px; /* Larger font size */
        color: #494e52; /* color */
        font-weight: bold; /* Bold text */
    }

    .triangle {
        width: 0;
        height: 0;
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-left: 10px solid #494e52; /* Pointing to the right */
        margin-right: 8px;
        transition: transform 0.3s;
    }

    .triangle.open {
        transform: rotate(90deg);
    }

    .news-content {
        display: block;
        margin-top: 10px;
        overflow: hidden;
        max-height: 49px; /* Limit the max height to show 2 items initially */
        transition: max-height 0.3s ease-out;
    }

    .news-content.open {
        max-height: none; /* Expand to show all items when open */
    }
</style>

<div class="toggle-container" onclick="toggleNews()">
    <div class="triangle" id="triangle"></div>
    <span>News!</span>
</div>

<div id="news" class="news-content">
    <!-- Your news content goes here -->
    <li>Sep 2025, our work <a href="https://github.com/Qjizhi/MCPDepth">MCPDepth</a> was accepted by WACV 2026 (Round 1, ~6% acceptance rate).</li>
    <li>Jun 2025, our work <a href="https://qjizhi.github.io/genstereo">GenStereo</a> was accepted by ICCV 2025.</li>
    <!-- <ul> -->
    <li>Jul 2024, one paper was accepted by ECCV 2024.</li>
    <li>Apr 2024, I will join WashU CSE as a PhD student.</li>
    <li>Apr 2024, our work <a href="https://arxiv.org/abs/2211.16988">QuadFormer</a> was accepted by UR 2024.</li>
    <li>Nov 2023, our work <a href="https://arxiv.org/abs/2309.01842">StereoFlowGAN</a> was accepted by BMVC 2023.</li>
    <!-- </ul> -->
</div>

<script>
    function toggleNews() {
        var newsDiv = document.getElementById("news");
        var triangle = document.getElementById("triangle");
        if (newsDiv.classList.contains("open")) {
            newsDiv.classList.remove("open");
            triangle.classList.remove("open");
        } else {
            newsDiv.classList.add("open");
            triangle.classList.add("open");
        }
    }
</script>

## Publications
<table frame=hsides style="border-left-style: none;border-right-style: none;">
<colgroup>
<col width="30%" />
<col width="70%" />
</colgroup>
<thead>
</thead>
<tbody>

<tr>
<td markdown="span" style="text-align: center;vertical-align: middle;border-left-style: none;border-right-style: none;"><img src="{{ site.baseurl }}/images/2026_WACV_MCPDepth2_resized.png"></td>
<td markdown="span" style="vertical-align: middle;border-left-style: none;border-right-style: none;">
    **MCPDepth: Panorama Depth Estimation from Multi Cylindrical Panorama by Stereo Matching**<br>
    [**Feng Qiao**](https://qjizhi.github.io/), [Zhexiao Xiong](https://steven-xiong.github.io/), [Nathan Jacobs](https://jacobsn.github.io/), [Xinge Zhu](https://xingezhu.me/), [Yuexin Ma](https://yuexinma.me/), Qiumeng He.<br>
    Winter Conference on Applications of Computer Vision (WACV), 2026<br>
    [![arXiv](https://img.shields.io/badge/arXiv-2408.01653-red?logo=arxiv)](https://arxiv.org/abs/2408.01653) &nbsp;
    [![Github](https://img.shields.io/badge/Github-Repo-orange?logo=github)](https://github.com/Qjizhi/MCPDepth)<br>
    <details>
    <span style="font-size: 14px">We introduce Multi-Cylindrical Panoramic Depth Estimation (MCPDepth), a two-stage framework for omnidirectional depth estimation via stereo matching between multiple panoramas. MCPDepth uses cylindrical panoramas for initial stereo matching and then fuses the resulting depth maps across views. A circular attention module is used to overcome the distortion along the vertical axis. MCPDepth uses only standard network components, making deployment to embedded devices significantly simpler than prior approaches that require custom kernels. We theoretically and experimentally compare spherical and cylindrical projections for stereo matching, highlighting the advantages of the cylindrical projection. MCPDepth achieves state-of-the-art performance with an 18.8% reduction in mean absolute error (MAE) for depth on the outdoor, synthetic dataset Deep360 and a 19.9% reduction on the indoor, real-scene dataset 3D60. The code is attached and will be available after acceptance.</span>
    </details>
    </td>
</tr>

<tr>
<td markdown="span" style="text-align: center;vertical-align: middle;border-left-style: none;border-right-style: none;"><img src="{{ site.baseurl }}/images/2025_ICCV_GenStereo_resized.png"></td>
<td markdown="span" style="vertical-align: middle;border-left-style: none;border-right-style: none;">
    **Towards Open-World Generation of Stereo Images and Unsupervised Matching**<br>
    [**Feng Qiao**](https://qjizhi.github.io/), [Zhexiao Xiong](https://steven-xiong.github.io/), [Eric Xing](https://ericx003.github.io/), [Nathan Jacobs](https://jacobsn.github.io/).<br>
    International Conference on Computer Vision (ICCV), 2025<br>
    [![Project Site](https://img.shields.io/badge/Project-Web-green)](https://qjizhi.github.io/genstereo) &nbsp;
    [![Spaces](https://img.shields.io/badge/Spaces-Demo-yellow?logo=huggingface)](https://huggingface.co/spaces/FQiao/GenStereo) &nbsp;
    [![Github](https://img.shields.io/badge/Github-Repo-orange?logo=github)](https://github.com/Qjizhi/GenStereo) &nbsp;
    [![Models](https://img.shields.io/badge/Models-checkpoints-blue?logo=huggingface)](https://huggingface.co/FQiao/GenStereo/tree/main) &nbsp;
    [![arXiv](https://img.shields.io/badge/arXiv-2503.12720-red?logo=arxiv)](https://arxiv.org/abs/2503.12720) <br>
    <details>
    <span style="font-size: 14px">Stereo images are fundamental to numerous applications, including extended reality (XR) devices, autonomous driving, and robotics. Unfortunately, acquiring high-quality stereo images remains challenging due to the precise calibration requirements of dual-camera setups and the complexity of obtaining accurate, dense disparity maps. Existing stereo image generation methods typically focus on either visual quality for viewing or geometric accuracy for matching, but not both. We introduce GenStereo, a diffusion-based approach, to bridge this gap. The method includes two primary innovations (1) conditioning the diffusion process on a disparity-aware coordinate embedding and a warped input image, allowing for more precise stereo alignment than previous methods, and (2) an adaptive fusion mechanism that intelligently combines the diffusion-generated image with a warped image, improving both realism and disparity consistency. Through extensive training on 11 diverse stereo datasets, GenStereo demonstrates strong generalization ability. GenStereo achieves state-of-the-art performance in both stereo image generation and unsupervised stereo matching tasks. Our framework eliminates the need for complex hardware setups while enabling high-quality stereo image generation, making it valuable for both real-world applications and unsupervised learning scenarios.</span>
    </details>
    </td>
</tr>


<tr>
<td markdown="span" style="text-align: center;vertical-align: middle;border-left-style: none;border-right-style: none;"><img src="{{ site.baseurl }}/images/2024_CVPR_SAM3DSEG_resized.png"></td>
<td markdown="span" style="vertical-align: middle;border-left-style: none;border-right-style: none;">
    **SAM-guided Unsupervised Domain Adaptation for 3D Segmentation**<br>
    Xidong Peng, Runnan Chen, **Feng Qiao**, Lingdong Kong, Youquan Liu, Tai Wang, [Xinge Zhu](https://xingezhu.me/), [Yuexin Ma](https://yuexinma.me/).<br>
    European Conference on Computer Vision (ECCV), 2024<br>
    [![arXiv](https://img.shields.io/badge/arXiv-2310.08820-red?logo=arxiv)](https://arxiv.org/abs/2310.08820v4)<br>
    <details>
    <span style="font-size: 14px">Inspired by the remarkable generalization capabilities exhibited by the vision foundation model, SAM, in the realm of image segmentation, our approach leverages the wealth of general knowledge embedded within SAM to unify feature representations across diverse 3D domains and further solves the 3D domain adaptation problem. Specifically, we harness the corresponding images associated with point clouds to facilitate knowledge transfer and propose an innovative hybrid feature augmentation methodology, which significantly enhances the alignment between the 3D feature space and SAM's feature space, operating at both the scene and instance levels. Our method is evaluated on many widely-recognized datasets and achieves state-of-the-art performance.</span>
    </details>
    </td>
</tr>

<tr>
<td markdown="span" style="text-align: center;vertical-align: middle;border-left-style: none;border-right-style: none;"><img src="{{ site.baseurl }}/images/2023_BMVC_StereoFlowGAN_resized.png"></td>
<td markdown="span" style="vertical-align: middle;border-left-style: none;border-right-style: none;">
    **StereoFlowGAN: Co-training for Stereo and Flow with Unsupervised Domain Adaptation**<br>
    Zhexiao Xiong, **Feng Qiao**, Yu Zhang, Nathan Jacobs.<br>
    The British Machine Vision Conference (BMVC), 2023<br>
    [![arXiv](https://img.shields.io/badge/arXiv-2309.01842-red?logo=arxiv)](https://arxiv.org/abs/2309.01842)<br>
    <details>
    <span style="font-size: 14px">We introduce a novel training strategy for stereo matching and optical flow estimation that utilizes image-to-image translation between synthetic and real image domains. Our approach enables the training of models that excel in real image scenarios while relying solely on ground-truth information from synthetic images. To facilitate task-agnostic domain adaptation and the training of task-specific components, we introduce a bidirectional feature warping module that handles both left-right and forward-backward directions. Experimental results show competitive performance over previous domain translation-based methods, which substantiate the efficacy of our proposed framework, effectively leveraging the benefits of unsupervised domain adaptation, stereo matching, and optical flow estimation.</span>
    </details>
    </td>
</tr>

<tr>
<td markdown="span" style="text-align: center;vertical-align: middle;border-left-style: none;border-right-style: none;"><img src="{{ site.baseurl }}/images/2023_PRCV_DUFormer_resized.png"></td>
<td markdown="span" style="vertical-align: middle;border-left-style: none;border-right-style: none;">
    **DUFormer: Solving Power Line Detection Task in Aerial Images using Semantic Segmentation**<br>
    Deyu An, Qiang Zhang, Jianshu Chao, Ting Li, **Feng Qiao**, Yong Deng, Zhenpeng Bian.<br>
    Chinese Conference on Pattern Recognition and Computer Vision (PRCV), 2023<br>
    [![arXiv](https://img.shields.io/badge/arXiv-2304.05821-red?logo=arxiv)](https://arxiv.org/abs/2304.05821)<br>
    <details>
    <span style="font-size: 14px">We proposed DUFormer, a CNN-Transformer hybrid algorithm, is specifically designed to detect power lines in aerial images.</span>
    </details>
    </td>
</tr>

<tr>
<td markdown="span" style="text-align: center;vertical-align: middle;border-left-style: none;border-right-style: none;"><img src="{{ site.baseurl }}/images/2024_UR_Quadformer_resized.png"></td>
<td markdown="span" style="vertical-align: middle;border-left-style: none;border-right-style: none;">
        **QuadFormer: Quadruple Transformer for Unsupervised Domain Adaptation in Power Line Segmentation of Aerial Images**<br>
        Pratyaksh Prabhav Rao<sup>*</sup>, **Feng Qiao**<sup>*</sup>, Weide Zhang, Yiliang Xu, Yong Deng, Guangbin Wu, Qiang Zhang. <br>
        International Conference on Ubiquitous Robots (UR), 2024<br>
        [![IEEE Xplore](https://img.shields.io/badge/IEEE%20Xplore-10597474-blue?logo=ieee)](https://ieeexplore.ieee.org/document/10597474)<br>
    <details>
    <span style="font-size: 14px">we propose QuadFormer, a novel framework designed for domain adaptive semantic segmentation. The hierarchical quadruple transformer combines cross-attention and self-attention mechanisms to adapt transferable context. Based on cross-attentive and self-attentive feature representations, we introduce a pseudo label correction scheme to online denoise the pseudo labels and reduce the domain gap. Additionally, we present two datasets - ARPLSyn and ARPLReal to further advance research in unsupervised domain adaptive powerline segmentations.</span>
    </details>
    </td>
</tr>

<tr>
<td markdown="span" style="text-align: center;vertical-align: middle;border-left-style: none;border-right-style: none;"><img src="{{ site.baseurl }}/images/2022_CVPR_STCrowd_resized.png"></td>
<td markdown="span" style="vertical-align: middle;border-left-style: none;border-right-style: none;">
    **STCrowd: A Multimodal Dataset for Pedestrian Perception in Crowded Scenes**<br>
    Peishan Cong, [Xinge Zhu](https://xingezhu.me/), **Feng Qiao**, Yiming Ren, Xidong Peng, Yuenan Hou, Lan Xu, Ruigang Yang, Dinesh Manocha, [Yuexin Ma](https://yuexinma.me/).<br>
    Conference on Computer Vision and Pattern Recognition (CVPR), 2022<br>
    [![arXiv](https://img.shields.io/badge/arXiv-2204.01026-red?logo=arxiv)](https://arxiv.org/abs/2204.01026) &nbsp;
    [![Github](https://img.shields.io/badge/Github-Repo-orange?logo=github)](https://github.com/4dvlab/stcrowd)<br>
    <details>
    <span style="font-size: 14px">We introduce a large-scale multimodal dataset,STCrowd. Specifically, in STCrowd, there are a total of 219 K pedestrian instances and 20 persons per frame on average, with various levels of occlusion. We provide synchronized LiDAR point clouds and camera images as well as their corresponding 3D labels and joint IDs. STCrowd can be used for various tasks, including LiDAR-only, image-only, and sensor-fusion based pedestrian detection and tracking. We provide baselines for most of the tasks. In addition, considering the property of sparse global distribution and density-varying local distribution of pedestrians, we further propose a novel method, Density-aware Hierarchical heatmap Aggregation (DHA), to enhance pedestrian perception in crowded scenes. Extensive experiments show that our new method achieves state-of-the-art performance for pedestrian detection on various datasets.</span>
    </details>
    </td>
</tr>

<tr>
<td markdown="span" style="text-align: center;vertical-align: middle;border-left-style: none;border-right-style: none;"><img src="{{ site.baseurl }}/images/2021_CVPR_MetaSAug_resized.png"></td>
<td markdown="span" style="vertical-align: middle;border-left-style: none;border-right-style: none;">
    **MetaSAug: Meta Semantic Augmentation for Long-Tailed Visual Recognition**<br>
    Li, Shuang, Kaixiong Gong, Chi Harold Liu, Yulin Wang, **Feng Qiao**, and Xinjing Cheng.<br>
    Conference on Computer Vision and Pattern Recognition (CVPR), 2021<br>
    [![arXiv](https://img.shields.io/badge/arXiv-2103.12579-red?logo=arxiv)](https://arxiv.org/abs/2103.12579) &nbsp;
    [![Github](https://img.shields.io/badge/Github-Repo-orange?logo=github)](https://github.com/BIT-DA/MetaSAug)<br>
    <details>
    <span style="font-size: 14px">We propose a novel approach to learn transformed semantic directions with meta-learning automatically. In specific, the augmentation strategy during training is dynamically optimized, aiming to minimize the loss on a small balanced validation set, which is approximated via a meta update step. Extensive empirical results on CIFAR-LT-10/100, ImageNet-LT, and iNaturalist 2017/2018 validate the effectiveness of our method.</span>
    </details>
    </td>
</tr>

</tbody>
</table>

## Projects
<table frame=hsides style="border-left-style: none;border-right-style: none;">
<colgroup>
<col width="30%" />
<col width="70%" />
</colgroup>
<thead>
</thead>
<tbody>

<tr>
<td markdown="span" style="text-align: center;vertical-align: middle;border-left-style: none;border-right-style: none;"><img src="{{ site.baseurl }}/images/TalkingFaceGeneration_resized.gif"></td>
<td markdown="span" style="vertical-align: middle;border-left-style: none;border-right-style: none;">
    **Talking face generation**<br>
    <details>
    <span style="font-size: 14px">Multi stage talking face generation.</span>
    </details>
    </td>
</tr>

<tr>
<td markdown="span" style="text-align: center;vertical-align: middle;border-left-style: none;border-right-style: none;"><img src="{{ site.baseurl }}/images/Nerf_3D_Reconstruction_resized.gif"></td>
<td markdown="span" style="vertical-align: middle;border-left-style: none;border-right-style: none;">
    **3D reconstruction of electric tower**<br>
    <details>
    <span style="font-size: 14px">3D reconstruction of electric tower using aerial images.</span>
    </details>
    </td>
</tr>

<tr>
<td markdown="span" style="text-align: center;vertical-align: middle;border-left-style: none;border-right-style: none;"><img src="{{ site.baseurl }}/images/3d_recon_fisheye_stereo_resized.gif"></td>
<td markdown="span" style="vertical-align: middle;border-left-style: none;border-right-style: none;">
    **3D reconstruction with stereo fisheye cameras**<br>
    <details>
    <span style="font-size: 14px">Unsupervised depth estimation with stereo fisheye cameras.</span>
    </details>
    </td>
</tr>

<tr>
<td markdown="span" style="text-align: center;vertical-align: middle;border-left-style: none;border-right-style: none;"><img src="{{ site.baseurl }}/images/StereoMatching_Powerline_resized.png"></td>
<td markdown="span" style="vertical-align: middle;border-left-style: none;border-right-style: none;">
    **Self-supervised depth estimation using stereo cameras**<br>
    <details>
    <span style="font-size: 14px">Depth estimation using stereo cameras. Synthetic data is utilized to generate ground truth, and domain adaptation/generalization is employed to ensure excellent performance on real data as well.</span>
    </details>
    </td>
</tr>

<tr>
<td markdown="span" style="text-align: center;vertical-align: middle;border-left-style: none;border-right-style: none;"><img src="{{ site.baseurl }}/images/Lidar_Perception_resized.png"></td>
<td markdown="span" style="vertical-align: middle;border-left-style: none;border-right-style: none;">
    **3D object detection and tracking using multi-lidars**<br>
    <details>
    <span style="font-size: 14px">3D object detection and tracking using multi-lidars. Inputs are sequential point clouds from multi-lidars and the model can get the 3d information of objects including position, size, orientation, class, free space (also as known as drivable area), and lanes. The model is deployed on GPU with TensorRT and SoC chip, which meets the needs of real-time detection.</span>
    </details>
    </td>
</tr>

<tr>
<td markdown="span" style="text-align: center;vertical-align: middle;border-left-style: none;border-right-style: none;"><img src="{{ site.baseurl }}/images/mono_camera_3d_detection_resized.png"></td>
<td markdown="span" style="vertical-align: middle;border-left-style: none;border-right-style: none;">
    **3D object detection and tracking using monocular camera**<br>
    [[code](https://github.com/Qjizhi/TensorRT-CenterNet-3D)]<br>
    <details>
    <span style="font-size: 14px">3D object detection and tracking using a monocular camera. The model takes sequential images as inputs and is capable of extracting 3D information about objects, including their position, size, orientation, and class. Deployment on a GPU with TensorRT enables the model to achieve an impressive inference speed of 50 Hz.</span>
    </details>
    </td>
</tr>

</tbody>
</table>

## Honors and Awards

<div class="honors-awards">
    <ul>
        <li>ITSC 2024 Best Paper Award</li>
        <li>Outstanding Graduates.</li>
        <li>Outstanding scholarship.</li>
        <li>Outstanding student leaders.</li>
        <li>National Scholarship (<strong>top 1%</strong>, highest scholarship in China).</li>
    </ul>
</div>

## Services

<div class="services">
    <h3>Conference Reviewer</h3>
    <p>CVPR (2025, 2024, 2023), ICCV (2025), ECCV (2024), AAAI (2026, 2025), WACV (2026), ITSC (2025, 2024)</p>
    
    <h3>Journal Reviewer</h3>
    <p>IEEE Transactions on Intelligent Transportation Systems (T-ITS) (2023-present), IEEE Transactions on Intelligent Vehicles (T-IV) (2024-present), Journal of Automobile Engineering (JAUTO) (2023-present), International Journal of Vehicle Design (IJVD) (2023-present)</p>
    
</div>

