#!/bin/bash
pnpm run build
rsync -e ssh -avz --delete-after dist/ comedmus@files.mde.utc:public_html/2019/