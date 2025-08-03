import cv2
import numpy as np
import argparse
import os
from PIL import Image, ImageSequence

parser = argparse.ArgumentParser(description='convert img to 512x1024')
parser.add_argument('--image', help='path to images')
parser.add_argument('--height', type=int, default=512, help='height to be resized')
parser.add_argument('--width', type=int, default=1024, help='height to be resized')

args = parser.parse_args()

def process_frame(frame, dim, ratio, color):
    h, w = frame.shape[:2]
    if h / w < ratio:
        h_new = int(ratio * w)
        border = int(0.5 * (h_new - h))
        dst = cv2.copyMakeBorder(frame, border, border, 0, 0, cv2.BORDER_CONSTANT, None, color)
        resized_dst = cv2.resize(dst, dim, interpolation=cv2.INTER_AREA)
    else:
        w_new = int(h / ratio)
        border = int(0.5 * (w_new - w))
        dst = cv2.copyMakeBorder(frame, 0, 0, border, border, cv2.BORDER_CONSTANT, None, color)
        resized_dst = cv2.resize(dst, dim, interpolation=cv2.INTER_AREA)
    return resized_dst

def process_gif(image_path, dim, ratio, color, out_path):
    im = Image.open(image_path)
    frames = []
    durations = []
    disposals = []
    for frame in ImageSequence.Iterator(im):
        frame_rgba = frame.convert('RGBA')
        np_frame = np.array(frame_rgba)
        # Convert RGBA to BGR for OpenCV
        bgr_frame = cv2.cvtColor(np_frame, cv2.COLOR_RGBA2BGRA)
        processed = process_frame(bgr_frame, dim, ratio, color)
        # Convert back to RGBA for PIL
        processed_rgba = cv2.cvtColor(processed, cv2.COLOR_BGRA2RGBA)
        pil_frame = Image.fromarray(processed_rgba)
        frames.append(pil_frame)
        durations.append(frame.info.get('duration', 40))
        disposals.append(frame.disposal_method if hasattr(frame, 'disposal_method') else 2)
    # Save as GIF
    frames[0].save(
        out_path,
        save_all=True,
        append_images=frames[1:],
        duration=durations,
        loop=im.info.get('loop', 0),
        disposal=disposals[0] if disposals else 2,
        optimize=False,
        transparency=im.info.get('transparency', None)
    )

def main():
    ext = args.image.split('.')[-1].lower()
    name_base = args.image.split('/')[-1].split('.')[0]
    dim = (args.width, args.height)
    ratio = args.height / args.width
    color = [255, 255, 255, 0]  # BGRA for GIF, BGR for PNG

    os.makedirs('./images', exist_ok=True)

    if ext == 'gif':
        out_name = name_base + '_resized.gif'
        out_path = os.path.join('./images', out_name)
        process_gif(args.image, dim, ratio, color, out_path)
    else:
        image = cv2.imread(args.image, cv2.IMREAD_UNCHANGED)
        if image is None:
            raise ValueError(f"Could not read image: {args.image}")
        # If image has alpha, keep it
        if image.shape[-1] == 4:
            color = [255, 255, 255, 0]
        else:
            color = [255, 255, 255]
        resized_dst = process_frame(image, dim, ratio, color)
        out_name = name_base + '_resized.png'
        out_path = os.path.join('./images', out_name)
        cv2.imwrite(out_path, resized_dst)

if __name__ == "__main__":
    main()
