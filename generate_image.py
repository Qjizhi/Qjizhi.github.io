import cv2
import numpy as np
import argparse

parser = argparse.ArgumentParser(description='convert img to 450x800')
parser.add_argument('--image', help='path to images')
parser.add_argument('--height', type=int, default=350, help='height to be resized')
parser.add_argument('--width', type=int, default=800, help='height to be resized')

args = parser.parse_args()

dim = (args.width, args.height)
ratio = args.height/args.width
color = [255, 255, 255]

image = cv2.imread(args.image)
h, w, _ = image.shape
# name = args.image.split('.')[0] + "_new.png"

if h/w < ratio:
    h_new = int(ratio*w)
    border = int(0.5*(h_new-h))
    dst = cv2.copyMakeBorder(image, border, border, 0, 0, cv2.BORDER_CONSTANT, None, color)
    resized_dst = cv2.resize(dst, dim, interpolation = cv2.INTER_AREA)
    cv2.imwrite(args.image, resized_dst)
else:
    w_new = int(h/ratio)
    border = int(0.5*(w_new-w))
    dst = cv2.copyMakeBorder(image, 0, 0, border, border, cv2.BORDER_CONSTANT, None, color)
    resized_dst = cv2.resize(dst, dim, interpolation = cv2.INTER_AREA)
    cv2.imwrite(args.image, resized_dst)
