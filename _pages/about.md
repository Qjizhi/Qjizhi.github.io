---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

I'm a CS PhD candidate at [WashU](https://washu.edu/) in the [Multimodal Vision Research Laboratory (MVRL)](https://mvrl.cse.wustl.edu/), advised by [Prof. Nathan Jacobs](https://jacobsn.github.io/). I have over five years of industry experience focusing on perception algorithms for autonomous driving and robotics. My research interests include computer vision, deep learning, and robotics. My current research focuses on Image/Video Generation, 3D Vision (3DV), and Vision-Language-Action (VLA).

## News

<ul class="news-list" id="news-list">
    <li>Mar 2026, our work <a href="https://github.com/Qjizhi/MCPDepth">MCPDepth</a> was accepted by <a href="https://sites.google.com/view/omnicv2026/home">CVPR 2026 Omnidirectional Computer Vision 6th Workshop</a>.</li>
    <li>Jun 2025, our work <a href="https://qjizhi.github.io/genstereo">GenStereo</a> was accepted by ICCV 2025.</li>
    <li>Jul 2024, one paper was accepted by ECCV 2024.</li>
    <li>Apr 2024, I will join WashU CSE as a PhD student.</li>
    <li class="news-extra">Apr 2024, our work <a href="https://arxiv.org/abs/2211.16988">QuadFormer</a> was accepted by UR 2024.</li>
    <li class="news-extra">Nov 2023, our work <a href="https://arxiv.org/abs/2309.01842">StereoFlowGAN</a> was accepted by BMVC 2023.</li>
</ul>
<button class="news-toggle" id="news-toggle" type="button">Show more</button>

<script>
(function () {
    var list = document.getElementById('news-list');
    var btn = document.getElementById('news-toggle');
    if (!list || !btn) return;
    if (list.querySelectorAll('li.news-extra').length === 0) { btn.style.display = 'none'; return; }
    btn.addEventListener('click', function () {
        var expanded = list.classList.toggle('news-expanded');
        btn.textContent = expanded ? 'Show less' : 'Show more';
    });
})();
</script>

## Publications

<div class="filter-container">
    <div class="filter-buttons">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="selected">🌟 Selected</button>
        <button class="filter-btn" data-filter="generation">Generation</button>
        <button class="filter-btn" data-filter="3d">3D Vision</button>
        <button class="filter-btn" data-filter="perception">Perception</button>
        <button class="filter-btn" data-filter="domain">Domain Adaptation</button>
    </div>
</div>

<script src="{{ site.baseurl }}/assets/js/filter.js"></script>

<table class="pub-table">
<colgroup>
<col class="pub-thumb" />
<col class="pub-body" />
</colgroup>
<tbody>

