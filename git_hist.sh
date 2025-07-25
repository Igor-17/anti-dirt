#!/bin/bash

#let сurr_dt=$(date +%Y-%m-%d_%H-%M)
git add --all
git commit -m "commit $(date +%Y-%m-%d_%H-%M)"
git push -u origin main
