# abort on errors
set -e
# clear build
rm -rf build
# build
npm run build
# navigate into the build output directory
cd build
git init
git add -A
git commit -m 'deploy through script'
git push -f git@github.com:ignis05/wifi-qr-decoder.git master:gh-pages
rm -rf .git
