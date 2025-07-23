#!/bin/bash

сurr_dt=$(date +%Y-%m-%d_%H-%M)
git add --all
git commit -m "commit $сurr_dt"
git push -u origin main