<tr class="publication-item" data-keywords="generation 3d selected">
<td markdown="span"><video class="pub-vid" src="{{ site.baseurl }}/images/track2view_grid.mp4" autoplay muted loop playsinline></video></td>
<td markdown="span">
**Track2View: 4D-Consistent Camera-Controlled Video Generation via Paired 3D Point Tracks** 🌟<br>
**Feng Qiao**, [Zhaochong An](https://zhaochongan.github.io/), [Zhexiao Xiong](https://steven-xiong.github.io/), [Serge Belongie](https://belongielab.org/), [Nathan Jacobs](https://jacobsn.github.io/)<br>
arXiv, 2026
<br><a class="paper-link" href="https://arxiv.org/abs/2606.15534">arXiv</a>
<a class="paper-link" href="https://qjizhi.github.io/track2view/">Project</a>
<br><span class="paper-tag">#Generation</span><span class="paper-tag">#Video</span><span class="paper-tag">#Camera</span><span class="paper-tag">#3D</span>
</td>
</tr>

<tr class="publication-item" data-keywords="generation 3d">
<td markdown="span"><img src="{{ site.baseurl }}/images/stereogenbench_resized_512x1024.png"></td>
<td markdown="span">
**StereoGenBench: A Synthetic Multi-Camera Benchmark for Stereo Generation under Controlled Baseline Regimes**<br>
Yangzhi Cui<sup>*</sup>, **Feng Qiao**<sup>*</sup>, [Nathan Jacobs](https://jacobsn.github.io/)<br>
arXiv, 2026
<br><a class="paper-link" href="https://arxiv.org/abs/2605.23237">arXiv</a>
<a class="paper-link" href="https://huggingface.co/datasets/stereo-dataset/stereo-dataset">Dataset</a>
<br><span class="paper-tag">#Stereo</span><span class="paper-tag">#Generation</span><span class="paper-tag">#Benchmark</span>
</td>
</tr>

<tr class="publication-item" data-keywords="generation">
<td markdown="span"><img src="{{ site.baseurl }}/images/2026_arxiv_genopticalflow_resized_512x1024.png"></td>
<td markdown="span">
**GenOpticalFlow: A Generative Approach to Unsupervised Optical Flow Learning**<br>
[Yixuan Luo](https://www.computerscience.uchicago.edu/people/yixuan-luo/)<sup>*</sup>, **Feng Qiao**<sup>*</sup>, [Zhexiao Xiong](https://steven-xiong.github.io/), [Yanjing Li](https://people.cs.uchicago.edu/~yanjingl/index.html), [Nathan Jacobs](https://jacobsn.github.io/)<br>
arXiv, 2026
<br><a class="paper-link" href="https://arxiv.org/abs/2603.22270">arXiv</a>
<br><span class="paper-tag">#Generation</span><span class="paper-tag">#OpticalFlow</span>
</td>
</tr>

<tr class="publication-item" data-keywords="generation 3d">
<td markdown="span"><img src="{{ site.baseurl }}/images/2026_arxiv_physical_resized_512x1024.png"></td>
<td markdown="span">
**PhysAlign: Physics-Coherent Image-to-Video Generation through Feature and 3D Representation Alignment**<br>
[Zhexiao Xiong](https://steven-xiong.github.io/), [Yizhi Song](https://song630.github.io/yizhisong.github.io/), [Liu He](https://arking1995.github.io/), [Wei Xiong](https://wxiong.me/), [Yu Yuan](https://yuanyuspace.cn/about/), **Feng Qiao**, [Nathan Jacobs](https://jacobsn.github.io/)<br>
arXiv, 2026
<br><a class="paper-link" href="https://arxiv.org/abs/2603.13770">arXiv</a>
<a class="paper-link" href="https://physalign.github.io/PhysAlign/">Project</a>
<br><span class="paper-tag">#Generation</span><span class="paper-tag">#Video</span><span class="paper-tag">#3D</span>
</td>
</tr>

<tr class="publication-item" data-keywords="generation 3d">
<td markdown="span"><img src="{{ site.baseurl }}/images/2026_MIR_VideoUnderstanding_resized_512x1024.png"></td>
<td markdown="span">
**Video Understanding: From Geometry and Semantics to Unified Models**<br>
[Zhaochong An](https://zhaochongan.github.io/), Zirui Li, Mingqiao Ye, **Feng Qiao**, Jiaang Li, Zongwei Wu, Vishal Thengane, Chengzu Li, Lei Li, Luc Van Gool, Guolei Sun, Serge Belongie<br>
Machine Intelligence Research (MIR), 2026
<br><a class="paper-link" href="https://arxiv.org/abs/2603.17840v1">arXiv</a>
<br><span class="paper-tag">#Survey</span><span class="paper-tag">#Video</span>
</td>
</tr>

<tr class="publication-item" data-keywords="3d selected">
<td markdown="span"><img src="{{ site.baseurl }}/images/2026_WACV_MCPDepth2_resized.png"></td>
<td markdown="span">
**MCPDepth: Panorama Depth Estimation from Multi Cylindrical Panorama by Stereo Matching** 🌟<br>
**Feng Qiao**, [Zhexiao Xiong](https://steven-xiong.github.io/), [Xinge Zhu](https://xingezhu.me/), [Yuexin Ma](https://yuexinma.me/), Qiumeng He, [Nathan Jacobs](https://jacobsn.github.io/)<br>
CVPR Omnidirectional Computer Vision Workshop, 2026
<br><a class="paper-link" href="https://arxiv.org/abs/2408.01653">arXiv</a>
<a class="paper-link" href="https://github.com/Qjizhi/MCPDepth">Code</a>
<br><span class="paper-tag">#Stereo</span><span class="paper-tag">#Depth</span><span class="paper-tag">#Panorama</span>
</td>
</tr>

<tr class="publication-item" data-keywords="generation 3d selected">
<td markdown="span"><img src="{{ site.baseurl }}/images/2025_ICCV_GenStereo_resized.png"></td>
<td markdown="span">
**Towards Open-World Generation of Stereo Images and Unsupervised Matching** 🌟<br>
**Feng Qiao**, [Zhexiao Xiong](https://steven-xiong.github.io/), [Eric Xing](https://ericx003.github.io/), [Nathan Jacobs](https://jacobsn.github.io/)<br>
ICCV, 2025
<br><a class="paper-link" href="https://arxiv.org/abs/2503.12720">arXiv</a>
<a class="paper-link" href="https://github.com/Qjizhi/GenStereo">Code</a>
<a class="paper-link" href="https://qjizhi.github.io/genstereo">Project</a>
<a class="paper-link" href="https://huggingface.co/spaces/FQiao/GenStereo">Demo</a>
<a class="paper-link" href="https://huggingface.co/FQiao/GenStereo/tree/main">Models</a>
<br><span class="paper-tag">#Stereo</span><span class="paper-tag">#Generation</span><span class="paper-tag">#Diffusion</span>
</td>
</tr>

<tr class="publication-item" data-keywords="perception domain 3d">
<td markdown="span"><img src="{{ site.baseurl }}/images/2024_CVPR_SAM3DSEG_resized.png"></td>
<td markdown="span">
**SAM-guided Unsupervised Domain Adaptation for 3D Segmentation**<br>
Xidong Peng, Runnan Chen, **Feng Qiao**, Lingdong Kong, Youquan Liu, Tai Wang, [Xinge Zhu](https://xingezhu.me/), [Yuexin Ma](https://yuexinma.me/)<br>
ECCV, 2024
<br><a class="paper-link" href="https://arxiv.org/abs/2310.08820v4">arXiv</a>
<br><span class="paper-tag">#3DSeg</span><span class="paper-tag">#DomainAdapt</span><span class="paper-tag">#SAM</span>
</td>
</tr>

<tr class="publication-item" data-keywords="generation domain">
<td markdown="span"><img src="{{ site.baseurl }}/images/2023_BMVC_StereoFlowGAN_resized.png"></td>
<td markdown="span">
**StereoFlowGAN: Co-training for Stereo and Flow with Unsupervised Domain Adaptation**<br>
Zhexiao Xiong, **Feng Qiao**, Yu Zhang, Nathan Jacobs<br>
BMVC, 2023
<br><a class="paper-link" href="https://arxiv.org/abs/2309.01842">arXiv</a>
<br><span class="paper-tag">#Stereo</span><span class="paper-tag">#OpticalFlow</span><span class="paper-tag">#DomainAdapt</span>
</td>
</tr>

<tr class="publication-item" data-keywords="perception">
<td markdown="span"><img src="{{ site.baseurl }}/images/2023_PRCV_DUFormer_resized.png"></td>
<td markdown="span">
**DUFormer: Solving Power Line Detection Task in Aerial Images using Semantic Segmentation**<br>
Deyu An, Qiang Zhang, Jianshu Chao, Ting Li, **Feng Qiao**, Yong Deng, Zhenpeng Bian<br>
PRCV, 2023
<br><a class="paper-link" href="https://arxiv.org/abs/2304.05821">arXiv</a>
<br><span class="paper-tag">#Segmentation</span><span class="paper-tag">#PowerLine</span>
</td>
</tr>

<tr class="publication-item" data-keywords="perception domain">
<td markdown="span"><img src="{{ site.baseurl }}/images/2024_UR_Quadformer_resized.png"></td>
<td markdown="span">
**QuadFormer: Quadruple Transformer for Unsupervised Domain Adaptation in Power Line Segmentation of Aerial Images**<br>
Pratyaksh Prabhav Rao<sup>*</sup>, **Feng Qiao**<sup>*</sup>, Weide Zhang, Yiliang Xu, Yong Deng, Guangbin Wu, Qiang Zhang<br>
UR, 2024
<br><a class="paper-link" href="https://ieeexplore.ieee.org/document/10597474">IEEE</a>
<br><span class="paper-tag">#Segmentation</span><span class="paper-tag">#DomainAdapt</span><span class="paper-tag">#PowerLine</span>
</td>
</tr>

<tr class="publication-item" data-keywords="perception 3d">
<td markdown="span"><img src="{{ site.baseurl }}/images/2022_CVPR_STCrowd_resized.png"></td>
<td markdown="span">
**STCrowd: A Multimodal Dataset for Pedestrian Perception in Crowded Scenes**<br>
Peishan Cong, [Xinge Zhu](https://xingezhu.me/), **Feng Qiao**, Yiming Ren, Xidong Peng, Yuenan Hou, Lan Xu, Ruigang Yang, Dinesh Manocha, [Yuexin Ma](https://yuexinma.me/)<br>
CVPR, 2022
<br><a class="paper-link" href="https://arxiv.org/abs/2204.01026">arXiv</a>
<a class="paper-link" href="https://github.com/4dvlab/stcrowd">Code</a>
<br><span class="paper-tag">#Pedestrian</span><span class="paper-tag">#LiDAR</span><span class="paper-tag">#Dataset</span>
</td>
</tr>

<tr class="publication-item" data-keywords="generation domain">
<td markdown="span"><img src="{{ site.baseurl }}/images/2021_CVPR_MetaSAug_resized.png"></td>
<td markdown="span">
**MetaSAug: Meta Semantic Augmentation for Long-Tailed Visual Recognition**<br>
Shuang Li, Kaixiong Gong, Chi Harold Liu, Yulin Wang, **Feng Qiao**, Xinjing Cheng<br>
CVPR, 2021
<br><a class="paper-link" href="https://arxiv.org/abs/2103.12579">arXiv</a>
<a class="paper-link" href="https://github.com/BIT-DA/MetaSAug">Code</a>
<br><span class="paper-tag">#LongTail</span><span class="paper-tag">#MetaLearning</span>
</td>
</tr>

</tbody>
</table>

<p class="pub-footnote">🌟 Selected work &nbsp;·&nbsp; <sup>*</sup>Equal contribution</p>

## Projects

<div class="filter-container">
    <div class="filter-buttons">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="generation">Generation</button>
        <button class="filter-btn" data-filter="3d">3D Vision</button>
        <button class="filter-btn" data-filter="detection">Detection</button>
    </div>
</div>

<div class="projects-grid">
    <div class="project-item project-card" data-keywords="generation">
        <img src="{{ site.baseurl }}/images/TalkingFaceGeneration_resized.gif" alt="Talking Face Generation">
        <h4>Talking Face Generation</h4>
        <details><summary>Details</summary><p>Multi stage talking face generation.</p></details>
    </div>

    <div class="project-item project-card" data-keywords="3d">
        <img src="{{ site.baseurl }}/images/Nerf_3D_Reconstruction_resized.gif" alt="3D Reconstruction">
        <h4>3D Reconstruction of Electric Tower</h4>
        <details><summary>Details</summary><p>3D reconstruction of electric tower using aerial images.</p></details>
    </div>

    <div class="project-item project-card" data-keywords="3d">
        <img src="{{ site.baseurl }}/images/3d_recon_fisheye_stereo_resized.gif" alt="3D Reconstruction with Stereo">
        <h4>3D Reconstruction with Stereo Fisheye Cameras</h4>
        <details><summary>Details</summary><p>Unsupervised depth estimation with stereo fisheye cameras.</p></details>
    </div>

    <div class="project-item project-card" data-keywords="3d">
        <img src="{{ site.baseurl }}/images/StereoMatching_Powerline_resized.png" alt="Stereo Depth Estimation">
        <h4>Self-supervised Depth Estimation using Stereo Cameras</h4>
        <details><summary>Details</summary><p>Depth estimation using stereo cameras. Synthetic data is utilized to generate ground truth, and domain adaptation/generalization is employed to ensure excellent performance on real data as well.</p></details>
    </div>

    <div class="project-item project-card" data-keywords="detection 3d">
        <img src="{{ site.baseurl }}/images/Lidar_Perception_resized.png" alt="LiDAR Detection">
        <h4>3D Object Detection and Tracking using Multi-LiDARs</h4>
        <details><summary>Details</summary><p>3D object detection and tracking using multi-lidars. Inputs are sequential point clouds from multi-lidars and the model can get the 3D information of objects including position, size, orientation, class, free space (also as known as drivable area), and lanes. The model is deployed on GPU with TensorRT and SoC chip, which meets the needs of real-time detection.</p></details>
    </div>

    <div class="project-item project-card" data-keywords="detection 3d">
        <img src="{{ site.baseurl }}/images/mono_camera_3d_detection_resized.png" alt="Monocular 3D Detection">
        <h4>3D Object Detection and Tracking using Monocular Camera <a href="https://github.com/Qjizhi/TensorRT-CenterNet-3D" target="_blank" class="paper-link">Code</a></h4>
        <details><summary>Details</summary><p>3D object detection and tracking using a monocular camera. The model takes sequential images as inputs and is capable of extracting 3D information about objects, including their position, size, orientation, and class. Deployment on a GPU with TensorRT enables the model to achieve an impressive inference speed of 50 Hz.</p></details>
    </div>
</div>

## Honors and Awards

<div class="honors-awards">
    <ul>
        <li>ITSC 2024 Best Paper Award</li>
        <li>Outstanding Graduates</li>
        <li>Outstanding scholarship</li>
        <li>Outstanding student leaders</li>
        <li>National Scholarship (<strong>top 1%</strong>, highest scholarship in China)</li>
    </ul>
</div>

## Services

<div class="services">
    <h3>Conference Reviewer</h3>
    <p>CVPR (2023–2026), ICCV (2025), ECCV (2024, 2026), NeurIPS (2026), AAAI (2025, 2026), WACV (2026), BMVC (2026), ITSC (2024, 2025)</p>

    <h3>Journal Reviewer</h3>
    <p>TPAMI, T-ITS, T-IV, JAUTO, IJVD</p>
</div>
