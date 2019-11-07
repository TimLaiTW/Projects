// netpbm_test.c
// Test and demo program for netpbm. Reads a sample image and creates several output images.

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "netpbm.h"
Image expandingImage(Image inputimage){
	Image output;
	int x, y;
	output = createImage(inputimage.height, inputimage.width);
	for (x = 1; x < inputimage.width-1; x++){
		for (y = 1; y < inputimage.height-1; y++){
			output.map[y][x].i = inputimage.map[y][x].i;
			if(
				(inputimage.map[y-1][x-1].i == 0 && y > 0 && x > 0) ||
				(inputimage.map[y-1][x].i == 0 && y > 0) ||
				(inputimage.map[y-1][x+1].i == 0 && y > 0 && x < inputimage.width - 1) ||
				(inputimage.map[y][x-1].i == 0 && x > 0) ||
				(inputimage.map[y][x+1].i == 0 && x < inputimage.width - 1) ||
				(inputimage.map[y+1][x-1].i == 0 && y < inputimage.height - 1 && x > 0) ||
				(inputimage.map[y+1][x].i == 0 && y < inputimage.height - 1) ||
				(inputimage.map[y+1][x+1].i == 0 && y < inputimage.height - 1 && x < inputimage.width - 1)
				){
				output.map[y][x].i = 0;
			}
			else {
				output.map[y][x].i = 255;
			}
		}
	}
	return output;
}

Image shrinkingImage(Image inputimage){
	Image output;
	int x, y;
	output = createImage(inputimage.height, inputimage.width);
	for (x = 1; x < inputimage.width-1; x++){
		for (y = 1; y < inputimage.height-1; y++){
			if(
				(inputimage.map[y-1][x-1].i == 255 && y > 0 && x > 0) ||
				(inputimage.map[y-1][x].i == 255 && y > 0) ||
				(inputimage.map[y-1][x+1].i == 255 && y > 0 && x < inputimage.width - 1) ||
				(inputimage.map[y][x-1].i == 255 && x > 0) ||
				(inputimage.map[y][x+1].i == 255 && x < inputimage.width - 1) ||
				(inputimage.map[y+1][x-1].i == 255 && y < inputimage.height - 1 && x > 0) ||
				(inputimage.map[y+1][x].i == 255 && y < inputimage.height - 1) ||
				(inputimage.map[y+1][x+1].i == 255 && y < inputimage.height - 1 && x < inputimage.width - 1)
				){
				output.map[y][x].i = 255;
			}
			else {
				output.map[y][x].i = 0;
			}
		}
	}
	return output;
}

Image blurringImage(Image inputimage){
	Image output;
	int x, y;
	output = createImage(inputimage.height, inputimage.width);
	for (x = 0; x < inputimage.width; x++){
		for (y = 0; y < inputimage.height; y++){

			if( x == 0 || y == 0 || y == inputimage.height - 1 || x == inputimage.width - 1){
				output.map[y][x].i = 255;
			}
			else{
                int  intensity = 0;
				for(int c = -1; c < 2; c++){
					for(int d = -1; d < 2; d++){

						intensity += inputimage.map[y+c][x+d].i;
					}
				}
				output.map[y][x].i = (intensity / 9);
			}

		}
	}
	return output;
}

Image cleaningImage(Image inputimage){
	Image output;
	int x, y;
	output = createImage(inputimage.height, inputimage.width);
	for (x = 0; x < inputimage.width; x++){
		for (y = 0; y < inputimage.height; y++){
			if(inputimage.map[y][x].i < 128){
				output.map[y][x].i = 0;
			}
			else{
				output.map[y][x].i = 255;
			}
		}
	}
	return output;
}

void main()
{
	Image inputImage, outputImage;
	inputImage = readImage("text_image.pbm");
    outputImage = expandingImage(inputImage);
    outputImage = shrinkingImage(outputImage);
    outputImage = shrinkingImage(outputImage);
    outputImage = expandingImage(outputImage);
    writeImage(outputImage, "text_cleaned_1.pbm");
    deleteImage(outputImage);

	inputImage = readImage("text_image.pbm");
    outputImage = blurringImage(inputImage);
    outputImage = cleaningImage(outputImage);
    writeImage(outputImage, "text_cleaned_2.pbm");
    deleteImage(outputImage);
}

