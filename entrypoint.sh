#!/bin/bash

[ -d output ] || mkdir output

timestamp=$(date +%d-%m-%Y_%H-%M-%S)

yarn launch -o ./output/log_$timestamp.json  

yarn report ./output/log_$timestamp.json -o ./output/index.html