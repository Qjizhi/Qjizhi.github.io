---
# layout: archive       
title: "Research and Projects"
permalink: /projects/
# author_profile: true
---

## Research  
<table frame=hsides>
<colgroup>
<col width="30%" />
<col width="70%" />
</colgroup>
<thead>
</thead>
<tbody>

<tr>
<td markdown="span" style="text-align: center;vertical-align: middle;"><img src="{{ site.baseurl }}/images/2022_cvpr_stcrowd.png"></td>
<td markdown="span" style="vertical-align: middle;">
    **STCrowd: A Multimodal Dataset for Pedestrian Perception in Crowded Scenes.**<br>
    Peishan Cong, Xinge Zhu, **Feng Qiao**, Yiming Ren, Xidong Peng, Yuenan Hou, Lan Xu, Ruigang Yang, Dinesh Manocha, Yuexin Ma.<br>
    Conference on Computer Vision and Pattern Recognition (CVPR), 2022<br>
    [[paper](https://arxiv.org/abs/2204.01026)] [[code](https://github.com/4dvlab/stcrowd)]<br>
    <details>
    <span style="font-size: 14px">We introduce a large-scale multimodal dataset,STCrowd. Specifically, in STCrowd, there are a total of 219 K pedestrian instances and 20 persons per frame on average, with various levels of occlusion. We provide synchronized LiDAR point clouds and camera images as well as their corresponding 3D labels and joint IDs. STCrowd can be used for various tasks, including LiDAR-only, image-only, and sensor-fusion based pedestrian detection and tracking. We provide baselines for most of the tasks. In addition, considering the property of sparse global distribution and density-varying local distribution of pedestrians, we further propose a novel method, Density-aware Hierarchical heatmap Aggregation (DHA), to enhance pedestrian perception in crowded scenes. Extensive experiments show that our new method achieves state-of-the-art performance for pedestrian detection on various datasets.</span>
    </details>
    </td>
</tr>

<tr>
<td markdown="span" style="text-align: center;vertical-align: middle;"><img src="{{ site.baseurl }}/images/2021_cvpr_metasaug.png"></td>
<td markdown="span" style="vertical-align: middle;">
    **MetaSAug: Meta Semantic Augmentation for Long-Tailed Visual Recognition**<br>
    Li, Shuang, Kaixiong Gong, Chi Harold Liu, Yulin Wang, **Feng Qiao**, and Xinjing Cheng.<br>
    Conference on Computer Vision and Pattern Recognition (CVPR), 2021<br>
    [[paper](https://arxiv.org/abs/2103.12579)] [[code](https://github.com/BIT-DA/MetaSAug)]<br>
    <details>
    <span style="font-size: 14px">We propose a novel approach to learn transformed semantic directions with meta-learning automatically. In specific, the augmentation strategy during training is dynamically optimized, aiming to minimize the loss on a small balanced validation set, which is approximated via a meta update step. Extensive empirical results on CIFAR-LT-10/100, ImageNet-LT, and iNaturalist 2017/2018 validate the effectiveness of our method.</span>
    </details>
    </td>
</tr>

</tbody>
</table>

## Projects
<table frame=hsides>
<colgroup>
<col width="30%" />
<col width="70%" />
</colgroup>
<thead>
</thead>
<tbody>

<tr>
<td markdown="span" style="text-align: center;vertical-align: middle;"><img src="{{ site.baseurl }}/images/uda_pls.png"></td>
<td markdown="span" style="vertical-align: middle;">
    **QuadFormer: Quadruple Transformer for Unsupervised Domain Adaptation in Power Line Segmentation of Aerial Images**<br>
    <details>
    <span style="font-size: 14px">we propose QuadFormer, a novel framework designed for domain adaptive semantic segmentation. The hierarchical quadruple transformer combines cross-attention and self-attention mechanisms to adapt transferable context. Based on cross-attentive and self-attentive feature representations, we introduce a pseudo label correction scheme to online denoise the pseudo labels and reduce the domain gap. Additionally, we present two datasets - ARPLSyn and ARPLReal to further advance research in unsupervised domain adaptive powerline segmentations.</span>
    </details>
    </td>
</tr>


<tr>
<td markdown="span" style="text-align: center;vertical-align: middle;"><img src="{{ site.baseurl }}/images/3d_recon_fisheye_stereo.gif"></td>
<td markdown="span" style="vertical-align: middle;">
    **3D reconstruction with stereo fisheye cameras**<br>
    <details>
    <span style="font-size: 14px">Unsupervised depth estimation with stereo fisheye cameras.</span>
    </details>
    </td>
</tr>

<tr>
<td markdown="span" style="text-align: center;vertical-align: middle;"><img src="{{ site.baseurl }}/images/stereo_depth_estimation.png"></td>
<td markdown="span" style="vertical-align: middle;">
    **Self-supervised depth estimation uisng stereo cameras**<br>
    <details>
    <span style="font-size: 14px">Depth estimation using stereo cameras. We use synthetic data to generate ground truth, and domain adaptation/generalization to make it perform also fantastic on real data.</span>
    </details>
    </td>
</tr>

<tr>
<td markdown="span" style="text-align: center;vertical-align: middle;"><img src="{{ site.baseurl }}/images/lidar_3d_detection.png"></td>
<td markdown="span" style="vertical-align: middle;">
    **3D object detection and tracking using multi-lidars**<br>
    <details>
    <span style="font-size: 14px">3D object detection and tracking using multi-lidars. Inputs are sequential point clouds from multi lidars and the model can get the 3d information of objects including position, size, orientation, class, and freespace(also as known as drivable area) and also lanes. The model is both deployed on GPU with TensorRT and soc chip, which meets the needs of real-time detection.</span>
    </details>
    </td>
</tr>

<tr>
<td markdown="span" style="text-align: center;vertical-align: middle;"><img src="{{ site.baseurl }}/images/mono_camera_3d_detection.jpg"></td>
<td markdown="span" style="vertical-align: middle;">
    **3D object detection and tracking using monocular camera**<br>
    [[code](https://github.com/Qjizhi/TensorRT-CenterNet-3D)]<br>
    <details>
    <span style="font-size: 14px">3D object detection and tracking using a monocular camera. Inputs are sequential images and the model can get the 3d information of objects including position, size, orientation, and class. The model is deployed on GPU with TensorRT, inference speed reaches 50 Hz.</span>
    </details>
    </td>
</tr>

</tbody>
</table>