#!/usr/bin/env bash

set -euo pipefail

docker build --tag la-com-a19 .
docker run --rm -v ./output:/output -it la-com-a19 bash -c "pnpm run build && cp -r ./dist/* /output"

cd output
zip -r ../la-com-a19.zip *